# SATOSHIUM Public Services — Review 013 Privacy Decision Packet

**Date:** October 24, 2026 (Pacific)
**Disposition:** COMPLETE — APPROVED (INTERNAL PRIVACY DECISION-PACKET PREPARATION ONLY)
**Participant consent approval:** NOT GRANTED
**Pilot recruitment and sessions:** NO-GO — NOT AUTHORIZED
**Review 011 manual accessibility acceptance:** OPEN

## 1. Evidence classification

The current `phase004` Services HTML was inspected. The following are **source-derived facts**, not a completed audit of hosting logs, privacy policies or actual visitor networks.

| Surface | Reviewed source | Supported conclusion | Not established |
|---|---|---|---|
| Services landing | `services/index.html` | Public Services links, mailto feedback option, Cloudflare Analytics beacon and remote shared-footer fetch | Mailbox operation; server log retention; visitor identity |
| Aegis | `services/aegis/aegis-service-panel.html` | Selected actor IDs sent in a GET request to `api.satoshium.net`; remote footer and Analytics are loaded; 10-second UI abort is configured | Exact API logging, retention, privacy terms or complete timeout coverage |
| Agent Governance | `services/agent-governance/tool.html` | Local reference evaluation and file processing as previously audited; Analytics and footer script requests; `satoshiumTrack()` helper is declared, with no calls found in this file | Whether provider infrastructure independently logs requests; whether external scripts emit any other measurement |
| Verification Ledger | `services/verification-ledger/tool.html` | Local record generation and verification; remote footer and Analytics are loaded | Backend/CDN/hosting logs or complete external privacy processing |

**Caution:** An email link on the general Services page is not an approved or validated channel for a consented, privacy-managed pilot. The draft must not silently treat `contact@satoshium.ai` as an approved participant intake or withdrawal address.

## 2. Decision packet — proposed conservative choices, not adopted policy

| Decision | Proposed default for founder consideration | Evidence / action required before approval |
|---|---|---|
| D01 Consent language | Use versioned plain-language notice with explicit host/Analytics/API disclosures | Founder/privacy reviewer confirm wording and external processing facts |
| D02 Consent and withdrawal | Verbal opt-in documented by session code and notice version; allow immediate stop | Approve actual documented method and a tested contact route |
| D03 Accountable steward | One designated individual, with an authorized backup if necessary | Record role/person and actual responsibility |
| D04 Feedback storage | Private access-restricted location; separate any invite contacts from coded observations | Specify platform, permissions, backup controls and verification |
| D05 Retention and deletion | Consider raw-coded notes deletion 30 days after final synthesis | Decide policy and exceptions before collection; confirm deletion can be executed |
| D06 Accessibility | No WCAG claim; accommodations offered or affected sessions deferred pending Review 011 checks | Document intake, accessible alternative, and actual manual findings |
| D07 Incident route | Stop session, minimize exposure, promptly delete/quarantine accidentally supplied confidential content under approved process | Name contact/owner and written handling sequence |
| D08 Outreach | One-to-one private invitation only after all invitation gates pass | Separate founder authorization for exact message and cohort |
| D09 Actual sessions | Start only after specific consent and founder execution approval | Explicit session authorization, not generic continuation |
| D10 Other-host logging | Do not promise that all visits or requests leave no trace | Verify `satoshium.link`, public API hosting and Cloudflare/Pages data practices through responsible owners |

The defaults above are **recommendations**, not authorizations or implemented controls. All missing owner/contact/storage fields remain unresolved.

## 3. Consent-accuracy findings

- Correct: a local governance or ledger evaluation does not itself authenticate an issuer or create a Bitcoin anchor.
- Correct at source level: Aegis makes an API GET request containing the selected actor IDs, so only sample IDs should be used.
- Correct at source level: these four Services pages load Cloudflare Web Analytics and a shared footer from `satoshium.link`.
- Not yet verified: precise analytics behavior, upstream web/CDN request logging, API log retention, legal obligations and whether the contact mailbox is monitored.
- The Governance source declares `satoshiumTrack(eventName, details)`, but a check of the same reviewed source found **no invocation** of that helper. Do not claim tracking of actual task completion from this helper's mere presence.
- Cloudflare pageviews and any future traffic are not a participant count, conversion measure or proof of an invitation pilot.

## 4. Internal administrative rehearsal (not performed)

A future internal facilitator may rehearse reading the consent draft aloud, a simulated voluntary stop, a fictional confidentiality incident, a request for accommodation, and a pretend withdrawal request **without collecting or retaining a real person's data**. The rehearsal should record date, facilitator role, simulated steps, ambiguities, follow-up owner and retest. This documentation analysis does not count as the human rehearsal.

## 5. Decision states at time of packet

**G05 consent:** BLOCKER — NO-GO; final notice, consent method and withdrawal route unapproved.
**G06 stewardship:** BLOCKER — NO-GO; responsible person, private storage, access, retention and incident workflow unselected.
**G07 accessibility:** OPEN, including Review 011 actual zoom and screen-reader work.
**G08 regression freshness:** RECHECK immediately before any authorized outreach.
**G09 rehearsal:** automated dry-run successful; human facilitator NOT PERFORMED.
**G10 recruitment:** NOT AUTHORIZED.
**G11 sessions:** NOT AUTHORIZED.

## 6. Next possible work, without participant activity

Conduct an **internal documentation-only consent consistency check**, then prepare a sanitized facilitator rehearsal report template that can only be completed with genuine observations. Resolve D01–D10 by later explicit founder decisions. Do not create public forms, edit production privacy text without a separately justified review, appoint fictional officials, send invitations or claim human participation.

**Authority follows the governed subject. Reference does not transfer authority.**
