"""Interactions with the undodb tool-suite."""
import os
import subprocess
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
        self.sudo = "" if self.is_windows() else "sudo"


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
        remote_op.operation(SSHOperation.COPY_TO, 'buildscripts/mount_drives.sh', None)

        script_opts = f"-d '${self.expansions['data_device_names']}'"

        if "raid_data_device_name" in self.expansions:
            script_opts = f"${script_opts} -r ${self.expansions['raid_data_device_name']}"
        if "fstype" in self.expansions:
            script_opts = f"${script_opts} -t ${self.expansions['fstype']}"
        if "fs_options" in self.expansions:
            script_opts = f"${script_opts} -o ${self.expansions['fs_options']}"

        script_opts = f"${script_opts} -l ${self.expansions['log_device_name']}"
        log = "/log"

        group_cmd = f"$(id -Gn ${self.user} | cut -f1 -d ' ') || true"
        group = subprocess.call(['sudo', group_cmd], shell=True)
        user_group = f"${self.user}:${group}"
        script_opts = f"$script_opts -u ${user_group}"
        data_db = "/data/db"
        cmds = f"$sudo bash mount_drives.sh ${script_opts}; mount; ls -ld ${data_db} ${log}; df"

        remote_op.operation(SSHOperation.SHELL, cmds, None)

        if 'remote_dir' not in self.expansions:
            raise ValueError("The 'remote_dir' expansion must be set.")

        remote_dir = self.expansions['remote_dir']
        # Create remote_dir, if not '.' (pwd).
        if self.expansions['remote_dir'] != ".":
            set_permission = f"chmod 777 ${self.expansions['remote_dir']}"
            if self.is_windows():
                set_permission = f"setfacl -s user::rwx,group::rwx,other::rwx ${remote_dir}"
            cmds = f"${self.sudo} mkdir -p ${remote_dir}; ${self.sudo} chown ${user_group} ${remote_dir}; ${set_permission}; ls -ld ${remote_dir}"
            remote_op.operation(SSHOperation.SHELL, cmds, None)

        files = ['etc', 'buildscripts', 'pytests']
        mongo_executables = ["mongo", "mongod", "mongos"]
        for executable in mongo_executables:
            files.append = f"dist-test/bin/${executable}${self.expansions['exe']}"

        # Copy buildscripts, pytests and mongoDB executables to the remote host.
        remote_op.operation(SSHOperation.COPY_TO, files, remote_dir)


        # # Set up virtualenv on remote.
        # cmds = "python_loc=\$(which \${python|/opt/mongodbtoolchain/v3/bin/python3})"
        # cmds = f"${cmds}; remote_dir=${remote_dir}"
        # cmds = f"${cmds}; if [ \"Windows_NT\" = \"$OS\" ]; then python_loc=\$(cygpath -w \$python_loc); remote_dir=\$(cygpath -w \$remote_dir); fi"
        # cmds = f"${cmds}; virtualenv --python \$python_loc --system-site-packages ${virtualenv_dir|venv}"
        # cmds = f"${cmds}; activate=\$(find ${virtualenv_dir|venv} -name 'activate')"
        # cmds = f"${cmds}; . \$activate"
        # cmds = f"${cmds}; pip3 install -r \$remote_dir/etc/pip/powercycle-requirements.txt"









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
