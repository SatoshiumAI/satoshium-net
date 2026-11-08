# Satoshium Suite Stage 1L — IQ-004 Relationship Serialization Prototype

**November 7, 2026 · Experimental and noncanonical · Not an implemented Suite contract.**

## Canonical source provenance

Read-only `SatoshiumAI/satoshium-us` / `phase004` at commit `da8333ddb85face8ee499abe93ef4bc4f555e867`:
- `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md` — IQ-004 P0 QUEUED.
- `suite/interoperability/satoshium-interoperability-review-relationship-serialization-2026-10-03.md` — Step 6 minimal relationship envelope, direction, controlled semantics, conditional context.
- `suite/interoperability/satoshium-suite-interoperability-decision-register-2026-10-03.md` — IDR-024–028: explicit subject→predicate→object direction; strongest evidence-supported predicate; support direction; unsupported preserved; multiple independently true assertions separately serialized.

## Prototype

Node.js-only envelope validator and identity-preserving serializer, no dependencies. Requires subject/object identifiers, institutions, explicit direction, governed predicate, provenance and authority context. Materiality policy flags can require `effective_time`, `version_scope`, and `relationship_state`. Unsupported Registry-native `registers` is rejected as an exchange predicate and preserved in the rejected original; Registry's local relationship is **not** thereby declared invalid.

Distinct assertions with the same subject and object remain separate. A `related-to` justification may be required by the fictional test policy, but the code **does not verify evidence, choose the strongest predicate, or infer inverses**.

`authority_context` equals subject institution only in this intentionally limited fiction-based prototype, not a universal governance requirement. `direction: subject-to-object` is a local encoding of the approved direction, not an adopted wire token. Fields are syntax-checked, not cryptographically or institutionally verified.

## Run

```bash
node services/reviews/stage1l/relationship-serializer.test.cjs
```

29 synthetic checks cover all 8 controlled predicate tokens, missing fields, inverse direction, ungoverned predicates, invalid provenance, unsupported institution, conditional context, weak-relation reason, multiple separate relationships, partial batch rejection and immutability.

**`SERIALIZED_ONLY` never implies the relation is true, best supported, current, approved or canonical.** IQ-004 remains QUEUED, with generalized production acceptance OPEN.

> Authority follows the governed subject. Reference does not transfer authority.
