# Stage 4D — Release Claims, Link Integrity and Accessibility Evidence

**Date:** November 7, 2026 (Pacific)  
**Status:** EXPERIMENTAL OBSERVATIONAL REVIEW; NOT A NEW SUITE 1.0 RELEASE DECISION.

## Scope and canonical boundary

Four proposed minimum documentation routes `/suite/`, `/suite/status/`, `/suite/interoperability/`, `/suite/governance/`. Canonical `SatoshiumAI/satoshium-us` `phase004` pinned at `da8333ddb85face8ee499abe93ef4bc4f555e867`, strict read-only; experimental observer in `satoshium-net`.

Stage 4C completed eight live browser route observations, HTTP 200 on all, no errors or horizontal overflow at 1280/390 widths. Stage 4D **does not reclassify those as release approval**.

## Source-level claims observations (not canonical corrections)

- Suite landing page identifies eight Operational institutions and uses “Operational Release Complete” milestone wording. B8 approved the governed eight-institution, seven-object historical production evidence baseline but did **not** authorize a new publicly released integrated Suite 1.0 product. Institutional “operational” status and a newly authorized public product release are different.
- Suite Status records each institution separately, which supports the institutional sovereignty boundary. It also describes operational proof and production milestones; these should remain **bounded to the actual independently issued records**, not universal automation.
- Suite Interoperability uses **“Production-Proven Interoperability”** and discusses its first governed object lineage. Its approved semantic review and historical examples do **not** prove production acceptance of IQ-001–IQ-011; the current production gate remains 0/11. Any release claims summary should state that limitation explicitly. This is a recommended **context/disclosure review**, not a finding that the wording is false or permission to rewrite it.
- Suite Governance carries governing sources, explicit decision references and its own simple local navigation. Stage 4C observed no dynamic shared topbar here, and the canonical source contains a three-link local `nav`; do **not** classify absence of shared topbar alone as a technical defect.

## Stage 4D independent observation

The new workflow runs Playwright 1.56.1 desktop-agnostic **mobile-width 390** with up to eight actual keyboard Tab advances per page. It records headings, anchor labels, local document links, focus-visible/viewport position, page errors and claim phrase presence, then makes read-only HTTP GET requests to unique **same-origin** links discovered in the four pages. Off-domain links and third-party forms are not visited; no clicks, form posts, credentials, service mutation or user data.

A `STAGE4D_ROUTE` or `STAGE4D_LINK` logged observation is a **fact about that bounded run**. A failed GET could be endpoint/network/environment-dependent and must not automatically trigger a canonical change. The workflow stores complete `stage4d-evidence.json` as an artifact. GitHub workflow success means observer completion, not every link or keyboard requirement passed.

## Acceptance gaps still open

1. Review live link status/effective URL/redirects and classify actual defects separately from intended legacy aliases.
2. Review full keyboard traversal, focus restoration/visible affordances, screen reader and at least one 400% native zoom check **only where release claims require it**, reusing Review 011 bounded human NVDA evidence without inventing new speech.
3. Compare public-facing claims and exclusions to the B8 scope; decide whether a contextual disclosure is required. No approved canonical wording change yet.
4. Decide whether a **four-route informational product** should be separately issued; choose immutable version/tag/rollback and narrowly scoped runtime acceptance before affirmative release authorization.

**No product release, pilot, D-2A institutional approval, or P0 production acceptance.** Last experimental synthetic CI 783 passing checks, separate from this observer.
