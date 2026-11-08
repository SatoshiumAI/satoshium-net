# SATOSHIUM SUITE — Stage 3K: Read-Only Exchange Decision Options and Governance Gates

**Date:** November 7, 2026 (Pacific)  
**Status:** SOURCE-PINNED DECISION PROPOSAL; ZERO NEW OWNER ADOPTIONS.  
**Canonical repo:** `SatoshiumAI/satoshium-us` `phase004` `da8333ddb85face8ee499abe93ef4bc4f555e867` (strict READ ONLY).  
**Experimental:** `SatoshiumAI/satoshium-net` `phase004` (documentary).

## Assessment and disciplined recommendation

Existing canonical Certifier and Registry records support an *already existing* human-readable source-reference relationship, bounded by each institution's authority. They do not establish a freshly adopted cross-institution machine producer contract, a Registry request endpoint or independent current-state verification. **A historical link is not a machine API.** Therefore propose continuing without automatic intake while authorized owners decide whether a narrow read-only documentary exchange profile adds value.

## Evidence source pins

| Canonical source | Git blob | Authority significance |
|---|---|---|
| `certifier/governance/README.md` | `86299c5a27e94c232458ac3ffb82fc0610966dae` | Canonical Certifier package stewardship and downstream authority separation |
| `certifier/certifications/SC-CERT-2026-0001/README.md` | `867d555d384d647bf490e22d0df8de6fca5f1ac7` | Existing canonical certification and downstream references; historical source facts |
| `registry/governance/README.md` | `bd640f7f03dc656d6ab476076e88ad5ab78947f9` | Registry Founder/steward authority option and evidence/decision record obligations |
| `registry/policies/record-creation-policy.md` | `7f2cb6bc48a13759b351dfd97412dc936410d887` | Registry-created SREG governed by separate creation/registrability |
| `registry/registrability/README.md` | `a826cf416b7456ed5b1a2a11a916ccf63e09908e` | Registrant eligibility distinct from source authority and validation |
| `registry/schemas/certification-record-profile.json` | `269a1062898645552681868416c13cd3701e51bc` | Schema of completed SREG; not machine intake contract |

Stage 3J source authority assessment: `services/reviews/stage3j/governance-decision-authority-2026-11-07.json` blob `299664c41de9187bd66c467071290782f18dbda7`.

## Three explicit choices (not yet selected by the Founder as a governance action)

### K-A: Maintain existing human-governed historical reference only
**Status:** NOT ADOPTED. **Scope:** Keep canonical existing SC-CERT and SREG references with existing authority and source-owned meanings; do not adopt a new machine protocol

**Prerequisites:** No new owner adoption needed for treating historical existing records as historical facts; Any new downstream interpretation or record action still separately governed.

### K-B: Approve documentary read-only source-reference profile
**Status:** NOT ADOPTED. **Scope:** A narrowly defined consumer profile containing full issuer identity, canonical URL, source version-at-use, captured-at time, issuer status as quoted source fact, and provenance evidence. No issuance endpoint, automated live lookup, or currentness claim.

**Prerequisites:** Verified Certifier owner contract adoption; Registry owner acceptance of this read-only consumption profile; Explicit schema and source-version semantics; stale/unknown/unavailable refusal; Versioned governance decision by actual authorized roles.

### K-C: Approve automatic Registry receiving or creation API
**Status:** NOT ADOPTED. **Scope:** Authenticated integration with potentially privileged Registry actions, idempotency, durable audit, decision and publication controls

**Prerequisites:** Close D-2A-01/02/03/05/06 with approved owner evidence; Separate founder and receiving-institution authorization; Independent authenticated nonproduction testing and fault-recovery evidence.


**Recommended near-term posture:** Option **K-A** as continuation of historical existing references; offer K-B for genuine owner approval only after decision authority is established and schema semantics are pinned. **K-C** is not recommended without separate security/institutional authorization, deployed/tested credentials, idempotency, durable audit and issuer/result readback.

## Proposed minimum fields if K-B is actually adopted

| Field | Authority | Rule |
|---|---|---|
| `source_institution` | Certifier | Preserve source authority, not arbitrary caller name |
| `source_system_identifier` | Certifier | Retain complete SC-CERT identifier, never suffix |
| `canonical_source_reference` | Certifier | No toolkit-stub replacement |
| `source_record_type` | Certifier | Certification Package, not SREG or SCRD |
| `source_version_at_use` | Certifier | Historical value; never silently relabel current |
| `observed_at` | reviewer_or_recipient | Capture time is not signed issuance or real-time currency proof |
| `source_status_claim` | Certifier | Issued · Active is source fact at-use; not Registry lifecycle |
| `provenance_reference` | Certifier | Full Git pin and provenance; signed authenticity separately verified |
| `recipient_context` | Registry | No SREG created, updated or published |
| `verification_state` | Registry | No implied authenticated verification from reference |

These are **proposal fields, not an enacted schema or validated public API**. Unknown, missing, stale or conflicting evidence must remain explicitly held or rejected. `source_version_at_use` does not prove `current_source_version`; an observation timestamp is not cryptographic attestation.

## Concrete unresolved gates

**BLOCK-01 (D-2A-01) — Certifier:** Named adopting authority and machine producer format/version not verified. **Evidence to close:** Certifier-controlled decision record and adopted representation.

**BLOCK-02 (D-2A-02) — Registry:** Receiving profile not approved; Registry may expressly decline automated intake. **Evidence to close:** Founder/steward or authorized Registry decision with effective scope and no-write boundary.

**BLOCK-03 (D-2A-03) — Certifier/Registry:** Machine status/lifecycle/transition crosswalk not adopted. **Evidence to close:** Separate namespaces and approved controlled values.

**BLOCK-04 (D-2A-05) — Registry:** Authenticated caller, operational role, atomic audit and readback not verified. **Evidence to close:** Separate permission and tests; not implied by documentary profile.

**BLOCK-05 (D-2A-06) — Certifier/Registry:** Full source/human parity and current issuer state unverified. **Evidence to close:** Owner-reviewed exception and independently verified current/historical readback.

D-2A-04 also remains OPEN for any separate Suite predicate and relationship bridge. Registry native `registers` must not be silently equated with a generic `references` predicate.

## Institutional decision authority

Registry Governance permits the **Founder or designated institutional steward** among available decision authorities, but an actual Registry decision still requires an attributable governance record and clearly scoped effective approval. Certifier Governance preserves canonical package ownership and stewardship; the reviewed text does not name a specific exchange-contract approver. This stage does not assign that role by inference.

**Founder instruction to continue the audit is not an approval of K-B, K-C or a canonical write.** The next action that could materially change readiness is a real, evidenced owner disposition, not more speculative test counts.

## Production and preservation limits

All six D-2A decisions remain OPEN (03/06 narrowed). Eleven P0 integration requirements remain **NOT_VERIFIED**, 0 accepted. Previous offline CI **722/722** at Stage 2K remains the last independent test baseline; no CI tests added by Stage 3K. No authenticated network calls, institutional actions, paid compute, canonical changes or Suite release.

**REFERENCE DOES NOT TRANSFER AUTHORITY.**
