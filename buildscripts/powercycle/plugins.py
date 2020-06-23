"""Interactions with the undodb tool-suite."""
import os
import sys

import yaml

from buildscripts.powercycle.run import RemoteOperations, SSHOperation
from buildscripts.resmokelib.plugin import PluginInterface, Subcommand


class PowercycleCommand(Subcommand):
    @staticmethod
    def is_windows():
        return sys.platform == "win32" or sys.platform == "cygwin"

    def __init__(self, expansions_file):
        self.expansions = yaml.safe_load(open(expansions_file))
        self.ssh_connection_options = self.expansions["ssh_identity"] + " " + self.expansions["ssh_connection_options"]

        # The username on the Windows image that powercycle uses is currently the default user.
        self.user = "Administrator" if self.is_windows() else os.getlogin()
        self.user_host = self.user + "@" + self.expansions["private_ip_address"]
        self.retries = 0 if "ssh_retries" not in self.expansions else self.expansions["ssh_retries"]


class SetUpEC2Instance(PowercycleCommand):
    """Interact with UndoDB."""
    COMMAND = "setUpEC2Instance"

    def __init__(self, expansions_file):
        """Constructor."""
        super().__init__(expansions_file)

    def execute(self) -> None:
        """
        :return: None
        """

        # verbose userHost sshConnectionOptions retries file
        remote_op = RemoteOperations(
            user_host=self.user_host,
            ssh_connection_options=self.ssh_connection_options,
            retries=self.retries
        )

        # last arg is "operation_dir", which for the COPY_TO action, is the remote
        # directory. We just have it default to the home directory instead of setting
        # one explicitly.
        ret, buff = remote_op.operation(SSHOperation.COPY_TO, 'buildscripts/mount_drives.sh', None)
        if ret != 0:
            raise Exception(buff)


class SetUpEC2InstancePlugin(PluginInterface):
    """Interact with UndoDB."""

    def add_subcommand(self, subparsers):
        """
        Add 'undodb' subcommand.

        :param subparsers: argparse parser to add to
        :return: None
        """
        parser = subparsers.add_parser(SetUpEC2Instance.COMMAND)
        # Accept arbitrary args like 'resmoke.py undodb foobar', but ignore them.

    def parse(self, subcommand, parser, parsed_args, **kwargs):
        """
        Return UndoDb if command is one we recognize.

        :param subcommand: equivalent to parsed_args.command
        :param parser: parser used
        :param parsed_args: output of parsing
        :param kwargs: additional args
        :return: None or a Subcommand
        """
        if subcommand != SetUpEC2Instance.COMMAND:
            return None
        return SetUpEC2Instance(parsed_args.expansions_file)
