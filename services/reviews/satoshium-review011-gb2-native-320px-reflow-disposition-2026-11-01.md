# SATOSHIUM Public Services — Review 011 Native 320px Reflow Evidence Disposition

**Prepared:** November 1, 2026 (Pacific)  
**Repository:** `SatoshiumAI/satoshium-net` / `phase004`  
**Disposition:** **PASS — BOUNDED GB2 NATIVE REFLOW / FOCUS ACCEPTANCE**  
**Overall Review 011:** **OPEN — real screen-reader and other human accessibility acceptance outstanding**  
**Review 013:** No changes to pilot authorization or human-rehearsal gates.

## Evidence reviewed

- Original GB2 first-pass report, November 1, 2026, archived under `services/reviews/`.
- Corrective CSS commit `b0260c5b8b09838090b18f54b2091c5b6542ef89` (four Services pages; shared header in normal flow under 640 CSS px; Aegis Run Inspection focus-visible outline).
- GB2 successful post-fix retest at approximately 472 CSS px, previously accepted with bounds and archived.
- **New GB2 Review 011 Narrow Reflow Acceptance Report (~320 CSS px), November 1, 2026** (archived alongside this disposition).

## Findings and basis

GB2 reports use of **native Chrome zoom**, not CSS text scaling or an emulator proxy. The recorded environment was Debian 13 / Chrome 156; a window manager established a **1280 CSS-pixel viewport at 100%**, followed by **400% native zoom**, producing a reported Playwright `viewportSize()` of **320 × 255 CSS pixels**. The run tested all four deployed Services pages.

| Page | Narrow 400%-native-zoom finding | Status |
|---|---|---|
| Services hub | Wrapped header scrolled away; architecture-link keyboard focus visible; no unexpected horizontal page scrolling observed | PASS — GB2 observations |
| Aegis inspection | Controls reachable; Run Inspection shows a visible cyan focus outline; header in page flow | PASS — GB2 observations |
| Agent Governance | Evaluation and footer keyboard focus visible; textarea's internal scrolling distinguished from page overflow | PASS — GB2 observations |
| Verification Ledger | Generate action and footer keyboard focus visible; header remains in normal page flow | PASS — GB2 observations |

The new narrow run does not contradict the earlier approximately 472 CSS-pixel post-fix passes. GB2 reported no new reproducible failures. This supports accepting the **targeted reflow and focus issues** as corrected within these tested conditions, consistent with the founder's prior approval of the five fixes.

## Evidence limitations

- This disposition reviews GB2's supplied Markdown report and its method description. The separately referenced screenshot and log files in GB2's own `/workspace/satoshium-qa/reports/a11y-narrow-320/` directory have **not** been independently inspected or deposited in this repository.
- `window.innerWidth`, DOM `scrollWidth`, and computed CSS `position` were **not directly measured** by GB2; observations about no horizontal overflow and header behavior were visual or indirect.
- A subset of the 100% and 200% comparisons was limited to the Services hub, not a fresh 12-condition full functionality run.
- No real screen reader was available or used. No WCAG certification, cross-platform accessibility guarantee, or production security certification is claimed.

## Remaining work / governance

1. **Review 011 actual screen-reader speech acceptance:** OPEN / NOT TESTED. A human using NVDA, VoiceOver, or comparable assistive technology must document observed announcements, labels, status/error changes and focus behavior.
2. Any follow-up full keyboard/negative-case inspection should be separately identified, not assumed from this narrow reflow pass.
3. **Review 013 G09 human facilitator rehearsal:** OPEN; GB2's synthetic rehearsal does not satisfy this gate.
4. **G05 consent / G06 feedback stewardship:** BLOCKER — NO-GO.
5. **G10 invitations / G11 sessions:** NOT AUTHORIZED. No participant recruitment or feedback collection.
6. The broader Satoshium Suite release remains outside the scope and authority of this evidence review.

**Action:** Archive the original GB2 report and this bounded disposition together in a single GitHub commit. No production HTML, styles, JavaScript, workflows, or other institution repositories require modification based on the evidence now presented.

**Governing rule:** Authority follows the governed subject. Reference does not transfer authority.