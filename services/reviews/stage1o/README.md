# Stage 1O — IQ-007 Failure / Unknown-State Handling

**November 7, 2026 · EXPERIMENTAL OFFLINE TOOL ONLY.** IQ-007 is still P0 QUEUED; no Suite-wide production implementation has been accepted.

## Verified canonical sources

Read-only `SatoshiumAI/satoshium-us` `phase004` at `da8333ddb85face8ee499abe93ef4bc4f555e867`:
- `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md` — IQ-007.
- `suite/interoperability/satoshium-interoperability-review-failure-unknown-state-handling-2026-10-03.md` — Step 14, canonical failure vocabulary, last-known-state, retry, manual review and hold semantics.
- `suite/interoperability/satoshium-interoperability-review-adversarial-tests-2026-10-03.md` — identity/authority/state adversarial constraints.
- `suite/interoperability/satoshium-suite-interoperability-decision-register-2026-10-03.md` — IDR-049–051 and IDR-068–069.

## Run

```bash
node services/reviews/stage1o/failure-classifier.test.cjs
```

Forty-one synthetic checks cover 14 official failure/uncertainty categories, missing context/evidence, contradictory metadata preservation, unavailable institutions, unknown current state, retry-class hints, and the prohibition on favorable outcome coercions.

Every accepted input remains an `UNRESOLVED_CONDITION`: it is not a successful institution evaluation or a determination of source invalidity. `last_known` stays historical; `current_state` and `current_version` remain unknown. The classifier returns only a **candidate** retry classification, with `retry_authorized:false`, `retry_executed:false`, and no side effects. This is not a policy engine: actual retry/review/terminal decisions must be made by receiving institution and approved workflow, with traceability.

Unrecognized failure tokens are explicitly rejected rather than silently reclassified as success or a generic known failure. No production identifiers or source data are in the fictional fixture.

## Limitations

The test-specific `TRANSIENT_CANDIDATE` and `NOT_AUTOMATICALLY_RETRYABLE` buckets are **not adopted Suite wire enums** or exhaustive terminal/retry policy. Source validity, retry authorization, deadline, transport truth, attempts, terminality, privilege and receiving policy are unverified. The module does not invoke remote source, perform retry, authorize write, or decide canonical outcome.

No mutation to `satoshium-us`, no GB2 test execution, no Suite 1.0 release authorization.
