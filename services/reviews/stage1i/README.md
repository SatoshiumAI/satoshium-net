# Stage 1I — Registry-shaped fictional source-reference adapter

**Scope:** experimental IQ-001 mapping into the earlier normalized noncanonical exchange-envelope checker. **Not deployed, not adopted by Registry/Certifier, not IQ-001 production acceptance.**

## Verified source reference

Read-only `SatoshiumAI/satoshium-us` at `da8333ddb85face8ee499abe93ef4bc4f555e867`:
- `registry/registered-items/SREG-2026-0001/record.json` for the observed Registry-shaped field structure; **no genuine record values copied into the fixture**.
- `registry/schemas/sreg-base-schema.json` and `registry/schemas/certification-record-profile.json` for issuer-specific structures.
- `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md` for IQ-001 acceptance criteria, and the `suite/interoperability/satoshium-suite-interoperability-decision-register-2026-10-03.md` for IDR-018–021.

## Boundaries

The published Registry record has Registry-owned relationships including `registers`, `is sourced from`, `certifies`, and `is maintained by`. Those **are not automatically equivalent** to the controlled Suite shared predicate list. This adapter therefore requires the reviewer to supply an explicit shared relationship; it never reads or auto-translates `registry_relationships`.

Likewise `registry_status`, `registry_lifecycle_state`, and Registry publication describe **Registry**, not the referenced **Certifier** object. The adapter does not synthesize source lifecycle/publication from them. It rejects source-state values supplied via this fixture context because the source-specific state has not been independently established.

The issuer and object type are deliberately restricted to the **one fictional Certifier-source/Registry-reference shape**, not a general 8-institution schema. The derived normalized envelope is an infrastructure reference only; it never grants authority, ownership, registration, certification, publication, eligibility, or current-state claims.

## Run

```bash
node services/reviews/stage1i/registry-source-reference-adapter.test.cjs
```

Thirteen fictional cases cover positive mapping, unsupported native relationship, absent explicit relationship, absent accessibility, issuer mismatch, wrong identifier family, wrong object type, missing version and authority, source-state conflation, and explicit unknown values.

A passing test proves only the isolated adapter and local envelope checker behavior. It cannot certify a real source/consumer contract, resolve or validate live identifiers, verify historical truth, choose authoritative predicates, or accept IQ-001 as complete.
