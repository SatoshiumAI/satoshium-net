# SATOSHIUM — GB2 Review 011 Post-Fix Browser Retest Report

**Status:** COMPLETE FOR FOUNDER REVIEW — observations only; **no** human acceptance or defect closure presumed by GB2  
**Prepared by:** GB2 (Satoshium QA Bot / Grok Bot2)  
**Prepared for:** Founder review  
**Retest window:** 2026-11-01 approximately 09:38–09:46 America/Los_Angeles (UTC-8)  
**Fix commit:** `b0260c5b8b09838090b18f54b2091c5b6542ef89` — *fix(review011): keep narrow Services topbar in flow and restore Aegis focus ring* (committed 2026-11-01T17:34:52Z)  
**Mode:** READ-ONLY; no GitHub writes; no production edits; fictional/no private data; no participant contact  

**First-pass evidence preserved separately:** `/workspace/satoshium-qa/reports/a11y-rehearsal/` (untouched).

---

## 1. Executive summary

On the **live deployed** Services pages after `b0260c5`, GB2 independently retested native Chrome zoom and keyboard focus for the five named issues.

| Issue | Retest result |
|---|---|
| GB-A11Y-001 (hub architecture focus @400%) | **PASS** |
| GB-A11Y-001b (Governance footer Main Platform @400%) | **PASS** |
| GB-A11Y-001c (Ledger footer nav @400%) | **PASS** |
| GB-A11Y-002 (Aegis Run Inspection focus ring) | **PASS** (100% / 200% / 400%) |
| GB-A11Y-003 (shared header flow / no cover) | **PASS** (with optional note on sticky header at 200%) |

All **4 pages × 3 zoom levels (12)** visually **PASS** for the checks performed. No new horizontal overflow or overlap was observed. No WCAG certification claimed. Screen-reader speech remains **NOT TESTED**. Review 013 G09 remains **OPEN**. G05/G06 remain **BLOCKER**. G10/G11 remain **NOT AUTHORIZED**.

**Proposed next steps for founder:** (1) accept or request human confirmation of these five issues; (2) optional human look at sticky header height at ~200% native zoom on maximized desktop (~945 CSS px, outside the 640px fix); (3) keep Review 011 AT acceptance open until real NVDA/VoiceOver; (4) ChatGPT may archive this report under `services/reviews/` after founder review — GB2 did not write to GitHub.

---

## 2. Deployed-source evidence (not CI alone)

**Fetch timestamp:** 2026-11-01T09:38:58-08:00 (America/Los_Angeles).  
**Live `Last-Modified`:** Sun, 01 Nov 2026 17:38:29 GMT on all four URLs.  
**Browser later used for UI:** Google Chrome 156.0.8078.47 on Debian 13; physical display 1920×1200.

Saved HTML bodies: `deploy-evidence/services-index.html`, `aegis-service-panel.html`, `agent-governance-tool.html`, `verification-ledger-tool.html`. Summary: `deploy-evidence/deploy-css-evidence.md`.

**Confirmed in served HTML (inline `<style>`):**

```css
@media (max-width:640px) {
  #topbar-slot .topbar { position:static !important; }
  body { padding-top:0 !important; }
  #topbar-slot .topbar .wrap { padding-left:18px; padding-right:18px; }
}
```

Present on hub, Aegis, Governance, and Ledger.

**Aegis-specific (confirmed):**

```css
button.button:focus-visible { outline:3px solid #52f3df !important; outline-offset:3px; }
```

CI green was treated as supporting context only; rendered/served CSS was verified by fetching the live URLs.

---

## 3. Test environment and method

| Item | Value |
|---|---|
| OS | Debian GNU/Linux 13 (trixie), x86_64 |
| Browser | Google Chrome 156.0.8078.47 |
| Zoom method | **Native** Ctrl+0 / Ctrl+= (Chrome zoom UI confirmed, e.g. 200%) |
| Viewport resize / root-font proxy | **Not used** |
| Baseline window | **~1888 CSS px** at 100% (could not obtain ~1280 without viewport resize) |
| Derived @200% | ~945 CSS px |
| Derived @400% | ~472 CSS px (so `@media (max-width:640px)` is expected to match) |
| `innerWidth` / `scrollWidth` / computed CSS | **NOT MEASURED** (no in-page JS from desktop agent) |
| Sticky vs static | Judged visually (header scrolls away vs stays covering) |
| Horizontal overflow | Judged visually (no horizontal scrollbar seen) |
| Hard refresh | Ctrl+Shift+R on pages/zooms |
| Aegis API | **Not called** (Run Inspection never activated) |
| satoshium.us | Identified in footer status bar only; **not followed** |
| Screen reader speech | **NOT TESTED** |

---

## 4. Results matrix — page × native zoom

| Page | 100% | 200% | 400% |
|---|---|---|---|
| Hub `…/services/` | PASS — sticky header normal; no h-overflow; three Try links present | PASS — sticky ~28% viewport; Try-link focus visible | PASS — header static / scrolls away; architecture focus visible |
| Aegis | PASS — Run Inspection teal outline visible | PASS — outline thick/clear | PASS — outline clear; header in flow |
| Governance | PASS | PASS — Back-link focus visible under sticky | PASS — footer Main Platform focus visible |
| Ledger | PASS | PASS — Start Ledger Entry focus visible | PASS — footer Services focus visible |

Evidence screenshots (25 PNG): `/workspace/satoshium-qa/reports/a11y-retest-b0260c5/screenshots/`.

---

## 5. Per-issue confirmation

### GB-A11Y-001 — Services hub architecture link @400% — **PASS**
- **Sequence:** Native 400%; Tab until status bar showed `…/aegis/architecture.html` (“View Aegis Architecture Overview”).
- **Observed:** Gold focus ring fully visible with ample reading area; header scrolled away (static in flow).
- **Evidence:** `hub-zoom-400-focus-architecture-link-GB-A11Y-001.png`, `hub-zoom-400-scrolled-header-gone.png`.

### GB-A11Y-001b — Governance footer Main Platform @400% — **PASS**
- **Observed:** Focused “Main Platform” fully visible mid-screen; not covered by header.
- **Process note:** Programmatic focus used to place starting point near footer, then real Shift+Tab/Tab; final focus reached by keyboard.
- **Evidence:** `governance-zoom-400-footer-main-platform-GB-A11Y-001b.png`.

### GB-A11Y-001c — Ledger footer navigation @400% — **PASS**
- **Observed:** Footer nav focus clearly visible (Services link after Shift+Tab/Tab from Main Platform).
- **Evidence:** `ledger-zoom-400-footer-services-GB-A11Y-001c.png`.

### GB-A11Y-002 — Aegis Run Inspection focus ring — **PASS**
- **Sequence:** Tab onto Run Inspection at 100%, 200%, 400% without activating.
- **Observed:** Teal/cyan outline plainly visible at all three levels (thinner at 100%, still clear; thicker at 200/400). Unfocused comparisons at 100% and 400% show no outline on the button.
- **Caveat:** Separate unfocused shot at 200% not captured (comparisons rely on 100%/400% unfocused).
- **Evidence:** `aegis-zoom-100-run-focused.png`, `aegis-zoom-100-run-unfocused.png`, `aegis-zoom-200-run-focused.png`, `aegis-zoom-400-run-focused.png`, `aegis-zoom-400-run-unfocused-preset-focused.png`.

### GB-A11Y-003 — Shared header — **PASS** (visual)
- **@400% (~472 CSS px):** Header in normal document flow on all four pages; does not cover focused content; scrolls away.
- **@100% (~1888 CSS px):** Normal sticky header; **no visual regression** observed.
- **@200% (~945 CSS px):** Header remains sticky (media query does not apply above 640px); ~28% viewport height; focused items in shots remained visible. **Optional human review** of sticky-header height at 200% on wide/maximized desktops — outside this fix’s narrow-width scope, not marked FAIL.

---

## 6. Regression checks

| Check | Result |
|---|---|
| Hub three Try links present / focusable appearance | PASS |
| Aegis / Governance / Ledger pages load intact | PASS |
| New horizontal overflow at 100/200/400 | None observed |
| New overlap / clipping from fix | None observed |
| Unnecessary Aegis API traffic | Avoided |

Previous Phase D functional workflows were **not** fully rerun (per assignment); no visible UI regression prompted a re-run.

---

## 7. Tested vs untested

| Capability | Status |
|---|---|
| Live HTML contains fix CSS | Tested (curl) |
| Native Chrome 100/200/400% zoom UI | Tested |
| Keyboard Tab / Shift+Tab focus visibility (targeted) | Tested |
| Sticky vs static header (visual) | Tested |
| Horizontal overflow (visual) | Tested (none seen) |
| `innerWidth` / `scrollWidth` / computed `position` | **NOT MEASURED** |
| Exact 1280→320 CSS px baseline protocol | **Not achieved** (baseline ~1888) |
| Real screen-reader spoken output | **NOT TESTED** |
| WCAG conformance certificate | **Not claimed** |
| Review 013 G09 human facilitator | **OPEN** (GB2 automated) |
| G05/G06 | **BLOCKER** (unchanged) |
| G10/G11 | **NOT AUTHORIZED** |

---

## 8. Failures

**None** for GB-A11Y-001 / 001b / 001c / 002 / 003 under the conditions above.

If founder requires reproduction against a strict ~1280 CSS px window (≈320 at 400%), that remains an optional confirmatory human/desktop pass; this environment could not shrink the window to 1280 without viewport-resize proxy (explicitly avoided).

---

## 9. Evidence index

Root: `/workspace/satoshium-qa/reports/a11y-retest-b0260c5/`

| Kind | Path |
|---|---|
| This report | `GB2-review011-post-fix-retest-REPORT-2026-11-01.md` |
| Operator notes | `logs/retest-notes.md` |
| Deploy CSS summary | `deploy-evidence/deploy-css-evidence.md` |
| Aegis CSS excerpt | `logs/deployed-aegis-css-excerpt.txt` |
| Saved HTML | `deploy-evidence/*.html` |
| Screenshots (25) | `screenshots/*.png` |
| Prior first-pass (preserved) | `/workspace/satoshium-qa/reports/a11y-rehearsal/` |

Also copied for convenience: `/workspace/satoshium-qa/reports/GB2-review011-post-fix-retest-REPORT-2026-11-01.md`.

---

## 10. Declaration

GB2 retested the **deployed** pages after `b0260c5` using native Chrome zoom and keyboard focus. Results are observations for founder assessment. No GitHub writes, production changes, participant contact, or release-gate updates were made by GB2. Defect closure and human acceptance remain founder decisions.

**Authority follows the governed subject. Reference does not transfer authority.**