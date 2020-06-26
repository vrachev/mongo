"""Interactions with the undodb tool-suite."""
import os
import subprocess
import sys

import shlex
import yaml

from buildscripts.powercycle.run import RemoteOperations, SSHOperation
from buildscripts.resmokelib.plugin import PluginInterface, Subcommand


_EXPANSIONS_FILE = 'expansions.yml'


class PowercycleCommand(Subcommand):
    @staticmethod
    def is_windows():
        return sys.platform == "win32" or sys.platform == "cygwin"

    def __init__(self):
        self.expansions = yaml.safe_load(open(_EXPANSIONS_FILE))
        self.ssh_connection_options = None

        # The username on the Windows image that powercycle uses is currently the default user.
        self.user = "Administrator" if self.is_windows() else os.getlogin()
        self.user_host = self.user + "@" + self.expansions["private_ip_address"]
        self.retries = 0 if "ssh_retries" not in self.expansions else int(self.expansions["ssh_retries"])
        self.sudo = "" if self.is_windows() else "sudo"
        self.exe = ".exe" if self.is_windows() else ""

        self.get_ssh_options()

    def get_ssh_options(self):
        workdir = self.get_posix_workdir()
        ssh_identity = f"-i {'/'.join([workdir, 'powercycle.pem'])}"
        print(ssh_identity)
        self.ssh_connection_options = ssh_identity + " " + self.expansions["ssh_connection_options"]

    def get_posix_workdir(self):
        workdir = self.expansions['workdir']
        if self.is_windows():
            workdir = workdir.replace("\\", "/")
        return workdir

    def _call(self, cmd):
        print(f"Executing in subprocess: {cmd}")
        cmd = shlex.split(cmd)
        # Use a common pipe for stdout & stderr for logging.
        process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        buff_stdout, _ = process.communicate()
        buff = buff_stdout.decode("utf-8", "replace")
        print(f"Result of cmd: {buff}")
        return process.poll(), buff


class SetUpEC2Instance(PowercycleCommand):
    """Interact with UndoDB."""
    COMMAND = "setUpEC2Instance"

    def execute(self) -> None:
        """
        :return: None
        """

        remote_op = RemoteOperations(
            user_host=self.user_host,
            ssh_connection_options=self.ssh_connection_options,
            retries=self.retries,
            debug=True,
        )

        # last arg is "operation_dir", which for the COPY_TO action, is the remote
        # directory. We just have it default to the home directory instead of setting
        # one explicitly.
        remote_op.operation(SSHOperation.COPY_TO, 'buildscripts/mount_drives.sh', None)

        script_opts = f"-d '{self.expansions['data_device_names']}'"

        if "raid_data_device_name" in self.expansions:
            script_opts = f"{script_opts} -r {self.expansions['raid_data_device_name']}"
        if "fstype" in self.expansions:
            script_opts = f"{script_opts} -t {self.expansions['fstype']}"
        if "fs_options" in self.expansions:
            script_opts = f"{script_opts} -o '{self.expansions['fs_options']}'"

        script_opts = f"{script_opts} -l '{self.expansions['log_device_name']}'"
        log = "/log"

        print("Got here 1")
        # Mount /data on the attached drive(s), more than 1 indicates a RAID set.
        group_cmd = f"id -Gn {self.user}"
        _, group = self._call(group_cmd)
        group = group.split(" ")[0]
        user_group = f"{self.user}:{group}"
        script_opts = f"{script_opts} -u {user_group}"
        data_db = "/data/db"
        cmds = f"{self.sudo} bash mount_drives.sh {script_opts}; mount; ls -ld {data_db} {log}; df"
        remote_op.operation(SSHOperation.SHELL, cmds, None)

        print("Got here 2")
        if 'remote_dir' not in self.expansions:
            raise ValueError("The 'remote_dir' expansion must be set.")

        # Create remote_dir, if not '.' (pwd).
        remote_dir = self.expansions['remote_dir']
        if self.expansions['remote_dir'] != ".":
            set_permission = f"chmod 777 {self.expansions['remote_dir']}"
            if self.is_windows():
                set_permission = f"setfacl -s user::rwx,group::rwx,other::rwx {remote_dir}"
            cmds = f"{self.sudo} mkdir -p {remote_dir}; {self.sudo} chown {user_group} {remote_dir}; {set_permission}; ls -ld {remote_dir}"
            remote_op.operation(SSHOperation.SHELL, cmds, None)

        print("Got here 3")
        files = ['etc', 'buildscripts', 'pytests']
        mongo_executables = ["mongo", "mongod", "mongos"]
        for executable in mongo_executables:
            files.append(f"dist-test/bin/{executable}{self.exe}")

        # Copy buildscripts, pytests and mongoDB executables to the remote host.
        remote_op.operation(SSHOperation.COPY_TO, files, remote_dir)
        print("Got here 4")


        venv = "venv" if "virtualenv_dir" not in self.expansions else self.expansions["virtualenv_dir"]
        python = "/opt/mongodbtoolchain/v3/bin/python3" if "python" not in self.expansions else self.expansions["python"]

        # Set up virtualenv on remote.
        cmds = f"python_loc=$(which {python})"
        cmds = f"{cmds}; remote_dir={remote_dir}"
        cmds = f"{cmds}; if [ 'Windows_NT' = '$OS' ]; then python_loc=$(cygpath -w $python_loc); remote_dir=$(cygpath -w $remote_dir); fi"
        cmds = f"{cmds}; virtualenv --python $python_loc --system-site-packages {venv}"
        cmds = f"{cmds}; activate=$(find {venv} -name 'activate')"
        cmds = f"{cmds}; . $activate"
        cmds = f"{cmds}; pip3 install -r $remote_dir/etc/pip/powercycle-requirements.txt"

        remote_op.operation(SSHOperation.SHELL, cmds, None)

        print("Got here 5")

        # Enable core dumps on non-Windows remote hosts.
        # The core pattern must specify a director, since mongod --fork will chdir("/")
        # and cannot generate a core dump there (see SERVER-21635).
        # We need to reboot the host for the core limits to take effect.
        if not self.is_windows():
            core_pattern = f"{remote_dir}/dump_%e.%p.core"
            sysctl_conf = "/etc/sysctl.conf"
            cmds = "ulimit -a"
            cmds = f"{cmds}; echo \"{self.user} - core unlimited\" | {self.sudo} tee -a /etc/security/limits.conf"
            cmds = f"{cmds}; if [ -f {sysctl_conf} ]"
            cmds = f"{cmds}; then grep ^kernel.core_pattern {sysctl_conf}"
            cmds = f"{cmds};    if [ \$? -eq  0 ]"
            cmds = f"{cmds};    then {self.sudo} sed -i \"s,kernel.core_pattern=.*,kernel.core_pattern=$core_pattern,\" {sysctl_conf}"
            cmds = f"{cmds};    else echo \"kernel.core_pattern={core_pattern}\" | {self.sudo} tee -a {sysctl_conf}"
            cmds = f"{cmds};    fi"
            cmds = f"{cmds}; else echo Cannot change the core pattern and no core dumps will be generated."
            cmds = f"{cmds}; fi"
            # The following line for restarting the machine is based on
            # https://unix.stackexchange.com/a/349558 in order to ensure the ssh client gets a
            # response from the remote machine before it restarts.
            cmds = f"{cmds}; nohup {self.sudo} reboot &>/dev/null & exit"

        remote_op.operation(SSHOperation.SHELL, cmds, None)

        # print("Got here 6")

        # if not self.is_windows():
        #     # Always exit successfully, as this is just informational.
        #     # Print the ulimit & kernel.core_pattern
        #     cmds = "uptime"
        #     cmds = f"{cmds}; ulimit -a"
        #     cmds = f"{cmds}; if [ -f /sbin/sysctl ]"
        #     cmds = f"{cmds}; then /sbin/sysctl kernel.core_pattern"
        #     cmds = f"{cmds}; fi"



class TarEC2Artifacts(PowercycleCommand):
    """Interact with UndoDB."""
    COMMAND = "tarEC2Artifacts"


class CopyEC2Instance(PowercycleCommand):
    """Interact with UndoDB."""
    COMMAND = "copyEC2Instance"


class GatherRemoteEventLogs(PowercycleCommand):
    """Interact with UndoDB."""
    COMMAND = "gatherRemoteEventLogs"


class GatherRemoteMongoCoredumps(PowercycleCommand):
    """Interact with UndoDB."""
    COMMAND = "gatherRemoteMongoCoredumps"


class CopyRemoteMongoCoredumps(PowercycleCommand):
    """Interact with UndoDB."""
    COMMAND = "copyRemoteMongoCoredumps"


class CopyEC2MonitorFiles(PowercycleCommand):
    """Interact with UndoDB."""
    COMMAND = "copyEC2MonitorFiles"


class PowercyclePlugin(PluginInterface):
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
        if subcommand == SetUpEC2Instance.COMMAND:
            return SetUpEC2Instance()
        elif subcommand == TarEC2Artifacts.COMMAND:
            return TarEC2Artifacts()
        elif subcommand == CopyEC2Instance.COMMAND:
            return CopyEC2Instance()
        elif subcommand == GatherRemoteEventLogs.COMMAND:
            return GatherRemoteEventLogs()
        elif subcommand == GatherRemoteMongoCoredumps.COMMAND:
            return GatherRemoteMongoCoredumps()
        elif subcommand == CopyRemoteMongoCoredumps.COMMAND:
            return CopyRemoteMongoCoredumps()
        elif subcommand == CopyEC2MonitorFiles.COMMAND:
            return CopyEC2MonitorFiles()
        else:
            return None
