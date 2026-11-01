# SATOSHIUM — GB2 Review 011 Narrow Reflow Acceptance Assignment

**Date:** November 1, 2026 (Pacific)  
**Repository:** `SatoshiumAI/satoshium-net` / `phase004`  
**Baseline fix:** `b0260c5b8b09838090b18f54b2091c5b6542ef89`  
**Accepted bounded disposition:** Five targeted defects passed GB2 post-fix retest, archived in `services/reviews/` at commit `5562c7e524caca310f6ea80b4f954619b6dc6f53`.  
**Status:** TEST REQUEST ONLY — no findings claimed, no release-gate changes.

## Assignment to GB2

Conduct one **additional narrow-layout reflow and keyboard-focus check** on the four existing public Satoshium Services pages. Do not reopen the accepted 472px-width results unless new evidence directly contradicts them. Preserve the prior QA folders.

### URLs
- `https://satoshium.net/services/`
- `https://satoshium.net/services/aegis/aegis-service-panel.html`
- `https://satoshium.net/services/agent-governance/tool.html`
- `https://satoshium.net/services/verification-ledger/tool.html`

## Phase A — Confirm actual testing capabilities

1. Record date, Chrome version, desktop window size, display scale and browser zoom setting.
2. **Preferred real-zoom protocol:** Set the desktop Chrome content/window baseline to roughly **1280 CSS px at 100%**, then set **native Chrome zoom to 400%**, producing a layout viewport near **320 CSS px**. If window resizing is blocked, try a supported window manager or Chrome launch flag in your own test environment, without altering any production code or browser security restrictions.
3. If you cannot achieve a ~320 CSS-pixel layout viewport with **native zoom**, record the limitation. You may separately perform a **320px viewport-only proxy test** using browser automation/devtools, but label it PROXY and keep native 400%-zoom acceptance **NOT TESTED at 320px**.
4. Capture `window.innerWidth`, `document.documentElement.scrollWidth`, and preferably computed header `position` if your tools support JavaScript evaluation. If unsupported, explicitly mark numerical measurements **NOT MEASURED**; don't infer exact dimensions from screenshots.

## Phase B — Reflow and focus checks

At the 320-CSS-pixel target, for each page:

- Check horizontal page scrolling, clipping, overlap, labels/forms, readable page content and navigation.
- Navigate with Tab and Shift+Tab through top navigation, important controls, and footer links. Record whether focus remains visible when the header is in normal flow.
- Specifically retest Aegis **Run Inspection** focus indicator; do not run the public API unless absolutely necessary.
- Record whether the topbar remains normal-flow (`position: static`) at the 320px layout width.
- Capture screenshots and exact keyboard sequences for any defect.
- Check at baseline 100% and 200% as needed for comparison, but do not claim a new full functional regression suite unless performed.
- Distinguish unavoidable scrolling on genuinely two-dimensional interfaces from unexpected page overflow.

## Phase C — Accessibility technology availability

Do not install packages or change the test environment without authorization. If a **real running screen reader** with observable speech output happens to be available, provide separate factual results. Otherwise: **real NVDA/VoiceOver/Orca speech NOT TESTED**. Browser accessibility tree, ARIA snapshots and simulated announcements are not a replacement.

## Reporting

Return one Markdown report suitable for founder approval, including:
- Deployed page/source freshness and tested commit if known.
- Real native-zoom vs viewport-proxy method clearly identified.
- Matrix for four pages with measurements or honest unknowns.
- PASS / FAIL / NEEDS REVIEW / NOT TESTED for layout, focus visibility, and controls.
- Evidence locations, screenshots and any new reproducible issues.
- Comparison with the earlier ~472px native-zoom post-fix PASS without misrepresenting either method.
- Recommendation whether the **narrow native-zoom evidence** is sufficient for founder consideration.
- Remaining human NVDA/VoiceOver acceptance and Review 013 gates explicitly OPEN.

**Safety:** Read-only browser use; fictional data only. Do not write to GitHub, alter deployed code, recruit participants, collect personal information, change workflows, or declare WCAG certification or pilot GO. Return the report for founder/ChatGPT review and later GitHub filing.

**Governing rule:** Authority follows the governed subject. Reference does not transfer authority.