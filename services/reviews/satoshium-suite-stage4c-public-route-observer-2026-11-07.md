# Satoshium Suite — Stage 4C Public Route and Browser Observer

**Date:** November 7, 2026 (Pacific)  
**Classification:** READ-ONLY RUNTIME OBSERVATION; NOT RELEASE ACCEPTANCE.

## Target

The four **candidate, not yet founder-selected** minimum Suite 1.0 documentation routes: `/suite/`, `/suite/status/`, `/suite/interoperability/`, `/suite/governance/` on `https://satoshium.us`.

**Canonical source pin:** `da8333ddb85face8ee499abe93ef4bc4f555e867` at `SatoshiumAI/satoshium-us/phase004` (READ ONLY).  
**Experimental observer:** `SatoshiumAI/satoshium-net/phase004`; proposed Stage 4B source `3e34e76f74209831d32400f060a9923c5f79a6d6`.

## Verification method

`.github/workflows/stage4c-suite-route-observer.yml` runs pinned Playwright Chromium 1.56.1 in GitHub-hosted Ubuntu, recording eight requested page/device combinations: desktop 1280×800 and mobile 390×844. It makes public read-only navigations **only**, with no form actions, authorization, private tokens or institution-side writes. Artifact `stage4c-observations.json` and `STAGE4C_ROUTE_OBSERVATION` log lines preserve:
- Requested/effective URL, HTTP status, document title, canonical and OG URL
- Main landmark and H1 availability, shared navigation presence, active `data-nav`, number of links
- Viewport document overflow, focus after one keyboard Tab
- JavaScript page errors, failed network requests, and load failure details

The runner does **not** perform HTML byte-equivalence against the canonical Git blob, full accessibility acceptance, dynamic-header failure injection, link activation, manual NVDA speech, mobile visual review, all CSP/CORS scenarios or comprehensive interactivity. Capturing a `200` is only HTTP evidence. A GitHub Actions `success` result means the observer ran, **not that all acceptance gates passed**. Exact observed results must be inspected after execution.

## Controlled next dispositions

1. Inspect all eight raw observations: distinguish site issue, runner network issue, missing evidence, and correct behavior.
2. Compare to October 24 earlier bounded HTTP and topbar evidence; do not retroactively rescind a historical PASS based on the observer alone.
3. Reconcile the actual served pages and source pin if release acceptance requires byte identity.
4. Record fresh browser/keyboard/mobile/claims questions and, if appropriate, request Grok Bot 1 for a precisely scoped independent no-write retest.
5. Keep public release **NOT AUTHORIZED** until exact feature claims, supported routes, accessibility, security and an immutable release configuration are separately approved.

**Stage 4B acceptance matrix remains UNSELECTED.** Six D-2A decisions OPEN; generalized automation P0 0/11. Historical offline evidence 783 successful synthetic checks at Stage 3M is separate and not rerun. No canonical edit or paid GB2 use.
