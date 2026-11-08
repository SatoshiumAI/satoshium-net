# SATOSHIUM — Suite Production Integration / Suite 1.0
## Stage 1L — IQ-004 Relationship Predicate Serialization: Isolated Offline CI Evidence

**Date:** November 7, 2026 (Pacific)  
**Disposition:** **EXPERIMENTAL OFFLINE SELF-TESTS PASS — GENERALIZED IQ-004 ACCEPTANCE REMAINS OPEN**  
**Canonical source:** `SatoshiumAI/satoshium-us` `phase004` commit `da8333ddb85face8ee499abe93ef4bc4f555e867`; **READ-ONLY**  
**Test implementation:** `SatoshiumAI/satoshium-net` commit `1e0a2df5476e6fd8b81b5b3237ce791954ae367b`  
**Independent CI evidence:** [run 42442335198](https://github.com/SatoshiumAI/satoshium-net/actions/runs/42442335198) — completed/success at the exact test commit.

## Canonical Step 6 and IQ-004 source boundary

The approved October 3 queue `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md`, **IQ-004 P0 QUEUED**, requires exact machine predicates/direction, strongest correct relationship, explicit unsupported handling, no silent `related-to` downgrade and preservation of independently true multiple relationships. The canonical Step 6 document `suite/interoperability/satoshium-interoperability-review-relationship-serialization-2026-10-03.md` specifies subject and object identifiers/institutions, explicit direction, relationship provenance and authority context, plus conditional effective time/version/state. IDR-024–028 confirms source→predicate→target direction; evidence-governed strongest correct relationship, `supports` direction convention, unsupported predicate reporting, and multiple assertions remaining independently serialized.

The eight approved exchange tokens are `references`, `derived-from`, `supports`, `evaluates`, `results-in`, `supersedes`, `corrects`, `related-to`. Neither Registry-native `registers` nor other institution-specific relationship labels are silently converted into a shared predicate.

## Experimental implementation in `services/reviews/stage1l/`

- `relationship-serializer.cjs`: checks a fictional normalized relationship envelope and preserves distinct assertions in an array. No institutional or canonical object is created.
- `fictional-relationships.json`: invented Attestor and Beacon IDs, relationship claims and provenance; does not represent actual issued objects or independently established facts.
- `relationship-serializer.test.cjs`: 29 deterministic tests.
- `README.md`: describes source pin, explicit prototype restrictions and commands.
- The shared `.github/workflows/suite-iq001-offline-evidence.yml` was extended to run this fifth IQ-specific experimental component.

Tests cover eight governed tokens, missing identities/institutions/direction/provenance, invalid inverse direction, unsupported and unknown tokens, authority-context mismatch, conditional material time/version/state, explicit weak-relation reason, multiple independently asserted relationships, partial invalid batch rejection, invalid roots and immutability. The serializer does not substitute `related-to` or generate inverse edges.

**Important prototype restrictions:** It uses `direction: subject-to-object` and `authority_context = subject_institution` as *test-specific conventions*, not globally approved fixed wire encodings. It does not establish provenance authenticity, relation truth, strongest justified predicate, evidence eligibility, real-world version scope, cryptographic integrity, institution-owned relationship assertion authority or production implementation. A local `SERIALIZED_ONLY` result does **not** represent machine conformance or any institutional approval. Unsupported predicate inputs remain in the explicit rejected payload.

## Independent executable evidence

At exact commit `1e0a2df5476e6fd8b81b5b3237ce791954ae367b`, the GitHub Actions job `Suite IQ-001–004 Offline Evidence (noncanonical)` returned **success** for:

| Test suite | Synthetic cases | CI result |
|---|---:|---|
| Stage 1E P0 evidence register self-tests | 9 | PASS |
| Stage 1H IQ-001 reference envelope | 15 | PASS |
| Stage 1I IQ-001 fictional Registry-shaped adapter | 13 | PASS |
| Stage 1J IQ-002 resolver | 20 | PASS |
| Stage 1K IQ-003 state-at-use / current-state comparison | 24 | PASS |
| **Stage 1L IQ-004 relationship serialization** | **29** | **PASS** |
| **Total** | **110** | **PASS** |

The manifest completeness command also ran. Its PASS confirms registry hygiene, not deployment or source-of-truth truthfulness.

## Status and next bounded work

- **IQ-001–IQ-004:** independently tested **experimental prototypes**, not newly approved production integrations.
- **P0 queue:** 11 items historically QUEUED for generalized automated cross-institution production exchange; none newly accepted.
- **Stage 1L:** source verified, implementation/test isolated, GitHub source readback verified, independent offline CI PASS.
- **`satoshium-us`:** no modifications, no privileged site requests, and no use of production data as fictional fixtures.
- **GB2:** no compute used; public Suite 1.0 automated product release remains unauthorized.

**Next:** IQ-005 `evaluates`/`results-in` subject profiles requires inspecting the precise machine-identity rules for process/reference subjects that are not canonical objects. Do not invent a new canonical family or conflate an Attestor evaluation process with an Attestation or Trust Statement.

> **IMPLEMENT WHAT THE ARCHITECTURE REQUIRES. DO NOT REDESIGN THE ARCHITECTURE WHILE IMPLEMENTING IT.**
