# SATOSHIUM Public Services — Review 011 Structural Assistive-Technology Readiness Audit

**Date:** November 1, 2026 (Pacific)  
**Repository:** `SatoshiumAI/satoshium-net` / `phase004`  
**Review:** Read-only HTML-source inspection of four Services pages, after accepted founder visual/Tab and GB2 reflow checks.  
**Disposition:** STRUCTURAL SOURCE AUDIT COMPLETED — SCREEN-READER SPEECH STILL NOT TESTED.  
**Authority:** No production change, pilot recruitment, human rehearsal completion, WCAG certification or release-gate change.

## Pages inspected

1. `services/index.html` — Services hub
2. `services/aegis/aegis-service-panel.html` — Aegis panel
3. `services/agent-governance/tool.html` — Governance tool
4. `services/verification-ledger/tool.html` — Ledger tool

## Source observations

| Check | Observed source | Bounded interpretation |
|---|---|---|
| Main landmark | Each of the four pages contains a visible `<main id="main-content">` at page scope | Structural landmark present; live accessibility-tree acceptance not inferred |
| Hub navigation sections | Sections and choice articles use `aria-labelledby` | Accessible section naming hooks present |
| Aegis inputs | `label for=mode`, `label for=actors`; preset buttons have descriptive text and a named preset group | Form-label association and group description present |
| Aegis result updates | `pre#responseOutput` uses `role="log" aria-live="polite"` | May support announcements; real spoken output not established |
| Governance inputs | Named `<label for>` for tester, ruleset, risk, rules, agent, action, amount and token controls | Source-level labels present |
| Governance results | `#statusWrap` has `role="status" aria-live="polite"` | Specific status announcement is structurally supported; actual speech not tested |
| Ledger inputs | Named `<label for>` for agent, rule, decision, verification-ready, notes | Source-level labels present |
| Ledger result updates | Entire `#results` card has `role="region" aria-labelledby="result-heading" aria-live="polite"`; inner `#statusWrap` lacks `role="status"` | Dynamic announcements may be overly broad or absent for the badge; NVDA retest required |
| Hidden file input | Governance input is `display:none`; Ledger file inputs are `display:none` and `aria-hidden="true"` | Native picker is invoked by visible controls; focus restoration and announcements need actual testing |

## Issues and targeted NVDA questions

**AT-011-A — Ledger result announcement scope (NEEDS REVIEW).** Because the complete Ledger results region is live, an update may cause more speech than intended, or no meaningful badge announcement. Do not make a speculative ARIA change before verifying speech. Specifically listen for “Awaiting Entry” transitioning to the generated decision and record summary.

**AT-011-B — Aegis live log output (NEEDS REVIEW).** The log receives potentially lengthy JSON. Check whether NVDA announces a manageable progress/status change instead of reading a lengthy JSON payload unexpectedly. This is a testing hypothesis, not a demonstrated defect.

**AT-011-C — Governance result status (NEEDS REVIEW).** `role=status` is present; check the real announcement on Run Governance Evaluation and on Clear Form.

**AT-011-D — File-picker workflow (NEEDS REVIEW).** The keyboard-accessible buttons open native file selection, and JavaScript alerts report verification results. Check spoken dialog naming, confirmation/error announcement and focus restoration.

**AT-011-E — Button description consistency (INFORMATIONAL).** Aegis has a separate screen-reader-only `<label for="runInspection">Run inspection action</label>` on a button with visible text “Run Inspection”. Confirm the actual computed name and spoken wording; no automatic mislabeling is concluded.

## Guardrails

- Do not treat source-level ARIA structure or automated accessibility-tree output as actual NVDA/VoiceOver speech evidence.
- Do not claim the entire result region will be announced correctly merely because `aria-live` exists.
- Do not identify the Governance tool's `main` element inside a dynamically generated/printed document template as a second live main landmark without testing the instantiated document.
- Preserve approved GB2 320px native zoom PASS and founder Tab observations.
- Keep the prior 400%-font-on-320px proxy stress observation separate from native-zoom acceptance.

## Next steps

1. Founder or designated human tester follows `satoshium-review011-nvda-human-acceptance-protocol-2026-11-01.md` with real NVDA + Chrome/Edge and records exact spoken outcomes.
2. Prioritize Ledger decision/status updates, Aegis long JSON output, Governance result status and file-picker verification alerts.
3. If a reproducible issue occurs, capture browser/OS/NVDA version, focused control, keyboard steps, expected/actual announcement, and a minimal source correction proposal.
4. Batch related verified corrections in a single GitHub commit, then ask GB2 for a functional/ARIA retest followed by a human spoken-output retest.

**Remaining gates:** Review 011 real AT acceptance OPEN; Review 013 G09 human rehearsal OPEN; G05/G06 BLOCKER; G10/G11 NOT AUTHORIZED.

**Governing rule:** Authority follows the governed subject. Reference does not transfer authority.