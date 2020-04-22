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
from buildscripts.resmokelib import commands


class Resmoke(object):  # pylint: disable=too-many-instance-attributes
    """The main class to run tests with resmoke."""

    def __init__(self):
        """Initialize the Resmoke instance."""
        self.__start_time = time.time()

    def configure_from_command_line(self):
        """Configure this instance using the command line arguments."""
        return parser.parse_command_line()

    def execute_subcommand(self, parser_obj, args):
        """Run the specified resmoke subcommand."""

        subcommand = args.command
        if subcommand == 'find-suites':
            parser.validate_and_set_options(parser_obj, args)
            commands.run(self.__start_time)
        if subcommand == 'list-suites':
            parser.validate_and_set_options(parser_obj, args)
            list_suites = commands.list_suites.ListSuites()
            list_suites.execute()
        elif subcommand == 'run':
            parser.validate_and_set_options(parser_obj, args)
            self.find_suites()
        else:
            raise RuntimeError(f"Resmoke configuration has invalid subcommand: {subcommand}")


def main():
    """Execute Main function for resmoke."""
    resmoke = Resmoke()
    parser_obj, args = resmoke.configure_from_command_line()
    resmoke.execute_subcommand(parser_obj, args)


if __name__ == "__main__":
    main()
