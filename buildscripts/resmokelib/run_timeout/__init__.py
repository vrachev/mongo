"""Run-timeout module."""

import json
import os
import sys

import psutil

from buildscripts.resmokelib import config
from buildscripts.resmokelib import utils
from buildscripts.resmokelib import parser as _parser
from buildscripts.resmokelib.plugin import PluginInterface, Subcommand

_HELP = """
Utility to handle `resmoke.py run` invocations that have timed out. The caller of this script
is responsible for determining when a timeout has occured. 

This script will signal the resmoke python process, which in turn will call the hang-aanlyzer
on all of the pids spawned by it or by tests it is running. It will then terminate its processes
and finish execution. This script will block until the resmoke process has shutdown.
"""


class RunTimeout(Subcommand):
    """Main class for the hang analyzer subcommand."""

    def __init__(self, options, **kwargs):  #pylint: disable=unused-argument
        """Constructor."""
        # self._build_path = utils.build_dir()
        self._self_pid_file = utils.self_pid_file()

    def execute(self):
        """Execute run-timeout"""
        pids = self._get_resmoke_pids()
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
                pass

        self._cleanup()

    def _get_resmoke_pids(self):
        # resmoke_pid_file = os.path.join(self._build_path, self._self_pid_file)
        with open(self._self_pid_file, 'r') as pfile:
            pids = []
            for line in pfile:
                pids.append(int(line.strip('\n')))

        return pids

    def _cleanup(self):
        """Delete the resmoke.pid file"""
        if os.path.isfile(self._self_pid_file):
            os.remove(self._self_pid_file)


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
