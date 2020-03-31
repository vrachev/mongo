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

        # TODO: replace above with below after SERVER-46691.
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

    def _check_hang_analysis(self):
        # TODO: check analysis.
        # When the hang-analyzer is migrated to resmoke, using '--internalParam=test_analysis' we
        # can specify it to write dumps to some tmp directory, and check that the files exist here.
        pass

    def _check_archival(self):
        # TODO: check archival.
        # '--internalParam=test_analysis' will change archival._archive_files() to save the gzipped
        # data files to a tmp directory and not send them to s3. We can check that the files exist
        # here.
        pass

    def test_task_timeout(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_timeout.yml",
            "--internalParam=test_archival,test_analysis",
        ]
        self.execute(resmoke_args)

    def test_task_timeout_no_passthrough(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_timeout_no_passthrough.yml",
            "--internalParam=test_archival,test_analysis",
        ]
        self.execute(resmoke_args)
