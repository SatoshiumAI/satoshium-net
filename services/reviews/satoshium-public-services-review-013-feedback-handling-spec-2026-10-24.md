# SATOSHIUM Public Services — Review 013 Minimal Feedback-Handling Specification

**Prepared:** October 24, 2026  
**Status:** PROPOSED SPECIFICATION — NOT IMPLEMENTED / NOT APPROVED FOR COLLECTION  
**Applicable pilot:** 3–5 invited voluntary users, if later authorized

## 1. Purpose and separation

This document proposes handling **facilitator observations** from an optional private usability/comprehension review. It is not a new public telemetry system, API, participant signup database, production audit record, or institutional attestation.

The tool records themselves remain local reference materials. Aegis sends sample actor IDs to the public API. Cloudflare Web Analytics is separate website measurement, not evidence of participants or task completion.

## 2. Minimal data dictionary — proposed

| Field | Type / examples | Collect? | Rationale |
|---|---|---|---|
| Session code | P01–P05 | Yes, if consented | Link task rows without names |
| Consent acknowledgment | yes/no + approved notice version + date | Yes, if consented | Preserve evidence of voluntary agreement without a signature by default |
| Task status | completed / needed help / failed / skipped | Yes, if consented | Identify friction |
| Discoverability | intuitive / hint needed / not found | Optional | Inform navigation improvements |
| Boundary comprehension | correct / partial / incorrect, with sanitized summary | Yes, if consented | Check whether limitations are understood |
| Error clarity | clear / unclear / not encountered | Optional | Identify failure-message friction |
| Accessibility blocker | sanitized issue, no diagnosis | Only if volunteered / necessary | Record actionable usability concern |
| Improvement suggestion | brief paraphrase | Optional | Prioritize changes |
| Contact details or participant identity | none in observation sheet | **No** | Unnecessary for exploratory tasks |
| Device fingerprints, raw browsing logs, exact IPs | none as pilot dataset | **No** | Unnecessary tracking |
| Raw exported JSON, credentials or real actor IDs | none | **No** | Avoid sensitive content |
| Video/audio/screenshots | none by default | **No** | Avoid inadvertent capture |

Do not attach Cloudflare visitor identities, GitHub accounts, personal contact addresses, or inferred identities to session codes.

## 3. Stewardship and storage — decisions outstanding

- **Accountable steward:** [FOUNDER-APPROVED PERSON / ROLE NOT YET DESIGNATED].
- **Private storage system and exact location:** [NOT SELECTED]. Do not write actual participant records to a public GitHub repository or publicly accessible website.
- **Authorized readers:** [NOT APPROVED]; default proposal is minimum necessary, not broad organizational access.
- **Feedback intake route:** [NOT SELECTED]. No form, email automation, analytic event or database should be launched as a side effect of this document.
- **Separation of session codes and invitations:** Do not place direct identifiers in the research table. If an operational contact list is needed for invitations, store it separately with its own protection and deletion rule, subject to later approval.
- **Retention:** **Proposed** deletion of raw coded session observations within **30 days of final pilot synthesis**. This is a recommendation, *not* an active policy; founder/privacy review must set the final duration and lawful exceptions before first collection.
- **Deletion evidence:** record date, responsible steward and scope of deletion without retaining removed feedback.
- **Incident route:** [OWNER / PROCESS NOT DESIGNATED]. Privacy or accessibility blocker suspends the affected scenario until reviewed.

## 4. Collection workflow (future, not live)

1. Obtain specific founder authorization and validate the current consent notice.
2. Present the approved notice and record the consent decision; do not start if consent is declined.
3. Assign random/simple pseudonymous session code without encoding name or email.
4. Run only approved fictional-input tasks, respecting stop requests.
5. Record limited, sanitized observations in a private approved location.
6. Review notes promptly for accidental secrets; quarantine or delete content under an approved incident process without copying it into issue trackers.
7. Produce a concise aggregate narrative, separating observations from interpretations, and avoid numerical adoption or representative claims.
8. Execute the approved retention/deletion schedule.

## 5. Access, withdrawal and limitations

Withdrawal/removal is feasible while a code-linked entry is retrievable, using the approved contact route and session code where available. After irreversible aggregation, individual contribution deletion may be technically impossible. The participant-facing notice must say so. Website analytics and backend technical logs have different processes; do not promise automatic removal of those datasets when a participant withdraws from pilot feedback.

A 3–5 person cohort cannot support estimates of conversion, adoption, accessibility compliance, or market share. No participant data, surveys or retention deadlines actually exist at this planning stage.

## 6. Go/no-go dependency

This specification helps prepare **G06** but does **not** satisfy G06 until a steward, private storage, access permissions, channel, retention deadline, incident response path and approved notice are chosen and verified.

**Current G06:** BLOCKER — NO-GO.  
**Current G05:** BLOCKER — NO-GO.  
**Pilot invitation and session authority:** NOT GRANTED.  
**Public website modification:** NONE.
