# Satoshium — Public Services Readiness Review 001: Visitor-Facing Inventory & Instrumentation Assessment

**Review date:** October 24, 2026  
**Repository:** `SatoshiumAI/satoshium-net`, `phase004`  
**Fixed source evidence:** `16b6b9a3836798c2e9d7a1c45fbeb5cea28b7cd3`  
**Disposition:** **SOURCE DISCOVERY AND CLAIM/INSTRUMENTATION REVIEW COMPLETE — APPROVED (SCOPED). LIVE INTERACTION ACCEPTANCE PENDING.**  
**Parent context:** Satoshium Suite 1.0 Governed Architecture & Historical Production Evidence Baseline approved October 24. **Public integrated operational Suite 1.0 product not released or certified.**

## Product direction and trademark planning

The founder's agreed next phase is modest, service-led and evidence-led: instrument meaningful pages, make the existing Services landing page clearer, prove usability to outsiders, offer plain-language CTAs, conduct selective outreach to developers/researchers/Bitcoin and integrity communities, measure engaged use and referrals, preserve qualified public-use evidence, and improve only what actual users engage with. Do not market eight sovereign Suite institutions as one consumer product.

Trademark: SATOSHIUM serial 99216460; intent-to-use Notice of Allowance dated January 20, 2026 and previous extension are founder-provided planning facts. **Target the second extension for on or near November 30, 2026**, subject to official USPTO TSDR deadline/status confirmation, eligibility/good-cause statements and an actual timely filed receipt. This review does not file anything or assert a statutory deadline.

## Actual deployed services location — crucial architectural separation

The user-facing service hub **already exists** at `https://satoshium.net/services/` in `SatoshiumAI/satoshium-net`. `satoshium.ai` homepage has a Public Operational Services section linking to these experiences, but its own repository does not own the `/services/` files. Avoid creating a competing generic `satoshium.ai/services/` without a deliberate cross-domain navigation decision.

**Existing service pages sampled at fixed HEAD:**

| Surface | Path | Current visitor proposition and source boundary |
|---|---|---|
| Services landing | `services/index.html` | Existing `Satoshium Services` page with entry points for onboarding, Agent Governance, Aegis and Verification Ledger; **refine, do not duplicate** |
| Aegis overview | `services/aegis/index.html` | Agent Firewall explainer and explicit `Try the live Aegis Service Panel` CTA |
| Aegis read-only panel | `services/aegis/aegis-service-panel.html` | Public browser UI; requests `https://api.satoshium.net/certification-authority?viewMode=...&actorIds=...` via GET; read-only scope stated |
| Agent Governance | `services/agent-governance/tool.html` | Browser-side governance evaluation reference tool, run/load demo, downloadable/verification outputs; not autonomous external enforcement |
| Verification Ledger | `services/verification-ledger/tool.html` | Browser-side deterministic ledger / integrity record UI, generate/verify/download controls; no claim of a new blockchain entry or server-side persistence |

**Additional technical candidate:** Certifier Ops Toolkit is at `https://satoshium.us/certifier/tools/ops-toolkit/`, but the page explicitly does **not** execute Python in the browser; it is a command-line/documentation console. Its 89 tests + three release-CLI checks passed in GitHub Actions on October 24. Treat it as a developer-facing downloadable workflow, not a browser app. Similarly, historical Attestor executable-validator v0.3 sources do not become current production v0.5 runtime by listing them as services.

## Analytics source inventory — sampled pages only

| Page | Cloudflare Web Analytics source snippet currently present? |
|---|---|
| Services landing | **No** |
| Aegis overview | **No** |
| Aegis service panel | **No** |
| Agent Governance tool | **Yes** — currently contains a Web Analytics beacon and a `satoshiumTrack` wrapper |
| Verification Ledger tool | **No** |

Do **not** infer this five-page sample describes all Satoshium domains, or that the existing Agent Governance beacon delivers verified metrics. Source snippet presence ≠ completed Cloudflare dashboard registration ≠ actual beacon request delivery ≠ meaningful tool-use event completeness. The currently present Agent Governance beacon must be reconciled with Cloudflare site/domain configuration before any mass rollout. Preserve existing unrelated analytics instrumentation.

## Outsider-usability acceptance gaps

1. **Aegis API:** panel JavaScript fetches `api.satoshium.net`; verify actual sample actor request, response fields and appropriate error states in a real browser, including CORS, not only document title/HTTP 200.
2. **Agent Governance:** exercise default/example input, run evaluation, stable deterministic result where expected, downloadable receipt and result verification. Distinguish client-side rule simulation from independently authoritative institutional decision.
3. **Verification Ledger:** exercise sample entry generation, digest/verification, export/import handoff with Governance only where supported. Document what is local-browser, what is cryptographic and what does **not** get anchored on Bitcoin.
4. **Services landing:** confirm each primary CTA resolves to the correct operating page and reports its true capability, method and audience. Offer small-path entry points: `Inspect an agent`, `Evaluate a proposed agent action`, `Create/verify an integrity record`; clearly label demonstration versus live API and sensitive-data boundaries.
5. **Accessibility:** keyboard focus/order, labels, live output announcement, visible error states, responsive mobile layout and reduced-motion where relevant.
6. **Security/privacy:** browser JS hashing is not a credential vault. Avoid telemetry payloads that capture supplied actor IDs, policy text, tokens, wallet addresses, ledger content, raw outputs, IP-level user profiles or confidential prompts. Use anonymous aggregate events only; publish an accurate visitor-facing privacy description before introducing new telemetry.
7. **Evidence:** Cloudflare pageview/source-domain reports can show visits/referrers and geographic approximations if enabled, but do not automatically measure unique human users, reliable repeat visits or actual tool success. Consent, retention and product analytics choice must be separately reviewed.

## Recommended minimum implementation sequence — deferred until readiness tests and founder's extended-period plan

- First execute **browser tool walkthroughs** for the three existing public tools and audit links from existing Services hub (no unnecessary redesign).
- Add consistent Cloudflare pageview instrumentation only to confirmed visitor-relevant pages, using correctly scoped existing zone/site token after verification; check no duplicate beacons.
- Add **minimal aggregate interaction telemetry** (`service_open`, `try_sample`, `evaluation_complete` / `inspection_complete` / `record_generated`, `request_error`) with a strict allowlist of non-personal event names and coarse product identifiers. Never send entered content.
- Refine **existing** `/services/` page with three plain-language paths, a straightforward capability explanation, sample/demo CTA and feedback contact; Aegis API availability and local tools' provenance disclosed.
- Define exposure cohorts (AI/agent governance, Bitcoin/integrity, researcher audiences), small opt-in outreach, and a weekly evidence ledger: visits, tool completion **counts**, referrals, consented qualitative feedback and versioned screenshots. Do not equate visits with trademark-qualifying service commerce or actual use without trademark counsel/USPTO evidence review.
- Decide future product enhancements only from observed visitor interactions; avoid broad eight-institution marketing.

## Release/advertising boundary

**Satoshium Suite 1.0 documentary architecture specification remains approved**. Marketing individual tested tools is a **separate bounded services proposition** and does not assert generalized automated cross-institution implementation, universal trust, or platform product-release readiness. Any service's truthfulness, reproducibility, claim scope and technical acceptance must be independently satisfied.

**Next technical review:** actual three-tool Chromium functional smoke test, Aegis API/CORS and download/verify behavior. Then perform an existing `/services/` CTA/link audit and controlled instrumentation proposal. Do not silently alter user-visible service claims before verifying them.

**Status:** SOURCE INVENTORY AND INSTRUMENTATION REVIEW COMPLETE — APPROVED (bounded). TOOL FUNCTIONAL BROWSER ACCEPTANCE OPEN.
