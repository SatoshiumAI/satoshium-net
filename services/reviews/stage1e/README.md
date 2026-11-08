# Satoshium Suite — Stage 1E P0 Evidence Gate

**Date:** November 7, 2026 (Pacific)  
**Status:** LOCAL REVIEW TOOL INSTALLED — TESTED IN ISOLATION — NO SUITE RUNTIME CERTIFICATION  
**Authority:** Founder-approved Stage 1 documentation/evidence continuation.  
**Scope:** Nonexcluded `SatoshiumAI/satoshium-net` supporting review tools only; **no access to `satoshium.us` or its exclusive repo**.

## Purpose

Stage 1C recovered the eleven P0 titles from the founder-preserved October 3 Interoperability Review journal (Step 24). Stage 1D proposed eighteen negative and positive scenarios, labeled `D01–D18`, for later test selection. **Neither source is the exact canonical `IQ-001–IQ-023` implementation register.**

Stage 1E adds a deliberately conservative **evidence-document completeness gate**, not a runtime Suite validator, using only Node.js built-ins. Its baseline manifest records:

- 11/11 historically identified P0 **workstream titles**.
- 0/11 officially mapped `IQ-###` identifiers.
- 0/11 item-specific canonical acceptance contracts.
- 0/11 implementation locations or independently tested integrations.
- Every workstream starts at `NOT_VERIFIED`.

## Files

| File | Meaning |
|---|---|
| [p0-evidence-manifest.json](./p0-evidence-manifest.json) | Workstream titles, local IDs, candidate Stage 1D test-vector links, and deliberately unknown official IDs and proof |
| [p0-evidence-gate.cjs](./p0-evidence-gate.cjs) | Fails invalid manifest structure and unsupported evidence-status promotion |
| [p0-evidence-gate.test.cjs](./p0-evidence-gate.test.cjs) | One valid-manifest case and seven deliberately invalid cases |

## Run locally

From this directory (Node.js 20+; no npm packages required):

```bash
node p0-evidence-gate.cjs
node p0-evidence-gate.test.cjs
```

Expected on the baseline manifest:

```text
STAGE1E_EVIDENCE_GATE: PASS
official_ids_mapped: 0
verification_counts: NOT_VERIFIED 11
PASS — 8 synthetic evidence-gate tests (1 positive, 7 negative)
```

**Observed offline on November 7:** Both commands passed on Node.js v22.16.0. The test suite exercised missing rows, duplicate local ID, unsubstantiated `ACCEPTED`, unsubstantiated `TESTED_WITH_LIMITS`, unproven official IQ mapping, unsubstantiated `SOURCE_ONLY`, and incomplete evidence details.

The script checks **record structure and declared evidence metadata**, not whether an external URL is real, whether a SHA matches real bytes, whether a claimed test actually ran, whether an asserted producer controls a canonical object, or whether approval was genuinely granted. A PASS is **review-manifest hygiene only**.

## Rules for future entries

1. Do not assign an `official_iq_id` based on list position or guessed equivalence. Recover the approved item/contract with source/version citation first.
2. Do not move to `SOURCE_ONLY` without a source evidence record. Do not move to `TESTED_WITH_LIMITS` without a test record. `ACCEPTED` requires formal identity mapping, source contract pin, producer/consumer, implementation location, an executable PASS record and recorded founder approval; **the checker cannot validate those claims independently**.
3. Preserve subject-governed institutional authority, distinct lifecycle and publication states, and historical state-at-use. Do not use a local `D##` fixture ID as a canonical Suite relationship/identifier.
4. Before any actual integration execution, obtain the exact machine contract and an explicitly authorized safe test location. GB2 remains on hold for Suite testing.
5. Do not publish confidential source materials, credentials, personal data, or real participant records into this public path.

## Pending production work

- Recover exact official IQ item identifiers, all P1/P2 descriptions and original acceptance terms from a separately authorized source.
- Match each P0 to a real owner, producer, consumer, versioned institutional contract, negative paths and test fixtures.
- Execute actual local or explicitly approved nonproduction integration checks independently; preserve version-pinned evidence.
- Leave the already-approved historical Phase 2 Production Integration Review and B1–B8 Suite 1.0 governed documentary baseline intact.
- **No general Suite 1.0 release is approved by this review.**

> **AUTHORITY FOLLOWS THE GOVERNED SUBJECT. REFERENCE DOES NOT TRANSFER AUTHORITY.**
