"""
Minions Match SDK — Type Schemas
Custom MinionType schemas for Minions Match.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

match_score_type = MinionType(
    id="match-match-score",
    name="Match score",
    slug="match-score",
    description="A scored evaluation of a job posting against the candidate profile.",
    icon="🎯",
    schema=[
        FieldDefinition(name="jobId", type="string", label="jobId"),
        FieldDefinition(name="profileId", type="string", label="profileId"),
        FieldDefinition(name="overallScore", type="number", label="overallScore"),
        FieldDefinition(name="skillOverlapScore", type="number", label="skillOverlapScore"),
        FieldDefinition(name="budgetFitScore", type="number", label="budgetFitScore"),
        FieldDefinition(name="timezoneFitScore", type="number", label="timezoneFitScore"),
        FieldDefinition(name="explanations", type="string", label="explanations"),
        FieldDefinition(name="hardGateFailed", type="boolean", label="hardGateFailed"),
        FieldDefinition(name="hardGateReasons", type="string", label="hardGateReasons"),
        FieldDefinition(name="scoredAt", type="string", label="scoredAt"),
    ],
)

shortlist_type = MinionType(
    id="match-shortlist",
    name="Shortlist",
    slug="shortlist",
    description="A curated list of job postings selected for proposal generation.",
    icon="⭐",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="jobIds", type="string", label="jobIds"),
        FieldDefinition(name="rationale", type="string", label="rationale"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

hard_gate_type = MinionType(
    id="match-hard-gate",
    name="Hard gate",
    slug="hard-gate",
    description="A rule that disqualifies a job posting regardless of match score.",
    icon="🚫",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="condition", type="string", label="condition"),
        FieldDefinition(name="reason", type="string", label="reason"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

match_preference_type = MinionType(
    id="match-match-preference",
    name="Match preference",
    slug="match-preference",
    description="A user-defined preference that biases scoring in a direction.",
    icon="🧭",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="field", type="string", label="field"),
        FieldDefinition(name="direction", type="select", label="direction"),
        FieldDefinition(name="weight", type="number", label="weight"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

custom_types: list[MinionType] = [
    match_score_type,
    shortlist_type,
    hard_gate_type,
    match_preference_type,
]

