# SATOSHIUM — GB2 First-Pass Accessibility and Internal Rehearsal Assignment

**Prepared:** November 1, 2026 (Pacific)
**Repository:** `SatoshiumAI/satoshium-net` — `phase004`
**Assignment status:** PROPOSED FOR GB2 EXECUTION; no test results are claimed.
**Mode:** READ-ONLY testing; use fictional inputs only; NO GitHub writes, production edits, real-user recruitment, or participant feedback collection.
**Report location:** Return a Markdown report to the founder for review. Do not independently publish findings or change release-gate status.

## Assignment

GB2: Attempt the remaining manual-style checks of Satoshium Public Services Review 011 and the internal synthetic facilitator script for Review 013, using whatever real browser/desktop and accessibility tools are actually available. **Report observations, not anticipated success.** If any required capability is missing, mark it **NOT TESTED** and explain why. Do not simulate a human's auditory perception or label automation as a genuine human rehearsal.

Review the current repository checklists before execution:
- `services/reviews/satoshium-review011-native-accessibility-acceptance-2026-11-01.md`
- `services/reviews/satoshium-public-services-review-013-facilitator-rehearsal-checklist-2026-10-24.md`
- `services/reviews/satoshium-public-services-review-013-human-facilitator-rehearsal-report-template-2026-10-24.md`
- `services/reviews/satoshium-public-services-review-013-participant-task-sheet-2026-10-24.md`
- `services/reviews/satoshium-review013-founder-decision-execution-register-2026-11-01.md`

### Targets
1. https://satoshium.net/services/
2. https://satoshium.net/services/aegis/aegis-service-panel.html
3. https://satoshium.net/services/agent-governance/tool.html
4. https://satoshium.net/services/verification-ledger/tool.html

### Phase A — Tool and environment disclosure
Record actual OS, browser, version, device/viewport dimensions, ability to set *native browser zoom*, screenshot capability, keyboard injection, accessibility-tree access, and whether **real NVDA, JAWS, VoiceOver, or other screen reader** can actually be operated with audible or trustworthy speech output. Cite the exact tool/evidence used. Browser viewport resizing is **not** native browser zoom. CSS root-font scaling is **not** native browser zoom. Accessibility tree inspection is **not** hearing a screen reader.

### Phase B — Review 011 reflow and keyboard
On each target, if available, run 100%, 200% and 400% **native browser zoom** using a desktop browser with baseline width approximately 1280 CSS pixels at 100%. Capture actual `window.innerWidth`, document `scrollWidth`, screenshot/reference, text clipping, horizontal scroll, overlap, hidden controls, focus visibility and keyboard reachability. At 400% check reflow against a roughly 320-CSS-pixel layout viewport; distinguish exceptions that intrinsically need two-dimensional layout. If native zoom cannot be operated, use a distinctly labeled **viewport-only proxy** at widths 1280/640/320 and mark native zoom NOT TESTED.

Use Tab, Shift+Tab, Enter and Space where appropriate; inspect form labels, error messages, actionable controls, JSON export and local re-import with entirely synthetic data. Avoid repeated live API calls; no browser changes to service state or real credentials.

### Phase C — Actual screen-reader checks (conditional)
Only attempt if GB2 has genuine access to a running screen reader with observable spoken output. Record screen-reader software/version, browser, exact spoken phrase or objective audio/transcript evidence, expected/observed label/role/state, announcement of validation errors, changed results, JavaScript alert behavior and focus restoration. If not available, use accessibility tree/ARIA inspection as an **automated proxy** and mark ALL true auditory checks NOT TESTED. Never infer real announcements from DOM roles.

### Phase D — Review 013 synthetic facilitator dry-run
From the Services hub, locate each tool as a novice would. Run a single safe Aegis preset (`actor-a,actor-b`) if available, noting the public API is contacted; if it fails, record and stop rather than retry repeatedly. In Governance choose **Load Demo Example**, run reference evaluation, inspect that APPROVED does not imply execution authority, export and verify fictional JSON. In Ledger generate a fictional record, export and verify; optionally import Governance JSON. Check that SHA-256 consistency does not imply issuer authentication, and 'Verification-ready TRUE' does not imply Bitcoin anchoring. Practice stop/withdrawal, confidential-data incident and accommodation scenarios **as hypothetical scripts only**. Do not imply real participant consent.

### Reporting
Return a self-contained Markdown report with:
- Date/time (timezone), inspected deployed URL and commit/deployment freshness if verified.
- Exact automation tools, supported and unavailable capabilities.
- One result row for each page × native zoom level (or NOT TESTED) with evidence pointers.
- Keyboard and focus results by tool, including screenshots and reproducible steps.
- Real screen-reader section explicitly PASS/FAIL/NOT TESTED; separate accessibility-tree proxy results.
- Synthetic facilitator sequence with steps PASS/FAIL/NEEDS REVIEW/NOT TESTED.
- Severity-ranked defects with exact reproduction, expected vs observed, and proposed minimal corrections (no changes made).
- Scope limitations, screenshots/log references, outstanding *human* tasks and explicit recommendation for founder review.
- Compare against earlier 400%-font-on-320px *advisory stress test* without reclassifying it as WCAG failure.

### Governance boundaries
**Review 011 human screen-reader acceptance remains OPEN** unless real assistive-technology testing is separately demonstrated and accepted. **Review 013 G09 human facilitator rehearsal remains OPEN** even if GB2 completes an automated proxy. **G05/G06 privacy and consent remain blockers; G10/G11 recruitment/session authority NOT GRANTED.**

**Do not** invite participants, collect feedback, create accounts, handle sensitive data, publish code, alter GitHub workflows, change production pages or mark a release/pilot GO. Present results for founder approval first.