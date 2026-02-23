/**
 * @module @minions-match/sdk/schemas
 * Custom MinionType schemas for Minions Match.
 */

import type { MinionType } from 'minions-sdk';

export const matchscoreType: MinionType = {
  id: 'match-match-score',
  name: 'Match score',
  slug: 'match-score',
  description: 'A scored evaluation of a job posting against the candidate profile.',
  icon: '🎯',
  schema: [
    { name: 'jobId', type: 'string', label: 'jobId' },
    { name: 'profileId', type: 'string', label: 'profileId' },
    { name: 'overallScore', type: 'number', label: 'overallScore' },
    { name: 'skillOverlapScore', type: 'number', label: 'skillOverlapScore' },
    { name: 'budgetFitScore', type: 'number', label: 'budgetFitScore' },
    { name: 'timezoneFitScore', type: 'number', label: 'timezoneFitScore' },
    { name: 'explanations', type: 'string', label: 'explanations' },
    { name: 'hardGateFailed', type: 'boolean', label: 'hardGateFailed' },
    { name: 'hardGateReasons', type: 'string', label: 'hardGateReasons' },
    { name: 'scoredAt', type: 'string', label: 'scoredAt' },
  ],
};

export const shortlistType: MinionType = {
  id: 'match-shortlist',
  name: 'Shortlist',
  slug: 'shortlist',
  description: 'A curated list of job postings selected for proposal generation.',
  icon: '⭐',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'jobIds', type: 'string', label: 'jobIds' },
    { name: 'rationale', type: 'string', label: 'rationale' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const hardgateType: MinionType = {
  id: 'match-hard-gate',
  name: 'Hard gate',
  slug: 'hard-gate',
  description: 'A rule that disqualifies a job posting regardless of match score.',
  icon: '🚫',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'condition', type: 'string', label: 'condition' },
    { name: 'reason', type: 'string', label: 'reason' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const matchpreferenceType: MinionType = {
  id: 'match-match-preference',
  name: 'Match preference',
  slug: 'match-preference',
  description: 'A user-defined preference that biases scoring in a direction.',
  icon: '🧭',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'field', type: 'string', label: 'field' },
    { name: 'direction', type: 'select', label: 'direction' },
    { name: 'weight', type: 'number', label: 'weight' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const customTypes: MinionType[] = [
  matchscoreType,
  shortlistType,
  hardgateType,
  matchpreferenceType,
];

