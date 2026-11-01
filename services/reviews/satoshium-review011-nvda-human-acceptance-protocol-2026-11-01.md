# SATOSHIUM Public Services — Review 011 Human NVDA Acceptance Protocol

**Prepared:** November 1, 2026 (Pacific)  
**Repository/branch:** `SatoshiumAI/satoshium-net` / `phase004`  
**Disposition:** HUMAN ASSISTIVE-TECHNOLOGY TEST PLAN PREPARED — NOT EXECUTED  
**Scope:** Four public Services pages; Windows NVDA with Chrome or Edge, fictional sample inputs only.

## 1. Existing acceptance baseline

The founder accepted the five targeted GB2 post-fix findings and the bounded 320-CSS-pixel native-zoom reflow result. Founder screenshots and Tab-key navigation add additional bounded human evidence. None of those activities verified spoken screen-reader announcements. **Review 011 real screen-reader acceptance remains OPEN.**

## 2. Preparation

- On a Windows computer, install/run NVDA from its official publisher if not already installed, and launch Chrome or Edge. Use keyboard and speakers/headphones with working sound.
- Record date, Windows version, NVDA version, browser/version, browser zoom, and whether audio is audible. No need to upload audio files or personal details.
- Test only fictional/example identities and existing sample data. Do not enter passwords, real agent identifiers, personal details, private financial data or organizational secrets.
- Do not click or navigate to `satoshium.us` links during this scoped review.
- Test the actual live deployed pages; capture a screenshot if a visible issue is found. **A screenshot cannot prove what NVDA spoke**; manually record what you heard.

## 3. Pages and checks

| Page | URL | Listen for |
|---|---|---|
| Services hub | https://satoshium.net/services/ | Page title, main landmark, navigation and the three “Try …” links named and operable |
| Aegis Inspection | https://satoshium.net/services/aegis/aegis-service-panel.html | Mode Selector and Actor IDs field names; preset button; Run Inspection name; Loading/result or error announcement after one fictional preset inspection |
| Agent Governance | https://satoshium.net/services/agent-governance/tool.html | Input labels; “Load Demo Example”; evaluation decision/result updates; JSON download/verification feedback |
| Verification Ledger | https://satoshium.net/services/verification-ledger/tool.html | Input labels; Generate action; result decision/status updates; JSON download/verification feedback |

For each page:

1. At 100% native browser zoom, move through headings/landmarks with NVDA reading/navigation shortcuts and note whether the page's purpose and main content are understandable.
2. Press **Tab** and **Shift+Tab** to move through representative navigation and all principal form controls. Record the **spoken accessible name, role and state** for each control; verify that focus is visually visible.
3. Activate a representative safe action (for Aegis, one example API inspection maximum; for Governance and Ledger, only fictional local data). Note whether NVDA **automatically speaks** the changed result or error. If it does not, try manual navigation to the result and distinguish *discoverable on demand* from *automatically announced*.
4. Where practical, test local demonstration JSON export and integrity verification with fictional data. Record spoken file chooser/alert behavior and focus when returning to the page.
5. If a step fails, record the precise page, control, keyboard sequence, expected announcement, **actual words heard (or silence)** and screenshot reference. Stop if there is a privacy or safety concern.

## 4. Evidence and result matrix — leave blank until genuinely executed

| Page | Named controls spoken | Status/result spoken automatically | Result findable manually | Keyboard focus / alerts | Disposition |
|---|---|---|---|---|---|
| Hub | NOT TESTED | NOT APPLICABLE | NOT TESTED | NOT TESTED | OPEN |
| Aegis | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | OPEN |
| Governance | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | OPEN |
| Ledger | NOT TESTED | NOT TESTED | NOT TESTED | NOT TESTED | OPEN |

Use **PASS / FAIL / NEEDS REVIEW / NOT TESTED** and explain each observed result. Do not invent spoken output or use DOM/ARIA snapshots as proof of audio.

## 5. Suggested short report format

**Environment:** [Windows, NVDA, browser versions, date]  
**Pages checked:** [URLs]  
**Successful spoken labels and announcements:** [what was actually heard]  
**Silent or unclear dynamic updates:** [control, steps, outcome]  
**Focus/chooser observations:** [what happened]  
**Defects requiring correction:** [severity, reproduction, screenshots]  
**Untested items:** [explicit list]  
**Human tester disposition:** [dated factual recommendation]

Do not publish personal information. ChatGPT may compile a factual review record and file it in GitHub **only after the human observations have been provided**.

## 6. GB2 supporting role and gates

GB2 may independently inspect accessible names, roles, live regions and focus restoration as **structural proxies** and compare those with human-reported difficulties. GB2 must not assert actual NVDA/VoiceOver speech or human test completion without operating and observing a real screen reader.

**Review 011 true screen-reader acceptance:** OPEN until this protocol is executed with actual speech evidence and assessed.  
**Review 013 G09 actual human facilitator rehearsal:** OPEN — this AT inspection does not by itself complete it.  
**Review 013 G05/G06:** BLOCKER; **G10/G11:** NOT AUTHORIZED.  
**External pilot and Suite release:** NOT AUTHORIZED.

**Governing rule:** Authority follows the governed subject. Reference does not transfer authority.