# SATOSHIUM SUITE — Stage 3D: Material Representation Differences and Exception Inventory

**Date:** 2026-11-07 Pacific  
**Status:** COMPLETE — READ-ONLY, SOURCE-PINNED EXCEPTION INVENTORY; FULL PARITY AND CURRENTNESS NOT VERIFIED.  
**Canonical:** `SatoshiumAI/satoshium-us` `phase004` `da8333ddb85face8ee499abe93ef4bc4f555e867` strictly READ ONLY.  
**Experimental:** `SatoshiumAI/satoshium-net` `phase004`, documentary-only.

## Scope and source method

This Stage 3D extends Stage 3C's **22/22 matching selected historical assertions** without promoting those limited results into a comprehensive validation. Inspected at exact GitHub canonical blob pins: Certifier's derivative SCRD JSON and human SCRD, its canonical Certification Package HTML/README, Registry's canonical SREG JSON and human Registry Entry, overview HTML and README. Compared top-level and nested source structures, source-owned versus Registry-owned provenance and known presentation variations. Full rendered DOM parity, complete normative schema validation, live site response-byte parity, issuer currentness and authorized intake were **not** tested.

| Source role | Path | Git blob SHA |
|---|---|---|
| scrd | `certifier/certifications/SC-CERT-2026-0001/records/certified-record/scrd_json.json` | `f1aedbc2899aaa94a59dcbef7d9438869adb62bc` |
| sreg | `registry/registered-items/SREG-2026-0001/record.json` | `9faf4401ec432ae1367aec5207a6eb08da308f99` |
| scrdHtml | `certifier/certifications/SC-CERT-2026-0001/records/certified-record/index.html` | `268902a45b064d0405851778a113048f6b55adde` |
| sregHtml | `registry/registered-items/SREG-2026-0001/registry-entry.html` | `0415ec937b5449b8d305e6f20eff20163dc29f3f` |
| sregOverview | `registry/registered-items/SREG-2026-0001/index.html` | `cbfa5b617ec710dfeeba8a46bc18ba3e7952b224` |
| certifierCanonical | `certifier/certifications/SC-CERT-2026-0001/index.html` | `0e54deb0c42de3396a4c13c9058da5739a2b0ce4` |
| certifierReadme | `certifier/certifications/SC-CERT-2026-0001/README.md` | `867d555d384d647bf490e22d0df8de6fca5f1ac7` |
| registryReadme | `registry/registered-items/SREG-2026-0001/README.md` | `8bc661a4ca245a081c0b569d64f34289e9a29a07` |

## Inventory outcome

**16 exception and gap observations** were classified:
- **2** known presentation/lexical distinctions (not confirmed substantive conflicts).
- **6** material sections not yet comprehensively checked.
- **6** institution-specific/independently governed object sections, not cross-institution equality obligations.
- **2** remaining current-state or owner-contract unknowns.
- **0 confirmed substantive conflicts within these limited observations**; this is NOT a finding that the complete representations are conflict-free.

## Exception inventory

| ID | Category | Topic | Disposition | Priority |
|---|---|---|---|---|
| 3D-01 | PRESENTATION_DIFFERENCE | Registry overview headline vs explicit field | NO_CONFIRMED_CONFLICT | P2 |
| 3D-02 | LEXICAL_FORMAT_DIFFERENCE | Certifier date vs Registry source-certification date | SAME_HISTORICAL_CALENDAR_DATE | P2 |
| 3D-03 | OBJECT_SCOPE_DIFFERENCE | Source derivative versus Registry canonical object | DISTINCT_OBJECTS_NOT_PARITY_FAILURE | P0 |
| 3D-04 | OBJECT_SCOPE_DIFFERENCE | Certifier assessment detail and Registry historical assessment | DIFFERENT_REPRESENTATION_DEPTH | P1 |
| 3D-05 | MATERIAL_NOT_FULLY_CHECKED | Certifier evidence sources | NOT_ASSESSED_NOT_AUTOMATIC_MISMATCH | P1 |
| 3D-06 | MATERIAL_NOT_FULLY_CHECKED | Source artifacts and generated derivatives | NOT_ASSESSED | P1 |
| 3D-07 | MATERIAL_NOT_FULLY_CHECKED | Governing Suite framework | NOT_ASSESSED | P1 |
| 3D-08 | REGISTRY_OWNED_NOT_SOURCE_PARITY | Registry validation evidence | VALID_DISTINCT_AUTHORITY | P0 |
| 3D-09 | REGISTRY_OWNED_NOT_SOURCE_PARITY | Registry publication evidence | VALID_DISTINCT_AUTHORITY | P0 |
| 3D-10 | REGISTRY_OWNED_NOT_SOURCE_PARITY | Registry relationship inventory | VALID_DISTINCT_AUTHORITY | P0 |
| 3D-11 | MATERIAL_NOT_FULLY_CHECKED | Registry provenance and history | NOT_ASSESSED | P1 |
| 3D-12 | REGISTRY_OWNED_NOT_SOURCE_PARITY | Registry schema and maintenance | VALID_DISTINCT_AUTHORITY | P1 |
| 3D-13 | MATERIAL_NOT_FULLY_CHECKED | Source identity and authority deeper fields | NOT_ASSESSED | P1 |
| 3D-14 | MATERIAL_NOT_FULLY_CHECKED | Human-readable semantic field pairing | NOT_ASSESSED | P0 |
| 3D-15 | CURRENT_STATE_UNVERIFIED | Real-time currentness and served bytes | UNKNOWN_NO_FRESHNESS_CLAIM | P0 |
| 3D-16 | GOVERNANCE_CONTRACT_OPEN | Producer/receiver contract status | NOT_APPROVED | P0 |

### Detailed evidence and next review

**3D-01 — Registry overview headline vs explicit field.** Overview contains "Registered · Published"; machine registry_status active/Active, lifecycle published/Published. **Disposition:** NO_CONFIRMED_CONFLICT. **Review owner:** Registry. **Next:** Do not parse headline as Registry Status; compare labeled fields with canonical machine values.

**3D-02 — Certifier date vs Registry source-certification date.** SCRD certification_date "July 5, 2026" and SREG source_certification.certification_date "2026-07-05". **Disposition:** SAME_HISTORICAL_CALENDAR_DATE. **Review owner:** Certifier + Registry. **Next:** Date normalization is format-only; do not infer timestamp, timezone or current source validity.

**3D-03 — Source derivative versus Registry canonical object.** SCRD record_type "SCRD" ID "SCRD-SC-CERT-2026-0001" vs SREG record_type "SREG" ID "SREG-2026-0001". **Disposition:** DISTINCT_OBJECTS_NOT_PARITY_FAILURE. **Review owner:** Certifier + Registry. **Next:** Preserve different object identities, versions and authorities; derive explicit allowed source fields only.

**3D-04 — Certifier assessment detail and Registry historical assessment.** SCRD assessment keys assessment_type, total_score, prototype_trust_level, confidence_posture, assessment_categories; SREG historical prototype assessment keys assessment_type, score, prototype_trust_level, status. **Disposition:** DIFFERENT_REPRESENTATION_DEPTH. **Review owner:** Certifier. **Next:** Compare score, historical trust level and labels under owner-approved semantics; do not equate numerical prototype and certification class.

**3D-05 — Certifier evidence sources.** SCRD evidence_sources has 8 items; SREG does not expose an evidence_sources array at top level. Registry source_artifacts are a different concept. **Disposition:** NOT_ASSESSED_NOT_AUTOMATIC_MISMATCH. **Review owner:** Certifier + Registry. **Next:** Confirm source evidence references and scope in canonical package and derivative; do not require Registry to replicate an entire Certifier evidence inventory absent Registry policy.

**3D-06 — Source artifacts and generated derivatives.** SCRD generated_artifacts has 5 keys; SREG source_artifacts has 5 keys. **Disposition:** NOT_ASSESSED. **Review owner:** Certifier + Registry. **Next:** Compare artifact identities, URLs, canonical/derivative designations and version semantics individually; historical stubs cannot issue Registry objects.

**3D-07 — Governing Suite framework.** SCRD governance keys: standards_version, methodology_version, applicable_standards, applicable_methodology_components; SREG governing_framework keys: suite_standards, suite_methodology. **Disposition:** NOT_ASSESSED. **Review owner:** Suite + Certifier + Registry. **Next:** Verify standard/methodology versions and reference scope; no claim of mapping all governance fields.

**3D-08 — Registry validation evidence.** SREG registry_validation contains 9 check entries; SCRD has no Registry validation section. **Disposition:** VALID_DISTINCT_AUTHORITY. **Review owner:** Registry. **Next:** Validate against Registry owner rules separately; a structural pass does not issue or publish SREG.

**3D-09 — Registry publication evidence.** SREG registry_publication status "Published" and 2 published representation references; Certifier SCRD has no Registry publication section. **Disposition:** VALID_DISTINCT_AUTHORITY. **Review owner:** Registry. **Next:** Verify Registry HTML/JSON publication scope and actual served content before claiming current parity.

**3D-10 — Registry relationship inventory.** SREG lists 4 relationships, including native registers; SCRD is not the governing Registry relationship record. **Disposition:** VALID_DISTINCT_AUTHORITY. **Review owner:** Registry + Suite. **Next:** Check each direction, identifier domain, owner and authority; do not silently replace registers with Suite references.

**3D-11 — Registry provenance and history.** SREG provenance contains 6 chain entries and 3 historical events. **Disposition:** NOT_ASSESSED. **Review owner:** Registry + Certifier. **Next:** Field-level source-owner chronology, historical versions, corrections and no destructive edits require separate verification.

**3D-12 — Registry schema and maintenance.** SREG includes schema_profile, maintenance keys correction_policy, versioning_policy, authority_preservation_policy and 7 notices. **Disposition:** VALID_DISTINCT_AUTHORITY. **Review owner:** Registry. **Next:** Check human Registry entry for policy references and complete field parity; not an issuer-owned attribute.

**3D-13 — Source identity and authority deeper fields.** SCRD subject keys: subject_name, subject_system, subject_type, jurisdiction, primary_record; SREG registered_subject keys: subject_name, subject_system, subject_authority, subject_type, jurisdiction, subject_state_date, canonical_subject_url, authority_statement. **Disposition:** NOT_ASSESSED. **Review owner:** Atlas + Certifier + Registry. **Next:** Verify jurisdiction, subject state date, primary URL, subject type, Atlas authority; do not infer equivalence from name alone.

**3D-14 — Human-readable semantic field pairing.** Canonical SREG HTML has detailed sections; Stage 3C checked field/text presence but not complete value-to-specific-DOM-label pairs. Source HTML also not a frozen wire payload. **Disposition:** NOT_ASSESSED. **Review owner:** Registry + Certifier. **Next:** Perform owner-approved DOM-level field pairing or manually reviewed full field-by-field comparison; avoid reporting all fields as matching.

**3D-15 — Real-time currentness and served bytes.** Source pin da8333ddb85face8ee499abe93ef4bc4f555e867 proves repository snapshot, not current live URL response or issuer state at present. **Disposition:** UNKNOWN_NO_FRESHNESS_CLAIM. **Review owner:** Certifier + Registry. **Next:** With separate read-only owner-authorized current-source procedure, compare deployed bytes, response date/currentness and historical at-use object.

**3D-16 — Producer/receiver contract status.** SCRD is derived; SREG output schema/profile not intake. Stage 3B shows six owner decisions OPEN. **Disposition:** NOT_APPROVED. **Review owner:** Certifier + Registry + Suite. **Next:** Resolve D-2A-01–06 under institutional owner approval; no automated exchange until accepted.

## Special attention to record roles

- **Source package vs derivative:** `SC-CERT-2026-0001` is Certifier's canonical Certification Package. `SCRD-SC-CERT-2026-0001` is its derivative Certified Record, not an adopted producer wire package; its detail omissions or additions must be assessed according to the correct object, not treated as automatic Registry defects.
- **Registry-owned fields:** `SREG-2026-0001` is a distinct Registry object with Registry version **1.0**, status **active**, lifecycle **published**, validation/publication, relationships and history. The derived Certifier SCRD should not be expected to replicate Registry-owned decisions or policy state.
- **Overview display:** Registry overview headline `Registered · Published` versus explicit `Registry Status: Active` and `Registry Lifecycle State: Published` is an identified presentation difference, not proven machine contradiction.
- **Historical date:** `July 5, 2026` and `2026-07-05` are lexical date variants of the same historical calendar day.
- **Source v1.1 and SREG v1.0:** separate version domains are intentional. No unverified source latest-version mapping is performed.

## D-2A-06 reassessment

**D-2A-06 OPEN — NARROWED**, with a now explicit exception inventory. Requirements to close: owner-approved exhaustive semantic field parity across correct object pairings, current source-state verification, human/JSON and served-byte equivalence, historical corrections/version provenance and documented exceptions. The other five D-2A decisions remain OPEN; D-2A-03 remains OPEN/NARROWED over lifecycle machine controlled values.

**No new CI tests** were added; the independent offline baseline remains **722/722** at Stage 2K SHA `3691f4dd78bedc523802a727e549536dadf475d7`. All original **11 P0 production gates remain NOT_VERIFIED**, no GB2 compute, no canonical modifications, and no integration authorization.

## Recommended next safe stage

**Stage 3E — Owner-Scoped Exhaustive Field-Parity Review Plan**, to turn the six not-yet-assessed material domains and owner-specific sections into a comprehensive owner-review matrix before seeking any contract decision. Read-only evidence and documentation only. Do not generate more fictional assertions solely to increase test count.

**Governing principle: AUTHORITY FOLLOWS THE GOVERNED SUBJECT. REFERENCE DOES NOT TRANSFER AUTHORITY.**
