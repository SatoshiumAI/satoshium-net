# Satoshium Public Services — Review 011 Browser Diagnostic Interim Disposition

**Date:** October 24, 2026 (Pacific)  
**Scope:** Services hub, Aegis Inspection, Agent Governance and Verification Ledger, 320/390/1280px live Chromium, focus sampling, landmarks, and desktop automated axe diagnostics.  
**Status:** REVIEW 011 IN PROGRESS — ONE 320PX MOBILE DEFECT UNRESOLVED; NOT APPROVED AS COMPLETE.  
**Full Suite operational release:** NOT AUTHORIZED.

## Evidence and execution history

- Initial working diagnostic run [40119593100](https://github.com/SatoshiumAI/satoshium-net/actions/runs/40119593100), success as diagnostic execution; all 12 page/viewport visits had HTTP 200; first focus-target samples showed visible solid outlines; one Aegis mobile overflow and one Services hub `link-in-text-block` axe violation discovered. No complete keyboard walkthrough or real screen-reader announcement testing has been performed.
- Corrections attempted: `99d041026c0d1883f486c376b6d570d80d7345f8` underlined the inline Services feedback link and adjusted the Aegis 960px CSS; `898d5af88a54d92f582736c59a62572a7f239f16` adjusted outer Aegis grid track. Both were deployed before the latest run.
- Strict postdeployment diagnostic run [40119895626](https://github.com/SatoshiumAI/satoshium-net/actions/runs/40119895626) showed **zero hub axe violations** and **Aegis 320px overflow remained**.
- Latest postdeployment diagnostic [40119991408](https://github.com/SatoshiumAI/satoshium-net/actions/runs/40119991408), job `120949245915`, **FAILED correctly on Aegis 320px overflow**. Eleven other page/viewport checks passed the current strict test assertions. Four desktop axe scans (hub, Aegis, Governance, Ledger) returned **zero automated WCAG-tagged violations**, with some 'incomplete' checks, and must not be described as WCAG conformance.
- Aegis overflow at 320px remains reproduced: `section.panel` extends to right coordinate ~387px; controls/labels ~362px in a 320px viewport, consistent with an inherited/intrinsic width constraint. The diagnostic identifies affected elements, not yet the definitive responsible computed style.
- Pages at 390px and 1280px did not show document-level horizontal overflow in this run. No page errors were observed in the bounded checks.

## Next targeted investigation

1. Instrument computed dimensions of `html`, `body`, `main.shell`, `.layout`, `.panel`, `.controls` and parent/child grid items at 320px; record computed min-width, width, grid template, actual bounding boxes and scroll dimensions, plus style-rule provenance as feasible.
2. Check whether a fixed-width child, a nested grid track or an overriding stylesheet/inline style is forcing the container wider. Correct **only the demonstrated cause**.
3. Confirm a deployed Pages success, rerun strict live 320/390/1280px diagnostics and inspect actual structured output. Retain strong assertion on overflow and axe violations.
4. Extend keyboard test beyond initial topbar links to actual controls, downloads, file inputs and results; investigate real assistive-technology announcements separately.
5. Do not treat zero axe findings, focus-outline CSS, Cloudflare Core Web Vitals or successful GitHub Actions alone as full accessibility certification.

**Disposition:** Bounded automated diagnostics functioning; hub link distinction corrected; Aegis 320px horizontal overflow still open. Review 011 remains OPEN, and no visitor-pilot full accessibility acceptance is claimed.
