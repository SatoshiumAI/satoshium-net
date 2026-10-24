# Public Services — Five-Page Cloudflare Analytics Rollout

**Date:** October 24, 2026 (Pacific)  
**Source cut:** `3deeaffe6c210068cbf1d4146be306f6af4c8486`, `SatoshiumAI/satoshium-net` `phase004`  
**Owner-supplied manual beacon:** `1f9a86c180684740a44ffb9899e98888` for `satoshium.net` (not a password).  
**Scope:** five previously uninstrumented public Services pages. **Post-deploy live verification required**.

The founder supplied the exact existing Satoshium .net Web Analytics snippet. Review 008 already established from independent GitHub-hosted Chromium that both Agent Governance pages load their existing beacon (script HTTP 200), return measurement HTTP 204, and have no duplicate beacon, while the remaining five sampled pages have no beacon or automatically injected equivalent. The source ownership token coincides with the founder's supplied token.

**Apply one manually installed beacon just above `</body>` in:**
- `services/index.html`
- `services/aegis/index.html`
- `services/aegis/aegis-service-panel.html`
- `services/verification-ledger/index.html`
- `services/verification-ledger/tool.html`

**Preserve without changes:** the two Agent Governance pages that already use the same token. Use exactly the founder-supplied `type='module'` script for the new five pages. No event telemetry, tracking IDs, visit claims, service records, form fields or analytics payload dimensions added.

**Acceptance:** after deployment, rerun existing `Services Analytics Served-Page Audit` against all seven URLs and inspect actual browser observations: one DOM beacon each; script request HTTP 200; measurement POST response (generally HTTP 204); no duplicate beacon, relevant network errors or page JS exceptions. Note that a successful POST does not establish immediate dashboard reporting, real visitor interest or tracking of completed tool actions. Confirm displayed aggregate Cloudflare dashboard metrics separately and avoid counting CI automation as genuine visitors.

**Privacy constraint:** site pageview analytics do not imply transmitted user-submitted evaluation payloads. Review notice accuracy and never send policy text, actor IDs, approval tokens or ledger records as event data.

**No change:** Suite 1.0 documentary baseline and formal eight-institution governance. No entire-Suite product release, USPTO filing or outreach authorization is implied.
