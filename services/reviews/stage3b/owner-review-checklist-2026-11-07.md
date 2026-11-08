# Stage 3B — Owner Contract Review Checklist

**Date:** 2026-11-07 Pacific. **Status:** EVIDENCE REQUESTS PROPOSED / NO OWNER APPROVAL RECORDED.

Canonical sources remain read-only at `SatoshiumAI/satoshium-us` `phase004` commit `da8333ddb85face8ee499abe93ef4bc4f555e867`. Stage 3A source and field evidence pins are recorded in the structured companion register. All statuses here are **proposed owner review controls**, not adopted machine policy.

## D-2A-01: Producer identity, schema and source provenance

**Owner to decide:** Certifier. **Linked Stage 3A fields:** F01, F02, F04, F05, F08, F09. **Disposition:** OPEN.

**Question:** Which issuer-owned machine payload, state namespace, version and provenance become the governed Certifier-to-Registry producer contract?

**Required evidence (not yet supplied):**
- [ ] Issuer-adopted serialization/profile and version identifier
- [ ] Owner-specified canonical current-state and historical retrieval reference
- [ ] Attributable origin, effective schema, source version and exact issuer status/outcome fields
- [ ] Documented unavailable/unknown and bad-version behavior

**Acceptance proof:** Issuer-approved contract with version pin, scope, signed/attributed owner decision and representative source-authored samples

**Candidate refusal/hold vectors (not executed, not normative):**
- C01 missing exact SC-CERT source identifier
- C02 toolkit CERTIFIED inferred as canonical Issued · Active
- C03 schema_version used as package_version
- C04 stale or unavailable issuer source treated as current

## D-2A-02: Registry-owned intake and decision boundary

**Owner to decide:** Registry. **Linked Stage 3A fields:** F03, F10, F11. **Disposition:** OPEN.

**Question:** What receiving method and which Registry principal may consider a source-record registration request?

**Required evidence (not yet supplied):**
- [ ] Registry-approved intake operation/request format versus separate SREG output format
- [ ] Receiving owner, delegated role, effective policy and negative response types
- [ ] Independent registrability, validation, issuance and publication decision sequence
- [ ] Explicit no-entry-created result until Registry-owned issuance

**Acceptance proof:** Registry governance-approved request contract, authority decision and refusal taxonomy; no inferred write permission

**Candidate refusal/hold vectors (not executed, not normative):**
- C05 SREG output profile mistaken for intake endpoint
- C06 Certifier toolkit sreg_stub treated as issued Registry object
- C07 structural conformance treated as registrability or publication
- C08 attempt to issue SREG under source-only permission

## D-2A-03: Machine status, lifecycle and historical-version separation

**Owner to decide:** Certifier + Registry. **Linked Stage 3A fields:** F02, F04, F05, F06, F12. **Disposition:** OPEN — NARROWED.

**Question:** Which machine statuses/versions and governed transitions control Registry records while keeping Certifier state independent?

**Required evidence (not yet supplied):**
- [ ] Separate issuer source version/status and Registry entry version/status/lifecycle namespaces
- [ ] Registry-owned reconciliation of Base Schema values versus partial published controlled-values JSON
- [ ] Governed machine lifecycle value-set/transition vocabulary and effective version
- [ ] Explicit source state-at-use, separately checked current-state, unknown/stale outcomes

**Acceptance proof:** Two owner-attributed approved vocabularies and transition/compatibility decisions with no historical record rewrite

**Candidate refusal/hold vectors (not executed, not normative):**
- C09 status active in Registry inferred from Certifier Issued · Active
- C10 Published lifecycle rejected solely because different lifecycle README omits the term
- C11 prose Active silently mapped to machine published
- C12 historical source v1.1 overwritten with latest unverified version
- C13 lifecycle enum membership treated as transition approval

**Established nuance:** OPEN_NARROWED: published is schema-allowed and used in historical SREG; machine lifecycle value-set/transition contract remains unresolved

## D-2A-04: Native registers versus Suite relationships

**Owner to decide:** Registry + Suite interoperability governance. **Linked Stage 3A fields:** F07, F09. **Disposition:** OPEN.

**Question:** Is a distinct Suite relationship needed alongside native registers, and what approved semantics and owners apply?

**Required evidence (not yet supplied):**
- [ ] Registry-owned native registers direction SREG→source package
- [ ] Separate optional Suite predicate semantics, direction, evidence strength and inverse policy
- [ ] Unsupported mapping rejection; no silent references synonym substitution
- [ ] Multi-relation and provenance semantics when individually supported

**Acceptance proof:** Registry/Suite jointly approved mapping table, distinct predicate vocabulary and authority-preserving serialization

**Candidate refusal/hold vectors (not executed, not normative):**
- C14 registers replaced silently by references
- C15 derived-from or supports inferred without evidence
- C16 inverse relationship assumed from identifier equality
- C17 relationship used as permission to alter Certifier decision

## D-2A-05: Authenticated receiver authority, replay, audit and readback

**Owner to decide:** Registry. **Linked Stage 3A fields:** F10, F11. **Disposition:** OPEN.

**Question:** Who can authorize any receiving action and what verified audit/readback proof is required?

**Required evidence (not yet supplied):**
- [ ] Named authenticated nonproduction caller and Registry receiving decision right
- [ ] Rule-version and documented delegation/approval context
- [ ] Replay-safe attempt identity, refusal and durable audit requirements
- [ ] Independent actual Registry result readback/negative owner authorization evidence

**Acceptance proof:** Approved owner policy plus independent enforcement/negative and durable-readback evidence; no write authorization created by this document

**Candidate refusal/hold vectors (not executed, not normative):**
- C18 network access treated as Registry registration authority
- C19 acknowledgement receipt treated as approval
- C20 duplicate request creates second Registry decision
- C21 claimed audit digest or signature treated as verified trust
- C22 partial write treated as complete

## D-2A-06: Human/machine parity, source currentness and historical corrections

**Owner to decide:** Certifier + Registry. **Linked Stage 3A fields:** F01, F02, F03, F06, F12. **Disposition:** OPEN.

**Question:** Which reproducible read-only evidence establishes historical/current source and Registry representation parity?

**Required evidence (not yet supplied):**
- [ ] Immutable historical source and SREG blob/version and capture context
- [ ] At-use source state distinguished from current issuer observation
- [ ] Registry human-readable representation compared to SREG record.json with field-level exceptions
- [ ] Non-destructive correction/supersession event and provenance policy

**Acceptance proof:** Executed owner-attributed read-only cross-format and historical version comparison, timestamped with explicit unknowns

**Candidate refusal/hold vectors (not executed, not normative):**
- C23 human page and JSON have conflicting status or source version
- C24 missing issuer readback silently classified as current
- C25 source correction overwrites prior SREG history
- C26 downstream acknowledgement treated as issuer-current-state proof


## Independent review record template

For each owner decision, record: `decision_id`, `authoritative_institution`, `approving_role`, `approval_authority_basis`, `source_commit_or_version`, `effective_date`, `approved_machine_contract_id`, `accepted_and_refused_cases`, `exceptions`, `audit_reference`, `independent_reviewer`, and `disposition`. The presence of a populated field does not prove authenticity; evidence must be separately verified.

**Do not mark any decision APPROVED solely because this document or a fictional fixture exists.** Actual authenticated access, Registry intake testing, production release and any write-capable operation require separate explicit founder and receiving-institution authorization.

**Baseline:** 722/722 independently verified earlier offline checks; no new code/tests in Stage 3B. **P0 production:** 0/11 accepted. **Six decisions:** OPEN.
