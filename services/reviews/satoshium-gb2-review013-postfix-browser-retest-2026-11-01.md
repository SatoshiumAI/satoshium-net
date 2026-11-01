# GB2 Assignment — Review 013 Post-Fix Independent Browser and Export Retest

**Prepared:** November 1, 2026 (Pacific)  
**Repository:** `SatoshiumAI/satoshium-net`  
**Branch:** `phase004`  
**Fixed commit under test:** `c3a78567eca15866944d8643dacc1c2e7e457dde`  
**Status:** ASSIGNMENT ONLY — GB2 NOT YET RUN  
**Scope:** Read-only testing of deployed public Governance tool with fictional values; no production/GitHub edits.

## Established baseline

- All five triggered GitHub Actions for `c3a7856` completed successfully: Pages deployment, Review 012 HTML boundary diagnostic, Review 012 import-size baseline, Services analytics audit and Review 011 accessibility diagnostics.
- ChatGPT executed six test vectors against the committed `evaluateRecord()` function: sensitive with/without token → BLOCKED; elevated risk with fictional token → APPROVED / demo_token_override; elevated risk without token → REVIEW REQUIRED; benign with/without user-entered `Require human review` → APPROVED / baseline_allow_rule (the entered rule is explicitly not enforced).
- These are source-level checks, not browser acceptance.

## Tasks

1. Confirm live `https://satoshium.net/services/agent-governance/tool.html` corresponds to the specified commit and document browser/OS, URL and version pin.
2. Run each case below in a real browser, using only fictional data. Clear the form or restart between cases:
   - A: `identity-processing`, `export private key`, token `x` → `BLOCKED` / `sensitive_data_protection_rule`.
   - B: same input, token blank → `BLOCKED` / same rule.
   - C: `publish-output`, `Transfer 0.5`, amount `0.5`, rules `Require human review`, token `DEMO-OVERRIDE-FICTIONAL` → `APPROVED` / `demo_token_override`.
   - D: C without token → `REVIEW REQUIRED` / `financial_threshold_rule`.
   - E: `other`, `Summarize notes`, token blank → `APPROVED` / `baseline_allow_rule`.
   - F: E with entered rules `Require human review` → same outcome, while visible copy clearly says free-text rules are not enforced.
3. For one BLOCKED and one APPROVED case, check JSON download, TXT export, printable receipt, local JSON integrity verification, result messaging and absence of real authorization claims. Verify exported record consistency and note that JSON retains the established structure without a standalone disclaimer.
4. Inspect keyboard focus/labels and whether `Demo override` field warns against real credentials. Note any regressions, but do not claim genuine NVDA speech tests unless actually performed by a human.
5. Examine any confusion between decision `APPROVED`, the term `Execution Receipt`, and reference-only status; document precisely.

## Evidence and stop rules

- Record PASS / PASS WITH OBSERVATIONS / FAIL / NEEDS REVIEW per case, with sanitized steps, result, screenshot/output details and reproducible source reference. No actual credentials, real data, server mutation, mail, participant recruitment or new telemetry.
- If deployment is stale or the live file differs from commit, stop interactive assertions and report a version mismatch.
- Do not edit production, GitHub, shared link/topbar components, or review documents.
- Return one downloadable Markdown report to the founder and ChatGPT for independent disposition. Automated testing cannot close the human G09 rehearsal gate.

## Governance

Review 013 G09 remains OPEN; G05/G06 BLOCKER; G10/G11 NOT AUTHORIZED. No external pilot or Suite-release authorization.

**Governing rule:** Authority follows the governed subject. Reference does not transfer authority.