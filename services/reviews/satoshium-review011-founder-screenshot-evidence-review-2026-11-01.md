# SATOSHIUM Public Services — Review 011 Founder Screenshot Evidence Review

**Date:** November 1, 2026 (Pacific)  
**Repository:** `SatoshiumAI/satoshium-net` / `phase004`  
**Disposition:** PASS WITH OBSERVATIONS — SUBMITTED SCREENSHOT / VISUAL EVIDENCE ONLY  
**Scope:** Visual assessment of founder-provided desktop and highly enlarged captures on four deployed Services pages. No claimed live browser control, numerical DOM measurement, audible screen-reader testing, or complete keyboard walkthrough by this reviewer.

## Background

GB2's targeted native 1280px @100% -> 400% -> ~320 CSS-pixel browser retest reported four-page PASS. The original GB2 report and bounded disposition were filed under `services/reviews/` at commit `c95077888dd2cdbdd6eb369b1c64c9355746be54`. This review adds founder-supplied visual evidence; it does not replace or retrospectively modify GB2's method.

## Founder-supplied evidence inspected

- Services hub: `screencapture-satoshium-net-services-2026-11-01-10_06_18.pdf` (3 pages); `...10_09_02.pdf` (8 pages); `...10_23_25.pdf` (25 pages).
- Aegis: `screencapture-satoshium-net-services-aegis-aegis-service-panel-html-2026-11-01-10_06_34.pdf` (2 pages); `...10_08_43.pdf` (5 pages); `...10_19_55.pdf` (13 pages).
- Agent Governance: `screencapture-satoshium-net-services-agent-governance-tool-html-2026-11-01-10_06_59.pdf` (3 pages); `...10_08_17.pdf` (7 pages); `...10_13_52.pdf` (20 pages).
- Verification Ledger: `screencapture-satoshium-net-services-verification-ledger-tool-html-2026-11-01-10_07_14.pdf` (2 pages); `...10_07_51.pdf` (5 pages); `...10_09_54.pdf` (16 pages).
- Separate PNG: `Screenshot 2026-11-01 103229.png` showing expanded Aegis Mode Selector.

These are evidence filenames as submitted in the conversation; their bytes are **not** committed to GitHub in this disposition. Original files remain with the founder/conversation. PDF printing may affect page breaks, overlays, scaling and internal scrolling.

## Observations by page

| Surface | Relevant observations | Disposition |
|---|---|---|
| Services Hub | Normal desktop screenshots show expected cards, topbar and footer; highly enlarged capture shows stacked cards, wrapped navigation and one-column readable content over 25 PDF pages. No definite page-level horizontal overflow is visible. | PASS WITH OBSERVATIONS (visual only) |
| Aegis | Normal and enlarged pages show controls and documentation in page flow. PNG shows cyan focus on `Mode Selector` and readable native dropdown options. This **does not** directly confirm `Run Inspection` focus from keyboard input; GB2's separate focused-button retest does. | PASS WITH OBSERVATIONS |
| Agent Governance | Normal and enlarged captures show rules, agent-action controls, result cards and footer legibly in a narrow single-column presentation; no definite fixed-header overlap found in captures. | PASS WITH OBSERVATIONS |
| Verification Ledger | Normal and enlarged captures show labelled inputs, local flag disclaimer, results and action buttons reflowing into a narrow column. No definite content obstruction found in captures. | PASS WITH OBSERVATIONS |

## Capture-specific caveats

1. Repeated circular **Adobe Acrobat icons** at the right edge of PDF pages are consistent with a screenshot/print or browser-extension overlay; attribution to the website has not been established. Do not open an application defect without browser reproduction.
2. Some printed PDF pages have large dark/blank strips and unusual page splits, notably in one Aegis capture; these may reflect PDF capture/printing artifacts rather than clipping of the actual page. Confirm visually in-browser before classifying.
3. The dropdown menu shown in the separate PNG is an operating-system/browser native select overlay, not necessarily an HTML overflow defect.
4. Screenshots cannot establish full Tab/Shift+Tab sequences, accessible spoken announcements, numeric scrollWidth, or the exact effective CSS viewport unless those are separately recorded.
5. A PDF page count indicates the length of the captured document at the print scale, not the count of browser viewports or a conformance result.

## Evidence and gate disposition

- **Founder-supplied visual evidence:** RECEIVED AND REVIEWED — PASS WITH OBSERVATIONS in limited scope.
- **GB2 400% native ~320px reflow check:** previously PASS — BOUNDED; no contradiction established here.
- **Run Inspection focus:** GB2 PASS, but not independently demonstrated by the founder's standalone PNG (which concerns Mode Selector).
- **Real screen-reader speech (NVDA, VoiceOver, Orca):** NOT TESTED / OPEN.
- **Review 013 G09 human facilitator rehearsal:** OPEN; screenshots are not a facilitator walkthrough.
- **G05/G06:** BLOCKER. **G10/G11:** NOT AUTHORIZED. **External pilot:** NO-GO.

## Recommendation

Accept the founder screenshots as useful supplemental visual evidence without making any production change. If the founder personally performed keyboard navigation, record the exact focused control and zoom conditions in a separate short attestation; otherwise avoid upgrading this visual review to full human keyboard acceptance. Next meaningful accessibility evidence is actual audible screen-reader use. Do not infer WCAG certification.

**Governing rule:** Authority follows the governed subject. Reference does not transfer authority.