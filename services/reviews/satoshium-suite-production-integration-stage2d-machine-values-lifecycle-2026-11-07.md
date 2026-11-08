# SATOSHIUM — Suite Production Integration / Suite 1.0
## Stage 2D — Registry Machine Controlled Values and Lifecycle/Source-State Contract Verification

**Date:** November 7, 2026 (Pacific)  
**Disposition:** READ-ONLY MACHINE CONTRACT REVIEW COMPLETE — VOCABULARY GAP AND DOCUMENTARY DISAGREEMENT RECORDED; PRODUCTION INTEGRATION STILL OPEN.  
**Canonical repository:** `SatoshiumAI/satoshium-us` `phase004` at `da8333ddb85face8ee499abe93ef4bc4f555e867` — **READ-ONLY**.  
**Experimental repository:** `SatoshiumAI/satoshium-net` `phase004` — evidence documents only.  
**P0 acceptance:** 11/11 NOT_VERIFIED; no institutional operation, GB2 compute or release authority.

### 1. Direct canonical evidence

| File (canonical, immutable pin above) | Blob SHA | Relevant facts |
|---|---|---|
| `registry/controlled-values/controlled-values.json` | `155ce281fc8daf42eaf8031a1895f59b1c81efe6` | v1.0, authority Satoshium Registry, effective 2026-08-14; only `value_sets.registry_status.values = [{code:active,label:Active,...}]`. **No machine lifecycle value set in this file.** |
| `registry/controlled-values/README.md` | `0b45f6cdef1b4c09437d12398e06e53854497604` | Explicitly says current initial machine scope is Registry Status `Active`; narrative lists initial lifecycle states including **Published**. |
| `registry/schemas/sreg-base-schema.json` | `2405f6cb448cb8432fb5ad0787339cffb49ef854` | Production schema v1.0 effective 2026-08-14. `$defs.registryStatus` and `$defs.registryLifecycleState` define controlled code/label sets. |
| `registry/lifecycle/README.md` | `7e7e6b16e2ec09d471001ea60b568ebeff4cdfc8` | Narrative initial lifecycle: Pending Registration, Registered, Active, Updated, Superseded, Revoked, Archived. Illustrative transitions **not** complete authoritative transition machine. |
| `registry/rules/README.md` | `9ab73c310f83574a664bbafceb71d137b173fc56` | Registry owns SREG status/lifecycle; Certifier owns source-controlled status, identity, version and outcome. |
| `registry/status/status.md` | `ef273aadd422bbfec45462855f8f84f4725c224c` | Registry status, lifecycle and source status remain independent; historical development-stage terminology is explicitly separated from operational institutional status. |
| `registry/registered-items/SREG-2026-0001/record.json` | `9faf4401ec432ae1367aec5207a6eb08da308f99` | Published example: Registry status `active`/`Active`, lifecycle `published`/`Published`, SREG version 1.0, Certifier source version 1.1. |
| `registry/validation/README.md` | `e26ca5dfcf98952573cfb9c71605ebf8998c37c9` | Schema conforming does not by itself constitute Registry registrability, decision or publication authority. |

### 2. Exact machine and documentary comparison

| Vocabulary | Codes or names exposed | Source and governing interpretation |
|---|---|---|
| Machine Controlled Values JSON `registry_status` | `active` / `Active` only | Version 1.0 published machine value set, **partial scope** |
| Base Schema `registryStatus` | `pending`, `active`, `restricted`, `disputed`, `superseded`, `revoked`, `retired`, `archived` | Eight schema-allowed codes, **not identical to machine Controlled Values publication scope** |
| Base Schema `registryLifecycleState` | `proposed`, `under_review`, `registered`, `published`, `updated`, `superseded`, `revoked`, `retired`, `archived` | Nine schema-allowed lifecycle codes |
| Controlled Values README — lifecycle narrative | Proposed, Under Review, Registered, Published, Updated, Superseded, Revoked, Retired, Archived | Narrative aligns substantially with schema label vocabulary; machine lifecycle set remains unpublished in Controlled Values JSON |
| Lifecycle README — initial lifecycle narrative | Pending Registration, Registered, Active, Updated, Superseded, Revoked, Archived | **Different narrative list**; must not silently equate Active with Published or Pending Registration with Proposed/Under Review |
| Published Registry JSON SREG-2026-0001 | `registry_status.code=active` and `registry_lifecycle_state.code=published` | Both are allowed by Base Schema; `active` also appears in machine controlled-values.json |

**Compatibility conclusion:** The published `published` lifecycle code is recognized by the production Base Schema and Controlled Values README. It must **not** be called intrinsically invalid merely because another Registry Lifecycle README uses a different initial list. Conversely, neither an enum match nor a historically published SREG proves every institutional rule, currentness condition or version-migration requirement.

### 3. Classified findings

#### 2D-001: MACHINE_VOCABULARY_COVERAGE
**Classification:** INTEGRATION_BLOCKER  
**Finding:** Machine controlled-values.json v1.0 publishes a single registry_status active value; it does not publish registry_lifecycle_state vocabulary or transition rules.  
**Why it matters:** Do not treat a documented lifecycle list as a published machine controlled-value set.  
**Resolution evidence required:** Registry approval of machine lifecycle value publication and governed versioning; keep existing Base Schema profile unchanged until separately approved.

#### 2D-002: SCHEMA_VOCABULARY_ALIGNMENT
**Classification:** REQUIRES_GOVERNANCE_RECONCILIATION  
**Finding:** Production SREG Base Schema lifecycle codes are proposed, under_review, registered, published, updated, superseded, revoked, retired and archived; Lifecycle README's initial list uses Pending Registration, Registered, Active, Updated, Superseded, Revoked, Archived.  
**Why it matters:** Proposed/under_review/published/retired and the Active/Pending Registration terminology require a formally documented equivalence or distinction; do not auto-map.  
**Resolution evidence required:** Institutional owner records controlled lexical mapping or clarifies separate semantic layer, including transition policy.

#### 2D-003: PUBLISHED_COMPATIBILITY
**Classification:** CONFIRMED  
**Finding:** Published SREG-2026-0001 uses registry_status code active and registry_lifecycle_state code published. Both codes appear in production SREG Base Schema v1.0, and active appears in machine controlled-values.json v1.0.  
**Why it matters:** No unsupported claim that historical published code is inherently invalid; no modification warranted on this basis.  
**Resolution evidence required:** Preserve historical source intact; do not infer complete schema-conformance or lifecycle-history test from this point check.

#### 2D-004: REGISTRY_VS_SOURCE_STATE
**Classification:** REQUIRED_SEPARATION  
**Finding:** SREG stores Certifier source_record_version 1.1 and source-owned outcome/status independently of Registry entry version 1.0, registry status active and registry lifecycle published.  
**Why it matters:** Current source-state and historical state-at-use cannot be derived from Registry lifecycle; toolkit example 1.0.0 does not prove live package version.  
**Resolution evidence required:** Specify source-attested version at use, independent current-state observation, provenance and unavailable/unknown handling before production bridge.

#### 2D-005: TRANSITION_ENFORCEMENT
**Classification:** UNVERIFIED  
**Finding:** Lifecycle README calls its transition sequences illustrative and explicitly delegates authoritative transitions to Registry Policy, Procedure and machine validation. No adopted executable transition rule was established in reviewed machine controlled values or schema enum.  
**Why it matters:** Schema enum membership is insufficient to approve a lifecycle state transition or publication.  
**Resolution evidence required:** Design governed state transition matrix, effective dates, source event and approval provenance, refusal and audit semantics.

#### 2D-006: SCOPE_OF_MACHINE_VALIDATION
**Classification:** UNVERIFIED  
**Finding:** A Base Schema declares separate code/label enumerations, but lexical membership alone is not a full institutional validation, approval, issuance or publication check.  
**Why it matters:** No automatic Registry activation, SREG issuance or source certification may be inferred from schema checks.  
**Resolution evidence required:** Use separate schema, code/label pair, institutional rule, provenance and publication authorization checks; verify both human-readable and JSON representations independently.


### 4. Reconciliation of Stage 2A / 2C contract decisions

- **D-2A-03 remains OPEN — NARROWED, not approved:** direct schema confirmation resolves the narrow question of whether `published` is an enumerated Registry lifecycle code; lifecycle controlled-value publication coverage and the documentary `Active` versus `Published` vocabulary difference are unresolved. Other source status/version and state-at-use/currentness mappings remain open.
- **D-2A-01, 02, 04, 05 and 06 remain OPEN:** no new issuer wire-contract approval, receiving Registry intake/delegation, normalized predicate adoption, durable write audit, or live parity verification is established by this review.
- A lifecycle code is neither a Registry Status nor a Certifier certification outcome. `Active` cannot be transferred across these namespaces by matching English labels.
- Canonical SREG and Certifier files remain unchanged. No automatic migration or historical correction is recommended without a separately authorized, source-grounded finding.

### 5. Proposed nonproduction acceptance gates

1. Registry governance records the authoritative relationship between the Base Schema enumerations, the partial machine Controlled Values resource and the narrative Lifecycle README, including effective versions and any deliberate different lifecycle semantics.
2. Registry provides a versioned, machine-readable lifecycle vocabulary and (separately) governed transition policy/validator, or formally records why a particular schema/version is currently controlling for machine consumption.
3. Tests verify **code/label pairing**, not merely independent membership in two lists; handle unknown/legacy values explicitly without coerced mappings.
4. Future fixture testing checks independent Registry lifecycle/status, Certifier source version, state-at-use/current state, availability, provenance and changes over time.
5. If producer/consumer automation is later authorized, separately validate receiving Registry policy decisions and actual SREG outcome readback. No source status or schema acceptance authorizes SREG publication.
6. Preserve existing 11 P0 production statuses as NOT_VERIFIED until real implementation evidence satisfies each approved acceptance criterion.

### 6. Evidence and disposition

**Stage 2D: COMPLETE — SCOPED CONTRACT VERIFICATION / GAP REGISTERED.** No new executable integration tests or CI workflow edits in this documentary work unit. The prior Stage 2B CI baseline remains **436/436 PASS** at `313c1fafb31fde37baab03a7f42db5a88ba116b6`; a new Pages workflow may run for these documentation changes and must be checked separately.

**Next recommended stage:** **Stage 2E — Controlled-Value Conformance Fixture Design**: build an isolated, source-pinned, read-only schema-vs-vocabulary comparison harness that reports both the confirmed compatibility and the unresolved differences without silently harmonizing them. This is test engineering only; canonical adoption or edits require independent authorization.
