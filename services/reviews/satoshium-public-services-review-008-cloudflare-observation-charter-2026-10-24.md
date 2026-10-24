# Public Services Review 008 — Cloudflare Served Beacon Audit Charter

**Date:** October 24, 2026  
**Source cut:** `2e838eaeedddab5eba6ee194463b2d26eacdc761`  
**State:** OBSERVATIONAL AUDIT CONFIGURED — RESULTS PENDING.

Review 004 established seven selected Services pages, with exactly two existing explicit `beacon.min.js` script tags in GitHub source. The sole relevant plugin search did not surface a Cloudflare account connector. The Cloudflare dashboard's configured Analytics site, token provenance, automatic injection setting, dashboard metrics and real visitor counts are therefore **not verified**.

This Chromium job observes live rendered beacon script count and presence of token attribute, browser script/measurement HTTP response status, related failed requests, and page exceptions at the seven existing Services pages. It captures **no measurement request payload**, visitor-identifying information, submitted tool inputs or Cloudflare site credentials. CI-generated page loads **are synthetic test traffic** and must never be called independent visitor interest or legal use evidence.

Official Cloudflare FAQ confirms manual vs automatic beacon behavior and that only one usable snippet should be present per page: https://developers.cloudflare.com/web-analytics/faq/ . Automatic setup can inject on all proxied pages unless rules intervene; manual installation only on pages with the code. Observed served script presence proves browser delivery in one runner, not account ownership, dashboard collection or that real visitors are being measured.

**No snippets added, deleted or modified by this audit.** Results must be checked before authorizing any site-wide manual rollout; prevent duplicate beacons and unnecessary ingestion traffic.
