"""The unittest.TestCase for resmoke E2E self-tests"""

import os
import os.path
import sys

from . import interface
from ... import core
from ... import errors
from ... import utils
from ...utils import globstar


class ResmokeSelfTestCase(interface.ProcessTestCase):
    """A Resmoke self test to execute."""

    REGISTERED_NAME = "resmoke_selftest"

    def __init__(self, logger, js_filename):
        """Initialize ResmokeSelfTestCase."""
        interface.ProcessTestCase.__init__(self, logger, "Resmoke self test", js_filename)

    def _make_process(self):
        resmoke_args = [
            
        ]
        return core.programs.make_process(self.logger, [
            sys.executable, "buildscripts/resmoke.py", self.js_filename
        ])

    def _execute(self, process):
        """Run the specified process."""
        self.logger.info("Starting %s...\n%s", self.short_description(), process.as_command())

        process.start()
        self.logger.info("%s started with pid %s.", self.short_description(), process.pid)

        # call hook here that will call python script to send SIGUSR1 and wait for resmoke to do its thing
        # process.wait()
        # call hook to check that analysis/archival stuff is present
        self.return_code = process.wait()
        if self.return_code != 0:
            raise self.failureException("%s failed" % (self.short_description()))

        self.logger.info("%s finished.", self.short_description())
