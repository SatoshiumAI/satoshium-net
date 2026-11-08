# SATOSHIUM — Suite Production Integration / Suite 1.0
## Stage 1D — Source-Derived Semantic Contract and Negative-Test Design

**Date:** November 7, 2026 (Pacific)  
**Authority:** Founder-approved continuation after Stage 1C  
**Disposition:** **TEST DESIGN COMPLETE — NO IMPLEMENTATION CERTIFICATION OR GB2 TEST EXECUTION**  
**Source:** Founder-preserved October 3, 2026 Satoshium Interoperability Review journal, Steps 3–20 and Step 24, plus verified Stage 1A–1C source inventories. This is a **journal-derived secondary evidence specification**, not a newly inspected canonical Suite implementation.
**Exclusion:** Do not visit, inspect, test, or edit `satoshium.us` or `SatoshiumAI/satoshium-us` under this scope.

## 1. Binding review doctrine — source-derived

- Eight formal institutions and their governed canonical objects are unchanged; Aegis remains external/pre-Suite.
- The approved Interoperability Review is COMPLETE — APPROVED with bounded implementation exceptions.
- No relationship/reference, index, workflow, signing/hash exercise, technical API authorization, or transport request transfers institutional authority.
- Production lineage sequence is **not** an automatically executed mandatory pipeline. In particular `SC-CERT → SREG` is direct source-registration; `SREG → CHR` contextual, `CHR → ANCH` chronological not direct provenance, `ANCH → BEAC` contextual, `BEAC → ATT` direct governed input but nonexclusive, `ATT → TRST` direct derivation.
- This document uses local test IDs `D01–D18`, **not** the canonical `IQ-###` queue identifiers, and introduces no new official normative object.

## 2. Recoverable reference and relationship semantics

October 3 Step 4 identifies these minimum **semantic** reference-envelope elements: `identifier`, `source_institution`, `object_type`, `version` where material, `lifecycle_state` where declared, `publication_state` where declared, `provenance`, `relationship_type`, `authority_context`, and `accessibility`.

These are semantic meanings, **not necessarily literal universal JSON property names**, nor mandatory presence of conditional fields in every representation. Serialization compatibility does not require identical schemas.

Step 6 confirms controlled predicates: `references`, `derived-from`, `supports`, `evaluates`, `results-in`, `supersedes`, `corrects`, `related-to`. Relationship direction: SUBJECT → PREDICATE → OBJECT. A receiver should not silently substitute `related-to` for an unknown/unsupported predicate, and independently true relationships must retain distinct assertions.

Step 16 distinguishes five separate version domains: canonical object version, schema version, interface version, interoperability contract version and profile version. **Unknown version does not establish compatibility.**

## 3. Governed input and state semantics

The journal's Step 12 Attestor eligibility dimensions are identity, relevance, provenance, authority context, scope compatibility, relevant state/time, integrity/resolvability/reviewability, and applicable rules. Availability, public status, authority or a reference **alone** does not confer eligibility.

Step 13 preserves five layers: (1) source-object validity, (2) reference validity, (3) schema/contract conformity, (4) eligibility, and (5) institutional evaluation. Validation is not conformance, eligibility, attestation, or a Trust Statement.

Step 14's unknown cases include missing source, broken reference, stale version, unpublished/withdrawn object, unresolved identifier, malformed payload, contradictory metadata, unavailable institution and unknown predicate. Unknown must never be promoted to PASS, VALID, SUPPORTED, TRUSTED or CURRENT; historical last-known state may be preserved if explicitly labeled historical.

Step 15 historical reconstruction records referenced object, source, version-at-use, state-at-use, time, relationship, provenance, receiving context, later change and downstream response. Later corrections are not silent rewrites of previously used canonical facts.

## 4. Navigator handoff contract — source-derived fields

October 3 Step 9 lists: workflow definition; execution context; handoff identifier; sending step; receiving institution; requested action; input references and provenance; authority context; preconditions; expected output; completion criteria; failure model; retry policy; timeout/unavailable handling; unknown-state handling; timestamp; traceability.

**This list describes required handoff context, not a fully validated common serialization syntax.** Navigator owns workflow definition/orchestration but does not acquire a receiving institution's canonical action authority.

## 5. Proposed deterministic offline test vectors

**All inputs below are synthetic test-design concepts, not live requests.** Expected semantic behavior is grounded in the journal's rule; exact API responses, field spellings, error codes, validators and machine schema expectations must be verified against official producer/consumer contracts before running any test.

| Local test ID | Workstream / source step | Synthetic stimulus | Semantic acceptance expectation | What remains to identify |
|---|---|---|---|---|
| D01 | Identifier resolver / Step 3 | Registry and Chronicle IDs share suffix `0001` | Never collapse identities based on common numeric suffix | Actual resolver API and fixture syntax |
| D02 | Reference envelope / Steps 4–5 | Valid identifier but inconsistent declared source institution and object type | Flag conflict; do not infer issuer authority | Exact identity validation rules |
| D03 | Reference envelope / Steps 4–5 | Omit material version from version-sensitive exchange | Do not silently accept unspecified version as current | Materiality policy for this object |
| D04 | Predicates / Step 6 | Unknown relationship type received | Preserve explicit unsupported/unknown status; no automatic `related-to` downgrade | Controlled vocabulary machine profile |
| D05 | Predicates / Step 6 | Reversed `derived-from` or `results-in` pair | Do not silently interpret inverse as original relationship | Subject/object type matrix |
| D06 | State mapping / Steps 7–8 | Source becomes withdrawn after downstream reference was created | Preserve state-at-use and record later change separately; no implicit canonical overwrite | Versioned fixture and receiver response policy |
| D07 | Publication/lifecycle / Step 7 | Lifecycle active, publication unpublished | Do not conflate activation with publication | Institution-specific state codes |
| D08 | Version compatibility / Step 16 | Unknown or unsupported schema/profile version | Do not infer compatibility or success | Version negotiation behavior |
| D09 | Attestor eligibility / Steps 12–13 | Public and resolvable but irrelevant evidence | Availability and reference do not imply eligibility | Normative Attestor eligibility profile |
| D10 | Validation layers / Step 13 | Schema conformant source but ineligible subject context | Keep source/schema conformity separate from downstream eligibility determination | Validator output schema |
| D11 | Unknown-state / Step 14 | External producer temporarily unreachable | Preserve UNKNOWN/unavailable; never report CURRENT or PASS from stale cache | Timeouts and last-known-state declaration |
| D12 | Historical reconstruction / Step 15 | New source version corrects old version after consumer use | Preserve version-at-use and later change as separate dated facts | History/audit event shape |
| D13 | Navigator / Step 9 | Handoff lacks provenance or authority context | Do not silently convert missing context into receiving institution authorization | Handoff schema and rejection policy |
| D14 | Navigator / Steps 9, 14 | Timeout followed by repeated identical request | No invented completion and no unauthorized duplicate canonical writes | Retry/idempotency key contract |
| D15 | Authority/security / Step 17 | Caller technically authenticated but lacks institutional approval | Technical authorization cannot create issuer-specific decision authority | Governance decision and access control interfaces |
| D16 | Registry ownership / Step 10 | Registry references a Certifier object | Registry retains SREG authority; Certifier retains source-object authority | Source/record link contract |
| D17 | Beacon provenance / Step 11 | Beacon signal includes Certifier direct observation plus Registry/Chronicle/Anchor context | Do not treat contextual links as direct provenance | Beacon object source-evidence profile |
| D18 | Attestor derivation / Steps 12, 19 | Trust Statement references Attestation but also contextual prior objects | Only governed Attestation→Trust Statement derivation; prevent automatic trust inheritance | Actual Attestor profile and status code definitions |

**No D01–D18 test is marked PASS, FAIL or implemented.** Their purpose is to make subsequent independent testing falsifiable and avoid inventing production behavior from source summaries.

## 6. Proposed P0 workstream → test design crosswalk (local, noncanonical)

| Recovered workstream | Proposed local cases |
|---|---|
| Cross-Institution Reference Envelope Enforcement | D02, D03 |
| Stable Identifier & Reference Resolver | D01, D02 |
| Lifecycle / Publication State Mapping | D06, D07, D11 |
| Relationship Predicate Serialization | D04, D05, D17, D18 |
| evaluates / results-in Subject Profiles | D05, D18 (subject-profile specification still needed) |
| Controlled Outcome Namespacing | D09, D10, D11 (issuer namespace specification needed) |
| Failure / Unknown-State Machine Handling | D08, D11, D14 |
| Navigator Handoff Contract Implementation | D13, D14 |
| Navigator Retry / Idempotency Controls | D14 |
| Technical Authorization / Institutional Authority Enforcement | D15, D16 |
| Cross-Institution Write Audit Controls | D06, D12, D14, D15 (write-audit event schema still needed) |

The crosswalk **is proposed coverage only**. D cases do not meet the exact production-blocking item requirements without official acceptance terms and verified test targets.

## 7. Evidence capture requirements for executable acceptance

For each eventual official `IQ-###` item, record: exact official ID/title/priority, institutional authority/producer-consumer, normative contract version/SHA, deployed runtime pin or offline validator pin, fictional sanitized fixture with checksum, positive and negative outcomes, network/console details where relevant, evidence file locations, defect/severity, distinct human/automated assertions, and founder disposition.

No GB2 browser testing should proceed until a real authorized safe endpoint or local harness and its fixture are selected. No test requiring canonical writes, real IDs/credentials, or access to `satoshium.us` is authorized.

## 8. Unresolved exact-source recovery and boundaries

- **Official IQ-001–IQ-023 mapping, P1/P2 titles and item-level acceptance text:** not yet independently recovered. The October 3 journal confirms 11 P0 titles and architecture semantics only.
- **PR-OPEN-001 and PR-OPEN-005:** need institution-specific versioned recipient contracts/profiles; this document does not implement them.
- **Historical phases:** Protocol Phase 1, Production Integration Phase 2, and Suite Baseline B1–B8 remain COMPLETE — APPROVED within documented historical scope. This specification does not reopen them.
- **Review 011/013 and pilot:** independent human/admin gates remain in effect; no invitations or releases approved.
- **Status:** Stage 1D test design COMPLETE WITH SOURCE AND EXECUTION LIMITATIONS; **0 newly executed integration tests; 0 P0 implementations newly accepted**.

> **AUTHORITY FOLLOWS THE GOVERNED SUBJECT. REFERENCE DOES NOT TRANSFER AUTHORITY.**
