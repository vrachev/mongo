"""Utility for checking resmoke behavior when a test/suite it executes times out"""

from ... import logging

class TimeoutChecks():
    """Checks resmoke report and artifacts following test timeout"""

    def __init__(self, logger, subprocess_pid, artifacts_dir, archive):
        """Initialize TimeoutChecks."""

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
