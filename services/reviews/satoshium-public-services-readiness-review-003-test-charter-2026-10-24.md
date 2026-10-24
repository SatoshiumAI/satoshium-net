# Public Services Review 003 — Export Integrity, Invalid Input and Mobile Inspection

**Date:** October 24, 2026  
**Pre-review evidence commit:** `bc410357f60669214cbcd4ff58e1b45c846d428d`  
**Status:** REVIEW ACTIVE — independent browser checks configured; results not yet adjudicated.

## Planned observations

A GitHub-hosted Playwright/Chromium runner will load current user-facing Governance, Verification Ledger and Aegis pages, testing:

- Governance sample record creation → JSON download → intact reimport integrity verification → altered action text failure.
- Ledger default entry → JSON download → intact reimport verification → altered notes failure.
- Ledger ingestion of a governance record with a deliberately altered agent name to assess whether importer verifies source before populating downstream fields. This is a **synthetic browser test** and uses no real user content.
- Three mobile-sized pages at 390px: HTTP load, horizontal content overflow and JavaScript errors.
- Initial keyboard Tab focus on the Governance tool as a bounded indicator, not WCAG conformance.

The test script produces compact sanitized booleans rather than storing entire service records. Its passing GitHub workflow means only that observations ran; each field must be reviewed for substantive PASS or defect. Do not market local SHA-256 integrity checks as institutional certification or blockchain publication.

**No application code changes or release authorization in this setup batch.**
