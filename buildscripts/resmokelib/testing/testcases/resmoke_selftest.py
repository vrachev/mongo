"""The unittest.TestCase for resmoke E2E self-tests"""

import os
import os.path
import sys

from . import interface
from ..hooks import timeout
from ... import config
from ... import core

class _ResmokeSelfTestCase(interface.ProcessTestCase):
    """A Resmoke self test to execute."""

    def __init__(self, logger, test_kind, js_filename):
        """Initialize ResmokeSelfTestCase."""
        interface.ProcessTestCase.__init__(self, logger, test_kind, js_filename)

        self.js_filename = js_filename
        self.sub_pid = None

    def short_description(self):
        """Return the short_description of the test."""
        return "%s %s" % (self.test_kind, self.test_name)

    def _resmoke_args(self):
        """Return the arguments to pass to the resmoke subprocess."""
        raise NotImplementedError("_resmoke_args must be implemented by _ResmokeSelfTestCase subclasses")

    def _call_hooks(self):
        """Return the hooks to execute on the resmoke subprocess."""
        raise NotImplementedError("_hooks must be implemented by _ResmokeSelfTestCase subclasses")

    def _make_process(self):
        return core.programs.make_process(self.logger, [
            sys.executable, "buildscripts/resmoke.py"] + self._resmoke_args() + [self.js_filename])

    def _execute(self, process):
        """Run the specified process."""
        self.logger.info("Starting %s...\n%s", self.short_description(), process.as_command())

        process.start()
        self.logger.info("%s started with pid %s.", self.short_description(), process.pid)
        self.sub_pid = process.pid

        self._call_hooks()

        self.return_code = process.wait()
        if self.return_code != 0:
            raise self.failureException("%s failed" % (self.short_description()))

        self.logger.info("%s finished.", self.short_description())

class TimeoutTestCase(_ResmokeSelfTestCase):
    """A test to execute """

    REGISTERED_NAME = "resmoke_selftest_timeout"

    def __init__(self, logger, js_filename):
        """Initialize TimeoutTestCase."""
        _ResmokeSelfTestCase.__init__(self, logger, "Resmoke timeout selftest", js_filename)

    def _resmoke_args(self):
        return []

    def _call_hooks(self):
        # call script that sends SIGUSR1 and waits for resmoke to exit.
        # call script that checks that the python process has successfully exited within some timeout.
        # timeout_checks = timeout.TimeoutChecks(self.logger, self.sub_pid, "some_dir", True)
        # timeout_checks.perform_check()
        pass
