# SATOSHIUM — Stage 2K: Governed Audit Evidence Acceptance Criteria and Failure-Recovery Matrix

**Date:** November 7, 2026 (Pacific). **At submission:** 46/46 synthetic scenario preflight PASS, plus 3 test invariants; GitHub CI PENDING.

**Canonical source read-only:** `SatoshiumAI/satoshium-us` `phase004` `da8333ddb85face8ee499abe93ef4bc4f555e867`.

## Source evidence

| Canonical source | Blob SHA | Grounded requirement |
|---|---|---|
| `anchor/verification/README.md` | `afceff75b3e8ae00b2033a9784855a18b180b16e` | Integrity verification requires representation and method-specific evidence; unavailability is not mismatch |
| `anchor/procedures/integrity-verification-procedure.md` | `8ac60c798d599b701192765b0b2eea336249f500` | Reproduce/validate integrity material, preserve method outcomes, investigate non-match; reverification appends history |
| `registry/history/README.md` | `ecd769b0817428f63dc7e7d60f034dffe3779673` | Attributable, chronological, non-destructive version history |
| `attestor/validation/README.md` | `6b4dae078b4ea4e3de16c9bb739e52f45931b3da` | Validation failure is not proof that the underlying assertion is false |
| `services/reviews/stage2j/audit-retention-design.json` (experimental) | `27c72cbab59a95915cd6fd3964262ec2d1ab49e0` | Prior proposed, not adopted, layered evidence model |

## Test and acceptance design

Six proposed gates in `stage2k/failure-recovery-matrix.json`: identity/provenance; representation integrity; owner governance; atomic audit append; recovery and replay; independent recipient result proof. Each requires *real* independent evidence before actual production acceptance. There is no current claim that these mechanisms are implemented or approved.

The fictional harness tests duplicate delivery, mismatched or missing integrity evidence, conflicting governance results, partial/crashed append, missing readback, damaged history, incompatible rule versions, and source/receiving authority escalation. Every response explicitly reports **accepted:false**, **durable:false**, and **authority_verified:false**. Even fully asserted `claimed-match`, `claimed-valid`, `claimed-complete`, and `claimed-eligible` cannot establish production readiness.

Eight files, single atomic commit: inspector, test, fixture, 46 scenario vectors, README, failure-recovery matrix, this report and shared CI workflow. 49 new checks; prior Stage 2J baseline 673/673; expected combined CI **722/722**. GitHub CI and Pages are verified only after submission, not assumed in this document.

## Limit and disposition

No real failure injection against a storage engine, crypto verifier, credential, signed transaction, receiver policy service, verified result object, persistent audit, or production request. D-2A-01–06 remain OPEN. P0 production **0/11 accepted**, **11 NOT_VERIFIED**. Canonical `satoshium-us` unchanged; no GB2 and no Suite 1.0 release.

**Recommended Stage 2L:** Consolidated Stage 2A–2K Integration Evidence & Production Gate Reassessment, followed by explicit founder decision before expanding into real institution-integrated tests.
