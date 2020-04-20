#!/usr/bin/env python3
"""Command line utility for executing MongoDB tests of all kinds."""

import os
import os.path
import random
import subprocess
import sys
import tarfile
import time

import pkg_resources
import requests


# Get relative imports to work when the package is not installed on the PYTHONPATH.
if __name__ == "__main__" and __package__ is None:
    sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# pylint: disable=wrong-import-position
from buildscripts.resmokelib import config
from buildscripts.resmokelib import errors
from buildscripts.resmokelib import logging
from buildscripts.resmokelib import parser
from buildscripts.resmokelib import suitesconfig
from buildscripts.resmokelib import testing
from buildscripts.resmokelib import utils

from buildscripts.resmokelib.core import process


class Resmoke(object):  # pylint: disable=too-many-instance-attributes
    """The main class to run tests with resmoke."""

    def __init__(self):
        """Initialize the Resmoke instance."""
        self.__start_time = time.time()
        self._config = None
        self._exec_logger = None
        self._resmoke_logger = None
        self._interrupted = False
        self._exit_code = 0

    def configure_from_command_line(self):
        """Configure this instance using the command line arguments."""
        self._config = parser.parse_command_line()

    def _setup_logging(self):
        logging.loggers.configure_loggers(self._config.logging_config)
        logging.flush.start_thread()
        self._exec_logger = logging.loggers.EXECUTOR_LOGGER
        self._resmoke_logger = self._exec_logger.new_resmoke_logger()

    def _exit_logging(self):
        if self._interrupted:
            # We want to exit as quickly as possible when interrupted by a user and therefore don't
            # bother waiting for all log output to be flushed to logkeeper.
            return

        if logging.buildlogger.is_log_output_incomplete():
            # If we already failed to write log output to logkeeper, then we don't bother waiting
            # for any remaining log output to be flushed as it'll likely fail too. Exiting without
            # joining the flush thread here also means that resmoke.py won't hang due a logger from
            # a fixture or a background hook not being closed.
            self._exit_on_incomplete_logging()

        flush_success = logging.flush.stop_thread()
        if not flush_success:
            self._resmoke_logger.error(
                'Failed to flush all logs within a reasonable amount of time, '
                'treating logs as incomplete')

        if not flush_success or logging.buildlogger.is_log_output_incomplete():
            self._exit_on_incomplete_logging()

    def _exit_on_incomplete_logging(self):
        if self._exit_code == 0:
            # We don't anticipate users to look at passing Evergreen tasks very often that even if
            # the log output is incomplete, we'd still rather not show anything in the Evergreen UI
            # or cause a JIRA ticket to be created.
            self._resmoke_logger.info(
                "We failed to flush all log output to logkeeper but all tests passed, so"
                " ignoring.")
        else:
            exit_code = errors.LoggerRuntimeConfigError.EXIT_CODE
            self._resmoke_logger.info(
                "Exiting with code %d rather than requested code %d because we failed to flush all"
                " log output to logkeeper.", exit_code, self._exit_code)
            self._exit_code = exit_code

        # Force exit the process without cleaning up or calling the finally block
        # to avoid threads making system calls from blocking process termination.
        # This must be the last line of code that is run.
        # pylint: disable=protected-access
        os._exit(self._exit_code)

    def run_subcommand(self):
        """Run the specified resmoke subcommand."""
        if self._config is None:
            raise RuntimeError("Resmoke must be configured before calling run_subcommand()")
        self._setup_logging()

        subcommand = self._config.command
        try:
            if subcommand == 'run':
                self.run()
            elif subcommand == 'list-suites':
                self.list_suites()
            elif subcommand == 'find-suites':
                self.find_suites()
            else:
                raise RuntimeError(f"Resmoke configuration has invalid subcommand: {subcommand}")
        finally:
            # self._exit_logging() may never return when the log output is incomplete.
            # Our workaround is to call os._exit().
            self._exit_logging()

    def run(self):
        """Execute the 'run' subcommand."""

        if self._config.dry_run == "tests":
            self.dry_run()
        else:
            self.run_tests()

    def find_suites(self):
        """List the suites that run the specified tests."""
        suites = self._get_suites()
        suites_by_test = self._find_suites_by_test(suites)
        for test in sorted(suites_by_test):
            suite_names = suites_by_test[test]
            self._resmoke_logger.info("%s will be run by the following suite(s): %s", test,
                                      suite_names)

    @staticmethod
    def _find_suites_by_test(suites):
        """
        Look up what other resmoke suites run the tests specified in the suites parameter.

        Return a dict keyed by test name, value is array of suite names.
        """
        memberships = {}
        test_membership = suitesconfig.create_test_membership_map()
        for suite in suites:
            for test in suite.tests:
                memberships[test] = test_membership[test]
        return memberships

    def _get_suites(self):
        """Return the list of suites for this resmoke invocation."""
        try:
            return suitesconfig.get_suites(self._config.suite_files, self._config.test_files)
        except errors.SuiteNotFound as err:
            self._resmoke_logger.error("Failed to parse YAML suite definition: %s", str(err))
            self.list_suites()
            self.exit(1)

    def exit(self, exit_code):
        """Exit with the provided exit code."""
        self._exit_code = exit_code
        self._resmoke_logger.info("Exiting with code: %d", exit_code)
        sys.exit(exit_code)


def main():
    """Execute Main function for resmoke."""
    resmoke = Resmoke()
    resmoke.configure_from_command_line()
    resmoke.run_subcommand()


if __name__ == "__main__":
    main()
