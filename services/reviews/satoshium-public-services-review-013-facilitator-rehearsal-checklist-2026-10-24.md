# SATOSHIUM Public Services — Review 013 Facilitator Rehearsal Checklist

**Prepared:** October 24, 2026  
**Disposition:** COMPLETE — APPROVED (DOCUMENT PREPARATION ONLY)  
**Rehearsal execution:** NOT PERFORMED  
**Actual participant recruitment, consent and sessions:** NOT AUTHORIZED  
**Review 011:** Manual screen-reader and native zoom acceptance OPEN

## Purpose and boundary

This is an **internal facilitator-only rehearsal script** for the proposed 3–5 person invitation-only usability pilot. It does not authorize approaching volunteers or capturing participant data. Use fictional examples exclusively and inspect the already-public Services interfaces without making production changes. The separate automated Chromium exercise documented in `satoshium-public-services-review-013-internal-dryrun-2026-10-24.md` passed five scripted checks; that evidence must not be mislabeled a facilitator rehearsal or a human usability study.

## Pre-rehearsal checks

- [ ] Facilitator has read the Review 013 pilot plan, participant task sheet, blank observations template, consent draft, minimal feedback specification, and go/no-go gate document.
- [ ] Confirm the deployed Services hub and all three tools open without an account.
- [ ] Read page privacy disclosures and note that **Aegis calls a public API**; Governance and Ledger generate demo records locally; Cloudflare Web Analytics measures page traffic.
- [ ] Use only built-in Aegis sample presets and fictional agents/rules. Never use real usernames, private agents, approval credentials, wallets, funds or institutional policies.
- [ ] Have a local **blank** observation sheet; record rehearsal issues only, not live participant identities.
- [ ] Confirm no form, contact list, invitation automation, recording, or pilot feedback repository is being activated.

## Rehearsal sequence

### Phase 1 — Participant perspective: discovery

- [ ] Begin at `https://satoshium.net/services/` without opening a direct tool link.
- [ ] Attempt to find each of the three service entry points from the participant instructions alone.
- [ ] Read only the visible text a visitor would see. Note confusing terminology, navigation loops, or implied certification authority.
- [ ] Check keyboard reachability and visible focus as a **facilitator observation only**; do not claim native screen-reader or zoom certification unless actual manual acceptance is separately performed.

### Phase 2 — Aegis sample inspection

- [ ] Open Aegis and select `actor-a,actor-b`.
- [ ] Run a **read-only** inspection and locate JSON response or timeout/error guidance.
- [ ] Confirm the interface does not suggest agents were activated or certified.
- [ ] Practice the facilitator answer to “Did this activate or certify an agent?” Answer: **No**.
- [ ] Do not repeatedly request the API if unavailable; record a sanitized inability to complete the task.

### Phase 3 — Agent Governance sample

- [ ] Return to the Services hub and open Agent Governance.
- [ ] Use **Load Demo Example**, then run the reference evaluation.
- [ ] Locate decision, reason, and SHA-256 reference.
- [ ] Export synthetic JSON and verify it using the local integrity tool.
- [ ] Practice the answer to “Does APPROVED authorize a real agent to act?” Answer: **No; it is a reference evaluator result**.

### Phase 4 — Verification Ledger sample

- [ ] Return to Services, open Verification Ledger and enter a fictional agent and rule.
- [ ] Generate, download and verify a local JSON entry.
- [ ] Optionally import the previously generated fictional Governance record.
- [ ] Verify that the import notice does not claim issuer authentication.
- [ ] Practice answers: “Does a matching SHA-256 reference identify the issuer?” **No.** “Does Verification-ready TRUE establish Bitcoin anchoring?” **No.**

### Phase 5 — Safety, comprehension and closeout rehearsal

- [ ] Practice a hypothetical withdrawal mid-task; stop immediately without asking for reasons.
- [ ] Practice response to accidental secret entry: stop, avoid copying the material, follow a future-approved incident route.
- [ ] Practice explaining how feedback **would** be collected, without claiming a feedback channel, storage owner or retention policy has already been approved.
- [ ] Review the task-sheet language for undefined terms and places where a novice might require a hint.
- [ ] Record only internal rehearsal defects and proposed documentation updates.

## Hypothetical test scenarios — no actual participant needed

| Simulated difficulty | Expected facilitator conduct |
|---|---|
| Aegis API timeout | Explain that the request failed; do not infer an agent-state outcome; offer to skip |
| Governance shows APPROVED | Clarify local reference decision, not execution authorization |
| Ledger shows Verification-ready TRUE | Clarify that this is not a Bitcoin anchor or transaction |
| User attempts to enter a real credential | Stop scenario; do not reproduce or retain the secret |
| Screen reader / high zoom usability blocker | Record unresolved limitation, arrange separate accessibility review rather than asserting conformance |
| User refuses feedback | End observation without penalty or persuasion |

## Rehearsal results form — unfilled

**Rehearsal date:** NOT SET  
**Facilitator:** NOT DESIGNATED  
**Tasks executed by facilitator:** NOT PERFORMED  
**Observed workflow defects:** NONE RECORDED (not evidence of absence)  
**Privacy/consent wording issues:** NOT ASSESSED  
**Accessibility accommodations rehearsal:** NOT PERFORMED  
**Next retest:** NOT SCHEDULED  
**Recommendation:** NOT YET DETERMINED

## Completion rule

Mark **FACILITATOR REHEARSAL — COMPLETE** only after an identified facilitator performs and documents this checklist with synthetic inputs, identifies any actionable defects and reruns affected tasks after fixes. The earlier automated run is supporting technical evidence, not a substitute.

**Review 013 external pilot remains NO-GO** until the separate G05/G06/G07/G08/G09/G10/G11 requirements are met and authorized.

**Authority follows the governed subject. Reference does not transfer authority.**
