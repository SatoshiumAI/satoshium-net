# SATOSHIUM Review 011 — Shared Topbar and Aegis Focus Correction

**Date:** November 1, 2026 (Pacific)  
**Repository:** `SatoshiumAI/satoshium-net` / `phase004`  
**Status:** TARGETED CSS CORRECTION SUBMITTED; POST-DEPLOY GB2 RETEST REQUIRED  
**Basis:** GB2 first-pass report `GB2-review011-013-first-pass-REPORT-2026-11-01.md` and source examination of shared topbar template from `SatoshiumAI/satoshium-link/components/topbar-ai.html`.

## Observed problems

- GB-A11Y-001/001b/001c: GB2 reported keyboard focus hidden behind a large fixed, wrapping shared header at native Chrome 400% zoom on Services hub, Governance and Ledger. Aegis high-zoom header also crowded the viewport.
- GB-A11Y-002: GB2 reported no visible focus indication for Aegis **Run Inspection**. Aegis CSS has a general `button:focus-visible` outline and a more-specific `button.button { outline:none }`, consistent with the observed conflict.
- The actual shared topbar template uses `.topbar { position:fixed }`, wrapped navigation and extra rows on narrow viewport sizes. Changing this shared template would affect other sites, so **no cross-repository edit is made**.

## Narrow correction

1. On four Services HTML pages, add a locally scoped `@media (max-width:640px)` rule making only `#topbar-slot .topbar` position **static**, and removing the now-unnecessary `body` top padding. This should keep the header in page flow and avoid covering keyboard-focused content. Preserve readable horizontal padding inside the topbar.
2. On Aegis only, add a specific `button.button:focus-visible` three-pixel outline with offset, overriding the conflicting outline reset without altering behavior or disabled-button states.
3. No API, JSON schema, evaluator, ledger behavior, analytics or cross-site shared-component source is changed.

## Required verification (GB2 follow-up)

- After GitHub Pages has deployed the commit, use actual **native Chrome zoom** at 100%, 200%, and 400% on the four service URLs.
- Record browser version, viewport dimensions, visible focus location, screenshots and whether the header remains in flow. Retest Tab/Shift+Tab navigation especially on links previously hidden by header and on Aegis Run Inspection.
- At 400%, use a baseline width near **1280 CSS px** if technically possible. If not, report the actual wider baseline and the limitation.
- Confirm links and form controls remain readable, responsive and operable, that the header doesn't overlap content, and that Aegis Run Inspection shows a visible focus outline.
- Re-run smoke/accessibility workflows; report errors, including any layout regression on normal mobile widths.
- **Do not** claim real NVDA/VoiceOver testing, human facilitator rehearsal completion or WCAG certification without actual evidence.

## Governance and disposition

The report records a source-supported correction and GB2-observed findings, **not independent manual reproduction or verified remediation**. GB2's screenshot/log evidence remains in its QA workspace and was not independently inspected here.

**Review 011 real assistive-technology acceptance: OPEN. Review 013 G09 human facilitator rehearsal: OPEN. G05/G06: BLOCKED. G10/G11: NOT AUTHORIZED.**

Do not recruit participants or claim an operational Satoshium Suite release. Further production corrections require the results of the focused GB2 retest.
