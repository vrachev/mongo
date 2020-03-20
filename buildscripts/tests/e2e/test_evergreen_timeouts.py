#!/usr/bin/env python3
"""Unit tests for testing resmoke behavior during a test/task timeout on evergreen..

   Note - Tests require sshd to be enabled on localhost with paswordless login
   and can fail otherwise."""

import os
import shutil
import tempfile
import time
import unittest

from buildscripts import remote_operations as rop

# pylint: disable=invalid-name,missing-docstring,protected-access
