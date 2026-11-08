# Stage 1Q — IQ-009 Navigator Retry / Idempotency Controls

**November 7, 2026 · EXPERIMENTAL OFFLINE ONLY.** IQ-009 remains P0 QUEUED and NOT_VERIFIED for production.

Read-only canonical source: `SatoshiumAI/satoshium-us`, `phase004`, `da8333ddb85face8ee499abe93ef4bc4f555e867`:
- `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md` — IQ-009 P0.
- `suite/interoperability/satoshium-interoperability-review-navigator-workflow-handoffs-2026-10-03.md` — Step 9 sections 11–14.
- `suite/interoperability/satoshium-interoperability-review-failure-unknown-state-handling-2026-10-03.md` — Step 14 retry/unknown requirements.

Run `node services/reviews/stage1q/retry-gate.test.cjs` (55 synthetic tests).

The read-only inspector classifies a fictional proposed retry using explicit attempt ID, sequence, timestamp, result, original input version/state, idempotency key, operation key, receiver and branch ID. It rejects changed handoffs, mixed operations, changed idempotency keys and bad sequences, and distinguishes terminal results from transport failures. Unknown completion is **held** rather than assumed failed/succeeded; known completion is **blocked** to avoid an unsafe duplicate. Version/state refresh is never silently treated as an identical retry, even with an explicit refresh policy: it requires a **new handoff basis**. Independent branches remain separate.

**CANDIDATE_FOR_GOVERNED_REVIEW does not authorize execution.** All responses contain `retry_authorized:false`, `retry_executed:false`, `canonical_write_performed:false`, `authority_granted:false`, and `institutional_outcome:NOT_DETERMINED`.

Limits: in-memory fictional history; no durable reservation, global cross-workflow duplicate registry, signed attempts, concurrent locks, receiver-specific policy, remote idempotency acknowledgment, transport or actual execution. The operational duplicate-prevention and full IQ-009 production gate remain open. No GB2 or canonical changes.
