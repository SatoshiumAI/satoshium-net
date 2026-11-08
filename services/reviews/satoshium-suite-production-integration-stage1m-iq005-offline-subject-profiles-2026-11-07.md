# SATOSHIUM — Suite Production Integration / Suite 1.0
## Stage 1M — IQ-005 Noncanonical Process-Subject Profiles: Offline CI Evidence

**Date:** November 7, 2026 (Pacific)  
**Disposition:** **EXPERIMENTAL OFFLINE TESTS PASS — IQ-005 GENERALIZED IMPLEMENTATION ACCEPTANCE OPEN**  
**Canonical source:** `SatoshiumAI/satoshium-us`, `phase004` at `da8333ddb85face8ee499abe93ef4bc4f555e867` — READ-ONLY  
**Experimental test commit:** `411031f03e02a5866e5a2827c296c0782dd23095` in `SatoshiumAI/satoshium-net`  
**Independent CI run:** [42442662899](https://github.com/SatoshiumAI/satoshium-net/actions/runs/42442662899) — `completed / success`, job `offline-evidence` completed/success at the test commit.

## 1. Approved source obligations

Original October 3 Step 24 queue `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md`, **IQ-005 P0 / originally QUEUED**, demands machine-valid relationship-bearing subjects where processes are not themselves canonical objects. Its acceptance terms require unambiguous subject identity, deterministic direction and no accidental promotion of a process/reference object to a canonical object.

Step 6 `suite/interoperability/satoshium-interoperability-review-relationship-serialization-2026-10-03.md` separates:
- **`evaluates`** — governed evaluation context or bearing subject → evaluated object/assertion;
- **`results-in`** — producing process/context or bearing subject → output/result.

Where a process is not a canonical object, its relationship must be represented by an appropriate canonical or governed process structure. The result's own identity and governing institution remain distinct. IDR-024 and IDR-027 reinforce explicit direction and unsupported predicate handling. Attestor's `attestor/validation/attestor-machine-contract-v0.1.md` is a concrete issuer-local machine reference model, **not** a universal governance decision to add a canonical process object.

## 2. Experimental implementation

Added `services/reviews/stage1m/`:
- `subject-profile.cjs` — isolated process-subject syntax/profile checker;
- `subject-profile.test.cjs` — 31 synthetic positive/negative cases;
- `fictional-process-relationships.json` — fictional local process references and fictional input/output objects, not issued or independently verified records;
- `README.md` — operation, source pin and nonclaims.

The test-local `local_process_id`, `governed_context_ref` and `profile_version` fields exist only inside a test-specific example. `canonical_object:false` is required for the process. The model demands explicit process→target direction, consistent process/relationship reference, separately governed target identity, provenance basis, and asserting institution. It rejects unsupported predicates, wrong direction, missing identity, canonical promotion, reference mismatches, unsupported asserted ownership and an explicit unsupported `authorized` result flag. It never grants authority or verifies actual evaluation or outcome.

**Important design limitation:** The local `process-to-target` token and same-owner assertion check are experimental conventions. This is not a normative adopted exchange schema. The prototype does **not** prove which actual issuer-owned canonical or governed process representation should carry `evaluates` or `results-in` in generalized interoperable production. It does not verify source truth, issuer signatures, evaluation eligibility, actual Attestor rule-constrained evaluation, trust conclusions, Navigator execution, source version/state, or release authority.

## 3. Independent test evidence

GitHub Actions `Suite IQ-001–005 Offline Evidence (noncanonical)` succeeded at `411031f03e02a5866e5a2827c296c0782dd23095`, run 42442662899, including the five experimental IQ-related components and P0 evidence-control tests:

| Evidence suite | Synthetic checks | Result |
|---|---:|---|
| Stage 1E P0 evidence-gate self-tests | 9 | PASS |
| Stage 1H IQ-001 reference envelope | 15 | PASS |
| Stage 1I IQ-001 Registry-shaped adapter | 13 | PASS |
| Stage 1J IQ-002 fictional resolver | 20 | PASS |
| Stage 1K IQ-003 state mapper | 24 | PASS |
| Stage 1L IQ-004 relationship serializer | 29 | PASS |
| **Stage 1M IQ-005 process subject profile** | **31** | **PASS** |
| **Total** | **141** | **PASS** |

The same workflow executes the evidence-register manifest hygiene check; its PASS cannot certify institutional implementations.

## 4. Explicit acceptance and authorization boundaries

- **IQ-001–IQ-005:** experimental isolated components with independent CI evidence; **production implementation acceptance OPEN**.
- **P0 status:** 11 historical P0 workstreams remain queued/NOT_VERIFIED for generalized automated production exchange; no founder release approval or institution-native adoption was granted here.
- **Institutional architecture:** eight Operational institutions, Aegis external/pre-Suite; process references do not become ninth canonical identities.
- **Canonical `satoshium-us`:** GitHub read-only inspection only; zero writes.
- **Supporting `satoshium-net`:** project test/documentation changes only; no deployed cross-institution services.
- **GB2:** no browser compute consumed. Prior Phase 1/2 and B1–B8 documentary/historical scope preserved unchanged.
- **Generalized Suite 1.0 product release:** NOT AUTHORIZED.

**Next:** IQ-006 `Controlled Outcome Namespacing`, using original Step 5 and IDR-023 to model issuer-specific outcome domains without collapsing certification/validation/verification/review/evaluation/Trust Statement meanings into generic status.

> **AUTHORITY FOLLOWS THE GOVERNED SUBJECT. REFERENCE DOES NOT TRANSFER AUTHORITY.**
