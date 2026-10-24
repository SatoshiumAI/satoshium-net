# Satoshium Public Services — Review 004: Cloudflare Analytics, Attribution, Privacy and Engagement Measurement

**Date:** October 24, 2026 (Pacific)  
**Repository:** `SatoshiumAI/satoshium-net`, branch `phase004`  
**Source review cut:** `87252f081491fd8aa91362afc939ced78ef95abb`  
**Status:** **REVIEW 004 COMPLETE — APPROVED (COVERAGE/PRODUCT-METRICS DESIGN AND RELEASE GATE ONLY)**  
**Instrumentation rollout:** **NOT AUTHORIZED BY THIS REVIEW**; Cloudflare dashboard/zone identity, automatic injection and token ownership must first be checked.  
**Suite 1.0 documentary baseline:** COMPLETE — APPROVED; integrated Suite 1.0 public product release separate and NOT AUTHORIZED.

## 1. Objective and measurement limits

The founder's planned modest next phase, following the targeted SATOSHIUM second-extension filing near November 30, 2026, is to expose already tested services clearly, instrument meaningful pages, invite targeted expert visitors, gather feedback and improve offerings grounded in actual use. This is not a campaign to market all eight institutions as one monolithic product.

**Separate three analytics layers:**

1. **Visitor acquisition and page experience** — Cloudflare Web Analytics pageviews, visits, page path, country, host, device type and referer host; valid for aggregated interest signals and approximate country distribution, not an exact identification of persons.
2. **Meaningful tool completion** — actual successful client interactions (Aegis read-only inspection response, governance evaluation result, Ledger record generation/verification), not merely users opening a page. This is **not measurable via Cloudflare Web Analytics custom events at the present documented capability**.
3. **Qualitative product validation** — explicitly volunteered feedback, reproducible anonymized test outcome, visitor cohort and versioned screenshot; cannot be inferred from pageviews.

Do not describe pageviews as unique humans, repeat visitors, completed evaluations or paid customers. Cloudflare's privacy model does not track individuals across time via cookies/localStorage/IP fingerprints, so **individual return-visit measurement is not supported by this baseline**. Do not add such tracking silently.

## 2. Primary source inventory — seven exact public files

Inspected each file from immutable commit `87252f081491fd8aa91362afc939ced78ef95abb` and searched for `beacon.min.js`, custom calls and user-facing privacy declarations.

| Published page / source path within `services/` | Embedded Cloudflare JS beacon | Source notes |
|---|---|---|
| `index.html` | **0** | Existing central Services landing, links to operational tools |
| `aegis/index.html` | **0** | Agent inspection service overview |
| `aegis/aegis-service-panel.html` | **0** | Live read-only Aegis browser interface / API GET |
| `agent-governance/index.html` | **1** | Existing manual beacon token in markup |
| `agent-governance/tool.html` | **1** | Existing manual beacon; defines `satoshiumTrack` wrapper |
| `verification-ledger/index.html` | **0** | Ledger overview |
| `verification-ledger/tool.html` | **0** | Local record generation and export/verify |

This inventory covers seven selected service HTML files, **not every page or domain in Satoshium**. It confirms source snippets, not whether Cloudflare auto-injected another beacon at the edge or whether actual pageview reports arrived.

The Agent Governance tool's `satoshiumTrack(eventName, details)` wrapper invokes `window.cloudflare.insights.track` conditionally, but the sampled file contains **no identified invocation of that wrapper in its event handlers**. More importantly, the official current Cloudflare Web Analytics FAQ says **custom events are not supported**. An unused or unsupported JavaScript wrapper is not evidence of tool-completion analytics. Avoid depending on it, and do not silently promote it as working instrumentation.

## 3. Cloudflare primary documentation and product constraints (verified October 24, 2026)

Official current references:

- [Cloudflare Web Analytics FAQ](https://developers.cloudflare.com/web-analytics/faq/) — **custom events not yet supported**, only one analytics JS snippet should be rendered on a page; automatic proxy injection may include all pages; pages with manual setup collect only where snippet installed; hostname/CORS restrictions and CSP considerations.
- [Enabling Web Analytics](https://developers.cloudflare.com/web-analytics/get-started/) — explicit site/hostname configuration, token from **Manage site**, and differences between manually installed and automatically injected collection.
- [Web Analytics high-level metrics](https://developers.cloudflare.com/web-analytics/data-metrics/high-level-metrics/) — visits and pageviews are not equivalent; one visit can contain multiple pageviews.
- [Web Analytics dimensions](https://developers.cloudflare.com/web-analytics/data-metrics/dimensions/) — Country, Host, Path, Referer, Device type, Browser and OS.
- [Data origin and collection](https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/) — privacy-focused minimal browser metrics; beacon path and loading.
- [Cloudflare privacy-first explanation](https://blog.cloudflare.com/the-rum-diaries-enabling-web-analytics-by-default/) — no visitor-longitudinal tracking with cookies, localStorage or IP-based user fingerprinting.

A recorded hostname dimension or country is **aggregate analytics**, not a claim that visitors are paying clients. UTM-level campaign attribution is not reliably available from Web Analytics query-string metrics; use measured referrer hosts and optional voluntarily reported discovery channel instead.

## 4. Decisions on architecture and telemetry

**DECISION WA-001 — Existing Services landing remains authoritative:** `https://satoshium.net/services/`. Do not create a duplicate hub at `satoshium.ai/services/` without an explicit cross-domain decision.

**DECISION WA-002 — No mass snippet rollout now:** first verify Cloudflare `satoshium.net` Analytics site configured in its owner's dashboard, whether automatic injection is on, and whether the token already embedded in two Agent Governance pages belongs to that site. If automatic injection is enabled, **do not manually add duplicate beacons**.

**DECISION WA-003 — Sampled pages for phase-one acquisition measurement:** the seven-page table above; record all actual public CTA destinations, filtered page paths and referral sources. Expand only as justified by visitor testing. Confirm end-user privacy notice reflects any newly added analytics.

**DECISION WA-004 — Completion measurement needs distinct verified machinery:** Cloudflare Web Analytics alone does not implement custom event capture. Do **not** create fake `evaluation_complete` event claims, pixel hack redirects, instrument user-submitted prompt/actor/token data or external action payloads. A separate, privacy-reviewed, opt-in or clearly disclosed endpoint may later record only allowlisted event names/coarse tool identifiers (never raw inputs), but this is **not approved or built** during Review 004.

**DECISION WA-005 — No silent durable user identifiers:** do not add cookies, localStorage return-user IDs, IP retention, fingerprinting, or cross-domain user linkage merely to calculate repeat visits. If repeat visitors become a product requirement, evaluate a genuinely voluntary feedback/tester program or a separate consented analytics architecture.

**DECISION WA-006 — Inference limitations:** Web Analytics geography is country-level; no exact geolocation or visitor identity needed. Aggregation/sampling/blockers mean missing pageviews are not necessarily zero usage. Do not treat absence of records as proof no one visited.

## 5. Controlled analytics acceptance gate

Before installation:

- [ ] Inspect Cloudflare Web Analytics site `satoshium.net`, exact **Manage site** hostname/token and current automatic vs manual setup.
- [ ] Observe actual public served markup/network for `beacon.min.js` and pageview beacon request; check for duplicate injection, CSP blocking or hostname mismatch.
- [ ] Decide whether the current two Agent Governance manual snippets should be kept, normalized, or removed under the verified zone setup; do not make new token assumptions.
- [ ] Specify seven page paths for pilot and verify no duplicate JS script in the final rendered DOM.
- [ ] Review visitor-facing privacy wording for accurate pageview tracking disclosure versus non-persistence of *submitted evaluation content*.
- [ ] Test actual Cloudflare dashboard report attribution (at least one pageview by path, source/referrer and country) without asserting completeness or unique user history.
- [ ] If tool completion counts are desired, commission a **separate** privacy/security review and executable tests for a genuinely supported event collector; start with zero user-provided payload fields.

Following acceptance, annotate dates, page URL, installed mode, beacon token provenance and Cloudflare reports. Screenshots and aggregate exports may document public exposure but do not by themselves prove USPTO qualifying trademark use in commerce.

## 6. Six-month test plan (relative to actual extension approval, no deadline assumptions)

**Month 1:** clean Services landing copy, complete outsider verification and keyboard/malformed-input safety, confirm analytics deployment and baseline visits before outreach.

**Months 2–3:** invite a few users from narrowly matched AI agent-governance, Bitcoin integrity, developer and researcher communities; log opt-in feedback, referral source and useful outcomes. Observe whether they can finish one of three actual tasks.

**Months 4–5:** prioritize only service pain points supported by user-reported failures, aggregate usage or completed supervised tests; do not expand the eight-institution Suite for marketing's sake.

**Month 6:** consolidate immutable screenshots, current URLs/claims, independently recorded pageviews/referrals and dated feedback into a disciplined evidence pack. Independently verify the next USPTO case-specific deadline; do not confuse analytics existence with satisfying trademark legal use.

## 7. Next reviews and gate status

- **Review 005 — Existing Services landing CTA/usability/content and evidence alignment:** planned; no duplicate hub.
- **Review 006 — Qualitative testing, ethical outreach and preservation of actual marketing-use evidence:** planned.
- **Analytics deployment** — **OPEN / awaiting Cloudflare dashboard account configuration**, even though this design review is COMPLETE — APPROVED.
- **Tool-completion event measurement** — **OPEN / different telemetry stack and privacy consent decision required**.
- **Broad public integrated Suite 1.0 product release** — not authorized.

**REVIEW 004 — COMPLETE — APPROVED (inventory, official product verification, and controlled pilot design); no visitor tracking code modified.**
