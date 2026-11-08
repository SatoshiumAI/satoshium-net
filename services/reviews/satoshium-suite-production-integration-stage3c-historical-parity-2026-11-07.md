# SATOSHIUM SUITE — Stage 3C: Read-Only Source Representation and Historical Parity Verification

**Date:** 2026-11-07 Pacific  
**Disposition:** SELECTED SOURCE PARITY EVIDENCE COMPLETE; FULL PARITY / CURRENT STATE UNVERIFIED  
**Canonical:** `SatoshiumAI/satoshium-us` `phase004` pinned at `da8333ddb85face8ee499abe93ef4bc4f555e867`, READ ONLY.  
**Experimental:** `SatoshiumAI/satoshium-net` `phase004`, documentary evidence only.

## Evidence method and scope

Read all eight source files shown below at exact Git blob SHA, parsed the Certifier **derived SCRD JSON** and Registry **canonical SREG record.json**, and compared ten cross-machine historical fields, two Registry-native machine assertions, and ten selected source-HTML textual checkpoints (after stripping script/style markup). **22/22 bounded checks matched at the pinned commit.** This is NOT a full DOM/HTML field-parity, full-schema, real-time publication/readback or source-producer contract test.

The Certifier Certification Package `SC-CERT-2026-0001` remains the authoritative operational record. SCRD JSON is **derivative**. Registry `SREG-2026-0001` is a separate Registry-owned entry; its `record.json` is the canonical machine Registry object. An identical historical source fact does not transfer certification authority.

## Source SHA inventory

| Representation | Canonical source path | Git blob |
|---|---|---|
| package_html | `certifier/certifications/SC-CERT-2026-0001/index.html` | `0e54deb0c42de3396a4c13c9058da5739a2b0ce4` |
| package_readme | `certifier/certifications/SC-CERT-2026-0001/README.md` | `867d555d384d647bf490e22d0df8de6fca5f1ac7` |
| scrd_html | `certifier/certifications/SC-CERT-2026-0001/records/certified-record/index.html` | `268902a45b064d0405851778a113048f6b55adde` |
| scrd_json | `certifier/certifications/SC-CERT-2026-0001/records/certified-record/scrd_json.json` | `f1aedbc2899aaa94a59dcbef7d9438869adb62bc` |
| registry_html | `registry/registered-items/SREG-2026-0001/registry-entry.html` | `0415ec937b5449b8d305e6f20eff20163dc29f3f` |
| registry_json | `registry/registered-items/SREG-2026-0001/record.json` | `9faf4401ec432ae1367aec5207a6eb08da308f99` |
| registry_overview | `registry/registered-items/SREG-2026-0001/index.html` | `cbfa5b617ec710dfeeba8a46bc18ba3e7952b224` |
| registry_readme | `registry/registered-items/SREG-2026-0001/README.md` | `8bc661a4ca245a081c0b569d64f34289e9a29a07` |

## Exact selected-field comparison matrix

| ID | Scope | Comparison | At-pin result |
|---|---|---|---|
| 3C-01 | cross_machine | Canonical source identifier | MATCH_AT_PIN |
| 3C-02 | cross_machine | Historical source v1.1 | MATCH_AT_PIN |
| 3C-03 | cross_machine | Certification outcome | MATCH_AT_PIN |
| 3C-04 | cross_machine | Certification status | MATCH_AT_PIN |
| 3C-05 | cross_machine | Certification class | MATCH_AT_PIN |
| 3C-06 | cross_machine | Confidence posture | MATCH_AT_PIN |
| 3C-07 | cross_machine | Decision authority | MATCH_AT_PIN |
| 3C-08 | cross_machine | Subject identity | MATCH_AT_PIN |
| 3C-09 | cross_machine | Subject system | MATCH_AT_PIN |
| 3C-10 | cross_machine | Historical date lexical equivalence | MATCH_AT_PIN |
| 3C-11 | registry_machine | Native relationship and direction | MATCH_AT_PIN |
| 3C-12 | registry_machine | Independent Registry status and lifecycle | MATCH_AT_PIN |
| 3C-13 | certifier_human | Canonical Certifier HTML source identity/version/status | MATCH_AT_PIN |
| 3C-14 | certifier_human | SCRD HTML source identity/version | MATCH_AT_PIN |
| 3C-15 | certifier_human | SCRD HTML source outcome/status/class/confidence | MATCH_AT_PIN |
| 3C-16 | registry_human | Registry entry HTML native identifier/version | MATCH_AT_PIN |
| 3C-17 | registry_human | Registry entry HTML status and lifecycle separately labeled | MATCH_AT_PIN |
| 3C-18 | registry_human | Registry entry HTML source version and identity | MATCH_AT_PIN |
| 3C-19 | registry_human | Registry entry HTML Certifier status and class | MATCH_AT_PIN |
| 3C-20 | registry_human | Registry entry HTML registers relation | MATCH_AT_PIN |
| 3C-21 | registry_human | Registry overview explicitly references Registry field names and values | MATCH_AT_PIN |
| 3C-22 | registry_human | Registry overview source ID/version/status | MATCH_AT_PIN |

**Historical source correspondence:** Certifier Package version **1.1**, source ID `SC-CERT-2026-0001`, source outcome **Certified**, source status **Issued · Active**, class **Operational**, confidence **Supported**, and decision authority **Satoshium Certifier**, plus subject **Atlas Jurisdiction Record — El Salvador**. These align with Registry's preserved `source_certification` facts. Certification date `July 5, 2026` in SCRD JSON and `2026-07-05` in SREG JSON are equivalent historical calendar dates.

**Independent Registry facts:** `SREG-2026-0001` version **1.0**, status `active`, lifecycle `published`, publication status **Published**, and the Registry-native `registers` relationship from SREG to SC-CERT, owned by Registry. These never become Certifier statuses or an automatic Suite `references` relationship.

## Findings and limitations

1. **Overview headline versus named status fields:** Registry overview uses `Registered · Published` as a high-level descriptor; its explicit field labels show `Registry Status: Active` and `Registry Lifecycle State: Published`. Treat the headline as presentation context, not a machine-status contradiction; do not silently rewrite either record.
2. **DERIVATIVE VERSUS CANONICAL:** Matching SCRD JSON does not independently prove the exact machine-wire representation of Certifier's canonical Certification Package. The Certifier toolkit schema likewise is not an owner-adopted source→Registry intake contract.
3. **Date lexical formats:** Calendar date comparisons require display/ISO normalization. No timezone or issuer-current-state assertion is made.
4. **Bounded comparison:** HTML checks test the presence of explicit identity, field labels and values within the inspected representation. They do *not* bind all text values to the precise DOM field node, verify every field, or rerun an adopted Registry validation engine.
5. **Historical-at-use:** The GitHub commit and blob SHA pins establish historical source snapshots. They do not verify the live website bytes, current Certifier status, approval of corrections or a present-time issuer response.

## Owner decision effect

**D-2A-06: OPEN — NARROWED BY SELECTED HISTORICAL PARITY CHECKS.** Remaining requirement: comprehensive independently approved human/JSON field-level parity, full provenance/history/correction coverage, reproducible live serving and issuer currentness evidence. **Other five D-2A contract decisions remain OPEN**, with D-2A-03 separately narrowed on machine lifecycle vocabulary. No owner adopts a new contract merely because these comparisons pass.

The original **11/11 P0 production acceptance gates remain NOT_VERIFIED**; the prior independent offline test baseline remains **722/722 PASS** from Stage 2K at `3691f4dd78bedc523802a727e549536dadf475d7`. Documentation-only Stage 3C does **not** rerun that CI.

**Next safe review:** Stage 3D — Material Difference and Exception Inventory. Enumerate fields absent from the bounded comparison, and capture source-owner exceptions and corrections without promoting a claim of full parity or undertaking an authenticated integration.

**Governing principle:** AUTHORITY FOLLOWS THE GOVERNED SUBJECT. REFERENCE DOES NOT TRANSFER AUTHORITY.
