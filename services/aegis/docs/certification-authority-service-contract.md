# Certification Authority Inspection Service Contract

## Endpoint

GET /certification-authority

## Parameters

viewMode:
- explorer
- facade
- signalTransport
- issuanceTransport

actorIds:
Comma-separated list of actor identifiers.

## Response Envelope

Returns structured readiness projection data for certification-authority lifecycle transport surfaces.

## Guarantees

Read-only inspection surface
No registry mutation
No ledger mutation
No execution authority
