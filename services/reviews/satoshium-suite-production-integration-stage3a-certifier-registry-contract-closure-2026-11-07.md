# SATOSHIUM SUITE — Stage 3A: Certifier/Registry Owner-Scoped Contract Closure Review

**Date:** 2026-11-07 Pacific  
**Disposition:** DOCUMENTARY SOURCE RECONCILIATION COMPLETE; **SIX CONTRACT DECISIONS OPEN**; **NO OWNER CONTRACT APPROVAL RECORDED**.  
**Canonical:** `SatoshiumAI/satoshium-us`, `phase004`, `da8333ddb85face8ee499abe93ef4bc4f555e867`, READ ONLY.  
**Experimental:** `SatoshiumAI/satoshium-net`, `phase004`, documentary-only. No credentials, source edits, live services, GB2 compute, or institutional writes.

## Why this Stage 3A is bounded

Stage 2L recommended owner-scoped documentary contract closure before authenticated testing, without granting approval for new write-capable behavior. The current work checks source-owner facts and machine schema boundaries and records questions for actual governance owners to decide. It **does not** decide those institutional questions on their behalf. **Authority follows the governed subject; reference does not transfer authority.**

## Canonical source pins

| Owner | Canonical file | Blob SHA | Finding |
|---|---|---|---|
| Certifier | `certifier/certifications/SC-CERT-2026-0001/README.md` | `867d555d384d647bf490e22d0df8de6fca5f1ac7` | Canonical source package v1.1 and issuer-controlled certification facts |
| Certifier Toolkit | `certifier/tools/ops-toolkit/README.md` | `d09b2efdb3f8442388dd9aab9b0c2bf72b9f6c75` | Toolkit artifact generation and explicit non-issuer boundary |
| Certifier Toolkit | `certifier/tools/ops-toolkit/schema/certification_package.schema.json` | `5efffd83e7f19a062755eca49735dbc167da3849` | Toolkit JSON schema with enum status values |
| Registry | `registry/registered-items/SREG-2026-0001/record.json` | `9faf4401ec432ae1367aec5207a6eb08da308f99` | Historical machine SREG v1.0 and source version-at-use v1.1 |
| Registry | `registry/registered-items/SREG-2026-0001/README.md` | `8bc661a4ca245a081c0b569d64f34289e9a29a07` | Human/machine representation relationship and owner separation |
| Registry | `registry/schemas/sreg-base-schema.json` | `2405f6cb448cb8432fb5ad0787339cffb49ef854` | SREG base output schema and Registry status/lifecycle codes |
| Registry | `registry/schemas/certification-record-profile.json` | `269a1062898645552681868416c13cd3701e51bc` | Certification SREG output profile and native registers relationship |
| Registry | `registry/governance/README.md` | `bd640f7f03dc656d6ab476076e88ad5ab78947f9` | Institutional decision roles and approved process requirements |
| Registry | `registry/validation/README.md` | `e26ca5dfcf98952573cfb9c71605ebf8998c37c9` | Validation separate from registrability, publication and certification |
| Registry | `registry/controlled-values/controlled-values.json` | `155ce281fc8daf42eaf8031a1895f59b1c81efe6` | Published machine value-set limited to registry_status active |
| Registry | `registry/lifecycle/README.md` | `7e7e6b16e2ec09d471001ea60b568ebeff4cdfc8` | Illustrative lifecycle narrative and nonfinal transition policy |
| Suite | `suite/interoperability/satoshium-interoperability-review-relationship-serialization-2026-10-03.md` | `c979c63ff578b0fcd14a883e4b63dc45cae90c0c` | Governed Suite relationship semantics, not native Registry predicate replacement |

## Confirmed source/Registry historical correspondence

- The **Certifier canonical Certification Package** is `SC-CERT-2026-0001`, version **1.1**, source-owned certification status **Issued · Active**, originally issued **July 5, 2026**. Atlas remains authoritative over underlying jurisdiction intelligence.
- The **Registry-owned historical SREG** is `SREG-2026-0001`, Registry Entry Version **1.0**, `registry_status=active`, `registry_lifecycle_state=published`, with source package identifier `SC-CERT-2026-0001` and source version **1.1**. Its Registry-native `registers` relationship points from SREG to Certifier package. It is not Certifier-owned issuance.
- The **toolkit Draft-07 schema** describes the toolkit's local `certification_package.json` with status enum `PENDING/CERTIFIED/REJECTED/SUSPENDED/WITHDRAWN`. This local artifact schema and example are *not* independent proof of the canonical current package v1.1 wire status or recipient exchange standard. `schema_version` is distinct from canonical package version.
- The Registry **SREG Base Schema** and **Certification Record-Type Profile** are machine output record constraints, not a receiving-registration API. The profile requires explicit source authority and provenance while preserving the native `registers` relation.
- **Registry Validation** remains separate from Registrability, issued SREG action, activation and Publication. Conformance does not authorize publication.
- Registry's machine Controlled Values JSON currently publishes `registry_status=active` only, whereas the SREG Base Schema permits `published` lifecycle and the Lifecycle narrative has some different terms. These are unresolved institutional vocabulary/transition decisions, *not* automatic grounds to invalidate historical SREG-2026-0001.
- **Human and JSON SREG representation parity** is an institutional expectation, but no live issuer currentness, authenticated readback or full parity test was executed here.

## Historical field crosswalk

The companion `stage3a/field-crosswalk-2026-11-07.json` contains **12** source-to-Registry conceptual rows, with owning institution and a distinct evidence status. Key boundaries:

| Concept | Historical/source-confirmed mapping | Open contract issue |
|---|---|---|
| Source identity/version | Full native SC-CERT ID, source package v1.1 in historical SREG | Current issuer representation and independent freshness/readback |
| Source certification | Certifier outcome `Certified`, status `Issued · Active` | Avoid toolkit enum or generic Registry status coercion |
| Registry status/lifecycle | `active` and `published` at Registry entry v1.0 | Owner-approved machine controlled-value and transition semantics |
| Relationship | Registry-native SREG `registers` source SC-CERT | Whether/when a *separate* Suite predicate is adopted |
| Source artifacts and governance | Certifier canonical package plus derived SCPR/SCR/SCRD references; Registry SREG output profile | Receiving request, policy decision, signed current-state and actual issued readback |

## Six unresolved decisions — owner action required

### D-2A-01: Producer serialization
**Proposed responsible owner:** Certifier. **Status:** OPEN.  
**Direct evidence:** Certifier Package v1.1 canonical; toolkit JSON generated-artifact schema exists but is not independently approved exchange contract.  
**Required owner decision:** Adopt a source-owned machine payload/identifier, schema/version, issuer provenance, current state access and archival format.  
**Acceptance evidence:** Exact pinned approved producer interface and origin-authorized sample plus negative/unknown behavior.

### D-2A-02: Receiving Registry intake
**Proposed responsible owner:** Registry. **Status:** OPEN.  
**Direct evidence:** SREG Base Schema and certification profile are output shape; governance defines decision authority separately.  
**Required owner decision:** Approve recipient intake schema/API, operation, role, refusal classifications, request-to-SREG construction boundary.  
**Acceptance evidence:** Approved Registry receiving contract with effective rule and nonproduction operating scope.

### D-2A-03: Status, version, lifecycle
**Proposed responsible owner:** Certifier + Registry. **Status:** OPEN_NARROWED.  
**Direct evidence:** Historical source v1.1, SREG v1.0 and permitted published code; machine controlled-values JSON publishes only registry_status active.  
**Required owner decision:** Approve separate historical/current source version resolution; lifecycle code/label vocabulary, effective transition rules, no status collapse.  
**Acceptance evidence:** Versioned Registry and Certifier decisions and controlled-values/transition crosswalk.

### D-2A-04: Predicate authority
**Proposed responsible owner:** Registry + Suite interoperability governance. **Status:** OPEN.  
**Direct evidence:** Native SREG registers relationship has Registry authority; Suite predicate review is distinct.  
**Required owner decision:** Approve if/how native registers is represented in any separate Suite envelope without synonym substitution.  
**Acceptance evidence:** Directionality, evidence strength, owner, allowed predicate namespaces and inverse-mapping policy.

### D-2A-05: Authentication and audit
**Proposed responsible owner:** Registry. **Status:** OPEN.  
**Direct evidence:** Registry governance permits documented approved controls, not any assumed caller credential.  
**Required owner decision:** Approved principal, receiver authorization checks, trace, refusal, durable idempotency and readback; no automatic write.  
**Acceptance evidence:** Owner-signed governance/policy decision and independent nonproduction enforcement evidence.

### D-2A-06: Representation parity
**Proposed responsible owner:** Certifier + Registry. **Status:** OPEN.  
**Direct evidence:** Canonical human-readable SREG and record.json preserve registry/source status and versions.  
**Required owner decision:** Plan independent read-only parity/currentness/history tests with effective source/object SHA and correction lineage.  
**Acceptance evidence:** Executed source-authoritative/read-only parity report with timestamp, issuer version and Registry owner verification.


No decision in this list is upgraded to APPROVED. The fact that a source file documents existing authority is not evidence of a newly authorized producer/consumer contract.

## Approval sequence and next bounded work

1. **3A-G01: Pin issuer's actual canonical machine form — SOURCE_READY_CONTRACT_UNAPPROVED.** Certifier decides approved exchange representation distinct from toolkit example and SCRD derivative.
2. **3A-G02: Approve Registry typed intake and refusal policy — OPEN_OWNER_DECISION.** Registry identifies accepted request and authority; output profile not equivalent to intake.
3. **3A-G03: Approve lifecycle and predicate semantic bridge — OPEN_OWNER_DECISION.** Owners reconcile documented lifecycle vocabulary and native registers, no coercion.
4. **3A-G04: Approve identity, trace and source-state verification — OPEN_OWNER_DECISION.** Authorized receiver principal and independent result verification method.
5. **3A-G05: Design read-only comparison vectors — SAFE_DOCUMENTARY_NEXT.** Draft source-pinned mapping/refusal vectors in experimental repo; no service calls.
6. **3A-G06: Any actual nonproduction integration — SEPARATE_AUTHORIZATION_REQUIRED.** Requires new named authorization, owner-approved contract, bounded permissions and security review.

Next **safe** documentation stage: **Stage 3B — Source-to-Registry Contract Decision Vectors and Owner Review Checklist**, without new approval claims, authenticated endpoints or a Registry write. Additional synthetic tests would be optional only when anchored to a specified owner contract; test quantity is not the goal.

**Governance gate:** Authenticated nonproduction integration, write-capable testing and canonical changes require separate explicit founder and receiving-institution approval. All original **11 P0 requirements remain NOT_VERIFIED**, previous independent CI **722/722** (Stage 2K exact SHA), and Stage 2L documentary package does not change that baseline.

**Stage 3A completion means the owner decision requests are evidence-ready, not that the six owner decisions have been made.**
