/**
 * Minions Match SDK
 *
 * Match scoring, shortlists, and hard gate evaluation between jobs and profile
 *
 * @module @minions-match/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Match.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
