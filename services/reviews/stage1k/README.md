# Stage 1K — IQ-003 source lifecycle / publication comparison

**November 7, 2026 · EXPERIMENTAL OFFLINE COMPONENT ONLY.** No canonical institution, Suite version or release configuration is modified. Source records and dates are fictional.

## Read-only authoritative sources

`SatoshiumAI/satoshium-us` `phase004` pinned to `da8333ddb85face8ee499abe93ef4bc4f555e867`:
- `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md` — IQ-003, P0 QUEUED.
- `suite/interoperability/satoshium-interoperability-review-lifecycle-publication-state-propagation-2026-10-03.md` — Step 7; source-state-at-use ≠ current source state; receiver chooses response.
- `suite/interoperability/satoshium-interoperability-review-version-correction-propagation-2026-10-03.md` — Step 8; preserve historical basis without mutation.
- `registry/schemas/sreg-base-schema.json` and `attestor/validation/attestor-machine-contract-v0.1.md` — issuer-specific examples of distinct state dimensions.

## Run

```bash
node services/reviews/stage1k/state-mapper.test.cjs
```

24 synthetic tests. The prototype compares a historical **source** snapshot to a separately reported current **source** snapshot under an explicitly supplied, fictional approved-values profile. It preserves independently recorded version, lifecycle and publication fields; reports a changed-dimensions list; rejects missing or unrecognized values; and reports unavailable current state as `UNKNOWN` without falsely implying a historical state is current.

`receiver` fields represent a distinct institution and remain separate from source snapshots. No downstream-action decision is made (`NOT_DECIDED`) and neither institutional approval nor source authority is created.

## Nonclaims

This is **not** live source resolution (IQ-002), an adopted issuer mapping, real source-state authentication, canonical source verification, actual receiving-institution policy, a publishing operation, a correction mechanism, or Suite-wide IQ-003 acceptance. The caller-supplied profile is untrusted; a later accepted adapter must pin source-owned policy and version. Real source `published` lifecycle values must be handled according to actual governing institutional rules; the fictional Certifier profile here intentionally rejects that value. Unknown values remain unknown; no schema drift is automatically coerced into a favorable state.

> Creation ≠ activation ≠ publication. Reference does not transfer authority.
