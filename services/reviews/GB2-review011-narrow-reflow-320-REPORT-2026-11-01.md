# SATOSHIUM — GB2 Review 011 Narrow Reflow Acceptance Report (~320 CSS px)

**Status:** COMPLETE FOR FOUNDER REVIEW — observations only; no release-gate change claimed by GB2  
**Prepared by:** GB2 (Satoshium QA Bot / Grok Bot2)  
**Date:** 2026-11-01 (America/Los_Angeles, UTC-8); execution ~09:52–09:59 PT  
**Repository:** `SatoshiumAI/satoshium-net` / `phase004`  
**Baseline fix:** `b0260c5b8b09838090b18f54b2091c5b6542ef89`  
**Accepted bounded disposition archive tip (assignment):** `5562c7e524caca310f6ea80b4f954619b6dc6f53`  
**Assignment commit tip observed during this run:** `61087c29ca67` — *docs(review011): assign GB2 targeted 320px native-zoom reflow acceptance* (2026-11-01T17:51:36Z)  

**Prior QA folders preserved:** `a11y-rehearsal/`, `a11y-retest-b0260c5/` (untouched).

---

## 1. Recommendation

**Narrow native-zoom evidence at ~320 CSS px is sufficient for founder consideration as a successful targeted reflow/focus check under the preferred protocol.** All four public Services pages **PASS**ed layout/reflow, keyboard focus visibility, control reachability (tab order), and visual header-in-flow checks at native Chrome 400% on a ~1280 CSS px baseline window.

This does **not** close Review 011 real screen-reader acceptance, does **not** close Review 013 G09, and does **not** change G05/G06/G10/G11. No WCAG certification or pilot GO.

Compare without conflating methods:
- Prior post-fix retest (`b0260c5`): native zoom on ~1888 CSS px baseline → **~472 CSS px** at 400% — five targeted defects **PASS**.
- This assignment: preferred protocol ~1280@100% → 400% → **~320 CSS px** — **PASS** on all four pages; **no evidence contradicting** the ~472px PASS.

---

## 2. Method identification (critical)

| Item | Value |
|---|---|
| Method | **REAL NATIVE Chrome zoom** (Ctrl+0 / Ctrl+=) |
| Proxy / DevTools device mode | **Not used** |
| Window sizing | `wmctrl` set outer window ≈1312×1150 (mouse drag ineffective); Chrome unmodified; no Chrome security flags altered |
| Baseline @100% | `page.viewportSize()` **1280** CSS px wide (Phase A: 1280×771; Phase B taller window) |
| At 400% | Zoom bubble showed **400%**; `page.viewportSize()` **320×255** CSS px (all four pages in Phase B) |
| html box width @400% | ~316.25 CSS px (viewport minus ~3.75px scrollbar) |

**Native 400%-zoom acceptance at ~320 CSS px: TESTED (not NOT TESTED).**

---

## 3. Environment and measurements

| Item | Value |
|---|---|
| OS / display | Debian 13; X display 1920×1200; DPR 1; Computer screenshots downscaled to 1280×800 |
| Browser | Google Chrome **156.0.8078.47** |
| Browser zoom setting | Native page zoom 100% / 200% (hub compare) / **400%** (matrix) |
| Deployed hub `Last-Modified` | Sun, 01 Nov 2026 **17:52:12 GMT** (etag `6ae77c4c-54a4`) observed ~09:52–09:59 PT |
| Exact deployed SHA of HTML bodies | **Not independently hashed this run**; live hard-refresh used; tip docs commit `61087c29` |
| `window.innerWidth` | **NOT MEASURED** (page JS eval blocked); closest: Playwright `viewportSize` |
| `document.documentElement.scrollWidth` | **NOT MEASURED** |
| Computed header `position` | **NOT MEASURED**; stand-in: after wheel scroll, header bounding-box **y ≈ −390** on all four pages (scrolled away → behaves as static/in-flow) |
| Horizontal overflow stand-in | Horizontal wheel left html **x = 0**; no h-scroll observed (weaker than scrollWidth) |
| Aegis public API | **Not called** (Run Inspection focused only) |
| satoshium.us | Not followed |
| Real NVDA / VoiceOver / Orca speech | **NOT TESTED** (Phase C) |

---

## 4. Results matrix — four pages @ native 400% (~320 CSS px)

| Page | Layout / reflow | Focus visibility | Controls (keyboard) | Header in normal flow (visual) | Overall |
|---|---|---|---|---|---|
| Hub `/services/` | **PASS** — nav wraps; no unexpected h-overflow seen | **PASS** — architecture overview link ring clear | **PASS** | **PASS** (scrolls away) | **PASS** |
| Aegis panel | **PASS** | **PASS** — Run Inspection thick cyan outline | **PASS** (not activated) | **PASS** | **PASS** |
| Agent Governance | **PASS** — textarea internal scroll OK (2D control) | **PASS** — Run Evaluation + footer Legal & Policies | **PASS** (tab order) | **PASS** | **PASS** |
| Verification Ledger | **PASS** | **PASS** — Generate + footer Legal & Policies | **PASS** (tab order) | **PASS** | **PASS** |

### Hub 100% / 200% comparison (not a full regression suite)
| Zoom | Viewport width (viewportSize) | Header height (bbox) | Header behavior |
|---|---|---|---|
| 100% | 1280 | ~85 px | Static/in-flow (visual) |
| 200% | 640 | ~145 px | Static/in-flow (visual) |
| 400% | 320 | ~218 px | Static/in-flow (visual) |

---

## 5. Notable observations (NEEDS REVIEW — not defects)

1. **Automation Tab entry:** After some `page.goto` loads, the first Tab sometimes began in browser chrome (nav skipped once on Governance and Ledger). A full Tab cycle still reached nav first. Attributed to automation focus ownership, not site failure.
2. **Governance overview screenshot** may include a mid-load frame at top; header still visible.
3. **Tab order:** ~15 shared nav links precede page controls, then footer; after last footer link, Tab exits to browser UI (expected).
4. **Governance textarea** scrolls internally — treated as unavoidable 2D control scrolling, not page overflow.

**No FAILs; no new reproducible defect sequences.**

---

## 6. Comparison to ~472 px post-fix PASS

| | Post-fix retest | This narrow acceptance |
|---|---|---|
| Protocol | Native zoom; maximized ~1888 CSS px @100% | Native zoom; ~1280 CSS px @100% |
| At 400% | ~472 CSS px | **~320 CSS px** |
| Result | GB-A11Y-001/001b/001c/002/003 PASS | Four-page layout/focus/header PASS |
| Contradiction of prior PASS? | — | **None observed** |

Do not treat the ~472 px run as a 320 px acceptance, and do not treat this 320 px run as a screen-reader acceptance.

---

## 7. Remaining OPEN gates (explicit)

- Review 011 **real** NVDA / VoiceOver / Orca speech acceptance: **OPEN / NOT TESTED**
- Review 013 **G09** human facilitator rehearsal: **OPEN**
- **G05 / G06:** BLOCKER  
- **G10 / G11:** NOT AUTHORIZED  
- WCAG certification / Suite operational release / pilot GO: **not claimed**

---

## 8. Evidence index

Root: `/workspace/satoshium-qa/reports/a11y-narrow-320/`

| Kind | Path |
|---|---|
| This report | `GB2-review011-narrow-reflow-320-REPORT-2026-11-01.md` |
| Phase A method | `logs/phase-a-method.md` |
| Phase B notes | `logs/phase-b-notes.md` |
| Screenshots | `screenshots/` (14 PNGs including overviews, focus shots, hub 100/200 compare, Phase A attempt) |
| Convenience copy | `/workspace/satoshium-qa/reports/GB2-review011-narrow-reflow-320-REPORT-2026-11-01.md` |

Key screenshots:
- `hub-native400-320-overview.png`, `hub-native400-320-focus-architecture-overview-link.png`
- `aegis-native400-320-overview.png`, `aegis-native400-320-run-inspection-focus.png`
- `governance-native400-320-overview.png`, `governance-native400-320-run-eval-focus.png`, `governance-native400-320-footer-focus.png`
- `ledger-native400-320-overview.png`, `ledger-native400-320-generate-focus.png`, `ledger-native400-320-footer-focus.png`
- `hub-100-overview.png`, `hub-200-overview.png`

---

## 9. Declaration

GB2 performed a read-only narrow native-zoom reflow/focus check using the preferred ~1280→400%→~320 CSS px protocol. No GitHub writes, deployed-code changes, participant recruitment, or personal-data collection occurred. Results are for founder / ChatGPT review and later GitHub filing by others.

**Authority follows the governed subject. Reference does not transfer authority.**