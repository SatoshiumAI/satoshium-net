# SATOSHIUM Public Services — Review 013 Browser Network Evidence

**Date:** October 24, 2026
**Disposition:** COMPLETE — APPROVED (BOUNDED FOUR-PAGE ORIGIN OBSERVATION)
**Human rehearsal:** NOT PERFORMED
**External pilot and participant collection:** NO-GO / NOT STARTED

## Evidence

Automated GitHub Actions [run 40132092791](https://github.com/SatoshiumAI/satoshium-net/actions/runs/40132092791), job `120985775543`, **success**. The script `services/reviews/services-review013-network-evidence.cjs` used headless Playwright Chromium against public served pages; it recorded URL **origins** and request methods/resource types internally but logged only domain origins, aggregate API count, HTTP statuses and page errors. Sample tool interactions were synthetic; the Aegis API endpoint was mocked inside Chromium.

| Page | HTTP | Observed distinct request origins | Aegis API calls | JS page errors |
|---|---|---|---:|---:|
| Services hub | 200 | `satoshium.net`, `satoshium.link`, `satoshium.ai`, `static.cloudflareinsights.com`, `cloudflareinsights.com` | 0 | 0 |
| Aegis panel | 200 | All five above plus `api.satoshium.net` | 1 (mocked) | 0 |
| Agent Governance | 200 | Same five as hub | 0 | 0 |
| Verification Ledger | 200 | Same five as hub | 0 | 0 |

## Consequences for pilot notices

The browser-origin audit **corroborates** the previously source-observed Cloudflare Analytics and shared-footer requests and **adds** evidence of at least one `satoshium.ai` request in every inspected page. The draft consent notice and participant task sheet have been amended to mention the additional domain dependency without attributing unverified data practices or suggesting that actual confidential tool contents were transmitted.

## What this did not test

- The mock intercepted Aegis API URL requests and supplied a harmless synthetic JSON response; **no production API handling, application log retention, response validity or infrastructure security claim follows**.
- Request origin alone does not show exactly which paths, data contents, cookies, IP addresses, referrers or headers were sent to any service.
- A four-page sample is not a full network privacy/consent audit; third-party terms, effective provider processing and retention practices remain unverified.
- Observed Analytics requests do not prove a participant, completed task, unique visitor or signed-up user.
- The Governance and Ledger pages did not make observed `api.satoshium.net` requests during these specific scripted local task flows; this does not guarantee absence under all future code paths.
- No participant consent, personally identifying feedback, external invitation, real human rehearsal or integrated Suite launch was undertaken.

## Review 013 gates

**G05 consent:** Draft notice more complete, **still BLOCKER** until contact routes, actual processing practices, method and wording are explicitly approved.
**G06 feedback handling:** **BLOCKER** until steward, storage, access, deletion and incident process approved.
**G07:** Manual Review 011 native browser zoom and screen reader checks remain OPEN.
**G08:** Evidence obtained for this source revision but pre-invitation regression must be refreshed when pilot is authorized.
**G09:** Technical automation verified only; human facilitator rehearsal OPEN.
**G10/G11:** Invitation and session authorization NOT GIVEN.

**Disposition:** Network origin subreview COMPLETE — APPROVED (BOUNDED). Review 013 pilot execution remains NO-GO.

**Authority follows the governed subject. Reference does not transfer authority.**
