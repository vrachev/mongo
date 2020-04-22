"""Resmoke subcommand for listing all test suites."""

from buildscripts.resmokelib import suitesconfig
from buildscripts.resmokelib.commands import interface

class ListSuites(interface.subcommand):
    """Class for list-suites subcommand."""

    def execute(self, logger):
        """Execute the command."""
        self._list_suites(logger)

    def _list_suites(self, logger):
        suite_names = suitesconfig.get_named_suites()
        logger.info("Suites available to execute:\n%s", "\n".join(suite_names))
