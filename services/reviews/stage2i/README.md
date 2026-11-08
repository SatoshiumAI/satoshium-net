# Stage 2I — Acknowledgement Identity, Version and Replay Safety

**2026-11-07 Pacific · NONCANONICAL OFFLINE EVIDENCE.**

Run `node services/reviews/stage2i/replay-identity-gate.test.cjs` — 46 checks (43 scenarios + 3 invariants).

A synthetic fixed reference from Stage 2H is given an attempt identity, sequence, correlation ID and prior acknowledgement history. Cases distinguish an exact replay (`REPLAY_CONTEXT_ONLY`), conflicting acknowledgement identity (`REJECTED`), reused attempt, late observation / stale sequence (`STALE_CONTEXT`), missing attribution (`REJECTED`), unknown disposition (`HOLD_UNKNOWN`) and changed source version (`HOLD_REVIEW`). No status grants acceptance.

**Caveat:** exact replay is defined by JSON-equal synthetic records; no signed canonicalization, transport-level idempotency, durable dedupe store, cryptographic identity, authenticated acknowledgements, or concurrent actions exist. This is batch-scoped context inspection, not exactly-once delivery. Chronology uses submitted timestamps, not trusted clocks; source currentness is an unverified assertion. No real institutional writer or registered object exists.

Canonical evidence read-only: `SatoshiumAI/satoshium-us` `phase004` at `da8333ddb85face8ee499abe93ef4bc4f555e867`. Source requirements include Step 17 security/authority review, Registry History and the Certifier canonical six-reference owner model. `satoshium-net` Stage 2H fixture and results supply fictional baseline, not adopted wire specifications.

Six Stage 2A contract decisions still OPEN and 11 P0 production gates NOT_VERIFIED. No GB2 usage or Suite release.
