"""Utility for checking resmoke behavior when a test/suite it executes times out"""

# from . import interface
# from ..testcases import jstest
# from ... import errors
# from ...utils import registry
from ... import logging

class TimeoutChecks():
    """Checks resmoke report and artifacts following test timeout"""

    def __init__(self, logger, subprocess_pid, artifacts_dir, archive):
        """Initialize TimeoutChecks."""       
        if not isinstance(logger, logging.Logger):
            raise TypeError("logger must be a Logger instance")

        self.logger = logger
        self.pid = subprocess_pid
        self.dir = artifacts_dir
        self.archive = archive

    def _check_archival(self):
        # TODO: check archival
        pass

    def _check_hang_analysis(self):
        # TODO: check analysis
        pass

    def _check_report(self):
        # TODO: check report
        pass

    def perform_check(self):
        """Perform checks"""
        self._check_hang_analysis()
        self._check_report()
        if self.archive:
            self._check_archival()
