# SATOSHIUM Public Services — Review 011 Native Accessibility Acceptance

**Prepared:** November 1, 2026 (Pacific)  
**Repository:** `SatoshiumAI/satoshium-net` · `phase004`  
**Status:** MANUAL ACCEPTANCE PROTOCOL PREPARED; EXECUTION/ACCEPTANCE OPEN  
**Authority:** Read-only plan; no pilot invitation, user recruitment, production publication, or operational Suite release authorized by this document.

## 1. Verified baseline

- Latest accessibility/diagnostic update: commit `2c8429a3f4fde56401bbe44368a2322127890255`.
- Six workflows on that commit completed successfully, including the corrected text enlargement diagnostic, automated accessibility diagnostic, and GitHub Pages deployment.
- Existing 320px Chromium tests and 200% **CSS inherited font** simulation passed within their recorded scope.
- The original 400% font-on-320px stress test identified document overflow on all four pages. This remains an **advisory stress observation**, not a WCAG certificate or automatic standards failure.
- Earlier 320px/390px/1280px headless checks and selected keyboard/file workflows passed with documented limitations.
- No real Windows NVDA, macOS VoiceOver, or native browser zoom acceptance has been substantiated by the reviewed records.

## 2. Pages under test

| Page | URL |
|---|---|
| Services hub | https://satoshium.net/services/ |
| Aegis public tool | https://satoshium.net/services/aegis/aegis-service-panel.html |
| Agent Governance | https://satoshium.net/services/agent-governance/tool.html |
| Verification Ledger | https://satoshium.net/services/verification-ledger/tool.html |

Use only demo or fictional inputs. Do not enter personal identifiers, credentials, secrets, production agent IDs, or private financial data.

## 3. Native browser zoom — human-run acceptance

**Prerequisites:** Windows Chrome or Edge desktop, freshly loaded pages, browser window maximized, browser zoom reset to 100%, screenshot capability. Record OS/browser version, available page width and any browser extensions affecting display.

For each page:

- [ ] At **100% native browser zoom**, confirm all meaningful content and controls are visible, reading order is coherent, and no unexpected horizontal page scrolling.
- [ ] At **200% native zoom**, confirm text remains readable, labels stay associated with inputs, action controls remain operable, focus is visible, no meaningful content is clipped or overlapped.
- [ ] At **400% native zoom**, with a desktop viewport approximately 1280 CSS px wide at 100% (yielding an approximate 320-CSS-px layout viewport at 400%), check content reflow. Record any document-level horizontal scrolling, clipped text, overlapping controls, navigation obstruction, loss of information, and unavoidable scrolling needed to operate a two-dimensional interface.
- [ ] At each setting, Tab through all major actions; Shift+Tab back; activate safe demo controls; confirm focus remains visible and does not disappear behind sticky navigation.
- [ ] Repeat if behavior differs substantially between Chrome and Edge. Include a mobile-device review if available, recording touch target and virtual keyboard behavior separately.

**Record for each case:** page, zoom, window/display size, actual `window.innerWidth` if inspected, PASS / FAIL / NEEDS REVIEW, impacted element, exact reproduction steps, screenshot ID. Do not infer WCAG conformance from these checks alone.

## 4. Real assistive-technology acceptance

Preferred Windows pairing: **NVDA + Chrome or Edge**; alternate macOS pairing: **VoiceOver + Safari**. These require an actual human listening to speech output. Automated DOM role inspections are supplementary and do not substitute.

For Aegis, Governance and Ledger:

- [ ] Navigate page headings and landmarks; verify names and order are meaningful.
- [ ] Tab through every form field; confirm spoken label, role, required state if applicable, and any instructions.
- [ ] With fictional data, activate representative safe actions; listen for status/error announcements (including rejected or invalid input).
- [ ] Confirm that updated result panels are discoverable and not announced repeatedly or ambiguously.
- [ ] Test a permitted demo JSON export and import where supported, including keyboard-only operation and announcement after import/verification.
- [ ] Check return focus and orientation after any JavaScript alert, file chooser, or validation error.
- [ ] Stop immediately if a workflow requests real credentials or implies execution/certification authority.

**Record:** AT name/version, OS/browser, control ID/visible label, expected announcement, observed announcement (human-recorded), pass/fail, screenshot/notes. Do not fabricate or infer spoken output.

## 5. Separate classification rules

- **PASS — NATIVE REFLOW:** Actual native 100/200/400% zoom tested and usable for the recorded pages/configuration.
- **PASS — ASSISTIVE TECHNOLOGY:** Spoken announcements checked by a real human with named setup.
- **FAIL:** Reproducible user-facing accessibility defect with exact affected element and steps.
- **NEEDS REVIEW:** Unclear issue, environment mismatch, special two-dimensional interface, or conflicting results.
- **NOT TESTED:** No actual test performed. Do not silently replace with a synthetic proxy.
- **ADVISORY STRESS:** 400% inherited CSS font-size at a *separate* 320px viewport; keep in diagnostic output but never merge with native zoom acceptance.

## 6. Current disposition and change governance

**Review 011 manual native zoom: NOT TESTED / OPEN.**  
**Review 011 real screen-reader acceptance: NOT TESTED / OPEN.**  
**Review 013 external participant pilot: NO-GO.**

Do not edit website CSS, suppress findings, weaken automated required checks, or issue accessibility certification without reproducible evidence. If defects are found, isolate the smallest patch, test it against existing services functionality, group related files into **one coordinated commit**, and verify GitHub Actions and deployed pages after publishing.

**Evidence sources:** GitHub Review 011 `text-enlargement-disposition`, `file-and-reflow-disposition`, `automated-browser-final` records (October 24, 2026); November 1 CI completion for `2c8429a`.
