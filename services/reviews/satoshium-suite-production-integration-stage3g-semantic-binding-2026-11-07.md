# SATOSHIUM SUITE — Stage 3G: Targeted Semantic Binding and Owner Review Exceptions

**Date:** 2026-11-07 Pacific  
**Disposition:** READ-ONLY SECTION CONTEXT INVENTORY COMPLETE — OWNER REVIEW PENDING.  
**Canonical:** `SatoshiumAI/satoshium-us` `phase004` `da8333ddb85face8ee499abe93ef4bc4f555e867` READ ONLY.  
**Experimental:** `SatoshiumAI/satoshium-net` `phase004`.

## Baseline and method

Stage 3F compared 292 machine leaf fields: 46 exact labeled values, five date-formatted labeled values, one labeled wording variation, 93 unscoped page-text/URL observations and 147 fields without direct HTML field evidence. This Stage 3G performs an additional **read-only, source-pinned HTML section localization** of only the **240 weak/unpaired** fields, by parsing each human page into `h2` sections. Any section in which a literal value appears is reported, but section presence does **not** prove a specific machine field is correctly represented or owner-approved.

### Source pins

| Role | Canonical path | Git SHA |
|---|---|---|
| e | `services/reviews/stage3f/field-comparison-evidence-2026-11-07.json` | `28783ba9751dffb669f7dafbd384d3d7bbed2058` |
| c | `certifier/certifications/SC-CERT-2026-0001/records/certified-record/scrd_json.json` | `f1aedbc2899aaa94a59dcbef7d9438869adb62bc` |
| r | `registry/registered-items/SREG-2026-0001/record.json` | `9faf4401ec432ae1367aec5207a6eb08da308f99` |
| ch | `certifier/certifications/SC-CERT-2026-0001/records/certified-record/index.html` | `268902a45b064d0405851778a113048f6b55adde` |
| rh | `registry/registered-items/SREG-2026-0001/registry-entry.html` | `0415ec937b5449b8d305e6f20eff20163dc29f3f` |

## Classification and evidence limits

**240/240** prior weak/unpaired fields received section-context classification. No additional authoritative semantic matches are claimed. Each row records its original Stage 3F classification, any matching section headings, and the explicit `authoritative_field_binding:false` boundary.

| Context class | Count | Meaning |
|---|---:|---|
| `MULTIPLE_HTML_SECTIONS_PRESENCE` | 54 | Source-literal context only, not a semantic field match |
| `NO_DIRECT_FIELD_EVIDENCE` | 147 | Source-literal context only, not a semantic field match |
| `SINGLE_HTML_SECTION_PRESENCE` | 39 | Source-literal context only, not a semantic field match |
| **Total** | **240** | **0 new owner-approved matches** |

### One verified wording variation requiring Registry disposition

**Machine JSON:** `source_certification.historical_prototype_assessment.status` = “Preserved as historical assessment data.”

**Registry human HTML**, under the *Assessment Status* row: “Preserved as historical source assessment data.”

This is a **real textual difference**, but *material semantic conflict is not established*. The added word “source” could be a clarification. Proposed Registry decision questions:

1. Is 'source' a permitted explanatory qualifier in this Registry field?
2. Should documented human rendering permit additions to exact machine status text?
3. Does any consuming process rely on machine exact value or public wording?

Record an owner-attributable disposition as `EXPLANATORY_RENDERING_APPROVED`, `MACHINE_HUMAN_TEXT_CONFLICT`, or `UNRESOLVED` **only if Registry adopts these labels**; they are not currently governing enums. This stage does not make the choice or change canonical text.

## Required owner review order

1. **Registry:** decide the Assessment Status wording exception and define whether machine/human display qualifiers are permitted for assessment history.
2. **Registry/Certifier:** inspect fields localized to one HTML section and bind values to named roles/labels, preserving the difference between an issuer SCRD derivative and canonical SREG output.
3. **Registry/Certifier/Atlas:** review fields with multiple section appearances or no section localization, determining intended machine-only metadata, omissions, or material exceptions.
4. **Registry/Suite:** confirm native Registry predicates, historical provenance and owner-preserving version transitions separately from reference presence.
5. **Certifier/Registry:** obtain independently authorized read-only current-state and served-byte evidence before claiming actual live parity.

## Decision impact

**D-2A-06 remains OPEN — NARROWED**, not approved by matching section text. D-2A-03 also OPEN — NARROWED. All six contract decisions OPEN. **11 P0 production requirements NOT_VERIFIED (0 accepted).** Previous independent GitHub CI baseline **722/722 PASS** at Stage 2K `3691f4dd78bedc523802a727e549536dadf475d7`; no new CI tests were added.

**Next safe stage (optional):** Stage 3H — Owner Decision Disposition Package and Specific Approved-Contract Prerequisites. Further automated text searches have diminishing value without owner decisions, since appearance of a value in a section cannot prove institutional field equivalence.

**No canonical write, live authentication, deployment to institutional services, or GB2 compute.**
