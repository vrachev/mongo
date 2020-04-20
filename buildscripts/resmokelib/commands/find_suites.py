"""Resmoke subcommand for finding all suites that execute a test."""

from buildscripts.resmokelib import suitesconfig
from buildscripts.resmokelib.commands import interface

class FindSuites(interface.subcommand):
    """Class for find-suites subcommand."""

    def execute(self):
        """Execute the command."""
        self._list_suites()

    def find_suites(self):
        """List the suites that run the specified tests."""
        suites = self._get_suites()
        suites_by_test = self._find_suites_by_test(suites)
        for test in sorted(suites_by_test):
            suite_names = suites_by_test[test]
            self._resmoke_logger.info("%s will be run by the following suite(s): %s", test,
                                        suite_names)
