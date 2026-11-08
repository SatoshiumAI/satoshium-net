# Stage 2E — Source-Pinned Controlled-Value Conformance Fixture

**November 7, 2026 · EXPERIMENTAL ONLY; no canonical write or Registry authority.**

Run: `node services/reviews/stage2e/value-inspector.test.cjs` — **28 checks**, 25 scenarios + 3 invariants.

This inspector compares small **source-pinned excerpts**, not complete imported JSON Schemas or a real Registry interface. The canonical branch `SatoshiumAI/satoshium-us/phase004` remains read-only. Source SHA values are recorded in `pinned-machine-snapshot.json`. A source change requires an explicit reviewed snapshot update; the program never fetches source records.

**MACHINE_VALUE_RECOGNIZED** means that the code/label pair appears in the experimental schema pair list and published machine controlled-value set; it does not approve an actual value change. **SCHEMA_ONLY** means schema enum membership without publication in the controlled-values JSON, including lifecycle `published`. **REJECTED** indicates an unsupported value, pair or cross-domain mapping. **HOLD_GOVERNANCE** blocks requests to execute a lifecycle transition or publication.

The Registry Base Schema has independent code and label enums; **index-based code/label pair enforcement is an additional experimental guard**, not a claim that the authoritative JSON Schema validates pairs this way. Nor are these snapshots full-schema conformance results. No default lifecycle transition map is inferred from narrative examples.

The six contract decisions remain open, 11 P0 production items remain NOT_VERIFIED. No credentials, network, approved Registry record, new SREG, GB2 or Suite release.
