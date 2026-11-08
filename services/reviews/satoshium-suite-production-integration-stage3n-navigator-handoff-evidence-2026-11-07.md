# SATOSHIUM SUITE — Stage 3N: Navigator IQ-008 Recipient-Contract Evidence Review

**Date:** November 7, 2026 (Pacific)  
**Disposition:** READ-ONLY SOURCE REVIEW COMPLETE; IQ-008 PRODUCTION NOT_VERIFIED.  
**Canonical:** `SatoshiumAI/satoshium-us` `phase004` `da8333ddb85face8ee499abe93ef4bc4f555e867` (read-only).  
**Experimental:** `SatoshiumAI/satoshium-net` `phase004` (documentation only).

## Why return to Navigator

Stages 3A–3M concentrated on Certifier→Registry, reaching a bounded historical-source reference prototype and successful **783 offline checks** at `ee28424eacc4ba593d8ef3559402d81b19eb7f25`. These checks do not approve the six open contract decisions or satisfy generalized P0 acceptance. The approved October 3 queue has **11 P0 requirements**, all still NOT_VERIFIED for generalized production exchange.

The highest-value safe next topic is **IQ-008 — Navigator Handoff Contract**, because the Navigator canonical documentation clarifies a crucial distinction: the **Suite semantic handoff contract is already approved**, but an exact *recipient-specific machine serialization/contract* and authenticated durable execution are not verified. Do not represent the whole Navigator contract as architecturally unsettled, and do not mistake a semantic handoff for a live API.

## Exact canonical evidence

| Source | Git blob | Finding |
|---|---|---|
| `navigator/README.md` | `519fc928357f27ea9aede4f627adb810322f5038` | Navigator canonical Workflow Definition and orchestration ownership |
| `navigator/workflow-orchestration/README.md` | `784894aac3c04bc1b0e87fb109e8e0d59a8cb6e5` | Workflow coordination without institutional acts or universal pipeline |
| `navigator/integration/README.md` | `be101abd249e45301b4b52fabfb6c9165d4a41cb` | Approved semantic handoff contract, exact serialization may vary |
| `navigator/interoperability/README.md` | `729ab1c5777432502f28a9786ac7d421d957fe2c` | Reference and retrieval interoperability, no service guarantees |
| `navigator/schemas/README.md` | `9629b7262cbf7b85bc9b1384ab9d08789ad6eb24` | Organizational schemas, not adopted handoff receiver API |
| `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md` | `b8d0688a5a33d2feb3902e0a20b9b089a537eddf` | IQ-008 approved queue and required fields/acceptance intent |

The Stage 2L implementation crosswalk is pinned to `services/reviews/stage2l/consolidated-production-gate-register-2026-11-07.json` blob `8735f7e5438323834dab5e7908a6d16072a03dda`. Its IQ-008 remains **EXPERIMENTAL CI_PASS / PRODUCTION NOT_VERIFIED** with 47 previous fictional checks.

## Field-level receiver-contract evidence checklist

The original queue names the handoff fields below. None is an approved receiving-institution wire format merely because the semantic category is established:

| Field | Responsible institution(s) | Required demonstration |
|---|---|---|
| `workflow_definition` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `workflow_execution_context` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `handoff_identifier` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `sending_step` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `receiving_institution` | Navigator + receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `requested_action` | Navigator + receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `input_references` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `input_provenance` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `authority_context` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `preconditions` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `expected_output` | Navigator + receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `completion_criteria` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `failure_model` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `retry_policy` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `timeout_unavailable_policy` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `unknown_state_handling` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `timestamp` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |
| `traceability_context` | Navigator; recipient semantics require receiving institution | Receiver-bound exact serialization, attributable source/version and failure/unknown semantics |

The original queue uses `timeout/unavailable_policy`; `timeout_unavailable_policy` is used only as a proposed machine-safe inventory label, **not** a governance-approved renaming.

## Owner decisions still needed

**3N-D01 — Navigator producer handoff wire profile (Navigator).** Named machine format + version, source Workflow Definition ID, fields, immutability and historical execution context. **Status:** OPEN_FOR_OWNER_REVIEW.

**3N-D02 — Recipient interpretation of requested action (Receiving institution).** Accepted request classes, explicit denial/unknown responses, proof that coordination does not confer institutional authority. **Status:** OPEN_FOR_OWNER_REVIEW.

**3N-D03 — Trace, retry and branch-specific outcomes (Navigator + recipient).** Attempt identity, historical version-at-use, receiving acknowledgement provenance, timeout/partial handling and explicit independent resulting object reference. **Status:** OPEN_FOR_OWNER_REVIEW.

**3N-D04 — No-write evidence-only preflight scope (Founder + Navigator/recipient owners).** Separate named authorization if any actual authenticated/nonproduction exchange is proposed; none granted by this record. **Status:** OPEN_FOR_OWNER_REVIEW.

**No further production CI claims:** Already exercised isolated IQ-008 prototype assertions show the local semantic boundary, but not authenticated receiver behavior, versioned producer/recipient contract adoption, durable trace, or independently read-back institutional results.

## Constitutional and status controls

Navigator's canonical object is the **Navigator Workflow Definition**. Orchestration is its institutional function. Navigator can route context and monitor workflow state; recipient institutions alone may issue, publish, maintain or correct their own canonical objects. An illustrative suite-wide chain is not a mandatory pipeline. Workflow completion is not a synonym for Registry publication or certification authority.

All **11/11 production P0 requirements remain NOT_VERIFIED**, all six D-2A decisions remain OPEN (03 and 06 narrowed), and no canonical write, authenticated interface use, additional CI test, GB2 compute or Suite release occurred.

**Recommended next safe action:** isolate one named Navigator→recipient relationship for specific owner acceptance (e.g. a documentary-only, read-only Registry reference), then obtain actual owner approval of the concrete serialization and exact refusal/freshness policy before considering any authenticated tests.

**AUTHORITY FOLLOWS THE GOVERNED SUBJECT. REFERENCE DOES NOT TRANSFER AUTHORITY. COORDINATION DOES NOT TRANSFER AUTHORITY.**
