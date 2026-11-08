# SATOSHIUM — Suite Production Integration / Suite 1.0
## Stage 2A — Certifier → Registry Producer/Consumer Contract Discovery and Acceptance Design

**Date:** November 7, 2026 (Pacific)  
**Disposition:** READ-ONLY CANONICAL CONTRACT DISCOVERY COMPLETE; NONPRODUCTION ACCEPTANCE DESIGN DOCUMENTED; IMPLEMENTATION / PRODUCTION ACCEPTANCE OPEN.  
**Canonical pin:** `SatoshiumAI/satoshium-us` `phase004` `da8333ddb85face8ee499abe93ef4bc4f555e867`.  
**Evidence repository:** `SatoshiumAI/satoshium-net` `phase004` (documentation and fictional proposed vectors only).  
**Authority boundaries:** Certifier owns the Certification Package and certification decision; Registry owns the SREG and Registry-owned registration, validation, status, lifecycle and publication. The referenced Atlas subject remains Atlas-owned. Reference never transfers authority. No mandatory institutional pipeline is implied.

### 1. Purpose and source control

This is the Stage 1T-selected narrow integration-design slice, **not** a claim of a newly deployed or adopted producer-to-consumer API. It reviews published machine schemas, issuer-owned source metadata, an existing SREG relationship and the approved October 2026 Suite interoperability rules. Access was read-only; no runtime calls or canonical writes occurred.

| Evidence | Canonical GitHub file | Blob SHA | Governing use and limit |
|---|---|---|---|
| Certifier canonical source summary | `certifier/certifications/SC-CERT-2026-0001/README.md` | `867d555d384d647bf490e22d0df8de6fca5f1ac7` | Describes Certification Package SC-CERT-2026-0001 v1.1, original certification date 2026-07-05, source-owned authority. Narrative, not an approved live API. |
| Certifier operations schema | `certifier/tools/ops-toolkit/schema/certification_package.schema.json` | `5efffd83e7f19a062755eca49735dbc167da3849` | Draft-07 JSON schema, required `certification_id`, `schema_version`, `issued_date`, `status`, `certifier`, `subject`, `standard`, `methodology`, `scope`, `outcome`, `evidence_references`, `metadata`. It is a toolkit artifact format; not independently certified as a universal producer wire contract. |
| Certifier toolkit boundary | `certifier/tools/ops-toolkit/README.md` | `d09b2efdb3f8442388dd9aab9b0c2bf72b9f6c75` | Tool generates/validates local artifact formats but **does not independently certify** or authorize downstream SREG creation. Legacy stubs are not issued downstream objects. |
| Certifier toolkit example | `certifier/tools/ops-toolkit/examples/SC-CERT-2026-0000/certification_package.json` | `b6a20e0fe8d5658c212913b805fb307919e51740` | Sample contains `certification_id: SC-CERT-2026-0001`, `schema_version: 1.0.0` and `status: CERTIFIED`. Its sample directory name and values do **not** prove live version/state of SC-CERT-2026-0001. |
| Legacy Certifier model | `certifier/docs/interoperability.md` | `8f16448f35d9f908f71dcc918c5694a61c81058e` | Explicitly **HISTORICAL DOCUMENT — NON-CONTROLLING**. Its linear flow or older identifier suggestions are not current mandatory architecture. |
| Registry common schema | `registry/schemas/sreg-base-schema.json` | `2405f6cb448cb8432fb5ad0787339cffb49ef854` | Production SREG Base Schema v1.0; requires Registry identifier, record classification, Registry status/lifecycle, registration, public references and source authority. |
| Registry certification profile | `registry/schemas/certification-record-profile.json` | `269a1062898645552681868416c13cd3701e51bc` | Production Certification Record-Type Profile v1.0; `allOf` Base Schema + profile, source-certification and artifact fields, required Registry `registers` relationship. |
| Existing Registry record | `registry/registered-items/SREG-2026-0001/record.json` | `9faf4401ec432ae1367aec5207a6eb08da308f99` | Concrete historical source/Registry distinction and cross-reference; **not** proof of present automated exchange endpoint or a template to copy into another canonical object. |
| Registry item interpretation | `registry/registered-items/SREG-2026-0001/README.md` | `8bc661a4ca245a081c0b569d64f34289e9a29a07` | SREG machine JSON vs human representation, registration authority, version and source-state separation. |
| Registry schema guidance | `registry/schemas/README.md` | `187478c393928a3b505de1847905c6e67039a62a` | Schema and profile validate structure; schema conformity does not issue a Registry decision or publish an SREG. |
| Suite relation semantics | `suite/interoperability/satoshium-interoperability-review-relationship-serialization-2026-10-03.md` | `c979c63ff578b0fcd14a883e4b63dc45cae90c0c` | Governed Suite-wide relationship semantics; does not automatically replace Registry-native `registers`. |
| IQ-001–011 implementation queue | `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md` | `b8d0688a5a33d2feb3902e0a20b9b089a537eddf` | Original P0 acceptance gates remain open. |

### 2. Existing relationship — what is and is not established

The currently published `SREG-2026-0001` gives a concrete, **historical** demonstration of a Registry-owned SREG representing the Certifier-owned canonical `SC-CERT-2026-0001` Certification Package. It preserves:
- Registry identity `SREG-2026-0001`, Registry Entry version `1.0`, Registry Status `active` and Registry Lifecycle code `published`;
- source institution `Satoshium Certifier`, full native source identifier `SC-CERT-2026-0001`, canonical source package version `1.1` and source URL;
- source certification facts and governing decision authority as source-owned data, distinct from Registry status/validation;
- native `registry_relationships[].relationship_type = registers` with the Registry SREG as source and Certifier package as target;
- Registry's own validation and publication fields and source-artifact references.

**Limit:** A published record documenting an institutional relationship is not a tested autonomous registration service. This review did not identify and validate a governed write endpoint, caller/approval mechanism, immutable registration trace, concurrent idempotency control or an end-to-end authenticated Certifier→Registry transport. Absence of evidence in this scoped file review is **not** a finding that no such capability exists anywhere.

### 3. Candidate exchange profile — proposed, NOT adopted

| Candidate normalized semantic | Source of truth and intended representation | Binding status |
|---|---|---|
| Source native identity | Certifier `certification_id` / `SC-CERT-2026-0001`; Registry `source_authority.source_system_identifier` | Source identity and target Registry reference are documented; automated mapping remains **proposed**. |
| Source owner, object type | Certifier / `Certification Package` | Source authority boundary established; cross-boundary authentication unverified. |
| Source version at use | Current Certifier-owned package-version assertion and Registry `source_record_version` | Published SREG records `1.1`; specific machine version field/API linking the live canonical package to a toolkit `schema_version` remains **UNRESOLVED**. No equation of schema version, package version and SREG version. |
| Source certification status/outcome | Certifier-owned certification status/decision; Registry `source_certification.*` is a source fact reference | The toolkit's uppercase `CERTIFIED` and the historical SREG's `Certified` / `Issued · Active` are from **different representations**; no automatic vocabulary equivalence or currentness inference. |
| Registry entry identity | SREG `registry_identifier` | Assigned by Registry alone; must not be generated by the source adapter as a canonical result. |
| Registry lifecycle/publication | SREG `registry_status`, `registry_lifecycle_state`, `registry_publication` | Registry-controlled only; never copied from Certifier status. The example's lifecycle code `published` should be checked against current controlled-value guidance **without silently editing historical source**. |
| Native registration relationship | `registry_relationships: registers`; SREG → SC-CERT | Production Certification Profile expressly requires it; needs separate decision on any additional Suite-level serialization, never silent coercion to `references`. |
| Provenance and trace | Original Certifier source, original IDs, source/receiving owner, reference basis and state/version at use | Required by governed interoperability; actual authenticated retrieval, trust chain, correlation/trace storage and signature checking remain open. |
| Technical vs institutional authorization | Independent caller identity, received action, Registry policy decision and resulting SREG object | No source record or tool kit auto-confers Registry authority. Approval and writing remain governed solely by Registry. |

### 4. Unresolved contract decisions — required before live automation

**D-2A-01 — Authoritative producer wire contract.** Choose which Certifier representation/version is approved for automated reference: current canonical Certification Package source, machine representation, and issuer-owned version fields. Toolkit schema is a starting point but not independent proof of a current publicly exposed canonical machine endpoint.

**D-2A-02 — Registry receiving contract.** Identify an existing approved intake interface or define a proposed one under Registry governance. The SREG Base Schema and Certification Record-Type Profile are **output-record schemas**; they are not proof that writing an input payload creates a Registry registration. Freeze admissible fields, origin, source-version behavior and error schema.

**D-2A-03 — Version/status mappings and currentness.** Explicitly differentiate package version, toolkit schema version, Registry Entry version, profile version and source-state-at-use. Determine trusted source for current certification status/lifecycle and whether any source→Registry status mapping is ever allowed. Do not silently reconcile the historical `published` lifecycle code or example-vs-live status lexemes.

**D-2A-04 — Relationship predicate bridge.** Preserve Registry-native `registers`; decide if and when a separate Suite normalized `references` or other predicate assertion is appropriate, under which evidence. Never rewrite Registry's canonical meaning or assume the two predicates are synonyms.

**D-2A-05 — Authority, audit and negative cases.** Establish a receiving Registry rule/approval system, caller identity verification, immutable event correlation, source-provenance proof, duplicate detection, rejection semantics, and source ownership readback before acceptance of any actual write.

**D-2A-06 — Public/historical consistency.** Define non-mutating readback tests of published human and JSON SREG representations and issuer source state. Historical records must stay traceable even when later source versions supersede or withdraw.

### 5. Proposed next-step acceptance vectors

The companion `stage2a/acceptance-vectors.json` is **design-only**; its cases are not executed integration tests. It proposes:
- full source/native Registry ID preservation and noncollapsing version domains;
- missing source ID / missing Registry authority / unverified reference → explicit hold/reject;
- stale, superseded, withdrawn, inaccessible and unknown source status → no fabricated current/Registry state;
- noncanonical or unsupported relationship → explicit decision required, never automatic rewrite;
- technically authenticated but unauthorized caller → reject proposed SREG write;
- ambiguous source-vs-sample status and source-version changes → preserve evidence and seek explicit authority;
- successful governed Registry action → SREG identified and separately attributable, with actual authoritative readback before status promotion.

No successful outcome is pre-filled. The requested interface, governance and test data must be approved separately before any executable integration attempt.

### 6. Recommended work package and acceptance gate

**Stage 2B — Single-Pair Contract Decision and Nonproduction Test Harness (proposed):**
1. Confirm D-2A-01 through D-2A-06 from canonical issuer/receiver authorities; leave each unresolved finding explicit.
2. Build a **fictional, read-only fixture contract bridge** that consumes the verified current source-shaped fields, produces **noncanonical candidate context only**, and applies no Registry publication or certification determination.
3. Execute isolated acceptance vectors in CI: positive context, negative missing/unknown/provenance/version/relationship cases, and rejection of unauthorized attempts.
4. Produce evidence linking exact source schema SHA, consumer profile SHA, test SHA, and observed outputs. Do not mark any P0 production gate verified from this harness.
5. Separately request authorization before any write-capable canonical test, real recipient integration, institutional rule change or deployment.

### 7. Stage 2A disposition

**SOURCE DISCOVERY: COMPLETE (BOUNDED READ-ONLY).**  
**CONTRACT DESIGN: DOCUMENTED / NOT ADOPTED.**  
**REAL INTEGRATION: NOT TESTED.**  
**IQ-001–011 PRODUCTION: 11/11 NOT_VERIFIED.**  
**SUITE 1.0 INTEGRATED RELEASE: NOT AUTHORIZED.**

This stage adds documentary evidence only, with no changes to the existing 403-check experimental CI baseline. Existing historical institutional production evidence remains valid within its own documented scope.
