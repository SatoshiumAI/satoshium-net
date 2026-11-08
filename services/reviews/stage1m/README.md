# Stage 1M — IQ-005 Noncanonical Process-Subject Profiles

**Date:** November 7, 2026 (Pacific). **Status:** EXPERIMENTAL OFFLINE ONLY — IQ-005 P0 PRODUCTION ACCEPTANCE OPEN.

## Canonical read-only provenance

`SatoshiumAI/satoshium-us` branch `phase004`, commit `da8333ddb85face8ee499abe93ef4bc4f555e867`. Consulted:
- `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md`: IQ-005 P0, originally QUEUED, unambiguous subject identity, deterministic direction, noncanonical-process safety.
- `suite/interoperability/satoshium-interoperability-review-relationship-serialization-2026-10-03.md`: Step 6; evaluates and results-in semantics, process references need appropriate canonical or governed process anchoring.
- `suite/interoperability/satoshium-suite-interoperability-decision-register-2026-10-03.md`: IDR-024 / IDR-027.
- `attestor/validation/attestor-machine-contract-v0.1.md` and `navigator/interoperability/README.md`: institution-local examples, **not** universal adopted process-subject profiles.

## Experimental representation — not an adopted wire contract

A fictional process has an explicit **local process reference**, declaring institution, governed context reference and version label; it **must** have `canonical_object:false`. A distinct target retains a separate identifier, institution and object type. `evaluates` and `results-in` are separate directed predicates and require explicit provenance and an asserting institution. Tests prevent mismatched subject/target references and an explicit unsupported authorization claim. None of these mock identifiers creates a new canonical Suite family.

The `process-to-target` direction token, the `SIM-` identifiers, and the asserting-owner equality check are **experimental fixture conventions**. They cannot establish the real approved issuer-specific profile or the strongest true relationship. That gap remains open until the appropriate institutional process/context representation is selected and approved.

## Run

```bash
node services/reviews/stage1m/subject-profile.test.cjs
```

31 synthetic cases include valid `evaluates` and `results-in`, missing process/context, canonical promotion, unsupported predicates, reversed direction, identity/provenance mismatches and malformed inputs. `PROFILED_ONLY` never means an actual evaluation occurred, an outcome is trustworthy, a real source was checked or a governed action was authorized.

No real objects or production endpoints are accessed. No institutional source is changed. IQ-005 remains QUEUED; full generalized production acceptance NOT established.

> Reference does not transfer authority. Process identity does not create canonical identity.
