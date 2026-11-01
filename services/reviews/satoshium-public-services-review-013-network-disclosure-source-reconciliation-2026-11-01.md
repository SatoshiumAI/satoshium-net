# SATOSHIUM Public Services — Review 013 Network Disclosure Source Reconciliation

**Date:** November 1, 2026 (Pacific)  
**Repository:** `SatoshiumAI/satoshium-net`, branch `phase004`  
**Disposition:** SOURCE-LEVEL REVIEW COMPLETE — PRIVACY AND PILOT GATES REMAIN OPEN  
**Method:** Read-only inspection of four public Services HTML files, comparison with October 24 Review 013 privacy/consent records. No packet capture, server-log audit, real visitor, participant recruitment, or external API request performed.

## Repository and deployment baseline

The preceding task-sheet consistency commit `a2d6da0a157c8bc07ab0355d596735d283340992` had a successful GitHub Pages workflow when checked. This does not prove current remote host logging or privacy behavior.

## Source observations

| Page | Network-relevant source evidence | Limit |
|---|---|---|
| Services hub | Loads Cloudflare Web Analytics beacon; calls `fetch("https://satoshium.link/components/sou_footer.html")`; references `satoshium.link/assets/sayings.js` | Source does not establish provider-side request logs or retention |
| Aegis inspection panel | Cloudflare beacon and shared-footer fetch; builds an API request using selected `actorIds` and `viewMode`, then `fetch(url, { signal: controller.signal })` with a 10-second AbortController timer | Does not establish API log retention, all browser/host requests, or downstream handling |
| Agent Governance tool | Cloudflare beacon, remote topbar loader, sayings script and shared-footer fetch; declares `satoshiumTrack(eventName, details)` | Found the function declaration, but no call outside its definition in the inspected file; do not claim task-completion analytics |
| Verification Ledger tool | Cloudflare beacon, remote topbar loader, sayings script and shared-footer fetch | No observation of provider-side logs or other network effects |

These results align broadly with the existing consent draft's distinction between locally generated Governance/Ledger records, Aegis API requests, site-level analytics and external/shared assets.

## Qualifications and follow-ups

1. **Consent language requires owner verification.** The consent draft mentions a Satoshium mark image at `satoshium.ai/assets/satoshium-mark.svg`; prior browser diagnostics observed image GETs. This source review does not re-establish current network delivery of that image or its host logging.
2. **Do not promise zero collection.** Shared scripts, image hosts, analytics and API servers may generate technical logs independently of any optional pilot observation sheet.
3. **No pilot contact route is approved.** A public email or feedback link is not automatically an approved withdrawal contact or consent-recording channel.
4. **Do not equate a JavaScript declaration with an event.** A declared `satoshiumTrack` helper is not evidence that a participant action was tracked.
5. **No emergency site change justified.** The inspected source does not establish a newly introduced privacy defect; the missing evidence concerns infrastructure-side behavior and founder decisions.

## Remaining gates

**G05 consent and withdrawal:** BLOCKER.  
**G06 stewardship, private storage, access and retention:** BLOCKER.  
**G07 real zoom/screen-reader acceptance:** OPEN.  
**G08 deployment freshness before invitation:** REQUIRED LATER.  
**G09 human facilitator rehearsal:** NOT PERFORMED.  
**G10 invitation authority / G11 session authority:** NOT GIVEN.

**Next evidence:** Verify logging and retention with the responsible owners for API, shared assets and analytics; select an actual steward and secure storage process; complete manual accessibility/rehearsal evidence. No outreach or real pilot activity is authorized by this audit.

**Governing rule:** Authority follows the governed subject. Reference does not transfer authority.
