# Stage 3M — SHA-Attributed Historical Source Snapshot

**Date:** 2026-11-07. **Status:** NONCANONICAL HISTORICAL COPY / NOT LIVE SOURCE VERIFICATION.

This offline snapshot was extracted read-only from two exact files at `SatoshiumAI/satoshium-us` `phase004` commit `da8333ddb85face8ee499abe93ef4bc4f555e867`. The sources were fetched through GitHub and their reported blob SHAs checked before committing this snapshot:
- Certifier SCRD JSON: `f1aedbc2899aaa94a59dcbef7d9438869adb62bc`
- Registry SREG JSON: `9faf4401ec432ae1367aec5207a6eb08da308f99`

**Important limitation:** The GitHub Actions test reads the checked-in excerpt, **not the original canonical files or current served site**. This is an offline consistency and regression assertion, not a cryptographic verification of source bytes by the runner, a comprehensive parity assessment, a source-currentness check, or an approved institutional contract.

`node services/reviews/stage3m/historical-reference.test.cjs` exercises 30 assertions around canonical IDs, version-at-use, issuer and Registry statuses, native `registers` direction, and the Stage 3L fail-closed reference gate.

Any in-memory “documentary review candidate” is unverified and carries no authentication, acceptance or right to issue a new SREG. D-2A-01/02 and four additional decisions remain OPEN; P0 production 0/11 accepted. This stage does not touch `satoshium-us`.
