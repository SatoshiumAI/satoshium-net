# Satoshium Public Services — Review 006: Targeted Audience Validation and Evidence Preservation

**Review date:** October 24, 2026 (Pacific)  
**Repository:** `SatoshiumAI/satoshium-net` · branch `phase004`  
**Immutable review input:** `a407cc91c07c5a207df026b40accdddb4e0c9bd6`  
**Review disposition:** **COMPLETE — APPROVED (PILOT DESIGN, PRIVACY AND EVIDENCE-PRESERVATION PROTOCOL)**  
**Actual audience pilot / outreach / use metrics:** NOT YET EXECUTED OR OBSERVED  
**Cloudflare installation expansion:** NOT AUTHORIZED UNTIL REVIEW 004 ACCEPTANCE CONDITIONS ARE VERIFIED  
**Suite 1.0 documentary architecture baseline:** COMPLETE — APPROVED; **full public integrated Suite 1.0 product release:** NOT AUTHORIZED.

## 1. Evidence-based purpose

The post-trademark-extension phase should answer whether relevant outsiders understand and use **existing** practical services. It is not a general campaign for all eight institution-owned Suite products. Three publicly reachable services are already backed by independent Chromium tests:

1. **Aegis Inspection** — read-only public API inspection of demonstration actor IDs, not authorization, certification or mutation.
2. **Agent Governance** — browser-side example/rules evaluation, resulting local record and export/integrity verification; not live agent enforcement.
3. **Verification Ledger** — browser-side record generation, JSON digest verification and verified Governance JSON import; not a Bitcoin on-chain write, signed institutional attestation or authenticated provenance.

Current landing page: `https://satoshium.net/services/` is already visitor-first with direct CTAs. Review 005 deployed and checked all three link targets in desktop and 390px Chromium; its final record is `services/reviews/satoshium-public-services-readiness-review-005-final-disposition-2026-10-24.md`. GitHub Pages deployment #470 of that final record completed successfully, separate from earlier deployed landing-content acceptance.

## 2. Target audience — intentionally narrow

Invite a **small convenience sample** with relevant technical interest, not a demographic sample or claimed statistical study. Three useful perspectives:

| Pilot segment | Why the service may matter | Better initial service |
|---|---|---|
| AI developers / agent orchestration and safety builders | Need to inspect states, review permitted behavior and see actionable diagnostics | Aegis; Governance |
| Bitcoin/cryptographic-integrity and verification practitioners | Can assess digest reproducibility, tamper detection, and limits of unauthenticated hashes | Verification Ledger |
| Researchers, audit/compliance/provenance and autonomous-system evaluators | Can assess clarity, explainability, supporting evidence and where authority actually resides | Governance; Aegis; Ledger |

**Pilot target:** start with approximately **3–5 invited people**, then broaden toward **9–15 total** only if the first cohort can successfully complete a scenario and basic privacy/accessibility concerns are manageable. These are planning targets, not evidence of real users, promise of recruitment or an adopted marketing growth KPI.

No unsolicited mass marketing, automated outreach or use of identities extracted from records. A tester must voluntarily choose to participate; links may be publicly accessible without requiring participation.

## 3. Consistent exploratory test protocol

Provide the current Services landing URL and ask visitors to pick **one** of the three tasks without coaching through each click:

- **Aegis:** open the panel, select provided sample actors, run an inspection and explain in one sentence what the JSON confirms and what it does not confirm.
- **Governance:** click `Load Demo Example`, run evaluation, read the decision rationale and verify the generated JSON file; does the result make sense? Which rule triggered?
- **Ledger:** generate a demonstration record, download and verify JSON, intentionally alter a local copy and test rejection; explain how hash consistency differs from independent source authentication. Optionally import a previously verified sample Governance record.

The observer records only coarse outcomes: task selected; self-reported completion yes/no/partial; where confusion occurred; whether visitor understood the tool boundary; one usefulness score (1–5); voluntarily provided feature suggestion. No raw input content, saved JSON payload, real actor identifiers, approval tokens, wallet addresses, contact details or private prompts are required.

## 4. Feedback questions — lightweight and neutral

Ask at most six concise questions, with voluntary responses:

1. Which of the three tools did you try?
2. Could you complete the suggested activity without assistance? **Yes / Partly / No / Not attempted.**
3. In one sentence, what do you believe the tool actually did?
4. Where did you hesitate or become confused?
5. How useful might this be in work or research, **1–5** (or skip)?
6. Would you use this again or recommend it to a colleague? **Yes / Maybe / No**, with an optional reason.

Do **not** ask participants to supply credentials, organizational secrets, actual private agent policies, identifying business data or real wallet/financial information. Optional follow-up contact belongs in a **separate restricted opt-in record**; never store personal contact data in GitHub.

A short reusable invitation is in `services/reviews/visitor-pilot-invitation-template-2026-10-24.md`.

## 5. Evidence ladder — never conflate the levels

| Layer | Permissible evidence | What it does NOT establish |
|---|---|---|
| E0: Repository/deployment | SHA, GitHub Pages run, published HTML source | Live site or any real visitor |
| E1: Independent live test | GitHub-hosted HTTP/Chromium logs, exact route and test output | Non-test users or commercial adoption |
| E2: Visitor acquisition | Configured Cloudflare aggregated views/visits/referrers/country with dates and path | Unique identifiable people, repeat-user attribution or tool completion |
| E3: Voluntary test activity | De-identified tester session, task outcome, summarized feedback, version tested and consent basis | Mass adoption or independently authenticated service commerce |
| E4: Qualified real service/use evidence | Contemporaneous public screenshots, accurate service and mark display, clearly documented eligible transactions or service provision, permissible analytics corroboration and counsel/USPTO review | Automatically approved trademark Statement of Use or proof without legal review |

The reviewed technical site itself can be a public mark-use exhibit, but legal sufficiency is **not adjudicated here**. Public-facing tools may be free; whether specific actual service activity counts as the required trademark use is a separate legal question.

## 6. Storage, consent, minimization and integrity

- The GitHub repository is **public**. Commit **templates and aggregate/de-identified summaries only**. Never commit raw feedback emails, IP addresses, personal names, live user inputs, private exports, contact lists, raw analytics exports with sensitive values or screenshots exposing private details.
- A real tester's feedback may remain in their email or other **access-controlled** repository chosen by the founder. Record a nonidentifying `PILOT-###` code in public aggregate summaries. Keep the reidentification key, if any, outside public repositories.
- Ask consent before capturing a session or publishing any quotations. A private email is not automatically permission for a public quote or screenshot.
- Do not retain sensitive contents of tester-submitted records merely to increase the evidence pack. Preserve **redacted** screenshots with visible date, URL, task context and version where possible; keep a private original only when justified and access-controlled.
- Evidence citations must link to real GitHub run/commit/Cloudflare report/dated consented feedback; never fabricate visit counts or acceptance data.
- SHA-256 hashes can check whether captured evidence has changed, but do not independently prove its origin or distinguish genuine visitors from test bots.
- Measurement frequency: a **monthly compact review** is adequate during a small pilot; if genuinely active, a weekly aggregate pulse may become useful.
- Avoid visitor fingerprinting, indefinite individual retention and hidden return-visit identifiers. Cloudflare Web Analytics **does not support custom action events** as reviewed in #004, so tool-completion counts need manual/consented sessions or a separately authorized privacy-safe event design.

## 7. Simple scorecard and decisions

Before outreach, create an immutable version/date baseline of the live Services page and three tested tools; use the existing GitHub and browser test run references. For each **actual** review window record:

- Distinct de-identified sessions voluntarily observed;
- Tasks attempted, completed unaided, completed with help, failed, not attempted;
- Top two sources of confusion; source-boundary misunderstandings;
- Self-reported usefulness distribution and optional service feedback;
- Actual Cloudflare aggregated pageview/visit/path/referrer totals **only when configured and read**, noting analytics blockers or gaps;
- Explicit next action: **KEEP**, **FIX A VERIFIED USABILITY BLOCKER**, or **DEFER**, with evidence IDs.

Never treat a handful of invited technical testers as a statistically representative market. No conversion funnel, active user count, repeat rate, location mix or retention percentage may be asserted before independently measuring them under a suitable, disclosed method.

Use `services/reviews/visitor-pilot-evidence-register-template-2026-10-24.md` for the registry schema. This document remains a blank, non-user-data template until real observations occur.

## 8. Launch readiness gates and chronology

### Before inviting any outside testers
1. Confirm landing CTAs and the three tools remain operational; tests from Reviews 002–005 establish **historic** tested behavior, not permanent availability.
2. Confirm Cloudflare site's exact configured hostname, correct site token and manual-versus-auto injection; don't double-install beacons, misrepresent pageview measurement, or track entered content.
3. Review page privacy disclosure so it distinguishes *user-submitted evaluation content* from basic pageview analytics.
4. Complete one more focused negative-path/keyboard walkthrough, especially malformed verifier JSON and Aegis API errors, for scenarios we invite people to perform.
5. Have a private feedback storage and consent-handling method ready; do not collect a mailing list without express consent.

### After November 30, 2026 trademark target
The founder chose **on/near November 30** as the intended SATOSHIUM second extension filing date, after checking the case-specific current USPTO record. Preparation reminder is set for **November 27**. An extension is not filed by this review; the next extended period begins when the official extension is accepted according to USPTO status, not merely when the request is planned.

### First exposure
Invite 3–5 relevant volunteers, record only actual outcomes, check what users understood, and resolve demonstrated blockers before expanding. Preserve accurate screenshots and aggregate reports as supporting evidence, never as automatic proof of statutory trademark use.

## 9. Review disposition and forward action

**Review #006 — COMPLETE — APPROVED (audience/testing/evidence handling design only).**

**Outreach, analytics configuration, participant results and trademark filing** are **NOT COMPLETED** and not claimed.

Next recommended small execution units:
- **Review #007:** specific test of negative input and download/verify error handling, plus keyboard focus on the three service pages.
- **Cloudflare configuration read-only verification:** access owner dashboard and compare automatic injection, configured hostname and the legacy Agent Governance page token. Only then authorize minimal site-specific pageview changes.
- **Private pilot setup:** choose actual volunteers and consent/storage channel later; never insert personal identities into public repository.

The **Suite 1.0 governed architecture baseline stays approved** and the broader public integrated Suite product release stays separate.
