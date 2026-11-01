# SATOSHIUM — GB2 Review 011 Post-Fix Browser Retest

**Prepared:** November 1, 2026 (Pacific)  
**Target repository:** `SatoshiumAI/satoshium-net` / `phase004`  
**Fix commit:** `b0260c5b8b09838090b18f54b2091c5b6542ef89`  
**Automated baseline:** Seven of seven GitHub Actions completed successfully, including GitHub Pages deployment.  
**Disposition:** RETEST ASSIGNMENT ONLY — no human acceptance or defect closure presumed.

## GB2 assignment

Independently retest the actual deployed Services pages following the narrow CSS changes in commit `b0260c5`. Do not make edits, open issues automatically, change release gates, contact participants or submit any real/private data.

### URLs

- https://satoshium.net/services/
- https://satoshium.net/services/aegis/aegis-service-panel.html
- https://satoshium.net/services/agent-governance/tool.html
- https://satoshium.net/services/verification-ledger/tool.html

## 1. Confirm deployment

Verify HTML served from the deployed URLs actually includes the new Services-local media rule at `max-width:640px`; on Aegis, confirm the specific `button.button:focus-visible` outline rule. Record fetch timestamp, browser/OS version, page URL, and supporting evidence. CI green alone is not the same as verifying rendered CSS.

## 2. Native browser zoom, not CSS proxy

Using Chrome native Ctrl+0 / Ctrl++ / zoom control, test every page at 100%, 200%, and 400%. If possible start with a ~1280-CSS-pixel wide desktop browser at 100%; otherwise report your true baseline and explicitly note the 400% effective layout width. Do not substitute viewport resize or root-font scaling without labeling it as a separate proxy. If script execution is unavailable, mark measured `innerWidth`, scrollWidth and computed CSS as NOT MEASURED rather than guessing.

For each page/zoom, record navigation height, fixed versus static behavior, horizontal overflow (visible/confirmed/uncertain), content obscuration, keyboard-only Tab and Shift+Tab, and screenshots of the focused element before and after scrolling. Pay special attention to 400%.

## 3. Confirm fixes or reproduce failures

- **GB-A11Y-001 (Services hub):** Revisit the previously obscured architecture link after multiple Tabs at 400%. Confirm visible focus and sufficient reading area.
- **GB-A11Y-001b (Governance):** Revisit the previously obscured footer `Main Platform` focus at 400%.
- **GB-A11Y-001c (Ledger):** Revisit the previously obscured footer navigation focus at 400%.
- **GB-A11Y-002 (Aegis):** Tab onto `Run Inspection` at 100%, 200%, 400%. Compare focused versus unfocused screenshots and assess whether the focus outline is plainly visible.
- **GB-A11Y-003 (shared header):** Verify header occupies normal document flow at narrow widths and does not cover focused content. Test normal desktop widths for visual regression.

If the focus defect persists, record exact viewport/zoom, keyboard sequence, visible location, screen capture and any relevant computed styles. Do not mark fixed based solely on source inspection.

## 4. Regression and governance checks

Confirm the hub links and navigation remain operable, all three tool interfaces appear intact, and no new overlap or horizontal overflow was introduced. Use fictional data only; avoid unnecessary Aegis API requests. Previously tested functional workflows need not be rerun unless the UI visibly regressed.

Keep actual screen-reader speech marked **NOT TESTED** unless a running AT product with observable spoken output is used. Keep Review 013 G09 human facilitator rehearsal **OPEN**: GB2 is automated. Keep G05/G06 **BLOCKER**, G10/G11 **NOT AUTHORIZED**. No WCAG certification or Suite operational release claims.

## 5. Required founder report

Return Markdown containing: test environment and deployed-source evidence; 4 pages × 3 zoom levels; per-issue PASS / FAIL / NEEDS REVIEW; screenshots/logs with accessible paths; regressions, if any; exact reproduction for failures; distinction between tested and untested capabilities; proposed next steps. Preserve earlier first-pass evidence separately.

**Do not write to GitHub.** Return the report for founder review; ChatGPT can archive it in `services/reviews/` after review. No changes to production until the evidence is assessed.

**Authority follows the governed subject. Reference does not transfer authority.**