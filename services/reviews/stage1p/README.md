# Stage 1P — IQ-008 Navigator Handoff Contract

**November 7, 2026 · Experimental offline-only tool; IQ-008 P0 production acceptance remains OPEN.**

Canonical source reviewed **read-only**: `SatoshiumAI/satoshium-us`, `phase004` at source pin recorded in earlier Stage 1O: `da8333ddb85face8ee499abe93ef4bc4f555e867` (no changes were made to the canonical repo). The source contracts are `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md` IQ-008, `suite/interoperability/satoshium-interoperability-review-navigator-workflow-handoffs-2026-10-03.md` Step 9, and `navigator/workflow-orchestration/README.md`.

## Run

```sh
node services/reviews/stage1p/handoff-contract.test.cjs
```

A fictional handoff is checked against 18 semantic context fields: Workflow Definition, execution context, unique handoff ID, sending step, receiving institution, requested action, input references, source provenance, authority context, preconditions, output expectations, completion criteria, failure model, retry policy, timeout/unavailable handling, unknown-state handling, timestamp, and traceability. Synthetic checks protect institutional authority, separate workflow state from institutional state, and disallow synthetic success, automatic retries, and canonical writes.

This is a **local illustrative JSON profile**, not a universally approved Suite wire schema. Exact transport, institutional acceptance, field mapping, identity uniqueness, lifecycle semantics, schema/contract negotiation, authorization, retries/idempotency (IQ-009), and live execution remain unverified. A positive result means only that this synthetic context passed local tests; it neither authorizes the receiving institution nor attests that it received the request. No live requests, credentials, GB2, canonical writes, or Suite release authorization.
