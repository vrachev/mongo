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
    base_dir = os.path.normpath("/data/db/selftest")
    archival_dir = os.path.join(base_dir, "test_archival")
    analysis_dir = os.path.join(base_dir, "test_analysis")

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

    def assert_dir_size(self, test_dir, num_entries):
        self.assertEquals(len(os.listdir(test_dir), num_entries))

    def test_task_timeout(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_timeout.yml",
            "--internalParams=test_archival,test_analysis",
            "--dbpathPrefix={}".format(self.base_dir)
        ]
        self.execute(resmoke_args)

        fixture_archival_dir = os.path.join(self.archival_dir, "resmoke")
        archival_dirs_to_expect = 4 # 2 tests * 2 nodes
        self.assert_dir_size(fixture_archival_dir, archival_dirs_to_expect)

        analysis_files_to_expect = 6 # 2 tests * (2 mongod + 1 mongo)
        self.assert_dir_size(self.analysis_dir, analysis_files_to_expect)

    def test_task_timeout_no_passthrough(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_timeout_no_passthrough.yml",
            "--internalParams=test_archival,test_analysis",
            "--dbpathPrefix={}".format(self.base_dir)
        ]
        self.execute(resmoke_args)

        archival_dirs_to_expect = 4 # 2 tests * 2 nodes
        mongorunner_archival_dir = os.path.join(self.archival_dir, "mongorunner")
        self.assert_dir_size(mongorunner_archival_dir, archival_dirs_to_expect)

        analysis_files_to_expect = 6 # 2 tests * (2 mongod + 1 mongo)
        self.assert_dir_size(self.analysis_dir, analysis_files_to_expect)
