# SATOSHIUM — Suite Production Integration / Suite 1.0
## Stage 2F — Registry Lifecycle Transition and Historical-State Evidence: Offline Assessment

**Date:** November 7, 2026 (Pacific)  
**Disposition at submission:** LOCAL 32/32 synthetic case PASS; 3 additional invariants in Node suite; independent GitHub CI PENDING.  
**Canonical source:** `SatoshiumAI/satoshium-us`, `phase004`, `da8333ddb85face8ee499abe93ef4bc4f555e867` — READ ONLY.

### Direct source evidence

| Canonical file | Blob SHA | Relevant boundary |
|---|---|---|
| `registry/lifecycle/README.md` | `7e7e6b16e2ec09d471001ea60b568ebeff4cdfc8` | Enumerates illustrative Registry lifecycle patterns but expressly says they are not exhaustive authoritative transition rules. |
| `registry/history/README.md` | `ecd769b0817428f63dc7e7d60f034dffe3779673` | Requires attributable, chronological, historically resolvable non-destructive histories and version context. |
| `registry/corrections/README.md` | `0d3fc15471e4ee73cfba42dcc1208fe1f13a7e3b` | Registry corrections cannot rewrite source authority or erase previous SREG versions. |
| `registry/versioning/README.md` | `fe31bdc4b55adde2e22b98cdcec4fb8767ec06ed` | Source Record Version and Registry Entry Version are independent. |
| `registry/policies/record-update-policy.md` | `7f1a3a8abdb4271d3bf0d2352e0c23468dc97be5` | Source change may prompt Registry review; no automatic source edit or Registry publication. |
| `registry/policies/correction-policy.md` | `f01ced2c01289c50409081b022f3285d32321988` | Corrections preserve source and Registry version domains. |
| `registry/policies/record-retirement-policy.md` | `e2920f7e1f7a15e2fbfbb81a94a8fd1617dcadf2` | Supersession, revocation, retirement and archival remain distinct. |
| `registry/procedures/README.md` | `26f0f7580cb964ac0193a8812ba2ae8ed2298500` | Transition procedures need governed approval, validation and history. |
| `registry/registered-items/SREG-2026-0001/record.json` | `9faf4401ec432ae1367aec5207a6eb08da308f99` | Historical events July 5/17 (Certifier), August 2 (Registry); independent source v1.1 and SREG v1.0. |

### Findings

**F-2F-01 — Event authority separation:** the published SREG history attributes certification issuance and source hardening to Certifier, and the SREG registration to Registry. A source update is not itself a Registry transition.

**F-2F-02 — Transition authorization remains unverified:** lifecycle diagrams are illustrative; the owner-approved effective transition rules and machine validator were not established. A claimed approval is not independent evidence of an authorized change.

**F-2F-03 — Version and prior-state continuity:** prior SREG versions and source versions must remain historically resolvable with distinct labels and owner authority. A corrected Registry representation must not silently rewrite Certifier facts or overwrite the old record.

**F-2F-04 — Distinct retirement classes:** supersession, revocation, retirement and archival require their own Registry decisions and audit bases; source withdrawal alone does not command Registry revocation.

**F-2F-05 — Vocabulary discrepancy retained:** the lifecycle README uses illustrative Active/Pending Registration terms while the SREG Base Schema enumerates `published`, `proposed`, and `under_review`. These are not silently equated.

### New experimental harness

The one-commit work unit includes `historical-transition-gate.cjs`, a fictional history fixture, 32 negative/positive scenario vectors, 35-case tests, README, this report, and the existing shared CI workflow update: **7 files total**.

The prototype classifies `CONTEXT_ONLY`, `REJECTED`, `HOLD_UNKNOWN`, `HOLD_GOVERNANCE`, `DECISION_REQUIRED`, and `GOVERNED_VERIFICATION_REQUIRED`. Every result expressly denies transition authorization, Registry write, source alteration, publication and production acceptance.

Prior exact-commit offline CI baseline: **464/464** at Stage 2E. Expected combined CI after submission: **499/499**. This source report does not claim CI pass before independent GitHub readback. Stage 1E evidence remains **11 P0 NOT_VERIFIED**.

### Open gates / recommended next step

Authoritative Registry transition rules and effective versions, actual recipient approval, signed issuer status-at-use and current source state, historical provenance, versioned append-only transition audit, and human/machine parity must still be verified. D-2A-01–06 remain OPEN. No canonical writes, GB2 compute or Suite release authorization.

Recommended **Stage 2G — Versioned Historical Trace and Source-Change Impact Matrix**, initially fictional and noncanonical, after reconciling transition-rule ownership.
