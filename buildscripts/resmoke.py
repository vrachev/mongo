#!/usr/bin/env python3
"""Command line utility for executing MongoDB tests of all kinds."""

import os
import os.path
import sys
import time


# Get relative imports to work when the package is not installed on the PYTHONPATH.
if __name__ == "__main__" and __package__ is None:
    sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# pylint: disable=wrong-import-position
from buildscripts.resmokelib import parser


class Resmoke(object):  # pylint: disable=too-many-instance-attributes
    """The main class to run tests with resmoke."""

    def __init__(self):
        """Initialize the Resmoke instance."""
        self.__start_time = time.time()
        self._exit_code = 0

    def configure_from_command_line(self):
        """Configure this instance using the command line arguments."""
        return parser.parse_command_line()

    def execute_subcommand(self, args):
        """Run the specified resmoke subcommand."""

        subcommand = args.command
        if subcommand == 'run':
            self.run()
        elif subcommand == 'list-suites':
            self.list_suites()
        elif subcommand == 'find-suites':
            self.find_suites()
        else:
            raise RuntimeError(f"Resmoke configuration has invalid subcommand: {subcommand}")

    def exit(self, exit_code):
        """Exit with the provided exit code."""
        self._exit_code = exit_code
        self._resmoke_logger.info("Exiting with code: %d", exit_code)
        sys.exit(exit_code)


def main():
    """Execute Main function for resmoke."""
    resmoke = Resmoke()
    args = resmoke.configure_from_command_line()
    resmoke.execute_subcommand(args)


if __name__ == "__main__":
    main()
