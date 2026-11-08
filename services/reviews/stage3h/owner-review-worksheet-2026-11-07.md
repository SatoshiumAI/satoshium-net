# Stage 3H — Governing Owner Review Worksheet

**2026-11-07 · REQUESTED DISPOSITIONS ONLY, NOT AN APPROVAL.**

For each of the six decisions, the designated institutional owner should independently choose an evidenced result: **Approve with verified owner evidence**, **Reject with reasons**, **Return for additional evidence**, or **Defer**. None is preselected. These are worksheet choices, not approved machine lifecycle enums.

## D-2A-01 — Certifier

**Decision question:** Which issuer-owned machine payload, state namespace, version and provenance become the governed Certifier-to-Registry producer contract?

**Current state:** OPEN; owner disposition: **NOT RECORDED**.

**Required evidence (4):**
- [ ] D-2A-01-E1: Issuer-adopted serialization/profile and version identifier
- [ ] D-2A-01-E2: Owner-specified canonical current-state and historical retrieval reference
- [ ] D-2A-01-E3: Attributable origin, effective schema, source version and exact issuer status/outcome fields
- [ ] D-2A-01-E4: Documented unavailable/unknown and bad-version behavior

**Candidate refusal cases (4), not executed:**
- C01: missing exact SC-CERT source identifier
- C02: toolkit CERTIFIED inferred as canonical Issued · Active
- C03: schema_version used as package_version
- C04: stale or unavailable issuer source treated as current

**Decision entry:** Institution: ______; Role/authority basis: ______; Effective governing version: ______; Source SHA/record ID: ______; Exception rationale: ______; Explicit disposition: ______; Independent verifier: ______; Date: ______.

## D-2A-02 — Registry

**Decision question:** What receiving method and which Registry principal may consider a source-record registration request?

**Current state:** OPEN; owner disposition: **NOT RECORDED**.

**Required evidence (4):**
- [ ] D-2A-02-E1: Registry-approved intake operation/request format versus separate SREG output format
- [ ] D-2A-02-E2: Receiving owner, delegated role, effective policy and negative response types
- [ ] D-2A-02-E3: Independent registrability, validation, issuance and publication decision sequence
- [ ] D-2A-02-E4: Explicit no-entry-created result until Registry-owned issuance

**Candidate refusal cases (4), not executed:**
- C05: SREG output profile mistaken for intake endpoint
- C06: Certifier toolkit sreg_stub treated as issued Registry object
- C07: structural conformance treated as registrability or publication
- C08: attempt to issue SREG under source-only permission

**Decision entry:** Institution: ______; Role/authority basis: ______; Effective governing version: ______; Source SHA/record ID: ______; Exception rationale: ______; Explicit disposition: ______; Independent verifier: ______; Date: ______.

## D-2A-03 — Certifier + Registry

**Decision question:** Which machine statuses/versions and governed transitions control Registry records while keeping Certifier state independent?

**Current state:** OPEN_NARROWED; owner disposition: **NOT RECORDED**.

**Required evidence (4):**
- [ ] D-2A-03-E1: Separate issuer source version/status and Registry entry version/status/lifecycle namespaces
- [ ] D-2A-03-E2: Registry-owned reconciliation of Base Schema values versus partial published controlled-values JSON
- [ ] D-2A-03-E3: Governed machine lifecycle value-set/transition vocabulary and effective version
- [ ] D-2A-03-E4: Explicit source state-at-use, separately checked current-state, unknown/stale outcomes

**Candidate refusal cases (5), not executed:**
- C09: status active in Registry inferred from Certifier Issued · Active
- C10: Published lifecycle rejected solely because different lifecycle README omits the term
- C11: prose Active silently mapped to machine published
- C12: historical source v1.1 overwritten with latest unverified version
- C13: lifecycle enum membership treated as transition approval

**Decision entry:** Institution: ______; Role/authority basis: ______; Effective governing version: ______; Source SHA/record ID: ______; Exception rationale: ______; Explicit disposition: ______; Independent verifier: ______; Date: ______.

## D-2A-04 — Registry + Suite interoperability governance

**Decision question:** Is a distinct Suite relationship needed alongside native registers, and what approved semantics and owners apply?

**Current state:** OPEN; owner disposition: **NOT RECORDED**.

**Required evidence (4):**
- [ ] D-2A-04-E1: Registry-owned native registers direction SREG→source package
- [ ] D-2A-04-E2: Separate optional Suite predicate semantics, direction, evidence strength and inverse policy
- [ ] D-2A-04-E3: Unsupported mapping rejection; no silent references synonym substitution
- [ ] D-2A-04-E4: Multi-relation and provenance semantics when individually supported

**Candidate refusal cases (4), not executed:**
- C14: registers replaced silently by references
- C15: derived-from or supports inferred without evidence
- C16: inverse relationship assumed from identifier equality
- C17: relationship used as permission to alter Certifier decision

**Decision entry:** Institution: ______; Role/authority basis: ______; Effective governing version: ______; Source SHA/record ID: ______; Exception rationale: ______; Explicit disposition: ______; Independent verifier: ______; Date: ______.

## D-2A-05 — Registry

**Decision question:** Who can authorize any receiving action and what verified audit/readback proof is required?

**Current state:** OPEN; owner disposition: **NOT RECORDED**.

**Required evidence (4):**
- [ ] D-2A-05-E1: Named authenticated nonproduction caller and Registry receiving decision right
- [ ] D-2A-05-E2: Rule-version and documented delegation/approval context
- [ ] D-2A-05-E3: Replay-safe attempt identity, refusal and durable audit requirements
- [ ] D-2A-05-E4: Independent actual Registry result readback/negative owner authorization evidence

**Candidate refusal cases (5), not executed:**
- C18: network access treated as Registry registration authority
- C19: acknowledgement receipt treated as approval
- C20: duplicate request creates second Registry decision
- C21: claimed audit digest or signature treated as verified trust
- C22: partial write treated as complete

**Decision entry:** Institution: ______; Role/authority basis: ______; Effective governing version: ______; Source SHA/record ID: ______; Exception rationale: ______; Explicit disposition: ______; Independent verifier: ______; Date: ______.

## D-2A-06 — Certifier + Registry

**Decision question:** Which reproducible read-only evidence establishes historical/current source and Registry representation parity?

**Current state:** OPEN_NARROWED; owner disposition: **NOT RECORDED**.

**Required evidence (4):**
- [ ] D-2A-06-E1: Immutable historical source and SREG blob/version and capture context
- [ ] D-2A-06-E2: At-use source state distinguished from current issuer observation
- [ ] D-2A-06-E3: Registry human-readable representation compared to SREG record.json with field-level exceptions
- [ ] D-2A-06-E4: Non-destructive correction/supersession event and provenance policy

**Candidate refusal cases (4), not executed:**
- C23: human page and JSON have conflicting status or source version
- C24: missing issuer readback silently classified as current
- C25: source correction overwrites prior SREG history
- C26: downstream acknowledgement treated as issuer-current-state proof

**Decision entry:** Institution: ______; Role/authority basis: ______; Effective governing version: ______; Source SHA/record ID: ______; Exception rationale: ______; Explicit disposition: ______; Independent verifier: ______; Date: ______.


### D-2A-06 additional Registry exception question

Should Registry's public HTML qualify the historical assessment state by adding the word **source**, while the machine record omits it? If permitted, document the display rule and whether exact equivalence is expected. If not, independently authorize a version-aware correction through Registry's own procedures; this worksheet itself performs no correction.

**No owner decision or signature collected in Stage 3H.** No authenticated calls, changes to canonical `satoshium-us`, GB2 compute or production release. P0 0/11; all six D-2A decisions OPEN.
