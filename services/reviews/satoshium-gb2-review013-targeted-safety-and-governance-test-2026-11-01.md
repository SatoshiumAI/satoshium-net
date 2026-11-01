# GB2 ASSIGNMENT — SATOSHIUM Review 013: Safety Scenarios & Governance Semantics

**Date:** 2026-11-01
**Repository:** `SatoshiumAI/satoshium-net`
**Branch:** `phase004`
**Scope:** Read-only assessment and synthetic testing. **No GitHub commits, production edits, real participants, contact, invitations, recordings, or real credentials.**

## Assignment

You (GB2) are an independent technical tester for Review 013. Investigate two workstreams, keeping observed facts, simulations, assumptions and untested matters distinct. Reuse existing evidence rather than rerunning Review 011 accessibility or all routine functional cases.

### A. Simulate the three facilitator safety scenarios

Use a *fictional* facilitator and participant. Test both what the public pages actually say and how a facilitator **should** react. These are tabletop/scripted tests, **not real human facilitator rehearsal (G09)**.

1. **Withdrawal midway through a task.** Simulate a fictional participant saying, “I want to stop now.” Expected handling: cease activity immediately; do not demand a reason, persuade, retain unnecessary personal information, or claim an approved withdrawal contact exists. Evaluate whether current pilot drafts adequately instruct the facilitator.
2. **Accidental sensitive credential entry.** Simulate the disclosure **using a harmless marker such as `[FICTIONAL_SECRET_DO_NOT_STORE]` only**, never a real credential. Expected: stop the exercise; avoid copying, logging, screenshots, pasting or committing the value; follow a documented incident route *if one is approved*, otherwise flag missing procedures. Review the page warnings and draft facilitator instructions. Do not test sending secrets to a real service.
3. **Feedback storage, retention, deletion and withdrawal question.** Simulate a fictional participant asking, “Where is my feedback stored, who sees it, when is it deleted, and how do I withdraw?” Expected: be transparent that G05 consent/withdrawal and G06 feedback stewardship, storage/retention and contact route are **not yet approved**. Do not invent dates, custodians or private mailboxes; recommend pausing external pilot pending decisions. Check draft documents for contradictory or prematurely definitive promises.

For each, return: scenario, source/document inspected, exact steps, expected behavior, observed website/document behavior, facilitator model response, PASS / PASS WITH OBSERVATIONS / FAIL / NEEDS REVIEW, actionable issue with severity and minimal recommended change. **Distinguish facilitator simulation PASS from actual policy/implementation readiness.**

### B. Investigate R013-HR-001 — Governance evaluation semantics

A founder-submitted **fictional** Governance export showed: `ruleset_text: '-Require human review'`, `action_type: 'publish-output'`, `action_text: 'Transfer 0.5'`, `approval_token: 'APPROVED-OPS-001'`, `decision: 'APPROVED'`, `policy_triggered: 'baseline_allow_rule'`. This is a potential user-expectation ambiguity, **not yet a confirmed defect**.

Inspect `services/agent-governance/tool.html` and relevant docs on `phase004`. Determine:

- Does the evaluator parse free-text rules or apply a fixed set of code-defined checks?
- What controls the effect (if any) of `approval_token`? Does a token *look* like real authority but function only as a demonstration input?
- Which field governs behavior: structured `action_type`, free-text `action_text`, or both?
- Is an `APPROVED` reference decision adequately constrained by on-page warnings and the receipt?
- Can you reproduce the same outcome with fictional data and one or two *minimal* controlled variants? Run only if safe and necessary; do not use live secrets or external actions.

Report exact code references, evidence, a concise explanation of expected behavior versus misleading affordance, and smallest proposed corrective text or logic change **without implementing it**.

### C. Optional supporting check

Verify whether existing sample/demo values include `demo@satoshium.ai` and whether the fictionalization correction tracked as `GB-I-008` already governs this field. Flag potential conflict, but do not change data without approval.

## Required deliverable

Produce a single self-contained Markdown report named `GB2-review013-targeted-safety-governance-REPORT-2026-11-01.md` with:

- Source SHA, browser/environment (if used), timestamp and explicit read-only statement.
- Compact scenario matrix; actual website evidence vs hypothetical facilitator responses.
- R013-HR-001 technical findings with concrete file/line references and replication limits.
- Prioritized issue register with severity, reproducibility, and recommended owner/next action.
- Separate gate dispositions: **G09 HUMAN REHEARSAL OPEN unless a real human later performs it; G05/G06 BLOCKER; G10/G11 NOT AUTHORIZED.**
- No claims that automated rehearsal equals human testing, and no WCAG or production-pilot authorization claims.

Return the report to the founder for independent review by ChatGPT. **Stop after report; no writes.**

**Governing rule:** Authority follows the governed subject. Reference does not transfer authority.