# Satoshium Public Services — Review 005: Visitor Path and Calls-to-Action Audit

**Date:** October 24, 2026 (Pacific)  
**Source baseline:** `c9f36c0ef68932bb2f316259c5e507db04276cf0` · `SatoshiumAI/satoshium-net`, branch `phase004`  
**Disposition:** **SOURCE LANDING-PAGE CORRECTION COMMITTED — LIVE CTA/BROWSER ACCEPTANCE PENDING**  
**Public Suite 1.0 integrated product release:** NOT AUTHORIZED.

## Audited problem

`services/index.html` already owns the public **Satoshium Services** landing page and includes substantial architecture, service descriptions and overview links. Its original hero explained platform capabilities at a high level, but first-time visitors had to read broad platform copy and multiple technical cards before finding a tool. The Aegis card notably linked to its overview and architecture rather than directly offering the already tested service panel. This created avoidable friction, not a missing technical capability.

Review 002 independently tested all three tools in Chromium: Aegis successfully fetched live sample inspection JSON, Governance produced a local evaluation and Ledger generated a local integrity record. Review 003 independently exercised two tools' JSON export/integrity verification, repaired the Ledger's unverified Governance-import boundary and confirmed 390px overflow-free layout. These specific claims ground the new hero and CTA copy.

## Targeted landing-page change

Preserve the full institutional/service narrative; no redesign of settled Suite authority or replacement of existing `/services/` hub.

- Change only the hero introductory sentence to state the **three actual tool activities**.
- Add an early, responsive, accessible **Choose a tool to try** section with three direct links:
  - `/services/aegis/aegis-service-panel.html` — **Try Aegis Inspection**; sample actor preset and live read-only API, no activation/certification/mutation.
  - `/services/agent-governance/tool.html` — **Try Agent Governance**; bundled example/browser reference evaluation, no external rule enforcement.
  - `/services/verification-ledger/tool.html` — **Try Verification Ledger**; local record generation/JSON SHA-256 check, not Bitcoin publication or issuer authentication.
- Add a feedback email call to action for voluntary research/developer feedback.
- State demonstration-input/no-confidential-data guidance and avoid telling visitors they have passed formal institutional validation.
- Keep existing overview pages and all deeper sections; no new site analytics snippet, service backend, database, consent tracking or canonical object.

## Required independent acceptance

1. Verify commit content and branch HEAD.
2. Check each landing-page CTA live HTTP status and actual browser navigation; ensure matching tool heading, reachable actions and exact correct path.
3. Test mobile layout for the three-card group, no horizontal overflow; check keyboard navigation into card CTAs.
4. Check user-facing statements continue to distinguish read-only Aegis API from local reference tools and SHA-256 integrity from issuer authenticity.
5. Check existing Cloudflare analytics deployment mode separately before instrumentation. Review 004 design-approved analytics only; no new tracking authorized in Review 005.

**Source edit is not a public served/browser PASS until the post-deployment tests are inspected.**
