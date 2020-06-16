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


class _ResmokeSelftest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # Print logs from spawned resmoke process to stdout
        cls.logger = logging.getLogger("resmoke_timeouts_unittest")
        cls.logger.setLevel(logging.DEBUG)
        handler = logging.StreamHandler(sys.stdout)
        handler.setFormatter(logging.Formatter(fmt="%(message)s"))
        cls.logger.addHandler(handler)

        cls.test_dir = os.path.normpath("/data/db/selftest")
        cls.resmoke_const_args = ["run", "--dbpathPrefix={}".format(cls.test_dir)]

        cls.resmoke_process = None

    def setUp(self):
        self.logger.info("Cleaning temp directory %s", self.test_dir)
        rmtree(self.test_dir, ignore_errors=True)

    def execute_resmoke(self, resmoke_args):
        resmoke_process = core.programs.make_process(
            self.logger,
            [sys.executable, "buildscripts/resmoke.py"] + self.resmoke_const_args + resmoke_args)
        resmoke_process.start()
        self.resmoke_process = resmoke_process

        return resmoke_process

    def wait(self):
        self.resmoke_process.wait()

    def assert_dir_file_count(self, test_file, num_entries):
        file_path = os.path.join(self.test_dir, test_file)
        count = 0
        with open(file_path) as file:
            count = sum(1 for _ in file)
        self.assertEqual(count, num_entries)


class TestArchivalOnFailure(_ResmokeSelftest):
    @classmethod
    def setUpClass(cls):
        super(TestArchivalOnFailure, cls).setUpClass()

        cls.archival_file = "test_archival.txt"

    def test_archival_on_task_failure(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_failure.yml",
            "--taskId=123",
            "--internalParam=test_archival",
            "--repeatTests=2",
            "--jobs=2",
        ]
        self.execute_resmoke(resmoke_args)
        self.resmoke_process.wait()

        # test archival
        archival_dirs_to_expect = 4  # 2 tests * 2 nodes
        self.assert_dir_file_count(self.archival_file, archival_dirs_to_expect)

    def test_archival_on_task_failure_no_passthrough(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_failure_no_passthrough.yml",
            "--taskId=123",
            "--internalParam=test_archival",
            "--repeatTests=2",
            "--jobs=2",
        ]
        self.execute_resmoke(resmoke_args)
        self.resmoke_process.wait()

        # test archival
        archival_dirs_to_expect = 4  # 2 tests * 2 nodes
        self.assert_dir_file_count(self.archival_file, archival_dirs_to_expect)

    def test_no_archival_locally(self):
        # archival should not happen if --taskId is not set.
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_failure_no_passthrough.yml",
            "--internalParam=test_archival",
            "--repeatTests=2",
            "--jobs=2",
        ]
        self.execute_resmoke(resmoke_args)
        self.resmoke_process.wait()

        # test that archival file wasn't created.
        self.assertFalse(os.path.exists(self.archival_file))


class TestTimeout(_ResmokeSelftest):
    @classmethod
    def setUpClass(cls):
        super(TestTimeout, cls).setUpClass()

        cls.archival_file = "test_archival.txt"
        cls.analysis_file = "test_analysis.txt"

    def signal_resmoke(self):
        signal_resmoke_process = core.programs.make_process(
            self.logger, [sys.executable, "buildscripts/resmoke.py", "run-timeout"])
        signal_resmoke_process.start()

        # Wait for resmoke_process to be killed by 'run-timeout' to avoid deadlocks.
        self.resmoke_process.wait()

        return_code = signal_resmoke_process.wait()
        if return_code != 0:
            self.resmoke_process.stop()
        self.assertEqual(return_code, 0)

    def execute_resmoke(self, resmoke_args):
        _ResmokeSelftest.execute_resmoke(self, resmoke_args)

        time.sleep(
            10)  # TODO: Change to more durable way of ensuring the fixtures have been set up.

        self.signal_resmoke()

    def test_task_timeout(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_timeout.yml",
            "--taskId=123",
            "--internalParam=test_archival",
            "--internalParam=test_analysis",
            "--repeatTests=2",
            "--jobs=2",
        ]
        self.execute_resmoke(resmoke_args)

        archival_dirs_to_expect = 4  # 2 tests * 2 nodes
        self.assert_dir_file_count(self.archival_file, archival_dirs_to_expect)

        # analysis_files_to_expect = 6  # 2 tests * (2 mongod + 1 mongo)
        # self.assert_dir_file_count(self.analysis_file, analysis_files_to_expect)

    def test_task_timeout_no_passthrough(self):
        resmoke_args = [
            "--suites=buildscripts/tests/resmokelib/end2end/suites/resmoke_selftest_task_timeout_no_passthrough.yml",
            "--taskId=123",
            "--internalParam=test_archival",
            "--repeatTests=2",
            "--jobs=2",
        ]
        self.execute_resmoke(resmoke_args)

        archival_dirs_to_expect = 4  # 2 tests * 2 nodes
        self.assert_dir_file_count(self.archival_file, archival_dirs_to_expect)

        # analysis_files_to_expect = 6  # 2 tests * (2 mongod + 1 mongo)
        # self.assert_dir_file_count(self.analysis_file, analysis_files_to_expect)
