# SATOSHIUM — Suite Production Integration / Suite 1.0
## Stage 2E — Source-Pinned Controlled-Value Conformance Fixture: Offline Evidence

**Date:** 2026-11-07 Pacific  
**Submission:** 25/25 synthetic scenario preflight PASS; 3 additional invariants included in test suite; independent GitHub CI PENDING.  
**Canonical read-only pin:** `SatoshiumAI/satoshium-us` `phase004` `da8333ddb85face8ee499abe93ef4bc4f555e867`.

Stage 2D established that `registry/controlled-values/controlled-values.json` v1.0 publishes one machine value `registry_status=active`, while SREG Base Schema v1.0 enumerates eight status codes and nine lifecycle codes. The published historical SREG uses `active` and `published`. This work unit adds a **noncanonical** fixture-only conformance comparison, and does not resolve lifecycle authority or schema adoption.

### Submitted files — seven, one atomic commit

1. `services/reviews/stage2e/pinned-machine-snapshot.json` — deliberately reduced factual excerpts and exact source blob pins.
2. `services/reviews/stage2e/value-inspector.cjs` — pure side-effect-free schema/list comparison.
3. `services/reviews/stage2e/value-inspector.test.cjs` — 28 offline checks including negative cases and immutability assertions.
4. `services/reviews/stage2e/test-vectors.json` — 25 named scenarios.
5. `services/reviews/stage2e/README.md` — contract boundaries.
6. `services/reviews/satoshium-suite-production-integration-stage2e-controlled-values-2026-11-07.md` — this evidence report.
7. `.github/workflows/suite-iq001-offline-evidence.yml` — shared combined regression.

Code/label pair checks are an **extra experimental validation policy**; the canonical Base Schema lists `code` and `label` independently, and this test is not a full external-schema validator. The permitted schema-only `published` lifecycle code is not machine-published in the current Controlled Values JSON. Unknown states and cross-institution status promotion are rejected; any lifecycle transition or publication request is held for governance.

Prior independently verified baseline: **436/436 checks** at Stage 2B. New target **464/464** in GitHub Actions. Stage 1E register must remain 11 NOT_VERIFIED. No claim of successful CI is made until exact-commit readback.

Outstanding: governed Registry lifecycle controlled-value publication, authoritative transition matrix, issuer/source version and state mapping, approved receiving intake, durable audit, historical/current readback. D-2A-01–06 remain OPEN. No canonical writes, institutional determinations, or release authority.
