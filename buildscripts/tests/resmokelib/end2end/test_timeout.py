"""Test resmoke's handling of test/task timeouts."""

import logging
import os
import os.path
import subprocess
import sys
import time
import unittest

import psutil

from buildscripts.resmokelib import core

# pylint: disable=missing-docstring,protected-access


class TestTimeout(unittest.TestCase):

    logger = logging.getLogger("resmoke_timeouts_unittest")

    def signal_resmoke(self, resmoke_process):
        resmoke_process.stop()
        resmoke_process.wait()
        # signal_resmoke_process = core.programs.make_process(
        #     self.logger,
        #     [sys.executable, "buildscripts/signal_resmoke.py", "--pid", str(resmoke_process.pid)])
        # signal_resmoke_process.start()

        # return_code = signal_resmoke_process.wait()
        # if return_code != 0:
        #     resmoke_process.stop()
        # self.assertEqual(return_code, 0)

    def execute(self, resmoke_args):
        resmoke_process = core.programs.make_process(
            self.logger, [sys.executable, "buildscripts/resmoke.py"] + resmoke_args)
        resmoke_process.start()

        time.sleep(5)  # TODO: Change to more durable way of ensuring the fixtures have been set up.

        self.signal_resmoke(resmoke_process)

    def test_task_timeout(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_timeout.yml"
        ]
        self.execute(resmoke_args)

    def test_task_timeout_no_passthrough(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_timeout_no_passthrough.yml"
        ]
        self.execute(resmoke_args)


class TimeoutChecks():
    """Checks resmoke report and artifacts following test timeout."""

    def __init__(self, subprocess_pid, artifacts_dir, archive):
        """Initialize TimeoutChecks."""

        self.pid = subprocess_pid
        self.dir = artifacts_dir
        self.archive = archive

    def _check_archival(self):
        # TODO: check archival
        pass

    def _check_hang_analysis(self):
        # TODO: check analysis
        pass

    def _check_report(self):
        # TODO: check report
        pass

    def perform_checks(self):
        """Perform checks."""
        self._check_hang_analysis()
        self._check_report()
        self._check_archival()
