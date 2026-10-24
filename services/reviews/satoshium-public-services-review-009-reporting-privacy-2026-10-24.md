# Satoshium Public Services — Review 009: Cloudflare Dashboard Baseline and Visitor Disclosure

**Date:** October 24, 2026 (Pacific)  
**Review source commit:** `1b9aa06d2f8a11f13cf2aa946f4e15e018425103`  
**Classification:** **ANALYTICS BASELINE REVIEW COMPLETE — APPROVED (FOUNDER SCREENSHOT INTERPRETATION); DISCLOSURE SOURCE CHANGE COMPLETE, LIVE ACCEPTANCE PENDING.**  
**Actual outside-audience pilot:** NOT STARTED.  
**Full eight-institution public product release:** NOT AUTHORIZED.

## 1. Cloudflare dashboard evidence (founder screenshots, October 24)

The owner shared two views of the Cloudflare Web Analytics page for **satoshium.net**, both under the dashboard's **Last 24 hours (PDT)** interval. These are **distinct filter views**, not comparable before/after engagement cohorts:

| Site filter | Bot filter | Displayed visits | Displayed pageviews | Interpretation |
|---|---|---:|---:|---|
| `Site is in satoshium.net` | `Exclude bots equals Yes` | **0** | **0** | No visits/pageviews surfaced under this filter at screenshot time |
| `Site is in satoshium.net` | Bot exclusion removed | **17** | **17** | Web Analytics reported 17 visits and 17 views in a broader unfiltered view |

The unfiltered screenshot also displayed **279 ms page load time**, not a comprehensive site-wide Core Web Vitals assurance. Cloudflare's central chart still said *not enough data*. The screenshots do not expose visitor identities, pathname attribution, sources, conversion events, session distinctions or real participation.

**Critically, the 17 cannot be called 17 external human visitors.** GitHub-hosted Chromium testing of the seven pages was conducted that same day and may be included. The dashboard observations establish that reporting now exists, whereas a prior screenshot reported zeros. The two current counts reflect **different bot filters**, not established analytics latency alone.

## 2. Browser-side integration already accepted

Seven public Services pages were instrumented using the founder-confirmed same-site Cloudflare Web Analytics token. Browser audit [40116816908](https://github.com/SatoshiumAI/satoshium-net/actions/runs/40116816908) independently observed one Cloudflare beacon per page, script GET HTTP 200, and measurement POST HTTP 204. This is evidence of network submission, not proof of dashboard real-human interest or tool completion. See `services/reviews/satoshium-public-services-cloudflare-rollout-final-2026-10-24.md`.

## 3. Visitor communication update — narrow and truthful

Update four visitor pages, without touching analytics token, beacon logic or tool behavior:

- **Services landing page:** disclose aggregate pageviews/referral tracking in plain language and distinguish page visits from completed tasks.
- **Agent Governance tool:** preserve the local processing claim while distinguishing pageview measurement from the submitted evaluation data.
- **Verification Ledger tool:** preserve local record-generation claim while distinguishing pageview measurement from local verification records.
- **Aegis inspection panel:** clarify that running inspection sends selected actor IDs to `api.satoshium.net` by a read-only API request, while pageview analytics is separate and does not measure inspection completion.

This review cannot verify backend API log retention or all Cloudflare data processing. It therefore makes no claim of zero third-party network collection or absolute anonymity. No confidential data, personal details or submitted policy/ledger content are intentionally sent as **custom analytics dimensions** by this update.

## 4. Reporting procedure for the genuine-user pilot

When the pilot begins, preserve two separately labeled dashboard snapshots for a given period: **bot-excluded** and **unfiltered**. Use the same hostname, time zone, date range and path/referrer breakdown where available. If a report shows zero, record zero **as reported**, not an assertion that nobody actually accessed the tools.

Label automated QA traffic and founder-led site checks as potentially contaminating the measurement window; do not subtract unverified quantities from dashboards. Record volunteer task outcomes separately under the consent-based Review 006 evidence register. Pageviews never establish a completed evaluation, ledger verification or legal trademark use.

Do not collect durable identifiers or fingerprint visitors to manufacture repeat-visitor statistics.

## 5. Remaining acceptance

- Verify published HTML after GitHub Pages deployment and check that all four notice additions are readable, with existing buttons and workflows intact.
- Check at least the main Services CTA and Aegis read-only sample inspection still work following disclosure edits.
- Confirm real dashboard path/referrer/country breakdown from a later, comparable bot-excluded date window when genuine use occurs.
- Keep the voluntary pilot and use-in-commerce trademark analysis separate; the founder plans to submit a second SATOSHIUM intent-to-use extension on/near November 30, 2026, subject to checking the official case and retaining the filing receipt.

**Review 009 is a bounded reporting/disclosure review. There is no claim of new outside traffic, analytics conversion support, production-release authorization or USPTO filing.**
