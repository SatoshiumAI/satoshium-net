# Satoshium Public Services — Review 007 Malformed JSON Verification Correction

**Date:** October 24, 2026
**Source baseline:** `b9fc2af6918993e6911800e31ddb0028a6b5483b`
**Disposition:** SOURCE FIX COMMITTED — POST-DEPLOY BROWSER VERIFICATION REQUIRED.

Both standalone Governance and Verification Ledger JSON verification paths previously called `JSON.parse` on arbitrary uploaded content without a catch, unlike the Ledger Governance-import boundary hardened in Review 003. Catch malformed/unreadable or non-object records, show a bounded verification failure alert, and always reset file input. Do not alter SHA-256 verification for valid exported records, institutional roles, or trust claims.

**Evidence gate:** rerun independent Chromium invalid JSON and valid-record regression **after** Pages deployment and inspect observed alerts/exceptions. A green workflow alone does not close a defect. Existing mobile/keyboard and Aegis negative cases remain separate observations.
