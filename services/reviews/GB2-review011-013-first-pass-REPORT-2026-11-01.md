# SATOSHIUM — GB2 First-Pass Accessibility and Internal Rehearsal Report

**Status:** COMPLETE FOR FOUNDER REVIEW — observations only; **no** release-gate change claimed  
**Prepared by:** GB2 (Satoshium QA Bot / Grok Bot2)  
**Prepared for:** Founder review  
**Execution window:** 2026-11-01 approximately 09:15–09:29 America/Los_Angeles (UTC-8)  
**Mode:** READ-ONLY public testing; fictional inputs only; no GitHub writes; no participant recruitment; no feedback collection; no production edits  

**Assignment source:** Founder brief *SATOSHIUM — GB2 First-Pass Accessibility and Internal Rehearsal Assignment* (2026-11-01); checklists on `SatoshiumAI/satoshium-net` `phase004` under `services/reviews/`.

---

## 1. Executive recommendation

**Recommend founder review of accessibility defects GB-A11Y-001 / 001b / 001c (sticky-header focus obscured at 400% native zoom) and GB-A11Y-002 (Aegis Run Inspection missing focus ring) before treating Review 011 native-zoom acceptance as closable.**

**Do not** close Review 011 real screen-reader acceptance (NOT TESTED here).  
**Do not** mark Review 013 G09 human facilitator rehearsal complete (this run is a synthetic/automated proxy only).  
**Do not** grant G10/G11 or weaken G05/G06 blockers.  
**Do not** reclassify the prior 400% CSS font-on-320px advisory stress overflow as a WCAG failure.

Synthetic facilitator dry-run (Phase D) **passed** its exercised steps with fictional data; several wording/semantics items are **NEEDS REVIEW**.

---

## 2. Scope and authority boundaries

### Exercised
- Review 011-style native Chrome zoom + keyboard/focus on four public URLs
- Accessibility-tree / ARIA **proxy** (explicitly not auditory)
- Review 013 facilitator checklist as **synthetic internal dry-run**

### Explicitly not claimed / still open
| Gate / item | Disposition after this report |
|---|---|
| Review 011 native zoom human acceptance | Evidence recorded; **acceptance decision remains with founder** (baseline width caveat) |
| Review 011 real AT (NVDA/JAWS/VoiceOver) | **NOT TESTED / OPEN** |
| Review 013 G09 human facilitator rehearsal | **OPEN** (proxy ≠ human facilitator) |
| G05 consent / withdrawal | **BLOCKER** (unchanged) |
| G06 feedback stewardship/storage | **BLOCKER** (unchanged) |
| G10 invitations / G11 sessions | **NOT GRANTED** |
| Phase 2 functional authorization | **Not granted** (unchanged) |
| GB-I-008 Governance demo identity correction | **Not performed** (charter: do not modify public demo identities) |
| WCAG conformance certificate | **Not asserted** |

Hard exclusion upheld: `satoshium.us` links **identified** when seen; **never followed**.

---

## 3. Deployed surface freshness

| Fact | Value |
|---|---|
| Targets | `https://satoshium.net/services/` ; `…/aegis/aegis-service-panel.html` ; `…/agent-governance/tool.html` ; `…/verification-ledger/tool.html` |
| Live hub probe (~09:16 PST) | HTTP/2 200; GitHub Pages; `Last-Modified: Sun, 01 Nov 2026 17:16:20 GMT` |
| `phase004` tip (public API) | `b27f452d4e34` — *docs(reviews): prepare GB2 accessibility and synthetic rehearsal first-pass brief* (2026-11-01T17:15:01Z) |
| Prior tips noted | `98d5bcfab87c` founder decisions register; `72cadd51f1b2` network disclosure reconciliation (register text) |
| Repo access for this bot | Public raw/GitHub HTTPS reads only; Cursor Origin cannot see `SatoshiumAI/satoshium-net`; GitHub App not connected — **no writes attempted** |
| Checklist mirrors | `/workspace/satoshium-qa/reports/checklists/` |

---

## 4. Phase A — Tool and environment disclosure

| Capability | Available? | Evidence |
|---|---|---|
| OS | Debian GNU/Linux 13 (trixie), x86_64, kernel 6.12.94+ | `uname` / `/etc/os-release` |
| Display | X.Org; `DISPLAY=:2`; physical screen **1920×1200** | `xdpyinfo` / `xrandr` |
| Browser | Google Chrome **156.0.8078.47** | `google-chrome --version` |
| Screenshots | Yes | Computer tool captures → workspace PNG/WebP |
| Keyboard injection | Yes | Tab / Shift+Tab / Enter / Space / Ctrl chords |
| **Native browser zoom** | **Yes** | Chrome zoom bubble showed 100% / 110% / 200% / 400% via Ctrl+0 / Ctrl+=; content enlarged without window resize |
| Viewport resize to ~1280 CSS px | **Failed** | Restore-down ≈1888 px; edge drag ineffective → tests ran near-maximized |
| `window.innerWidth` / `scrollWidth` | **Not captured** | No page JS eval available to desktop agent |
| Accessibility tree / ARIA names | Partial (Chrome computed names via snapshot) | Phase C proxy notes |
| NVDA / JAWS / VoiceOver | **No** | Wrong OS / not installed |
| Orca / trustworthy spoken SR | **No** | `orca` not on PATH; no running SR; no audible transcript |
| Auditory simulation | Forbidden | Not performed |

Derived layout widths at native zoom (≈1888–1905 CSS px content at 100%): **~945 CSS px at 200%**, **~472–476 CSS px at 400%** — **not** the protocol’s ≈320 CSS px from a 1280 baseline.

Weekly usage at report time: **~3.2%** of shared Premium weekly limit (resets Sunday Nov 8, 00:34 America/Los_Angeles).

---

## 5. Phase B — Review 011 reflow and keyboard

### 5.1 Native zoom determination
**WORKS.** Viewport-only proxy **not** used. Baseline-width protocol caveat recorded above.

### 5.2 Results matrix (page × native zoom)

| Page | Level | Approx layout width | H-scroll / clip / overlap | Focus / keyboard | Result | Evidence |
|---|---|---|---|---|---|---|
| Hub | 100% | ~1905 | No h-scroll; 3-card row | — | PASS (visual) | `hub-zoom-100` |
| Hub | 200% | ~950 | No h-scroll/clip; nav wraps; Home flush left (minor) | Tab/Shift+Tab; focus visible on Mentor, Try Aegis, Launch Governance; sticky header ~35% | PASS WITH OBSERVATIONS | `hub-zoom-200`, `hub-zoom-200-focus-*` |
| Hub | 400% | ~476 (≠320) | No h-scroll seen; nav 3 rows | Focus after Tab×3 on `/services/aegis/architecture.html` **not visible**; sticky header ~75% | **FAIL** (focus obscured / usable area) | `hub-zoom-400`, `hub-zoom-400-focus-hidden` |
| Aegis | 100% | ~1890 | No h-scroll; controls one row; static sample JSON visible | Mode/actor/presets show focus; **Run Inspection: no visible focus ring** | **FAIL** (2.4.7 candidate) | `aegis-zoom-100`, crops |
| Aegis | 200% | ~945 | No h-scroll; controls stack; sticky ~35% | Same missing Run Inspection ring | **FAIL** (focus) / PASS visual reflow | `aegis-zoom-200-run-button-focused-no-ring` |
| Aegis | 400% | ~472 | No h-scroll; sticky ~67% | Not fully keyboard-walked at 400% | NEEDS REVIEW (usable area) | `aegis-zoom-400` |
| Governance | 100% | ~1890 | No h-scroll | Rings on Connect/Home, Agent name, Run Evaluation, Load Demo, Download .txt (partial set) | PASS WITH OBSERVATIONS | `governance-100-focus-*` |
| Governance | 200% | ~945 | No h-scroll; sticky ~38% | Labels visible | PASS WITH OBSERVATIONS | `governance-zoom-200` |
| Governance | 400% | ~472 | No h-scroll; sticky ~72% | Footer focus (Main Platform) not visible until zoom reset | **FAIL** (focus obscured) | `governance-zoom-400` |
| Ledger | 100% | ~1890 | No h-scroll; authority-limit copy visible | Gold rings on Agent, Generate, Import, Download JSON, Verify | PASS WITH OBSERVATIONS | `ledger-100-focus-*` |
| Ledger | 200% | ~945 | No h-scroll; sticky ~38% | — | PASS WITH OBSERVATIONS | `ledger-zoom-200` |
| Ledger | 400% | ~472 | No h-scroll; sticky ~72% | Footer focus (`…/services/aegis/`) not visible | **FAIL** (focus obscured) | `ledger-zoom-400` |

### 5.3 Keyboard notes (summary)
- Tab / Shift+Tab generally followed visual order on tools exercised.
- **Aegis Run Inspection** is the clear primary-control focus-visibility failure (focused vs unfocused crops identical).
- Governance and Ledger primary buttons that were captured **do** show focus rings (contrast with Aegis).
- Export/verify controls on Governance and Ledger **appear enabled** while results read “Not generated yet” (not activated in Phase B; Phase D verify used after real generation).

---

## 6. Phase C — Screen reader vs accessibility-tree proxy

### 6.1 Real screen reader
**ALL true auditory checks: NOT TESTED.**  
No NVDA/JAWS/VoiceOver/Orca with observable spoken output.  
**Review 011 real assistive-technology acceptance remains OPEN.**

### 6.2 Accessibility-tree / ARIA proxy — NOT AUDITORY
Source: Chrome computed accessible names/roles/states during the Phase C/D pass. Full notes: `logs/phase-c-a11y-tree-proxy.md`.

| Observation | Severity | Notes |
|---|---|---|
| Shared banner/nav/footer landmarks generally present (Governance/Ledger) | Info | Aegis snapshot extract began at `main` — header exposure NEEDS REVIEW |
| Most main-area `<section>`s are unnamed `region` | Medium (proxy) | Missing accessible names on content regions |
| Aegis response viewer: named region + `role=log` | Info / NEEDS REVIEW | Region name is terminal-style; live-region semantics during “Loading…” |
| Governance result badge: `role=status` | Good (structure) | |
| Ledger result badge (“Awaiting Entry” / “ALLOWED”): plain text, not `role=status` | Medium (proxy) | Result changes may not be announced by AT |
| Verify/import outcomes via `window.alert()` | Info | Modal alert behavior; auditory quality untested |
| Form controls on Governance/Ledger generally have accessible names | Good (structure) | Required state not exposed |
| Aegis button accessible name “Run inspection action” vs visible “Run Inspection” | Info | Label-in-name still contains visible text |

**These proxy notes must not be treated as human screen-reader PASS/FAIL.**

---

## 7. Phase D — Review 013 synthetic facilitator dry-run

**Role:** GB2 automated browser operator. **Does not close G09.**  
Full notes: `logs/phase-d-facilitator-dryrun.md`.

| Step | Status | Observation |
|---|---|---|
| D1 Find tools from Services hub | **PASS** (notes) | Three “Try …” CTAs found; limit lines present; authority-implying terms flagged |
| D2 Aegis `actor-a,actor-b` single run | **PASS** | Preset alone = no API; Run Inspection once → `GET api.satoshium.net/certification-authority?viewMode=explorer&actorIds=actor-a%2Cactor-b`; JSON timestamp `2026-11-01T17:26:58.058Z`; page asserts read-only |
| D3 Governance Load Demo + evaluate + export/verify | **PASS** | Decision **REVIEW REQUIRED** (`financial_threshold_rule`); record `sat-agr-20261101-426`; SHA-256 verification reference `4CB5A3E3…2581B`; download + verify alert SUCCESS; no hand-edit of demo identities |
| D4 Ledger fictional generate + export/verify + gov import | **PASS** (notes) | Agent `demo-agent-gb2-001` / rule `demo-rule-gb2-alpha`; record `sat-vl-20261101-328`; verify SUCCESS; import D3 JSON with issuer-non-auth disclaimer; SHA-256 ≠ issuer auth and Verification-ready ≠ Bitcoin confirmed in page copy |
| D5 Withdrawal / secret / accommodation scripts | **PASS** (script-only) | Hypothetical talking points recorded; no real participants |
| Report downloads (.txt) / Execution Receipt / negative verify | **NOT TESTED** | Explicitly skipped |

### Facilitator practice answers (recorded)
- Did Aegis activate/certify? **No** (read-only inspection).  
- Does APPROVED authorize execution? **No** (unsigned reference evaluation). Actual result here was REVIEW REQUIRED — also not execution authority.  
- Does SHA-256 prove issuer / does Verification-ready TRUE prove Bitcoin? **No** / **No**.

### Phase D NEEDS REVIEW (wording / semantics)
1. Aegis static sample JSON before run may be mistaken for live output.  
2. Aegis JSON field names (`certificationAuthority`, `…ReceiptIssuanceTransportReady`) sound like issuance claims against boundary copy.  
3. Ledger green **ALLOWED** badge can read as system approval though Decision is user input.  
4. Downloaded Ledger JSON field `anchor_ready` vs UI “Verification-ready”.  
5. Governance verify SUCCESS alert lacks the “does not authenticate issuer” disclaimer present on Ledger import alert.  
6. After Governance import, Ledger result card did not auto-regenerate (operator did not re-click Generate).

---

## 8. Defects (severity-ranked) — no changes made

| ID | Severity | Page | Summary | Expected | Observed | Proposed minimal correction | Evidence |
|---|---|---|---|---|---|---|---|
| GB-A11Y-001 | High (candidate 2.4.11) | Hub | Focused control not visible at 400% under sticky header | Focused control remains visible | Tab×3 → architecture link focused but not visible; header ~75% viewport | Non-sticky/compact header under narrow/zoom media; and/or `scroll-padding-top` | `hub-zoom-400-focus-hidden` |
| GB-A11Y-001b | High (same class) | Governance | Footer focus obscured at 400% | Focus visible | Focus on “Main Platform” not visible at 400% | Same as 001 | `governance-zoom-400` |
| GB-A11Y-001c | High (same class) | Ledger | Footer focus obscured at 400% | Focus visible | Status bar `/services/aegis/` while control not in viewport | Same as 001 | `ledger-zoom-400` |
| GB-A11Y-002 | High (candidate 2.4.7 / 2.4.13) | Aegis | **Run Inspection** lacks visible focus indicator | Clear `:focus-visible` ring | Focused/unfocused crops identical | e.g. `button:focus-visible{outline:3px solid …; outline-offset:3px}` | `aegis-100-run-button-crop-*`, `aegis-zoom-200-run-button-focused-no-ring` |
| GB-A11Y-003 | Medium | Shared chrome | Sticky header consumes majority of viewport at 400% | Enough content viewport remains | ~67–75% header at 400% | Non-sticky or compact header under zoom/narrow queries | `*-zoom-400` |
| GB-A11Y-006 / 006b | Medium | Governance / Ledger | Export/verify look enabled before record exists | Disabled or clear empty-state | Appeared enabled with “Not generated yet” (Phase B) | Disable until record exists, or empty-state error on activate | focus export/verify shots |
| GB-A11Y-007 | Low | Governance | Low-contrast placeholders | Adequate contrast / clear empty state | Grey placeholders on dark fields | Stronger placeholder contrast or examples outside value | form shots |
| GB-A11Y-004 | Low | Hub | Nav “Home” flush left at 200/400% | Adequate edge padding | Flush at x≈0 | Horizontal padding | `hub-zoom-200` |
| GB-A11Y-005 / 005b | Info (exclusion) | Aegis / Ledger footers | `https://satoshium.us/suite/` | Identify, never follow | Seen in status bar; **not followed** | Out of GB2 follow scope; founder may triage separately (GB-I-001 context) | status-bar |
| GB-COPY-* | NEEDS REVIEW | Multiple | Authority-implying / mismatch wording (Phase D list) | Clear non-authority semantics | See §7 NEEDS REVIEW | Copy/JSON naming review; align verify alert disclaimers | Phase D notes + shots |

---

## 9. Comparison to prior 400% font-on-320px advisory stress

Prior Review 011 text-enlargement disposition (2026-10-24): **CSS root-font simulation** on a **fixed 320px** Chromium viewport — 200% overflow OK on 4/4; 400% overflow on 4/4. Method is **not** native zoom; disposition is **ADVISORY STRESS**, not WCAG failure.

This GB2 pass used **true Chrome native zoom** on a **maximized ~1900 CSS px** window (400% ≈ **476 CSS px**, wider than 320). Document-level **horizontal overflow was not observed** in screenshots taken, but **sticky-header focus obscuration and severe content-viewport reduction** were. Those findings are recorded as native-zoom usability defects and **do not reclassify** the earlier CSS stress overflow as a standards failure.

---

## 10. Outstanding human / administrative tasks

1. Founder decision on Review 011 native-zoom acceptance given maximized-window caveat (optional retest at true ~1280 CSS px baseline → ~320 at 400%).  
2. Human NVDA or VoiceOver acceptance still required for Review 011 AT gate.  
3. Designate human facilitator and complete blank Review 013 human rehearsal report for G09.  
4. G05/G06 founder decisions (steward, storage, consent, withdrawal) remain blockers.  
5. G10/G11 remain unauthorized.  
6. GB-I-008 approved correction + independent retest still pending (not in this assignment’s write scope).  
7. Optional: human re-verify GB-A11Y-002 in DOM/DevTools; negative integrity-verify tests; `.txt` report / receipt paths.

---

## 11. Evidence index (box paths)

Root: `/workspace/satoshium-qa/reports/a11y-rehearsal/`

| Kind | Path |
|---|---|
| This report | `GB2-review011-013-first-pass-REPORT-2026-11-01.md` |
| Phase A notes | `phase-a-environment.md` |
| Phase B logs | `logs/hub-phase-b-notes.md`, `aegis-phase-b-notes.md`, `governance-phase-b-notes.md`, `ledger-phase-b-notes.md` |
| Phase C proxy | `logs/phase-c-a11y-tree-proxy.md` |
| Phase D dry-run | `logs/phase-d-facilitator-dryrun.md` |
| Screenshots | `screenshots/` (41 PNG + WebP pairs; see directory listing) |
| Fictional downloads | `downloads/phase-d-governance-wallet-ops-v1-record.json` (sha256 `1b35193840dc…7037a9`) ; `downloads/phase-d-ledger-demo-rule-gb2-alpha-ledger-record.json` (sha256 `59286921a420…5cda31`) |
| Checklist mirrors | `/workspace/satoshium-qa/reports/checklists/` |

Prior Phase 0–1 evidence under `/workspace/satoshium-qa/` is **preserved** and was not overwritten by this assignment.

---

## 12. Declaration

GB2 performed this first-pass using tools actually available on the Satoshium-dedicated box. Missing capabilities are marked **NOT TESTED**. No production pages, Governance demo identity values, GitHub workflows, or release-gate documents were modified. No participants were invited and no feedback was collected. Results are submitted for **founder approval first**.

**Authority follows the governed subject. Reference does not transfer authority.**