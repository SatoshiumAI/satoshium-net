# SATOSHIUM SUITE — Stage 3F: Bounded Full-Field Human/Machine Comparison

**Date:** 2026-11-07 Pacific. **Result:** SOURCE-PINNED BOUNDED COMPARISON COMPLETE; FULL PARITY NOT VERIFIED.  
**Canonical:** `SatoshiumAI/satoshium-us` `phase004` `da8333ddb85face8ee499abe93ef4bc4f555e867` READ ONLY.

## Method

Applied all **292** leaf paths from the exact Stage 3E inventory (SHA `9c1b3272bf82deeacbf2e62c39c63e00512c098b`) to Certifier derivative SCRD JSON and Registry canonical SREG JSON. Examined their corresponding pinned HTML pages. For **52 explicit mappings**, checked the value of an HTML table-cell at the same named label. For other machine fields, recorded only weaker unscoped text/URL evidence or a lack of direct matching field evidence. No browser DOM, full governing schema validation, live-site state, authenticated issuer verification, owner signoff or cross-owner write was performed.

| Source | Blob SHA |
|---|---|
| `services/reviews/stage3e/field-review-inventory-2026-11-07.json` | `9c1b3272bf82deeacbf2e62c39c63e00512c098b` |
| `certifier/certifications/SC-CERT-2026-0001/records/certified-record/scrd_json.json` | `f1aedbc2899aaa94a59dcbef7d9438869adb62bc` |
| `registry/registered-items/SREG-2026-0001/record.json` | `9faf4401ec432ae1367aec5207a6eb08da308f99` |
| `certifier/certifications/SC-CERT-2026-0001/records/certified-record/index.html` | `268902a45b064d0405851778a113048f6b55adde` |
| `registry/registered-items/SREG-2026-0001/registry-entry.html` | `0415ec937b5449b8d305e6f20eff20163dc29f3f` |

## Exact classification

| Category | Count | Evidence limit |
|---|---:|---|
| Labeled exact value | **46** | Same explicit HTML table row label and machine value |
| Labeled format-equivalent | **5** | ISO calendar date vs English display format |
| Labeled review needed | **1** | Same label but different textual value |
| Unscoped text value present | **68** | Appears somewhere on the page, not tied to field |
| Unscoped URL/link present | **25** | Appears in HTML source, not semantically bound |
| No direct matching human field evidence | **147** | No direct pair established; not a proven omission or error |
| **Total** | **292** | **51** strong labeled matches; NOT 292 parity passes |

## Concrete textual discrepancy requiring Registry owner review

`source_certification.historical_prototype_assessment.status` in Registry JSON reads **"Preserved as historical assessment data"**. Registry HTML, under explicit **Assessment Status**, reads **"Preserved as historical source assessment data"**.

This may be an explanatory addition of “source,” but **semantic equivalence is not presumed**. Registry must decide whether it is an acceptable rendering exception, documented elaboration, or material mismatch. **No canonical correction is authorized**.

## Open coverage

The **93** unscoped value/link detections do not prove field-level meaning or placement. The **147** fields with no direct human field binding include machine metadata, nested arrays, relationships, evidence and governing references; some may legitimately have no distinct public display field. Source-specific and Registry-owned objects must not be forced into an incorrect shared schema.

**Certifier SCRD JSON is a derivative of the Certification Package. Registry record.json is a distinct Registry canonical object.** Their completeness obligations and authorities are different. The preceding Stage 3C 22/22 historical checks and Stage 3E 292 inventory continue to have their stated limited meanings.

## Governance disposition

**D-2A-06 OPEN — NARROWED**; D-2A-03 separately OPEN — NARROWED; four other contract decisions OPEN. All **11 P0 production gates NOT_VERIFIED (0 accepted)**. No new installed GitHub CI tests or changes to previous **722/722** Stage 2K offline baseline. No live current-status check, GB2 compute or modification to `satoshium-us`.

**Next Stage 3G (recommended):** targeted owner-review for the one labeled phrase difference and contextual binding review for the 93 unscoped and 147 unpaired fields, rather than treating all as defects.

**AUTHORITY FOLLOWS THE GOVERNED SUBJECT. REFERENCE DOES NOT TRANSFER AUTHORITY.**
