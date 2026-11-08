# SATOSHIUM SUITE — Stage 4B: Public Feature-and-Route Acceptance Matrix

**Date:** November 7, 2026 (Pacific)  
**Status:** DOCUMENTARY PROPOSED SCOPE COMPLETE — PUBLIC PRODUCT RELEASE NOT AUTHORIZED.  
**Canonical:** `SatoshiumAI/satoshium-us` `phase004` `da8333ddb85face8ee499abe93ef4bc4f555e867` read-only.  
**Experimental:** `SatoshiumAI/satoshium-net` `phase004`.

## Release scope discipline

The already approved October 24 B1–B8 Suite 1.0 baseline is a **governed architecture and bounded historical-production evidence specification**, not a public service release. This Stage 4B builds an acceptance matrix for a **possible later, narrower live public presentation**. The scope below is recommended **for planning only**. No founder release choice is recorded. Successful prior HTTP and browser checks are valuable historical evidence, not a new current-version acceptance.

**Minimum suggested candidate (4 canonical documentation routes):** `/suite/`, `/suite/status/`, `/suite/interoperability/`, `/suite/governance/` on `satoshium.us`. Their source files were fetched at canonical head; October 24 post-baseline Review #001 observed all four HTTP 200 and self-canonical, and sampled desktop topbar operation on `/suite/` and `/suite/interoperability/`. **No new HTTP or browser request was made in Stage 4B**, so the current deployment and all mobile/keyboard aspects need specific recheck before a new release claim.

**Optional expansions:** five named Attestor legacy/canonical/explicit publication URLs; four experimental Services surfaces in `satoshium-net`. These are **not automatically included** in the minimum product scope. October 24 Attestor HTTP/canonical findings are closed within their tested scope. November 1 Reviews 011/013 provide bounded accessibility and Governance simulation evidence but are not universal product readiness or pilot approval.

## Exact source/policy pins

| Source | SHA |
|---|---|
| `suite/satoshium-suite-1-0-baseline-b8-final-disposition-2026-10-24.md` (SatoshiumAI/satoshium-us) | `e2638535af1aeb2e3a56d14f9bfd673ff1868c19` |
| `suite/satoshium-suite-post-baseline-readiness-review-001-2026-10-24.md` (SatoshiumAI/satoshium-us) | `3a488be2e1bf234e62080aec1d922a4a9331a2c6` |
| `services/reviews/stage4a/readiness-reconciliation-register-2026-11-07.json` (SatoshiumAI/satoshium-net) | `b30db4d8c18b8711f8f45fbf85dc362fb05b9871` |
| `services/reviews/satoshium-review011-consolidated-accessibility-acceptance-2026-11-01.md` (SatoshiumAI/satoshium-net) | `06a0a9be20f0452cade9e10da2faea71c4a452c4` |
| `services/reviews/satoshium-review013-postfix-independent-acceptance-2026-11-01.md` (SatoshiumAI/satoshium-net) | `fe43da7632cb68a4b61ef5a90f412770ad23168d` |

## Route acceptance matrix

| ID | Candidate scope | Route | Prior relevant observation | Stage 4B fresh runtime | Release acceptance |
|---|---|---|---|---|---|
| S-01 | MINIMUM_CANDIDATE | `https://satoshium.us/suite/` | HTTP200_SELF_CANONICAL_AT_OCT24; DYNAMIC_TOPBAR_DESKTOP_BOUNDED | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| S-02 | MINIMUM_CANDIDATE | `https://satoshium.us/suite/status/` | HTTP200_SELF_CANONICAL_AT_OCT24; NOT_IN_SAMPLED_DOM | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| S-03 | MINIMUM_CANDIDATE | `https://satoshium.us/suite/interoperability/` | HTTP200_SELF_CANONICAL_AT_OCT24; DYNAMIC_TOPBAR_DESKTOP_BOUNDED | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| S-04 | MINIMUM_CANDIDATE | `https://satoshium.us/suite/governance/` | HTTP200_SELF_CANONICAL_AT_OCT24; NOT_IN_SAMPLED_DOM | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| A-01 | OPTIONAL_ATTESTOR | `https://satoshium.us/attestor/generation/` | HTTP200_SELF_CANONICAL_AT_OCT24; JS_PARITY_NOT_PROVEN | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| A-02 | OPTIONAL_ATTESTOR | `https://satoshium.us/attestor/attestation-generation/` | HTTP200_CANONICAL_TO_A01_OCT24; LEGACY_BEHAVIOR_NOT_EXHAUSTIVE | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| A-03 | OPTIONAL_ATTESTOR | `https://satoshium.us/attestor/publication/` | HTTP200_SELF_CANONICAL_AT_OCT24; INDEX_PRECEDENCE_NOT_ESTABLISHED | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| A-04 | OPTIONAL_ATTESTOR | `https://satoshium.us/attestor/publication/index.html` | HTTP200_CANONICAL_TO_DIRECTORY_OCT24; HOST_INDEX_PRECEDENCE_NOT_ESTABLISHED | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| A-05 | OPTIONAL_ATTESTOR | `https://satoshium.us/attestor/publication/index.htm` | HTTP200_CANONICAL_TO_DIRECTORY_OCT24; HOST_INDEX_PRECEDENCE_NOT_ESTABLISHED | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| T-01 | OPTIONAL_SERVICES | `https://satoshium.net/services/` | NO_HTTP_REPROBE_IN_REVIEW_SOURCES; REVIEW011_PASS_BOUNDED | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| T-02 | OPTIONAL_SERVICES | `https://satoshium.net/services/aegis/aegis-service-panel.html` | NO_HTTP_REPROBE_IN_REVIEW_SOURCES; REVIEW011_PASS_BOUNDED | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| T-03 | OPTIONAL_SERVICES | `https://satoshium.net/services/agent-governance/tool.html` | NOV1_LIVE_BROWSER_PINNED; REVIEW013_SIX_CASES_PASS_WITH_OBS | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |
| T-04 | OPTIONAL_SERVICES | `https://satoshium.net/services/verification-ledger/tool.html` | NO_HTTP_REPROBE_IN_REVIEW_SOURCES; REVIEW011_PASS_BOUNDED | **NOT TESTED** | **UNSELECTED / NOT ACCEPTED** |

The included JSON additionally carries each source file's exact Git blob SHA, applicable negative/functional expectations, evidence provenance and currentness gaps. A source file existing on GitHub does not prove it currently serves at the proposed URL. For experimental Services, URLs are **suggested targets** and must be resolved and verified before claiming served availability.

## Proposed feature release conditions

**G4B-01 — Founder selects published scope and exact URLs.** Owner: Founder. Choose minimum S-01..S-04 only or add named optional routes; record exact scope and product wording. **Status: OPEN.**

**G4B-02 — Current HTTP and source identity.** Owner: Independent observer. Observe status/effective URL/canonical/OG and served contents; compare applicable current repo SHA or page digest; no deployment inference. **Status: OPEN.**

**G4B-03 — Current browser functional and accessibility.** Owner: Independent observer + human tester where needed. Mobile/keyboard/header fallback; interactive positive/negative cases only for tools included; preserve Review011 bounded NVDA facts. **Status: OPEN.**

**G4B-04 — Public claims and privacy/security boundary.** Owner: Founder + appropriate subject owners. No autonomous cross-institution automation claims, no unsigned reference decision portrayed as real authorization, no participant feedback/pilot without separate governance. **Status: OPEN.**

**G4B-05 — Versioned release and rollback.** Owner: Founder/maintainer. Immutable exact artifact/tag decision, planned rollback of site pointers, clear release notes and no retroactive canonical change. **Status: OPEN.**

**G4B-06 — Feature-evidence and explicit release disposition.** Owner: Founder. Approve evidenced narrow release or NO-GO; no consent/pilot/release permission inferred from Stage 4B. **Status: OPEN.**

## Conditional obligations — not universal blockers

**D-01 Generalized auto Suite exchange IQ001–011:** If claimed, `BLOCKING`; if explicitly excluded, `DEFER`. 0/11 production-accepted; six D-2A contract decisions OPEN.

**D-02 External participant pilot G05/G06/G09/G10/G11:** If claimed, `BLOCKING`; if explicitly excluded, `DEFER`. Consent and steward requirements block external human pilot; no invitations.

**D-03 Certifier SCHR/SATR migrated receiving interface:** If claimed, `BLOCKING`; if explicitly excluded, `DEFER`. No adopted receiving agreement.

**D-04 Specialized Attestor source/evidence machine profiles:** If claimed, `BLOCKING`; if explicitly excluded, `DEFER`. Normative specialized profiles remain unverified.

**D-05 Atlas Media alternate-route aliases:** If claimed, `NEEDS_URL_POLICY`; if explicitly excluded, `DEFER`. Saudi Arabia / Sweden source canonical metadata already corrected; alternate URLs observed 404, alias optional.

**D-06 Official Suite 1.0 product tag, release statement and rollback:** If claimed, `REQUIRED_FOR_PUBLIC_PRODUCT_RELEASE`; if explicitly excluded, `NOT_RELEVANT_TO_EXISTING_APPROVED_DOCUMENTARY_BASELINE`. No product release authorization or tag issued.

These conditions are claim-dependent. For example, **G05/G06/G09 pilot governance must be closed for external participant outreach**, but are not a blanket blocker to a documentation-only site with no recruitment or real feedback collection. Likewise, generalized automated exchange's IQ-001–IQ-011 production controls are required if that capability is advertised, not to preserve the approved historical evidence baseline.

## Proposed independent verification order

1. Founder chooses precise minimum or expanded route/feature list and records product wording.
2. Read-only observer captures current HTTP/effective URL, canonical/OG claims, static HTML/source identity, redirects, headers and missing/fallback outcomes for each selected URL.
3. Browser observer checks selected pages at desktop/mobile sizes, keyboard focus, dynamic topbar fallbacks, console/network and content claims. Add interactive fictional positive and negative paths only for specifically included tools.
4. Human tester confirms any assistive-technology and participation-related duties not covered by already bounded Review 011 evidence; do not fabricate new NVDA speech.
5. Record unresolved exceptions, current serving SHAs, support/privacy boundary, rollback and an explicitly authorized version/tag/release decision.

**Optional Grok Bot 1:** If specifically authorized later, use it only for independent pinned, read-only browser checks on exact selected URLs; avoid credentials, account actions, participant submissions, paid compute, canonical changes or claiming human screen-reader acceptance. No Grok Bot 1 work was run here.

## End state

Stage 4B creates a **13-route planning matrix**, not a 13-route production PASS. Four minimum canonical Suite routes have prior October 24 bounded HTTP checks; nine others are optional candidates with mixed earlier evidence. **No public Suite 1.0 release is authorized; P0 automation 0/11 production-accepted; six D-2A owner decisions remain OPEN.** Existing synthetic CI 783 last passed in Stage 3M; not rerun for this documentary package.

**AUTHORITY FOLLOWS THE GOVERNED SUBJECT. REFERENCE DOES NOT TRANSFER AUTHORITY.**
