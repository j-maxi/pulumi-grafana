# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

__config__ = pulumi.Config('grafana')

auth = __config__.get('auth')
"""
Credentials for accessing the Grafana API.
"""

url = __config__.get('url')
"""
URL of the root of the target Grafana server.
"""

