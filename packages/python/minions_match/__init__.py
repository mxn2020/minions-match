"""
Minions Match Python SDK

Match scoring, shortlists, and hard gate evaluation between jobs and profile
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Match.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
