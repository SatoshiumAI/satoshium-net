# SATOSHIUM Public Services — Review 013 Data-Flow and Privacy-Notice Evidence

**Prepared:** October 24, 2026  
**Disposition:** COMPLETE — APPROVED (SOURCE-SCOPED DESK REVIEW ONLY)  
**Human rehearsal:** NOT PERFORMED  
**Consent and feedback handling:** DRAFT; NO PARTICIPANT DATA COLLECTED  
**Pilot outreach and external sessions:** NO-GO

## Evidence examined

Inspected source files directly from `SatoshiumAI/satoshium-net`, branch `phase004`, for four existing public pages: `services/index.html`, `services/aegis/aegis-service-panel.html`, `services/agent-governance/tool.html`, and `services/verification-ledger/tool.html`.

| Page | Source-observed network behavior | What this establishes |
|---|---|---|
| Services landing | Loads Cloudflare Web Analytics beacon; fetches shared HTML footer from `satoshium.link`; includes mailto contact links | Page requests external/other-host resources; mailto is visitor-initiated if clicked |
| Aegis inspection panel | Loads Analytics and shared footer; `Run Inspection` sends selected actor IDs via GET request to `api.satoshium.net` with a 10-second UI timeout | Aegis sample IDs enter an API URL; no actual agent activation inferred |
| Agent Governance tool | Loads Analytics and shared footer; browser-side demonstration evaluation, JSON download and local verification; optional mailto | Source does not show submitting entered governance text to a backend endpoint |
| Verification Ledger tool | Loads Analytics and shared footer; local record generation, export, verification and Governance JSON import | Source does not show uploading ledger records to a backend endpoint |

**Source inspection is not a network-capture audit of browser, CDN or API server logs.** It cannot establish exact IP-address retention, hosting logs, Cloudflare processing terms, third-party privacy practices or a promise of total noncollection.

## Consent copy correction

The prepared consent draft now explicitly discloses the `satoshium.link` shared-footer request alongside Cloudflare Analytics and warns that backend and third-party logging practices remain unverified. This is a source-backed wording correction, **not a new network call or site change**.

## Pending authorization decisions

The founder or designated privacy reviewer still must approve accurate external-service/privacy representations, including responsibility for the footer host, and select consent contact, feedback channel, steward, access controls, retention, withdrawal/removal routing and incident process. The proposed 30-day raw-note deletion window is a recommendation, not an adopted practice.

Review 011 real screen-reader and native zoom acceptance stays OPEN. Review 013 pilot remains NO-GO to recruitment, collection or real sessions.

## Internal facilitator rehearsal status

Existing automated Chromium scripts already passed five synthetic technical tasks. The actual human facilitator rehearsal has **not occurred**, and no factual facilitator responses or participant feedback exist. Do not mark G09 fully complete on the strength of this source inspection.

**Authority follows the governed subject. Reference does not transfer authority.**
