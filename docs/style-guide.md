# ✍️ Infrastructure Documentation Style Guide

This guide defines documentation conventions for the **satoshium-net**
infrastructure layer of the Satoshium platform.

It ensures that systems, services, and coordination surfaces are described
consistently across infrastructure repositories.

---

# 🧭 Purpose

Infrastructure documentation should describe how services operate,
interact, and produce verifiable outputs within decentralized coordination workflows.

Documentation in this repository supports:

- governance execution surfaces
- verification workflows
- registry-aligned systems
- signal coordination interfaces
- infrastructure-layer visibility

---

# 🧱 Tone and Writing Principles

Infrastructure documentation should remain:

- precise
- neutral
- descriptive
- structured
- implementation-aware

Avoid speculative language and conceptual positioning statements.

Prefer:

This service generates verification records

Instead of:

This service transforms how trust works

---

# 📄 Structural Conventions

Use consistent section structure when documenting infrastructure components:

Recommended pattern:

Purpose
Capabilities
Workflow
Registry Alignment
Operational Interface
Status

This improves cross-repository readability and coordination clarity.


---

# 📊 Terminology Alignment

Infrastructure documentation should align with canonical terminology defined in:

https://satoshium.ai/glossary/

Avoid introducing alternative naming for:

- systems
- services
- registries
- coordination layers
- verification artifacts

---

# ⚙️ Service Documentation Expectations

Service descriptions should clearly specify:

- inputs
- evaluation behavior
- output artifacts
- verification compatibility
- registry alignment readiness

Example:


Produces SHA-256 verification records suitable for audit workflows


Avoid:


Improves accountability across systems

---

# 📡 Registry Awareness

Infrastructure documentation should reference structured identifiers where available:

Examples:

- system registry IDs
- service registry identifiers
- specification-linked components

Registry references strengthen interoperability across repositories.

---

# 🧾 Workflow Clarity

When documenting execution workflows:

Use ordered steps:

input
→ evaluation
→ classification
→ verification
→ export

Workflow clarity improves traceability across coordination surfaces.

---

# 📚 Cross-Layer References

When referencing other platform layers:

Use the standard mapping:

satoshium.ai → architecture
satoshium.net → infrastructure
satoshium.info → knowledge
satoshium.xyz → simulations

Maintain consistent layer terminology across documents.

---

# 🚫 Avoid

Infrastructure documentation should avoid:

- speculative future claims
- marketing language
- philosophical positioning
- roadmap projections
- architectural manifestos

These belong in other platform layers.

---

# 📡 Style Guide Status

Status: Active

This guide applies to documentation describing systems and services
published through the satoshium-net infrastructure layer.
