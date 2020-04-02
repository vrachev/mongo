"""Test resmoke's handling of test/task timeouts."""

import logging
import os
import os.path
import subprocess
import sys
import time
import unittest

import psutil

from buildscripts.resmokelib.utils import rmtree
from buildscripts.resmokelib import core

# pylint: disable=missing-docstring,protected-access


class TestTimeout(unittest.TestCase):

    logger = logging.getLogger("resmoke_timeouts_unittest")
    base_dir = os.path.normpath("/data/db/selftest")
    archival_file = os.path.join(base_dir, "test_archival.txt")
    analysis_file = os.path.join(base_dir, "test_analysis.txt")

    def setUp(self):
        rmtree(self.base_dir)

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

    def assert_dir_file_count(self, test_file, num_entries):
        count = 0
        with open(test_file) as f:
            count = sum(1 for _ in f)
        self.assertEquals(count, num_entries)

    def test_task_timeout(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_timeout.yml",
            "--internalParam=test_archival", "--internalParam=test_analysis", "--repeatTests=2",
            "--jobs=2", "--dbpathPrefix={}".format(self.base_dir)
        ]
        self.execute(resmoke_args)

        # TODO: enable tests
        archival_dirs_to_expect = 4  # 2 tests * 2 nodes
        self.assert_dir_file_count(self.archival_file, archival_dirs_to_expect)

        analysis_files_to_expect = 6  # 2 tests * (2 mongod + 1 mongo)
        self.assert_dir_file_count(self.analysis_file, analysis_files_to_expect)

    def test_task_timeout_no_passthrough(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_timeout_no_passthrough.yml",
            "--internalParam=test_archival", "--internalParam=test_analysis", "--repeatTests=2",
            "--jobs=2", "--dbpathPrefix={}".format(self.base_dir)
        ]
        self.execute(resmoke_args)

        # TODO: Enable tests
        archival_dirs_to_expect = 4  # 2 tests * 2 nodes
        self.assert_dir_file_count(self.archival_file, archival_dirs_to_expect)

        analysis_files_to_expect = 6  # 2 tests * (2 mongod + 1 mongo)
        self.assert_dir_file_count(self.analysis_file, analysis_files_to_expect)
