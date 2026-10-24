# SATOSHIUM Public Services — Review 013: Invitation-Only Pilot Readiness Plan

**Date:** 2026-10-24
**Scope:** Public demonstration tools at `satoshium.net/services/`
**Status:** PLANNING ARTIFACT — COMPLETE; PILOT EXECUTION NOT AUTHORIZED
**Review 012:** COMPLETE — APPROVED WITH EXPLICIT SCOPE LIMITATIONS
**Review 011:** OPEN for manual native zoom and assistive-technology acceptance
**Suite integrated public release:** NOT AUTHORIZED

## 1. Purpose and authority

Prepare an optional **3–5 invited participant** evaluation of discoverability, basic usability, trust-boundary comprehension, and self-contained record handling in the *already-public* Satoshium service tools. This is **not** a launch announcement, beta enrollment system, claims-of-use campaign, certification program, or evidence of market traction.

The three tools retain their separate jurisdiction and exact function:
- **Aegis:** read-only inspection, sample actor IDs, public API response; no activation or certification.
- **Agent Governance:** local browser reference ruleset/action evaluation; result labels are hypothetical reference-evaluator outcomes, not permission to execute.
- **Verification Ledger:** locally generated unsigned JSON plus SHA-256 self-consistency, not issuer identity, proof of institutional authorization or a Bitcoin transaction.

**Rule:** Authority follows the governed subject. Reference does not transfer authority.

## 2. Proposed cohort and recruitment gate

- Proposed cohort size: **3–5** people, only if separately authorized.
- Selection rationale: include at least one nontechnical visitor, one technically comfortable reviewer, and one user who can assess the clarity of the service boundaries. Multiple skill levels matter more than professional credentials.
- Invite through individual, private outreach only after founder approval of invitation language and privacy/consent process.
- Participation is voluntary, with an explicit option to decline or stop; no compensation or identity verification is assumed.
- Do **not** recruit, contact, enroll, email, or claim any participant has been found based on this planning document.

## 3. Entry gates: all required before any invitation

1. Founder explicitly authorizes the pilot protocol **and separately authorizes outreach**. Approving planning alone does neither.
2. Confirm the three service pages still load and existing Review 012 browser regression checks are green; distinguish deployed behavior from GitHub source.
3. Establish and document the Review 011 manual screen-reader / native zoom status. For participants who need the unresolved accommodations, defer participation until appropriate checks or accessible alternatives are available; do not assert WCAG certification.
4. Founder approves consent/privacy notice and secure, minimal feedback channel (not assumed to exist). No new site forms, plugins, cookies or analytics events are authorized by this plan.
5. Ensure that sample IDs, sample agent actions and demo rules are used. No private keys, personal credentials, confidential policies, real institutional identities, production agent IDs or genuine financial transactions.
6. Fix or disclose any blocking defects from a private dry-run before moving to external invited participants.
7. Define where notes will be stored, who can access them, and a deletion/retention date before any participant feedback is collected.

## 4. Proposed participant briefing (for separate approval; not a sent invitation)

“This is a short, optional evaluation of three publicly available **demonstration tools**. Please use only the provided fictitious/sample inputs. Do not enter personal, company-confidential, credential, financial, or production agent information. Aegis sends the selected sample actor IDs to a public Satoshium API. Governance and Ledger process their demonstration records locally in the browser. Satoshium pages also use Cloudflare Web Analytics for site-level measurement. These tools do not certify agents, grant execution authority, authenticate record issuers or anchor anything on Bitcoin. You may stop at any time. We would like feedback on clarity and usability, not performance or personal information.”

The exact notice and feedback storage channel require later approval; do not treat quoted draft as legally reviewed consent.

## 5. Three task scripts (observation only)

### Task A — Aegis inspection
- Open `/services/`; find **Try Aegis Inspection** without directions beyond the task name.
- Choose the existing **actor-a,actor-b** preset; run the read-only inspection; identify where JSON output and error information are shown.
- Ask: “Did this activate or certify any agent?” **Expected: no.**
- If API unavailable or response times out, record that as task outcome rather than repeatedly hitting the endpoint.
- Do not replace the sample actor IDs with real names, confidential identifiers or production IDs.

### Task B — Agent Governance reference evaluation
- Open **Try Agent Governance**; use the tool’s **Load Demo** fields if still present.
- Run the reference evaluation; locate the decision, reasons and SHA-256 verification reference.
- Download the exported JSON and invoke the existing local Verify Governance Record Integrity workflow.
- Ask: “Is an APPROVED label permission to execute a real action?” **Expected: no.**
- Avoid real approval tokens, real agent action policy and real identities.

### Task C — Verification Ledger record
- Open **Try Verification Ledger** and generate a sample entry with fictitious rule and agent names.
- Download the JSON and verify its self-consistency using the built-in import/verify control.
- Optional controlled follow-on: import the fictitious Governance JSON created in Task B, if the participant wishes.
- Ask: “Does Verification-ready TRUE show Bitcoin anchoring? Does integrity verification prove who authored the record?” **Expected: neither.**
- No actual blockchain access, external registration, funds movement or production integration.

## 6. Proposed observation checklist and feedback

Record a pseudonymous session code (e.g., P01) **without associating it with a public identifier** unless specifically authorized, a task outcome, a brief note and one improvement recommendation. Do not collect contact information in the observation file.

| Dimension | Suggested structured entry |
|---|---|
| Start/completion | completed / needed help / failed / skipped |
| First-click discoverability | intuitive / needed a hint / not found |
| Readability/navigation | readable / minor friction / blocked |
| Error and recovery | clear / unclear / not encountered |
| Boundary understanding | correct / partially correct / incorrect, based on exact questions above |
| Voluntary experience rating | 1–5 ease rating, optional |
| Evidence | paraphrased issue; no raw copied personal data, screenshots or recordings by default |

Measurements are **session observations**, not production telemetry. Cloudflare pageviews are neither unique-user counts nor task completions. Record task duration only if founder later approves the method and informs participants; exact seconds are not necessary for this initial qualitative sample.

## 7. Proposed synthesis; no statistical claims

A 3–5 person sample is exploratory and cannot estimate general-population adoption, conversion, conformance rates, or security. Summarize qualitative recurring issues, individual blockers and copy comprehension. Never invent participants, responses, success rates or analytics visits.

Suggested internal readiness thresholds **for later founder approval**:
- All participants who attempt a task can stop safely without losing control of their session.
- No real confidential credentials, real transaction instructions or institutional authorization are required.
- Zero confirmed incorrect claims in participant-facing guidance that a hash authenticates issuers or readiness means Bitcoin anchoring.
- Any observed task-blocking defect gets an owner, impact statement, correction path and repeat test before expansion.
- At least 3 completed sessions, *only if a pilot is actually launched and consented*; otherwise record **not run**.

## 8. Stop / escalation rules

Immediately halt the affected scenario if someone enters a secret or confidential material, misunderstands an output as real operational authorization, encounters an unexpected destructive behavior, or encounters a serious privacy or accessibility blocker. Preserve only a minimal sanitized finding and escalate for review; do not retain exposed sensitive content.

No automatic fix or broader Suite expansion is authorized by a pilot observation. Any correction uses the existing bounded review, source control, deployment verification and approval workflow.

## 9. Record-keeping and status vocabulary

- **Review 013 planning:** COMPLETE — DRAFT PROTOCOL DOCUMENTED, pending founder approval of execution-specific materials.
- **Pilot recruitment:** NOT STARTED.
- **Pilot consent:** NOT ISSUED.
- **Participant testing:** NOT STARTED.
- **Feedback dataset:** DOES NOT EXIST.
- **Pilot findings:** NONE; no quantitative result may be presented.
- **Authorization:** This document approves no live outreach, registration or public change.

## 10. Next bounded Review 013 steps

1. Review the drafted briefing for privacy and truthfulness against the live implementation.
2. Prepare a one-page participant task sheet and a blank facilitator observation template without private information.
3. Document a go/no-go checklist and obtain separate founder authorization before any invitations.
4. Preserve Review 011 manual accessibility gap and November 30, 2026 SATOSHIUM trademark extension plan as independent tracks.

**No participant outreach, external data collection, site modification or integrated Suite launch occurred during this planning record.**
