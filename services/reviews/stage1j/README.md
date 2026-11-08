# Stage 1J — IQ-002 fictional offline reference resolver

**Date:** November 7, 2026 (Pacific). **Disposition:** EXPERIMENTAL — NOT PRODUCTION ADOPTED; IQ-002 QUEUED / ACCEPTANCE OPEN.

**Read-only sources:** `SatoshiumAI/satoshium-us` at `da8333ddb85face8ee499abe93ef4bc4f555e867`. Reviewed the October 3 `suite/interoperability/` sources: `satoshium-suite-interoperability-implementation-queue-2026-10-03.md` (IQ-002); `satoshium-interoperability-review-identifier-reference-resolution-2026-10-03.md`; `satoshium-interoperability-review-failure-unknown-state-handling-2026-10-03.md`; and `satoshium-interoperability-review-version-correction-propagation-2026-10-03.md`.

This source is implemented as a deliberately small **pure in-memory resolver**, not an institutional interface. It never fetches a URL, checks a current source, mutates a record, assigns institutional authority, verifies a real canonical object, infers an Atlas or Navigator identifier, or auto-follows successor IDs. Real-source versions and lifecycle states are not represented by the fictional fixtures.

Seven distinct outcomes: `resolved`, `unresolved`, `broken-reference`, `unavailable`, `superseded`, `withdrawn`, `stale`. Unknown/missing/ambiguous returns `unresolved`; this is a test-model choice, not a universal final machine contract. A broken URL does not entail withdrawal. An unavailable source has `current_state: unknown`, retaining the prior state under `last_known` only. Superseded and withdrawn objects retain explicit historical version-at-use when in the supplied synthetic history. Requested versions are never silently replaced with newest.

Run with Node.js 22:

```bash
node services/reviews/stage1j/resolver.test.cjs
```

**Limitations:** The fictional catalog is a caller-supplied array; it can contain unverified or inconsistent source metadata. No cryptographic provenance, source-time authenticity, real resolver HTTP, cross-institution authorization, lineage creation, negative transport simulation or direct tested institution integrations are established. No schema/version adoption decision is made. Production acceptance of IQ-002 requires approved real issuer catalogs/resolvers, governed error mappings and actual end-to-end positive/negative evidence.

> Reference does not transfer authority. UNKNOWN is not success.
