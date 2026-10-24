# Satoshium Public Services — Review 012 Unsigned Record Trust Boundary

**Date:** October 24, 2026 (Pacific)  
**Disposition:** COMPLETE — SOURCE-BASED TRUST BOUNDARY DOCUMENTATION; NO AUTHENTICATION OR SECURITY CERTIFICATION CLAIMED.  
**Review 012 overall:** IN PROGRESS; do not mark all security review complete.  
**Review 011:** Native zoom and real assistive-technology acceptance remain separate and open.  
**Integrated Suite authorization:** NOT GRANTED.

## Baseline

The branch already contains `satoshium-public-services-review-012-record-shape-2026-10-24.md`, which documents 14 passing shape/unsigned-tamper cases in Governance and Ledger (normal exports accepted; arrays/null/numbers/empty objects and non-rehashed record changes rejected). Those tests did not establish issuer authenticity or authorization and are not being reopened here.

## Direct source findings

In `services/verification-ledger/tool.html`, `verifyGovernanceImport(record)`:
- checks the input is a non-array object;
- expects record type `Agent Governance Evaluation` and protocol `sat-agr-protocol-v1`;
- validates a 64-hex-character verification-reference field;
- recomputes SHA-256 checks across selected ordered fields and verifies consistency with embedded hash values;
- does not call a signature verifier, independently authenticated issuer service or institutional authorization API.

If the self-consistency check passes, `importGovernanceRecord` populates the Ledger form using the file's fields. It provides an explicit user-facing alert: **“Governance record integrity checked. This does not authenticate its issuer or grant institutional authority.”** The stored imported reference therefore remains a *claimed local reference* and not an institutional endorsement.

The Ledger form sets `anchorReady` to `TRUE` after a passing import. In the demonstrated model this means locally marked anchor-ready, **not** an actual Bitcoin transaction or confirmed anchor. This distinction must remain unambiguous in all public copy and future reports.

Governance's own `verifyUploadedJson` likewise uses recomputed SHA-256 self-consistency, not identity-backed signatures. The existing result alert says “Verification SUCCESS: JSON record integrity confirmed.” Read strictly, this refers to internal consistency, not authenticity.

## Interpretation and no-change decision

The absence of issuer authentication is an expressly declared service boundary, not grounds to introduce a purported full institutional signature authority into these public demonstration tools. A record generated or altered by someone with the ability to recompute unsigned hashes is outside the guarantee of plain SHA-256 self-consistency; that conclusion follows from the scheme, not a newly performed adversarial browser proof. No fabricated-signature or executable injection experiment was performed for this subreview.

The risk of visitors overinterpreting “verification” or `anchorReady` is a **communications and future governance-design consideration**, not evidence that these tools already perform institutional certification or blockchain anchoring.

## Recommended subsequent bounded checks

- Inspect whether the public UI's visible guidance uses “integrity,” “reference,” “anchor-ready” and “issuer” consistently, without turning a successful local check into an authorization claim.
- Test missing/wrong protocol and record-type rejection in cross-tool import as a distinct negative test if needed.
- Determine the appropriate owner and formal approval process for any future authenticated issuer signatures rather than silently redesigning this local demo.
- Review Aegis actor-count limits only against the actual published or backend contract; the documentation currently does not establish a maximum.

**Governing rule:** Authority follows the governed subject. Reference does not transfer authority.
