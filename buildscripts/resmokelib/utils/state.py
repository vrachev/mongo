"""Utility for storing state about the current resmoke invocation."""

import tempfile
import os
from typing import List

import psutil

_DIR = tempfile.gettempdir()
_PID_FILE = os.path.join(_DIR, 'resmoke.pid')

def record_pid(logger) -> None:
    """
    Write out the pid of the current process.

    Only 'run' invocations should write out the pid.
    Appends the current pid if file exists.
    """

    pid_file = _PID_FILE
    pid = psutil.Process().pid

    logger.info('Recording resmoke\'s own pid %d to %s', pid, pid_file)
    with open(pid_file, 'a+') as fp:
        fp.write(f"{pid}\n")

def read_pids() -> List[int]:
    """Read the pid of the currnet 'resmoke run' process."""
    with open(_PID_FILE, 'r') as pfile:
        pids = []
        for line in pfile:
            pids.append(int(line.strip('\n')))

    # logger.info(f"Read {_PID_FILE} for resmoke pids. Returned {pids}")
    return pids

def cleanup_pid_file() -> None:
    """Delete the resmoke.pid file"""
    if os.path.isfile(_PID_FILE):
        os.remove(_PID_FILE)
