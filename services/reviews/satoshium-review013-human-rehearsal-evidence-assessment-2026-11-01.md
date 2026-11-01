# SATOSHIUM — Review 013 Human Facilitator Rehearsal Evidence Assessment

**Date:** November 1, 2026 (Pacific)
**Disposition:** SUBSTANTIAL HUMAN REHEARSAL EVIDENCE RECEIVED; G09 OPEN — PARTIALLY EVIDENCED.
**Scope:** Internal synthetic-input rehearsal; submitted screenshots, PDF captures, Governance and Ledger JSON/TXT exports and integrity confirmation dialogs.

## Results

| Step | Disposition |
|---|---|
| Services Hub with three visible service entries | EVIDENCED — bounded; exact click path not documented |
| Aegis sample inspections in explorer and signalTransport modes | PASS — structured read-only JSON returned |
| Governance evaluation, receipt, JSON/TXT export | PASS WITH OBSERVATION — approval semantics need review |
| Governance local record integrity check | PASS — dialog expressly denies issuer authentication/authority |
| Ledger generate/export and local JSON integrity check | PASS — confirmed by alert and matching exported report |
| Optional Governance-to-Ledger import | NOT EVIDENCED: Ledger export indicates manual_entry |
| Spoken facilitation of authority/anchoring caveats | PARTIAL: visible explanatory text; spoken practice not recorded |
| Withdrawal, accidental-secret and feedback handling scenarios | NOT EVIDENCED |

No live participant data or secret credentials were requested. Sample raw files and screenshots are not being posted in the public GitHub repository.

## R013-HR-001: governance ruleset/action semantic ambiguity — NEEDS REVIEW

The submitted Governance record contains: rules text `-Require human review`; selected action type `publish-output`; text description `Transfer 0.5`; fictional approval token; decision `APPROVED`; policy `baseline_allow_rule`.

This **does not prove a defect**. Determine whether natural-language rule text is interpreted as an enforceable constraint, whether structured action type dominates description, and whether the supplied token affects outcome. Clarify what an end user may infer from an APPROVED label. Assign GB2 to **read-only source inspection and synthetic reproduction**, no production changes.

**Related hygiene note:** sample Governance tester email used `demo@satoshium.ai`, a real-domain address rather than a reserved invalid example domain. Coordinate with the previously governed fictionalization issue GB-I-008, without opportunistic production modifications.

## GB2 targeted investigation instructions

Review current `services/agent-governance/tool.html` implementation, record exact relevant locations and sanitized steps; compare selected action type, prose action, rule text and override token. Distinguish expected reference-evaluator behavior from a confirmed bug. Propose the smallest clarification or correction, but **do not write** to GitHub or public sites without founder-approved review. Do not use any real credentials or participants.

## Gate disposition

G09 human facilitator rehearsal remains **OPEN** until the remaining internal safety scenarios are actually rehearsed and R013-HR-001 has been triaged. G05 consent/withdrawal and G06 feedback stewardship remain **BLOCKERS**; G07 pilot accommodation requirements remain distinct from Review 011's bounded PASS; G08 requires freshness check later; G10/G11 external invitations and sessions **NOT AUTHORIZED**. This does not create pilot authorization or WCAG certification.

**Authority follows the governed subject. Reference does not transfer authority.**
