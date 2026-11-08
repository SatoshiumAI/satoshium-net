# Stage 1N — IQ-006 Controlled Outcome Namespacing

**Date:** November 7, 2026 (Pacific). **EXPERIMENTAL OFFLINE TOOL ONLY — NOT PRODUCTION IQ-006 ACCEPTANCE.**

## Canonical source pin

Read-only `SatoshiumAI/satoshium-us`, branch `phase004`, commit `da8333ddb85face8ee499abe93ef4bc4f555e867`:

- `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md` — IQ-006, P0, QUEUED.
- `suite/interoperability/satoshium-suite-interoperability-decision-register-2026-10-03.md` — IDR-023.
- `suite/interoperability/satoshium-interoperability-review-schema-serialization-compatibility-2026-10-03.md` — Step 5, institutionally distinct outcome semantics.
- `attestor/validation/attestor-machine-contract-v0.1.md` — one verified issuer-local controlled `evaluation.outcome` vocabulary: `supported`, `partially-supported`, `not-supported`, `contradicted`, `indeterminate`.

The above Attestor controlled values are distinct from a Trust Statement's **bounded conclusion**. Other domain labels in the experimental mapping are **illustrative**, not frozen normative namespaces. For other domains the checker only preserves opaque text and returns `vocabulary_conformance: NOT_VERIFIED`.

## Behavior and run

```bash
node services/reviews/stage1n/outcome-namespace.test.cjs
```

Twenty-seven tests on fictional typed outcome references. The checker requires separate `institution`, `outcome_kind`, `value`, `subject_reference` and `provenance_reference`; refuses generic `status`, rejects unknown domain combinations, retains an explicit `unknown` result, and reports same lexical strings across institutional outcome domains as `DIFFERENT_AUTHORITY_DOMAIN`. Even two identical typed lexemes are **not** claimed to establish equivalent substantive authority or true conclusions.

`TYPED_ONLY` is structural and never `VALID`, `CERTIFIED`, `SUPPORTED`, `TRUSTED`, or authorization. No source evaluation or policy check occurs.

## Limitations

No actual Certifier/Registry/Anchor/Attestor outcome decisions were created or queried. The `DOMAINS` table is a **restricted teaching fixture**, not an officially adopted interoperability schema or complete Suite vocabulary. Actual issuance, validation, verification, review, evaluation, and trust decision authorities remain with their independent institutions. The prototype does not authenticate provenance, check outcomes against unverified issuer vocabularies, resolve current object state, or decide trust; it does not complete IQ-006.

No changes to canonical `satoshium-us`; no external requests, GB2 browser usage, or Suite 1.0 release.
