# GB2 — Review 013 Post-Fix Independent Browser and Export Retest — REPORT

**Status:** COMPLETE FOR FOUNDER / ChatGPT REVIEW
**Prepared:** 2026-11-01 (America/Los_Angeles, UTC-8)
**Tester:** GB2 (automated agent, independent technical tester)
**Overall result:** All six cases A–F **PASS** in a real browser on the live page; A (BLOCKED) and C (APPROVED) exports **PASS**. Two **NEEDS REVIEW** observations (UX wording; sticky-topbar click interception under automation). No FAIL.

> **Read-only statement:** I made no GitHub commits, pushes, PRs, issues or comments, and no production, shared link/topbar component or review-document edits. I sent no mail, recruited no participants, added no telemetry, mutated no server and used no real credentials. I entered only fictional values. I did not access satoshium.us. All tool processing is client-side; downloads went only to the local box.

---

## 1. Source, environment and version pin

| Item | Value |
|---|---|
| Repository / branch | `SatoshiumAI/satoshium-net` / `phase004` |
| Commit under test | `c3a78567eca15866944d8643dacc1c2e7e457dde` |
| Commit message / date | `fix(review013): clarify demo governance decisions and prevent sensitive override`. Committed 2026-11-01T20:06:29Z (12:06 PST) |
| Live URL | `https://satoshium.net/services/agent-governance/tool.html` |
| Live `Last-Modified` | Sun, 01 Nov 2026 20:09:47 GMT (12:09:47 PST); `Content-Length` 48709 |
| SHA-256 (commit raw `tool.html`) | `51dec438a3ac6d062b67b7a44d7c8883a58b14fa444f0a14f6ec0e9d5b05abdd` |
| SHA-256 (live `tool.html`) | `51dec438a3ac6d062b67b7a44d7c8883a58b14fa444f0a14f6ec0e9d5b05abdd` |
| `diff` | identical (exit 0) → **LIVE MATCHES COMMIT**, so interactive assertions were authorized |
| Pin method | curl byte compare of the live HTML against the commit raw file, done before any browser step. **The page shows no commit SHA.** It shows only engine v0.1 and protocol `sat-agr-protocol-v1`, so it has no on-page version badge. |
| OS | Debian Linux box, kernel 6.12.94+, x86_64 |
| Browser | Google Chrome 156.0.8078.47 |
| Zoom | Looked like 100%. I did not verify this with an instrument. |
| Execution window | About 12:10–12:15 PST on 2026-11-01. Export timestamps: A 20:11:23Z (12:11 PST), C 20:14:02Z (12:14 PST) |

## 2. Case matrix (OBSERVED in a real browser)

**Sanitized procedure for every case:** load the live URL → click **Clear Form** (form reset between cases) → enter only the listed fictional fields and leave all others blank or default → activate **Run Governance Evaluation** → read the Decision, Policy, Summary and Reason panel.

| Case | Inputs (fictional) | Expected | Observed decision / policy | Verdict |
|---|---|---|---|---|
| A | action type `identity-processing`; action `export private key`; token `x` | BLOCKED / sensitive_data_protection_rule | **BLOCKED / sensitive_data_protection_rule** | **PASS** |
| B | same as A, token blank | BLOCKED / same rule | **BLOCKED / sensitive_data_protection_rule** | **PASS** |
| C | `publish-output`; `Transfer 0.5`; amount `0.5`; rules `Require human review`; token `DEMO-OVERRIDE-FICTIONAL` | APPROVED / demo_token_override | **APPROVED / demo_token_override** | **PASS** |
| D | same as C, token blank | REVIEW REQUIRED / financial_threshold_rule | **REVIEW REQUIRED / financial_threshold_rule** | **PASS** |
| E | `other`; `Summarize notes`; rules and token blank | APPROVED / baseline_allow_rule | **APPROVED / baseline_allow_rule** | **PASS** |
| F | E + rules `Require human review` | Same as E; copy says free-text rules are not enforced | **APPROVED / baseline_allow_rule**, and the not-enforced copy is visible | **PASS** |

**Messaging observed:**
- **A / B Summary:** "Sensitive-data demonstration check triggered; this local reference outcome does not grant or revoke any external authority."
  - Reason: "…demo override cannot bypass this BLOCKED decision." In A, the token `x` did **not** bypass the block. That is the core regression check for R013-HR-001.
- **C Summary:** "No built-in demonstration check requires review. This is not execution permission."
  - Reason: "Fictional demo override bypassed elevated-risk review; sensitive-data blocking remains active."
- **D:**
  - Summary: the action requires human review because it appears to involve elevated risk or external execution.
  - Reason: "External action or elevated transfer detected without approval token."
- **E / F Summary:** the same non-permission line as C.
  - Reason: "No built-in demonstration check triggered; entered rules text was not interpreted."
- **F free-text copy (OBSERVED):**
  - The hero says the tool uses "fixed demonstration checks; free-text rules are not enforced".
  - The rules-box note says entered rules are recorded and hashed, not enforced.
  - The page says the demo override never bypasses sensitive-data blocking.
  - Screenshot: `F-rules-not-enforced.png`.

**Source cross-reference** (`c3a7856` `services/agent-governance/tool.html` L1144–1175, `evaluateRecord()`):
- **L1154 (sensitive pattern):** `identity|personal data|private key|seed phrase|medical|passport|ssn`. When it matches, L1158–1162 set BLOCKED / `sensitive_data_protection_rule` before any token check. That is why A and B are both BLOCKED.
- **L1163 (elevated without approval):** `(highTransfer || mentionsExternal) && !hasApproval` → REVIEW REQUIRED / `financial_threshold_rule`. This is case D. `publish` and `transfer` each trigger it, and so does amount > 0.10.
- **L1168–1173 (else branch):** APPROVED. The policy is `demo_token_override` when a token is present (case C) and `baseline_allow_rule` when it is absent (cases E and F).
- **`ruleset_text`:** never read by `evaluateRecord()`. This matches F.
- **Browser vs source:** the browser outcomes match the six source-level vectors ChatGPT previously reported. Those were source checks; this report adds the browser-acceptance layer.

**Screenshot gap:** I captured result screenshots only for C (receipt and focus) and F. I did **not** screenshot the results for A, B, D or E. I verified those outcomes from the rendered panel text, and the A and C exports are retained.

## 3. Exports and integrity verification — A (BLOCKED) and C (APPROVED)

| Check | A — BLOCKED | C — APPROVED |
|---|---|---|
| JSON download | `A_BLOCKED_record.json`, record_id `sat-agr-20261101-628` | `C_APPROVED_record.json`, record_id `sat-agr-20261101-536` |
| JSON decision / policy | BLOCKED / sensitive_data_protection_rule | APPROVED / demo_token_override |
| JSON inputs echoed | action_type `identity-processing`, action_text `export private key`, approval_token `"x"`, ruleset_text `""` | action_type `publish-output`, action_text `Transfer 0.5`, amount_value `0.5`, ruleset_text `Require human review`, approval_token `DEMO-OVERRIDE-FICTIONAL` |
| JSON summary carries non-authority language | Yes ("does not grant or revoke any external authority") | Yes ("This is not execution permission.") |
| Standalone disclaimer field in JSON | **None** (case-insensitive "disclaimer" count = 0) | **None** (count = 0) |
| JSON structure | Established flat structure, same 29 keys (record_type … verification_reference_sha256Hash) | Same 29 keys |
| TXT export | `A_BLOCKED_report.txt`, headline "SATOSHIUM Agent Governance Execution Report" | `C_APPROVED_report.txt`, same headline |
| TXT reference-only line | "REFERENCE-ONLY DEMONSTRATION — This unsigned report does not authenticate an issuer or authorize execution. Rules text is recorded, not enforced." | Same line |
| Printable receipt | Title "SATOSHIUM Agent Governance Execution Receipt"; reference-only paragraph present | Same title and paragraph; green APPROVED pill plus "This is not execution permission." (`C-APPROVED-receipt.png`) |
| Local JSON integrity verify | Alert "Verification SUCCESS: JSON record integrity confirmed." | Same alert |
| Real-authorization claim found | None | None |
| Verdict | **PASS** | **PASS** |

**Consistency notes (OBSERVED):**
- Decision, policy, summary, reason and inputs match across the on-screen panel, the JSON, the TXT and the receipt for each case.
- The JSON keeps the established structure. It has no standalone disclaimer field, as the assignment expected. The non-authority meaning lives only inside the `summary` text in the JSON, plus the TXT and receipt banners.
- If a JSON file travels on its own, it carries `decision: "APPROVED"` with only the summary sentence as context. I record this as an observation (see §6), not a failure.
- "Verification SUCCESS" confirms that the local hash recomputes. It does not prove authorship, issuer identity or authority, and the TXT banner says so ("unsigned … does not authenticate an issuer").

## 4. Keyboard focus and labels

| Check | Observed | Verdict |
|---|---|---|
| Demo override label | "Demo override (fictional; optional — never enter real credentials)" | **PASS** |
| Demo override placeholder | `DEMO-OVERRIDE-FICTIONAL` | **PASS** |
| Focus ring, Run Governance Evaluation | Gold focus ring visible (`C-focus-run-button.png`) | **PASS** |
| Focus ring, Action description | Gold focus ring visible | **PASS** |
| Keyboard activation | Enter on a focused button ran or triggered the actions | **PASS** for the controls I exercised |
| Screen-reader speech (NVDA, etc.) | **NOT TESTED.** No human SR session was run. | NOT TESTED |
| Full tab order of every control | NOT TESTED (beyond the exercised controls) | NOT TESTED |

**Observation O-2:** with the page scrolled, the sticky topbar intercepted automated mouse clicks on some buttons. Keyboard Enter worked in every case.
- Verdict: **NEEDS REVIEW** (observation only). This came from automation and is **not** a confirmed user-facing defect.
- I made no change: the topbar is a shared component and is out of scope.

## 5. APPROVED vs "Execution Receipt" vs reference-only status

**Verdict:** **NEEDS REVIEW (mild UX wording tension), not a FAIL.**

**Where the wording points toward execution (OBSERVED):**
- The decision label **APPROVED** appears in a green pill.
- The artifact titles are **"Execution Receipt"** (receipt), **"Execution Report"** (TXT) and **"EXECUTION OUTPUT RECORD"** (on-page).
- Read together, a casual reader could take "APPROVED" plus "Execution Receipt" to mean an action was authorized or executed.

**Mitigating copy that is present (OBSERVED):**
- "This is not execution permission." appears in the summary, the receipt and the JSON summary.
- "does not … authorize any agent execution" and the reference-only paragraph appear on the receipt.
- The TXT banner reads "REFERENCE-ONLY DEMONSTRATION — … does not authenticate an issuer or authorize execution."
- The intro carries an unsigned-records disclaimer.
- The page shows a "NO EXECUTION AUTHORITY" statement.
- Case C's reason explicitly names a *fictional* demo override.

**Assessment:** the disclaimers are explicit, close to the decision and consistent across surfaces. The leftover risk is terminology: "Execution" in artifact titles, and the bare `decision: "APPROVED"` in a JSON file that has no standalone disclaimer field.

**Smallest possible follow-ups** (proposals only, **not implemented**; founder decides):
- (a) Retitle the artifacts to something like "Reference Evaluation Receipt / Report".
- (b) Label the decision pill "APPROVED (reference only)".
- (c) Add a JSON `reference_only: true` or disclaimer field in a future protocol version. This would change the established structure, so it needs a protocol decision.

## 6. Observations / issue notes

| ID | Item | Severity | Reproducibility | Recommended owner / next action |
|---|---|---|---|---|
| O-1 | "APPROVED" next to "Execution Receipt/Report/Output Record" terminology; JSON has no standalone disclaimer field (§5) | Low (UX / NEEDS REVIEW) | Deterministic, every APPROVED export | Founder / ChatGPT disposition; optionally apply §5 (a)/(b), and (c) only through a protocol version decision |
| O-2 | Sticky topbar intercepted automated mouse clicks when scrolled; keyboard worked (§4) | Low / unconfirmed | Seen under automation only | Founder: decide whether a human manual check is warranted. Shared component, out of scope here |
| O-3 | Page shows no commit SHA or build badge, so version pinning needs an external byte compare | Informational | Deterministic | Optional: expose a build identifier in a future release |
| O-4 | Any non-empty token (even `x`) counts as an override for elevated-risk (non-sensitive) cases (L1147 `approvalToken.length > 0`). This is by design and labelled fictional; sensitive blocking is unaffected (case A). | Informational | Deterministic (source; A confirms the sensitive path) | No action required; the existing copy covers it |
| O-5 | Result screenshots for A, B, D and E were not captured | Evidence gap (low) | n/a | Re-capture only if the founder or ChatGPT wants visual evidence; text and exports already verify the outcomes |

**No regressions observed** relative to the Review 013 fix intent: a token cannot bypass sensitive BLOCKED, and the copy says free-text rules are not enforced.

## 7. Gate dispositions (unchanged)

| Gate | Disposition |
|---|---|
| G09 — Human facilitator rehearsal | **OPEN.** Automated or browser-agent testing cannot close it; it needs a real human. |
| G05 — Consent / withdrawal | **BLOCKER** |
| G06 — Feedback stewardship / storage / retention / contact | **BLOCKER** |
| G10 / G11 | **NOT AUTHORIZED** |
| External pilot / Suite release | **NOT AUTHORIZED** |
| WCAG conformance | **No claim made** |

## 8. Evidence paths (box: `/workspace/satoshium-qa/reports/review013-postfix-retest/`)

- `logs/version-pin.md`: pin log (hashes, headers, diff verdict)
- `src-tool-c3a7856.html` and `live-tool.html`: byte-identical copies, SHA-256 `51dec438…5abdd`
- `exports/A_BLOCKED_record.json`, `exports/A_BLOCKED_report.txt`
- `exports/C_APPROVED_record.json`, `exports/C_APPROVED_report.txt`
- `screenshots/C-focus-run-button.png`, `screenshots/C-APPROVED-receipt.png`, `screenshots/F-rules-not-enforced.png`
- This report: `/workspace/satoshium-qa/reports/GB2-review013-postfix-browser-retest-REPORT-2026-11-01.md`, also copied into the folder above

## 9. Stop statement

GB2 has finished the Review 013 post-fix browser and export retest and is stopping here. I made no GitHub, production, shared-component or review-document writes, and I am proposing no fixes as implemented. I return this report to the founder and ChatGPT for independent disposition. Nothing here authorizes G09 closure, a pilot, a Suite release or WCAG conformance.

*Governing rule: Authority follows the governed subject. Reference does not transfer authority.*