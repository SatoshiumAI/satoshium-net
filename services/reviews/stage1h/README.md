# IQ-001 — Offline normalized exchange-envelope prototype

**Date:** November 7, 2026. **Status:** isolated experimental fixture checker; NOT a production implementation or acceptance of IQ-001. No writes to `SatoshiumAI/satoshium-us`. All identifiers in the test file are fictional.

## Canonical read-only source pin

`SatoshiumAI/satoshium-us`, branch `phase004`, commit `da8333ddb85face8ee499abe93ef4bc4f555e867`. Source consulted: `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md` (IQ-001), `suite/interoperability/satoshium-suite-interoperability-decision-register-2026-10-03.md` (IDR-018–021), `registry/schemas/sreg-base-schema.json`, `registry/schemas/certification-record-profile.json`, `registry/registered-items/SREG-2026-0001/record.json`, `beacon/schemas/source-reference-schema.md`, and `attestor/validation/attestor-machine-contract-v0.1.md`.

Source observation: the Registry's own relationship terms include `registers`, whereas the agreed shared exchange vocabulary is separate (`references`, `derived-from`, etc.). The prototype rejects `registers` when presented as a **shared** exchange predicate; it does **not** claim Registry's internal `registers` field is invalid, nor auto-convert it to a shared predicate. Any adapter would need a governed explicit mapping.

## Use

Requires Node.js 20+ and no package dependencies:

```bash
node reference-envelope-prototype.test.cjs
```

The fixture is a normalized synthetic Certifier→Registry scenario; the adapter from real Registry/Suite source data is **NOT** implemented. The module checks required fields, conditional fields explicitly specified by the caller, a limited fictional reference identifier shape, known source institution, controlled relationship vocabulary, explicit provenance and accessibility, authority-context disagreement and unknown markers. It returns `VALID_ENVELOPE_ONLY`, `FAIL` or `UNKNOWN` and never grants authority.

**Nonclaims and limitations:** This proof of concept does NOT perform a real canonical identifier lookup, check source object issuance, enforce eligibility or registration policy, validate institutional schema, verify cryptography, verify version-at-use, confirm provenance, authorize writes, solve IQ-002–IQ-011, or establish generalization beyond this representation. `VALID_ENVELOPE_ONLY` must never be treated as approval to register/certify/publish or as a Suite PASS. Conditional applicability is caller-declared and thus not yet trustworthy. The identifier regex is only a simplistic fictional fixture constraint, **not a universal rule for Atlas, Navigator, or real object families**. Unknown is preserved in the response and never promoted to success.

The local test matrix intentionally includes invalid, unknown, missing required/conditional, and unsupported predicate cases. **The TypeScript/JavaScript-free GitHub source and locally run test suite can prove only this isolated checker behavior.** The formal IQ-001 implementation is still QUEUED and unaccepted.
