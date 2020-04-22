"""Resmoke subcommand for listing all test suites."""

from buildscripts.resmokelib import config
from buildscripts.resmokelib import suitesconfig
from buildscripts.resmokelib.commands import interface

class ListSuites(interface.Subcommand):
    """Class for list-suites subcommand."""

    def execute(self):
        """Execute the command."""
        self._list_suites()

    def _list_suites(self):
        suite_names = suitesconfig.get_named_suites()
        config.LOGGING_CONFIG.info("Suites available to execute:\n%s", "\n".join(suite_names))
