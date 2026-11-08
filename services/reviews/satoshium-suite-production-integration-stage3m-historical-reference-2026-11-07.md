# SATOSHIUM SUITE — Stage 3M: Source-Pinned Historical Reference Evidence

**Date:** November 7, 2026 (Pacific)  
**Scope:** Experimental/noncanonical. Canonical `satoshium-us` `phase004` `da8333ddb85face8ee499abe93ef4bc4f555e867` READ ONLY.

## Evidence advancement

Stage 3L used **fictional** reference data and passed its offline validation. Stage 3M extracts selected *actual historical fields* from the exact pinned Certifier SCRD JSON (blob `f1aedbc2899aaa94a59dcbef7d9438869adb62bc`) and Registry SREG JSON (blob `9faf4401ec432ae1367aec5207a6eb08da308f99`) into a separate experimental snapshot. The source fields are published historical evidence; the new snapshot is an **experimental copy**.

The 31 offline checks assert Certifier package ID and version 1.1, Registry ID and version 1.0, source ownership, historical copied status/outcome/class/confidence, Atlas subject, Certifier v1.1 source reference preserved by Registry, and native SREG→SC-CERT `registers` relationship. They also run the Stage 3L pure read-only gate against the copied historical values, asserting that no authentication/acceptance is implied and conflicting/unknown references fail closed.

**No fresh source file or live URL is retrieved by GitHub Actions.** The CI confirms only the consistency of the checked-in historical excerpt and fail-closed logic. This is stronger grounding than fictional fixture-only tests but not full canonical integrity verification or real-time source state.

## Exact updated files

- `services/reviews/stage3m/historical-source-snapshot.json` — copied source fields and Git blob attribution
- `services/reviews/stage3m/historical-reference.test.cjs` — 31 bounded offline assertions
- `services/reviews/stage3m/README.md` — limits and provenance
- `.github/workflows/suite-iq001-offline-evidence.yml` — Stage 3M path/CI step
- this Stage 3M review.

**Expected total offline checks if the exact-commit CI passes:** 783 (prior 752 + 31). That total is synthetic/experimental evidence, **not** 783 production acceptances.

## Remaining governance gates

All six D-2A decisions OPEN (03 and 06 previously narrowed), all 11 production P0 gates NOT_VERIFIED, no new Certifier or Registry owner decisions, no authenticated API, source-currentness confirmation, canonical writes or service deployment. Read-only reference candidate status is never SREG creation approval.

**The practical decision remains:** obtain formally authorized D-2A-01 and D-2A-02 dispositions before any privileged or live integration.
