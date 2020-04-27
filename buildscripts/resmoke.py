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
from buildscripts.resmokelib import config
from buildscripts.resmokelib import parser


class Resmoke(object):  # pylint: disable=too-many-instance-attributes
    """The main class to run tests with resmoke."""

    def __init__(self):
        """Initialize the Resmoke instance."""
        self.__start_time = time.time()

    def configure_from_command_line(self):  # pylint: disable=no-self-use
        """Configure this instance using the command line arguments."""
        return parser.parse_command_line(sys.argv[1:], start_time=self.__start_time)

    def execute_subcommand(self, subcommand):  # pylint: disable=no-self-use
        """Run the specified resmoke subcommand."""
        subcommand.execute()


def main():
    """Execute Main function for resmoke."""
    resmoke = Resmoke()
    subcommand = resmoke.configure_from_command_line()
    resmoke.execute_subcommand(subcommand)


if __name__ == "__main__":
    main()
