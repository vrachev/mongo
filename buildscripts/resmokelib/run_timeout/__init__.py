"""Run-timeout module."""

import psutil

from buildscripts.resmokelib.utils import state
from buildscripts.resmokelib import parser as _parser
from buildscripts.resmokelib.plugin import PluginInterface, Subcommand

_HELP = """
Utility to handle `resmoke.py run` invocations that have timed out. The caller of this script
is responsible for determining when a timeout has occured. It will signal and shutdown all
`resmoke.py run` processes running.

This script will signal the resmoke python process, which in turn will call the hang-analyzer
on all of the pids spawned by it or by tests it is running. It will then terminate its processes
and finish execution. This script will block until the resmoke process has shutdown.
"""


class RunTimeout(Subcommand):
    """Main class for the hang analyzer subcommand."""

    def __init__(self, options, **kwargs):  #pylint: disable=unused-argument
        """Constructor."""
        pass

    def execute(self):
        """Execute run-timeout."""
        # Pids will be read and signalled in order of start time. This is important because we
        # should only signal top-level resmoke processes. In the edge case where a resmoke process
        # starts another resmoke process (eg: resmoke.py -> mongo -> resmoke.py in
        # https://github.com/mongodb/mongo/blob/master/jstests/noPassthrough/libs/backup_restore.js#L119-L131)
        # if we signal+kill the inner resmoke process it may become a zombie process and we will get stuck
        # waiting for it to shutdown.
        #
        # When we signal the top-level resmoke process, the sighandler will then call the
        # hang-analyzer on all non-resmoke child processes, so we will also obtain the stacktraces
        # for the processes started by the inner resmoke process.
        pids = state.read_pids()
        # Call the hang-analyzer on the resmoke pid to signal the timeout.
        base_args = ['hang-analyzer', '-o', 'file', '-o', 'stdout']
        for pid in pids:
            _hang_analyzer = _parser.parse_command_line(base_args + ['-d', str(pid)])
            _hang_analyzer.execute()
            try:
                # Wait until the resmoke process finishes.
                resmoke_process = psutil.Process(pid)
                resmoke_process.wait()
            except psutil.NoSuchProcess:
                # Process ended already.
                # This may happen for inner resmoke processes, as its underlying processes
                # will be shutdown when the outer resmoke process is signalled, and it will be able
                # to shut itself down. We will reach this point if the resmoke process had enough
                # time for shutdown.
                pass


class RunTimeoutPlugin(PluginInterface):
    """Integration-point for run-timeout."""

    def parse(self, subcommand, parser, parsed_args, **kwargs):
        """Parse command-line options."""
        if subcommand == 'run-timeout':
            return RunTimeout(parsed_args, **kwargs)
        return None

    def add_subcommand(self, subparsers):
        """Create and add the parser for the run-timeout subcommand."""
        subparsers.add_parser("run-timeout", help=_HELP)
