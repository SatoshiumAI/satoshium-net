# SATOSHIUM — Suite Production Integration / Suite 1.0
## Stage 1G — Canonical Repository Read-Only Source Assessment: IQ-001

**Date:** November 7, 2026 (Pacific)  
**Disposition:** **READ-ONLY CANONICAL SOURCE SURVEY COMPLETE — IQ-001 IMPLEMENTATION ACCEPTANCE OPEN**  
**Authorization:** Founder authorized read-only access to `satoshium.us`; this inspection used the connected GitHub repository interface and did not edit, request privileged actions from, or write to the site or its repository.
**Canonical repository:** `SatoshiumAI/satoshium-us`  
**Branch:** `phase004`  
**Pinned source commit:** `da8333ddb85face8ee499abe93ef4bc4f555e867`  
**Tree:** `a3cfc7c778c59ec2f0c7fb9166c207f75b90b50d`  
**Coverage:** One nontruncated recursive tree (3,080 entries; 2,556 files) and selected original contracts/schemas/executable sources. No complete lexical search of file bodies, runtime request, exhaustive unit suite, direct HTTPS served-page check, or integration test performed.

## 1. Primary-source recovery now independently verified

The original queue is present at:
`suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md`.

It is dated October 3, Step 24, **COMPLETE — APPROVED**, with **IQ-001–IQ-011 P0, IQ-012–IQ-019 P1, IQ-020–IQ-023 P2** and original statuses QUEUED (P0/P1) and DEFERRED / QUEUED (P2). Its source text corresponds to the founder-supplied original used for Stage 1F. Now the official GitHub path and SHA are independently pinned too.

The original Phase 2 source is present at `suite/satoshium-suite-production-integration-final-disposition-2026-10-24.md`. It closes the **bounded** historical/source-evidence review, not generalized automated interoperability. The approved B8 documentary baseline at `suite/satoshium-suite-1-0-baseline-b8-final-disposition-2026-10-24.md` expressly states that B1–B8 and the governed historical 1.0 baseline are COMPLETE — APPROVED, but a Suite 1.0 integrated public product release is NOT AUTHORIZED.

The B6 source at `suite/satoshium-suite-1-0-baseline-b6-interoperability-release-scope-2026-10-24.md` expressly distinguishes:
- Candidate A — bounded governed architecture and historical production evidence baseline;
- Candidate B — specified live interactive site/tools, requiring served-page/runtime proof;
- Candidate C — generalized automated cross-institution platform, requiring applicable P0 controls and end-to-end evidence.

**No prior approved review was reopened, downgraded, or reinterpreted as an unbounded release.**

## 2. IQ-001 — exact source obligations

The original `IQ-001 Cross-Institution Reference Envelope Enforcement` is P0, source Steps 4 and 21, governed by IDR-018 and IDR-019. It calls for validation of the interoperable **semantic** reference fields:

```text
identifier
source_institution
object_type
provenance
relationship_type
authority_context
accessibility
version where applicable
lifecycle_state where declared
publication_state where declared
```

Acceptance conditions stated by the approved queue: missing required fields explicitly fail; unknown required values remain unknown; no source authority is inferred; the envelope remains infrastructure, **not** a new canonical object.

The exact decision-register file `suite/interoperability/satoshium-suite-interoperability-decision-register-2026-10-03.md` independently confirms:
- **IDR-018:** minimal cross-institution reference envelope;
- **IDR-019:** that envelope is noncanonical;
- **IDR-020:** semantic compatibility does not require identical serialization;
- **IDR-021:** shared meanings include timestamp, controlled outcome and source reference in addition to the baseline envelope.

**Implementation consequence:** Never require every institution's independent source object to use literally identical property names. A common validator or adapter must preserve the approved meanings without fabricating a new canonical Suite object or transferring source authority. Do not interpret an institutional schema's passing result as proof of cross-institution envelope conformance.

## 3. Source mapping from existing deployed repository

| Inspected artifact | Actual evidence | IQ-001 significance | Current disposition |
|---|---|---|---|
| `suite/interoperability/satoshium-suite-interoperability-implementation-queue-2026-10-03.md` | Official exact work item and acceptance text | **Normative obligation identified** | SOURCE VERIFIED |
| `suite/interoperability/satoshium-suite-interoperability-decision-register-2026-10-03.md` | IDR-018/019/020/021 and broader authority boundaries | **Governance/semantic contract identified** | SOURCE VERIFIED |
| `suite/interoperability/satoshium-interoperability-review-schema-serialization-compatibility-2026-10-03.md` | Institutional schema overview, semantic vs identical wire format distinctions | Confirms shared semantics, no universal mandatory schema spelling | DOCUMENTARY SOURCE VERIFIED |
| `suite/interoperability/satoshium-interoperability-review-validation-conformance-boundaries-2026-10-03.md` | Five distinct gates: source-object validity, reference validity, schema conformance, eligibility, institutional evaluation | A reference-envelope check is not an institutional determination | DOCUMENTARY SOURCE VERIFIED |
| `registry/schemas/sreg-base-schema.json` | Production Registry SREG schema and validation of Registry-owned fields, provenance, source authority and relationship structures | **Institution-specific partial building blocks**; not a general cross-institution envelope validator | SOURCE VERIFIED; IQ-001 NOT ACCEPTED |
| `registry/schemas/certification-record-profile.json` | Certification SREG profile extending Registry schema, including Certifier source authority and versions | Concrete example of retaining source institution authority across registration | SOURCE VERIFIED; IQ-001 NOT ACCEPTED |
| `beacon/schemas/source-reference-schema.md` | Source Reference is a **reusable supporting structure**, explicitly noncanonical; expected fields include source institution, identifier, type, location and availability | Valuable semantic precedent, but required fields and machine enforcement not frozen by this Markdown | SOURCE VERIFIED; IQ-001 NOT ACCEPTED |
| `attestor/validation/attestor-machine-contract-v0.1.md` | Concrete Attestor source/authority reference structures and defined controlled predicates | Institution-specific machine contract, not a general receiving contract | SOURCE VERIFIED; IQ-001 NOT ACCEPTED |
| `attestor/validation/executable-validator-v03/attestor_validator.py` | Real Attestor validator with controlled relationship and lifecycle/publication checks, distinct `not-tested` and `not-applicable` handling | Demonstrates **partial issuer-local executable machinery**, not common Suite reference-envelope enforcement | SOURCE INSPECTED; NO TEST EXECUTED |

The checked `suite/` tree contains two executable scripts: `suite/audits/public-route-audit.py` and `suite/audits/topbar-browser-audit.cjs`. No `suite/` JSON machine contract was present in that source tree. The absence of a **named shared IQ-001 validator in this scoped tree** does not prove no equivalent adapter exists anywhere inside institutional source or external deployments. Conversely, its existence must not be inferred from individual canonical schemas.

A review of the branch's workflows found the Certifier toolkit unit-test workflow and two public route/topbar auditing workflows; no independently identified Suite-wide IQ-001 CI job. The most recent inspected `satoshium-us` HEAD Pages workflow completed successfully, which indicates deployment, **not** runtime contract validation.

## 4. IQ-002, IQ-003 and IQ-007 adjacent findings

These remain distinct P0 requirements:

- **IQ-002 — Resolver:** The October 3 identifier-resolution record demonstrates that seven historical institutional record IDs and canonical human-readable paths were examined in that historical review. It expressly maintains issuer-family identity and non-authority. This does **not** establish a general automated resolver with all required `resolved/unresolved/broken-reference/unavailable/superseded/withdrawn/stale` outcomes.
- **IQ-003 — Lifecycle/publication:** Registry SREG machine schema and Attestor validator have explicit separate lifecycle/publication structures. This is evidence of **issuer-local separation**, not yet proof of a governed cross-institution translation and state-at-use/current-state mapping for arbitrary exchanges.
- **IQ-007 — Unknown:** Attestor's source validator already distinguishes `not-tested` and `not-applicable` outcomes and validates known institutional controlled values. The common failure vocabulary and fail-closed behavior across all receiving boundaries have **not been integration tested** here.

Do not collapse IQ-001, IQ-002, IQ-003 or IQ-007 into one automatically accepted status on the basis of these partial sources.

## 5. Acceptance gap and recommended next bounded test

**Current IQ-001 outcome: `SOURCE CONTRACT IDENTIFIED — EXISTING INSTITUTIONAL BUILDING BLOCKS — SUITE-WIDE IMPLEMENTATION/TEST OPEN`.** This is not a FAIL of the institution; it is a still-open proof/implementation item for *generalized automated exchange*.

Next safest engineering step: prepare a **non-mutating, offline IQ-001 conformance prototype** against a real sanctioned producer→consumer fixture, with valid, missing-required, unknown-required and conflicting-authority examples. First fix the actual selected source and receiver contract, version, field aliases and conditional applicability. Test only the proposed adapter's own behavior. Do **not** assume the prototype is an adopted institutional schema or deploy it without separate review.

A bounded acceptance package would require: one exact producer and receiving institution, selected real schema/representation and approved mapping, serialized fixture data, independently run failure tests, authority and noncanonical-identity assertions, and a signed-off source/version evidence record. Generalized IQ-001 acceptance requires evidence across the claimed scope, not just one fixture.

## 6. Continuing scope and disposition

- **`satoshium.us` access:** READ-ONLY authorized. No modification to `SatoshiumAI/satoshium-us`, no hosted write/action, and no institutional release authorization.
- **`satoshium-net`** remains the supporting review-record publication repository. This Stage 1G report is a research artifact, not a change to the Suite runtime.
- **GB2:** independent browser/testing scope remains separately governed; no GB2 run initiated.
- **Prior baseline:** Phase 1, bounded Phase 2, and B1–B8 documentary/historical acceptance preserved unchanged.
- **Generalized automated exchange and public Suite 1.0 product release:** NOT ACCEPTED / NOT AUTHORIZED.

**Governing rule:** **AUTHORITY FOLLOWS THE GOVERNED SUBJECT. REFERENCE DOES NOT TRANSFER AUTHORITY.**
