# GB2 — SATOSHIUM Review 013 Targeted Report: Safety Scenarios & Governance Semantics

**Report file:** `GB2-review013-targeted-safety-governance-REPORT-2026-11-01.md`
**Prepared:** 2026-11-01, ~11:50–12:05 PST (America/Los_Angeles, UTC-8)
**Tester role:** GB2 independent technical tester (automated agent). **Not a human facilitator.**
**For:** Founder → independent review by ChatGPT
**Assignment source:** `services/reviews/satoshium-gb2-review013-targeted-safety-and-governance-test-2026-11-01.md` (phase004)

## 0. Source, environment, read-only statement

| Item | Value |
|---|---|
| Repository / branch | `SatoshiumAI/satoshium-net` / `phase004` |
| Source SHA | **`9826861021714b50b7c506307a86118b21f10c8d`** ("docs(review013): assign GB2 bounded safety and governance tests"; committed 2026-11-01 11:48:56 PST) |
| Retrieval | Public HTTPS only: `raw.githubusercontent.com/.../9826861…/<path>`, `api.github.com` commit/tree/history, one read-only anonymous `git clone` of `phase004` for `git log -S` history search |
| Live page | `https://satoshium.net/services/agent-governance/tool.html` fetched once (HTTP GET, curl). **Byte-equivalent to phase004 `tool.html` (`diff` = no output).** |
| Browser | **None used.** No interactive browser session; no form inputs typed into any live page. |
| Replication method | Static extraction of `evaluateRecord()` (tool.html L1143–1181) executed in Node.js on the box with fictional inputs only. No DOM, no network, no secrets. |
| Hard exclusions honoured | satoshium.us not visited. No GitHub writes, no production edits, no participants, no contact, no recordings, no real credentials. Aegis API **not** called in this pass. |
| Working notes | `/workspace/satoshium-qa/reports/review013-targeted/` (`src/` fetched sources @ SHA, `logs/replicate-r013-hr-001.js`, `logs/replicate-r013-hr-001.out.jsonl`, `logs/scenario-tabletop-notes.md`, `logs/tool-pre-c49b888.html`, `logs/live-governance-tool.html`) |

**Read-only statement:** This work is read-only. Nothing was committed, pushed, deployed, submitted, emailed or posted. Prior QA folders were not modified.

**Evidence labels used:** **OBSERVED** (read in source/live HTML or produced by executing the extracted code) · **SIMULATED** (tabletop role-play with fictional actors) · **ASSUMED** (inference not directly verified) · **NOT TESTED**.

**Reused evidence (not rerun):** GB2 first-pass report Phase D (`GB2-review011-013-first-pass-REPORT-2026-11-01.md` §7: Load Demo → `REVIEW REQUIRED`/`financial_threshold_rule`, verify SUCCESS, D5 scripts PASS script-only); Review 013 checklists in `reports/checklists/` (byte-identical to phase004 copies); GB issue triage (GB-I-008, GB-I-009, GB-I-011); Phase 1 Test 2 Governance report. Review 011 accessibility was **not** rerun.

---

## 1. Section A — Facilitator safety scenarios (tabletop, SIMULATED)

Fictional actors: **Facilitator F** and **Participant P-FICT-01**. Text-only role play against the phase004 documents and page copy. **This is not the G09 human rehearsal** and does not satisfy it. A "PASS" below is a **facilitator-simulation PASS** (the scripted response is achievable from current drafts); it is **not** a policy or implementation readiness finding.

### 1.1 Compact matrix

| # | Scenario | Website / document evidence (OBSERVED) | Model facilitator response (SIMULATED) | Simulation verdict | Policy / implementation readiness |
|---|---|---|---|---|---|
| S1 | Withdrawal mid-task: "I want to stop now." | Checklist L57 "stop immediately without asking for reasons"; L72 "without penalty or persuasion"; observation template L13; consent draft L22 (stop any time; withdrawal contact = **[APPROVED PILOT CONTACT — NOT SELECTED]**); feedback spec L48 "respecting stop requests". Pages: task sheet L11 "you may stop at any time". | Stop immediately, thank, no reason requested, no persuasion, no export, no identity noted; when asked about later removal: "no withdrawal contact has been approved; nothing from today was stored." | **PASS WITH OBSERVATIONS** | **NOT READY** — G05 withdrawal route unapproved; handling of partial in-session notes on stop not specified |
| S2 | Accidental credential: `[FICTIONAL_SECRET_DO_NOT_STORE]` | Checklist L58, L70; go/no-go L52 hard-stop; pilot plan L97; feedback spec L41 incident route **[NOT DESIGNATED]**, L50; privacy packet D07 **open**; task sheet L9 / consent L14 prohibit "approval tokens". **Governance page solicits "Approval token / override" with placeholder `APPROVED-OPS-001` (tool.html L571–572).** Aegis free-text Actor IDs (aegis-service-panel.html L485) are sent in a GET query string (L626, L635); warning L573. | Pause; do not run/export; do not read aloud, copy, screenshot or note the value; participant clears form and closes tab; advise participant to treat their real credential as exposed and rotate it with its issuer; record only "sensitive value entered, not captured, scenario halted"; escalate sanitized note to founder because **no approved incident route exists**. | **PASS WITH OBSERVATIONS** (simulation) — procedure gap flagged | **NOT READY** — incident owner/sequence (D07) undesignated; UI field invites token-like input contrary to drafts |
| S3 | "Where is my feedback stored, who sees it, when is it deleted, how do I withdraw?" | Consent draft L16, L22, L26, L28 all placeholders **NOT SELECTED/NOT APPROVED**; feedback spec L34–41 steward/storage/readers/route/incident **not designated**, 30-day retention **proposed only** (L39); decision register D01–D05 OPEN; privacy packet L20 warns `contact@satoshium.ai` is not an approved intake/withdrawal address. Hub page has public "Send feedback" mailto (services/index.html L337). | "Those haven't been decided yet — no storage location, responsible person, retention period or withdrawal contact is approved, so I can't promise any of them; that's why real sessions aren't running. Nothing from today is being kept." Does **not** cite 30 days, `contact@satoshium.ai`, or a custodian. Recommend pausing external pilot pending G05/G06. | **PASS WITH OBSERVATIONS** | **BLOCKER** — G05/G06 undecided (expected) |

### 1.2 Scenario detail

#### S1 — Withdrawal midway through a task
- **Sources inspected:** facilitator rehearsal checklist (L57, L70–72); founder human-facilitator run sheet (L20); observation template (L13); consent/withdrawal draft (L22, L37); feedback-handling spec (L48, L56); go/no-go (L47); task sheet (L11).
- **Exact steps (SIMULATED):** (1) P-FICT-01 begins Task B (Governance), Load Demo done. (2) Before Run Evaluation, P-FICT-01: "I want to stop now." (3) F: "Of course — we'll stop right now. You don't need to give a reason. Thank you." (4) F does not offer "one more step", closes nothing on the participant's behalf beyond suggesting the tab can be closed; no export/download. (5) F records nothing identifying. (6) P-FICT-01 asks "how would I get anything removed later?" → F: "No withdrawal contact has been approved for this pilot, so I can't give you one; nothing from today has been stored."
- **Expected:** cease immediately; no reason demanded; no persuasion; no unnecessary PII retained; no claim an approved withdrawal contact exists.
- **Observed document behavior:** Drafts consistently instruct "stop without asking for reasons" and "without penalty or persuasion". Withdrawal contact is consistently a placeholder; no document fills it. **Gap:** no draft states what happens to observations already written *during* a session the participant stops (default discard vs. retain-if-consented). Feedback spec L56 addresses later removal via contact route only. Run sheet L20 condenses to "stop without asking for reasons" — adequate for rehearsal.
- **Verdict:** **PASS WITH OBSERVATIONS** (simulation). Readiness: **NOT READY** (G05).
- **Issue:** GB-R013-007 (S3).
- **Minimal change:** Add one line to consent draft "Your choice" and feedback spec §4 step 4: "If you stop during a session, the facilitator will [discard notes from that session / keep only what you agree to] — **[DEFAULT TO BE APPROVED]**." Add to checklist L57: "Do not ask for reasons, do not encourage continuation, and do not state that a withdrawal contact exists until D04 is approved."

#### S2 — Accidental sensitive credential entry
- **Sources inspected:** checklist L18, L58, L70; go/no-go L52; pilot readiness plan L35, L97; feedback spec L27, L41, L50; privacy packet D07 (L32); observation template L11, L34; task sheet L9; consent draft L14, L24; Governance tool.html L483, L571–572, L733; Aegis aegis-service-panel.html L485, L573, L626, L635; Ledger tool.html (local only; L992 carries `approval_token` through import).
- **Marker used:** `[FICTIONAL_SECRET_DO_NOT_STORE]` only, in role-play text. It was **not** typed into any live page, API, or service.
- **Exact steps (SIMULATED):** (1) In Governance, P-FICT-01 types the marker into "Approval token / override" and says "oops, that's my real key." (2) F: "Let's pause — please don't run the evaluation or download anything." (3) F does not read aloud, copy, screenshot, paste or note the value. (4) P-FICT-01 uses **Clear Form** (tool.html L1317–1344 clears the token field and `state.lastRecord`) and closes the tab. (5) F: "Because it was typed into a page, treat it as exposed and rotate/revoke it with whoever issued it." (6) F records "sensitive value entered in Governance token field; not captured; scenario halted" — no value. (7) F escalates sanitized description to founder; **no approved incident route exists**.
- **Expected:** stop; no copy/log/screenshot/paste/commit; use approved incident route or flag missing.
- **Observed website behavior (code, OBSERVED):**
  - Governance processes locally; no `fetch`/XHR of form values; `satoshiumTrack()` is defined (L1513) but **never called**; no `localStorage`/`sessionStorage`. If evaluation is run, the token value is embedded verbatim in the in-memory record (L1268), JSON export (L1403–1418), Execution Receipt (L1106, L1128 full JSON) — i.e., it would persist in any downloaded/printed artifact.
  - **Aegis variant (NOT TESTED live):** a secret typed into Actor IDs leaves the browser as a URL query parameter to `api.satoshium.net` (L626, L635); server log retention UNVERIFIED (privacy packet L16, L44). This makes Aegis the higher-exposure surface.
  - Page warnings exist (Governance L483 "do not enter personal or confidential data"; Aegis L573 "Use the provided sample actors, not private identifiers"; hub L309, L336). **But** the Governance field label "Approval token / override" with placeholder `APPROVED-OPS-001` (L571–572) actively invites a token-like value, contrary to task sheet L9 and consent draft L14 ("Do not enter … approval tokens").
- **Observed document behavior:** Hard-stop and "do not retain" rules are consistent across go/no-go L52, plan L97, checklist L58/L70. **Missing:** a written incident sequence and owner (feedback spec L41, privacy packet D07 both undesignated); no instruction to advise the participant to rotate a genuinely exposed credential; no surface-specific note that Aegis transmits input while Governance/Ledger do not; no instruction "do not export/print after a secret is entered".
- **Verdict:** **PASS WITH OBSERVATIONS** (simulation achievable). Readiness: **NOT READY** — missing procedure (flagged, as instructed).
- **Issues:** GB-R013-005 (S3, UI field), GB-R013-006 (S2 pilot-readiness, procedure).
- **Minimal change:** (a) Founder designates D07 incident owner and a 5-step sequence (halt → no capture → participant clears/closes → advise rotation → sanitized note to owner). (b) Checklist L70 add: "If entered in Aegis and run, treat as transmitted to the API." (c) Governance L571–572: relabel "Demo approval token (fictional, optional)" and placeholder `DEMO-TOKEN-FICTIONAL`, plus helper text "Do not enter a real token or credential."

#### S3 — Feedback storage, retention, deletion and withdrawal question
- **Sources inspected:** consent draft (L8, L16, L22, L26, L28, L40, L46); feedback spec (L34–41, L56, L58, L62–66); privacy packet (L15, L20, L27–32, L37, L54–55); decision register D01–D05; consent consistency audit (L23–25); governance consistency audit (L36–37); invitation template (L13–17, L30); hub services/index.html L337; Governance tool.html L733 privacy notice.
- **Exact steps (SIMULATED):** P-FICT-01 asks the four-part question; F gives the transparent "not decided" answer (see matrix); F does not cite the proposed 30 days, any mailbox, or a person; F states recommendation to pause external pilot until G05/G06.
- **Expected:** transparency that G05/G06 unapproved; no invented dates/custodians/mailboxes; recommend pause; check for contradictory/premature promises.
- **Observed:** Placeholders are consistent and clearly unapproved; 30-day retention is labelled "Proposed … not an active policy" everywhere it appears (spec L39, packet D05, register D03, consistency audit L25). No document names a custodian or private mailbox. **Observations (not contradictions):**
  1. Feedback spec L56 "Withdrawal/removal **is feasible** while a code-linked entry is retrievable" is phrased as fact; it depends on an unapproved route — mildly premature.
  2. Invitation template (Oct 24; status "DRAFT TEMPLATE ONLY — NOT SENT") L13–17 implicitly makes a **reply** (i.e., personal email) the feedback channel and says "I may summarize nonidentifying feedback", with no reference to the consent notice, withdrawal route, or G05/G06 dependency; L30 "retain contact information, verbatim replies … outside the public repository" presumes an unapproved storage location.
  3. Public hub mailto "Send feedback or describe what you tried →" (`contact@satoshium.ai`, services/index.html L337) is a de-facto feedback route that the privacy packet L20 says is **not** approved for the pilot. A facilitator could be tempted to cite it.
- **Verdict:** **PASS WITH OBSERVATIONS** (simulation). Readiness: **BLOCKER** (G05/G06) — as expected.
- **Issue:** GB-R013-010 (S3).
- **Minimal change:** Add a banner to the invitation template: "Superseded for Review 013 by the consent/withdrawal draft; must not be sent until G05, G06 and G10 are approved; replies are not an approved feedback channel." Change spec L56 "is feasible" → "is intended to be feasible, once an approved contact route exists". Add to checklist Phase 5: "Do not cite `contact@satoshium.ai`, the 30-day proposal, or any person as custodian."

---

## 2. Section B — R013-HR-001: Governance evaluation semantics

**File:** `services/agent-governance/tool.html` @ `9826861` (live page identical). Key logic:

```js
// L1143–1181 (abridged, verbatim conditions)
const action = (data.actionText + " " + data.actionType).toLowerCase();   // L1144
const rules  = data.rulesetText.toLowerCase();                             // L1145
const amount = parseFloat(data.amountValue || "0");                        // L1146
const hasApproval = data.approvalToken.length > 0;                         // L1147
const mentionsSensitive = /identity|personal data|private key|seed phrase|medical|passport|ssn/.test(action); // L1154
const mentionsExternal  = /external|wallet|third-party|api|publish/.test(action);                            // L1155
const highTransfer = amount > 0.10 || /0\.5 btc|0.50 btc|1 btc|transfer/.test(action);                       // L1156
if (mentionsSensitive && !hasApproval)            -> BLOCKED  sensitive_data_protection_rule   // L1158
else if ((highTransfer||mentionsExternal) && !hasApproval) -> REVIEW REQUIRED financial_threshold_rule // L1163
else if ((rules.includes("block")||rules.includes("require human review")) && mentionsExternal && !hasApproval)
                                                  -> REVIEW REQUIRED external_execution_review_rule // L1168
else                                              -> APPROVED baseline_allow_rule                // L1173–1177
```

### 2.1 Answers

| Question | Finding | Evidence |
|---|---|---|
| Free-text rule parsing or fixed checks? | **Fixed, code-defined keyword checks.** The ruleset text is not parsed into rules. It is lower-cased (L1145) and only consulted for the substrings `"block"` / `"require human review"` in branch 3 (L1168). **Branch 3 is unreachable**: its condition (`mentionsExternal && !hasApproval`) is a strict subset of branch 2's condition (L1163). An exhaustive boolean check confirmed `branch3_external_execution_review_rule_reachable=false`. Therefore **ruleset text has no effect on the decision in any input**. `riskLevel` (L800) is recorded but never used in evaluation. Ruleset text only affects `ruleset_digest_sha256Hash` (L1217). | OBSERVED: code; `logs/replicate-r013-hr-001.out.jsonl` V3, V4, V7, V11 |
| What controls `approval_token`? | **Presence only.** `hasApproval = approvalToken.length > 0` (L1147, value trimmed at L805). No format, value, signature, issuer, or allow-list check. **Any non-empty string** (e.g., `x`) suppresses all three non-APPROVED branches, including the sensitive-data BLOCK. The field is labelled "Approval token / override (optional)" with placeholder `APPROVED-OPS-001` (L571–572) and is echoed in the receipt as "Approval Token" (L1106). It **looks like** an authority credential but functions only as a boolean demonstration switch. | OBSERVED: code; V0, V2, V5 vs V1, V6, V12 |
| Which field governs: `action_type` or `action_text`? | **Both, indistinguishably.** They are concatenated into one string (L1144) and keyword-matched. The `<select>` values themselves contain trigger words: `financial-transfer` contains "transfer", `publish-output` contains "publish", `external-api` contains "external"/"api", `identity-processing` contains "identity". So in the founder case, `publish-output` triggers `mentionsExternal` and "Transfer 0.5" triggers `highTransfer` — both are then overridden by the token. With type `other`, only the free text matters (V7: "Send 5 BTC to Bob" → APPROVED; V8: "Transfer 0.5" → REVIEW). Substring matching also mislabels (V10: "rapid summary" matches "api" → REVIEW REQUIRED with policy name `financial_threshold_rule`). The amount field governs only via `> 0.10` (L1156). | OBSERVED: code; V7–V10 |
| Is APPROVED adequately constrained by warnings/receipt? | **On-page: partially. Exported artifacts: no.** On-page hero (L438) says records "do not authenticate their issuer, certify an agent, or authorize execution"; boundary card L605–608 "No Execution Authority". However: (a) summary text for APPROVED says "passed governance evaluation **under the current ruleset conditions**" (L1175), which is untrue when the ruleset is ignored; (b) docs `tool.md` L68 "APPROVED — The action satisfies the current ruleset conditions", L21/L5 "deterministic ruleset execution mode/evaluation"; tool.html L441, L540 "applies deterministic ruleset logic"; (c) the popup is titled **"Execution Receipt"** (L838, L1059–1060), footer "Execution receipt generated from **live** evaluation record" (L1132), TXT is "Execution Report" (L1356), result card has "Execution output record" (L706) — **none** of the receipt, TXT or JSON carries a non-authorization disclaimer; (d) CTA calls the page an "**operational** governance interface" (L462; existing GB-I-011). | OBSERVED: code/docs |
| Reproducible? | **Yes (static).** Executing the verbatim extracted function with the founder's inputs yields `decision: APPROVED`, `policy_triggered: baseline_allow_rule`, reason "No blocking condition triggered under the current governance evaluator." — exactly matching the export. Controlled variant V1 (token removed, all else equal) → `REVIEW REQUIRED` / `financial_threshold_rule`. | OBSERVED: Node execution of extracted code |

### 2.2 Replication table (fictional inputs; `logs/replicate-r013-hr-001.out.jsonl`)

| Case | ruleset_text | action_type | action_text | token | decision / policy |
|---|---|---|---|---|---|
| V0 founder (amount empty) | `-Require human review` | publish-output | Transfer 0.5 | APPROVED-OPS-001 | **APPROVED / baseline_allow_rule** |
| V0b founder, amount 0.5 | same | same | same | same | APPROVED / baseline_allow_rule |
| **V1 minimal variant: token removed** | same | same | same | (empty) | **REVIEW REQUIRED / financial_threshold_rule** |
| V2 token = `x` | same | same | same | x | APPROVED / baseline_allow_rule |
| V4 ruleset "- Block all actions" | `- Block all actions` | publish-output | Transfer 0.5 | APPROVED-OPS-001 | APPROVED / baseline_allow_rule |
| V5 sensitive + token | `-Require human review` | identity-processing | export private key | APPROVED-OPS-001 | APPROVED / baseline_allow_rule |
| V6 sensitive, no token | same | identity-processing | export private key | (empty) | BLOCKED / sensitive_data_protection_rule |
| V7 other type, rule "Require human review for all actions" | `- Require human review for all actions` | other | Send 5 BTC to Bob | (empty) | **APPROVED / baseline_allow_rule** |
| V10 substring false-positive | `-Require human review` | other | rapid summary | (empty) | REVIEW REQUIRED / financial_threshold_rule |
| V11 risk = restricted | `-Require human review` | other | Summarize notes | (empty) | APPROVED / baseline_allow_rule |

### 2.3 Replication limits
- **Static, not interactive.** Only `evaluateRecord()` was executed. `getValues()` (L792–808, `.trim()`), record assembly (L1213–1295), hashing and rendering were read, not executed. The founder's exact `amount_value` was not supplied; V0 and V0b show it does not change the outcome.
- No browser, DOM, popup receipt, download or verify path was exercised in this pass (Phase D earlier exercised Load Demo/export/verify only).
- **Interactive browser replication: NOT REQUIRED to answer R013-HR-001.** The decision path is a pure function of the form values, and the live page is byte-equivalent to phase004. Optional confirmation plan for the parent (fictional only): open live tool → Clear Form → Ruleset `-Require human review`, Action type `Publish output`, Action description `Transfer 0.5`, token `APPROVED-OPS-001` → Run → expect APPROVED/baseline_allow_rule; then clear only the token → Run → expect REVIEW REQUIRED/financial_threshold_rule. Do not Download/Open Receipt unless needed.

### 2.4 Disposition and explanation
**Disposition: CONFIRMED SEMANTIC/AFFORDANCE MISMATCH — not an execution or security defect.** The tool does what its code says and executes nothing. However, the labels and docs say decisions follow the user's "ruleset conditions" and present a free-text "Approval token / override". In fact the ruleset text never affects the decision, and **any** non-empty token turns every input into APPROVED. That includes inputs the code would otherwise BLOCK as sensitive. A user who writes "Require human review" and sees APPROVED could reasonably conclude that the rule was evaluated and satisfied, or that `APPROVED-OPS-001` carried real authority. Both conclusions are wrong. The Execution Receipt, TXT and JSON then carry APPROVED plus that token with no boundary text.

**Expected behavior (reference evaluator):** fixed demonstration heuristics, visible as such, with the token being an explicitly fictional toggle.

**Misleading affordances:** "Rules" textarea + "deterministic ruleset execution mode" (L441, L540; tool.md L5, L21, L68); "Approval token / override" + `APPROVED-OPS-001` (L571–572); APPROVED summary "under the current ruleset conditions" (L1175); "Execution Receipt … live evaluation record" (L838, L1059–1060, L1132); TXT "Execution Report" (L1356).

### 2.5 Smallest proposed corrections (NOT implemented)
**Text-only (preferred minimum):**
1. tool.html L540 note → "The reference evaluator applies a small fixed set of built-in demonstration checks (keywords in action type/description, amount > 0.10, and presence of a demo token). Rules text is recorded and hashed but is **not** interpreted."
2. L571–572 → label "Demo approval token (fictional; any value bypasses the demo checks)", placeholder `DEMO-TOKEN-FICTIONAL`.
3. L1175 APPROVED summary → "No built-in demonstration check was triggered. This is a local reference result, not execution permission."
4. Receipt (after L1066) and TXT (after L1356): one line "Reference evaluation only — not an authorization to execute. Unsigned; does not authenticate issuer." Optionally rename "Execution Receipt/Report" → "Evaluation Receipt/Report" (separate decision; affects Review 012 terminology docs).
5. tool.md L68 → "APPROVED — No built-in demonstration check was triggered (rules text is not interpreted)."

**Logic (optional, larger, founder decision):** (a) when a token is present, set `policy_triggered = "demo_token_override"` and reason "Demo token supplied; checks bypassed" instead of `baseline_allow_rule`; (b) remove or reorder the unreachable branch L1168; (c) do not let the token override the sensitive-data BLOCK (L1158).

---

## 3. Section C — `demo@satoshium.ai` and GB-I-008

| Check | Result |
|---|---|
| Current Load Demo identity (phase004 + live) | `Demo Tester` / **`demo@example.invalid`** / `Demo City` / `Fictional Test Organization` (tool.html L1298–1302; placeholders L488–506; helper L483). OBSERVED |
| GB-I-008 fix commit | `c49b888ca5e5283cdc1451bf03408b170e503d0f` — "fix(services): use fictional Governance demo identity and explain sample-only data", 2026-11-01 07:59:21 PST. Pre-fix Load Demo was `Christopher Burris` / `contact@satoshium.ai` / `Austin, Texas` / `Satoshium` (from `1a14e76682`, L1291–1296). OBSERVED |
| `demo@satoshium.ai` in code history | `git log -S "demo@satoshium"` on phase004 returns **only** `8bf824b` and `9826861`. Both are review docs (evidence assessment L28, GB2 assignment L38). **The string has never appeared in any tool source on phase004.** OBSERVED (single-branch clone; other branches not searched) |
| Prior GB2 Phase D export | `tester_email: "demo@example.invalid"`. OBSERVED |
| Interpretation | The founder's rehearsal value `demo@satoshium.ai` was **ASSUMED to have been typed manually** (or to come from another source); it is not a shipped sample value. GB-I-008 governs the **Load Demo prefill** and has been applied in source. It does not, and cannot, govern values a tester types. |
| Potential conflict | The evidence assessment (L28) calls it a "sample Governance tester email", which implies a shipped sample. Source does not support that. A separate hygiene point remains: free-typed tester email/name/location are exported verbatim in JSON/receipt (L1244–1252, L1093–1097). **No data changed.** |
| GB-I-008 status suggestion | Source-level fix OBSERVED. Independent **interactive** retest (Load Demo → export → inspect) NOT performed in this pass; Phase D export (post-fix) already shows `demo@example.invalid`, which supports closure subject to founder acceptance. |

---

## 4. Prioritized issue register (new IDs; existing GB-I-* referenced)

| Pri | ID | Sev | Title | Reproducibility | Owner / next action |
|---|---|---|---|---|---|
| 1 | **GB-R013-001** | S2 | Any non-empty approval token forces APPROVED/`baseline_allow_rule` for all inputs, including the sensitive-data BLOCK case (L1147, L1158–1177) | Deterministic; static replication V0/V2/V5 vs V1/V6 | Founder: approve text fix §2.5(2–4) and decide on logic (a)/(c); GB2 retest after change |
| 2 | **GB-R013-002** | S2 | Ruleset text never affects the decision (only branch, L1168, is unreachable); riskLevel unused. This contradicts the "deterministic ruleset" copy (L441, L540, L1175; tool.md L5, L21, L68) | Deterministic; V3/V4/V7/V11 + reachability proof | Founder/docs owner: §2.5(1,3,5); optionally remove dead branch |
| 3 | **GB-R013-006** | S2 (pilot readiness) | No approved incident route or written sequence for accidental secrets; no rotate-credential advice; no Aegis-transmits note (feedback spec L41; packet D07) | Document review | Founder: designate D07 owner + 5-step sequence; update checklist L58/L70 |
| 4 | **GB-R013-003** | S3 | Exported Execution Receipt/TXT/JSON show APPROVED + token with "Execution"/"live" wording and no non-authorization disclaimer (L838, L1059–1132, L1356) | Code read | Founder: add one-line disclaimer; terminology decision on "Execution" |
| 5 | **GB-R013-004** | S3 | `action_type` + `action_text` are concatenated and substring-matched. Select values self-trigger; there are false positives ("rapid"→api); policy name `financial_threshold_rule` is applied to non-financial cases; "Send 5 BTC to Bob" (type other) → APPROVED (L1144–1167) | Deterministic; V7–V10 | Docs owner: describe heuristics honestly (§2.5-1); logic optional |
| 6 | **GB-R013-005** | S3 | "Approval token / override" field with `APPROVED-OPS-001` placeholder invites credential-like input, contrary to task sheet L9 / consent L14 (tool.html L571–572) | Code read | Founder: relabel/placeholder §2.5(2) |
| 7 | **GB-R013-010** | S3 | Invitation template + public hub feedback mailto form a de-facto feedback/contact route that is not G05/G06-approved; spec L56 wording is mildly definitive | Document review | Founder: banner on template; tweak spec L56; checklist "do not cite" line |
| 8 | **GB-R013-007** | S3 | No default for handling in-session notes when a participant stops mid-session | Document review | Founder: choose default; add line to consent draft/spec/checklist |
| 9 | **GB-R013-008** | S4 | Evidence assessment table says the Governance integrity dialog "expressly denies issuer authentication/authority". The Governance verify alert (L1498) does not; that disclaimer is the **Ledger import** alert (ledger tool.html L1044) | Code read | Founder/docs: correct the assessment wording; relates to GB-I-009 |
| 10 | **GB-R013-009** | S4 / info | `demo@satoshium.ai` is not a shipped sample value. GB-I-008 is fixed in source (`c49b888`); the assessment's "sample" wording conflicts with this | `git log -S` | Founder: confirm origin; decide GB-I-008 closure (interactive retest optional) |

Existing related items (unchanged): GB-I-008 (fixed in source, closure pending), GB-I-009 (alert-only verify UX), GB-I-011 ("operational" CTA wording, L462).

No S1 issue found. Nothing here involves real execution, custody, or data transmission from Governance.

---

## 5. Gate dispositions (separate)

| Gate | Disposition | Basis |
|---|---|---|
| **G09 Human facilitator rehearsal** | **HUMAN REHEARSAL OPEN** | This report is an automated tabletop/scripted simulation by GB2. It does **not** equal human testing, and G09 stays OPEN until a real human performs and documents the withdrawal, secret and feedback scenarios (evidence assessment L18: NOT EVIDENCED) and R013-HR-001 is triaged by the founder. |
| **G05 Consent / withdrawal** | **BLOCKER** | Withdrawal/contact route and consent method unapproved (consent draft L22, L28, L40; register D04–D05). |
| **G06 Feedback stewardship / storage / retention** | **BLOCKER** | Steward, storage, readers, intake route, retention and incident owner undesignated (spec L34–41; register D01–D03; packet D07). |
| **G10 Invitations** | **NOT AUTHORIZED** | Register D09. |
| **G11 Sessions** | **NOT AUTHORIZED** | Register D10. |

**Recommendation:** Keep the external pilot paused until G05/G06 decisions are made and recorded, then run the human G09 rehearsal including S1–S3.

## 6. Explicit non-claims
- Automated or tabletop rehearsal ≠ human facilitator rehearsal. No G09 closure is claimed.
- No WCAG conformance or accessibility certification is claimed; Review 011 was not rerun.
- No production-pilot, invitation, or session authorization is claimed or implied.
- No backend logging/retention facts were verified (Aegis API, Cloudflare, hosts).
- No real credential, participant, contact, recording, GitHub write, or production change occurred.

**Governing rule:** Authority follows the governed subject. Reference does not transfer authority.

*End of report — GB2 stops here; no writes.*