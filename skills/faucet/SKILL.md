# AI Faucet Skill — V3.1 (Full Optimizer)

> **PURPOSE**: Drive AI Faucet Mode with a self-optimizing, pattern-recognizing, balance-tracking intelligence.  
> **V3.1**: Added Jumpstart Scroll, Tab Auto-Close, Failure Cooldown System, and Balance Inspector.
> **Cross-Model**: Model-neutral Markdown logic — loadable by Gemini, Claude, or GPT.

---

## 0. BOOT PROTOCOL

**Trigger**: "ai faucet" → Load this file + `viefaucet_profile.md` + `viefaucet_strategy_v2.md` + `faucet_pattern_vault.md` + `faucet_session_ledger.md`.  
**Start Trigger**: "start" → Initiate `START_MISSION_LOOP`.

> 🔴 **WINDOW REQUIREMENT**: All PTC missions MUST run in a **normal (non-incognito) browser window**. Incognito mode may block cross-tab focus events, causing timer failures. If Viefaucet is open in Incognito, ask the user to switch to a normal window before starting.

---

## 0.5 QUOTA PROTECTION PROTOCOL (⚠️ MANDATORY)

The AI uses a browser subagent powered by a live AI model to control the browser. Calling it too fast causes **rate limit (429) errors** that completely block execution.

**Anti-Exhaustion Rules:**
1. **60-Second Cool Gap**: Wait at least **60 seconds** between successive browser subagent launches.
2. **Batch Maximum**: Each browser subagent call MUST be designed to complete **an entire mission step** — never launch one just to take a screenshot or read a single value.
3. **On 429 Error**: Wait **90 seconds** before retrying. Log the retry in the session ledger.
4. **Light Reads First**: Prefer `read_url_content` (lightweight HTTP fetch) for reading page data before resorting to a full browser subagent.
5. **Mission Pacing**: Never launch back-to-back browser subagents within the same minute. Space missions naturally using the PTC timer duration as a built-in cooldown gap.
6. **Fail-Fast**: If 2 consecutive 429 errors occur, pause and inform the user. Do not retry a third time immediately.


#### `BALANCE_INSPECTOR` *(Run BEFORE every mission chain)*
- **Action**: Read the balance shown in the header of `viefaucet.com` using the DOM element (header balance indicator).
- **Store**: Record in `faucet_session_ledger.md` as **Session Start Balance**.
- **Sample**: Current balance at session init = `33,400.76` points.
- **After every mission**: Re-read balance → calculate `Δ earned = new_balance - previous_balance`.
- **Reporting**: In the chain summary, output with color labels:
  - 🟢 **+XX.XX pts** — this mission earned
  - 🔵 **+XX.XX pts** — session total earned
  - 🟡 **XX,XXX.XX pts** — all-time faucet total (from ledger baseline)

---

## 2. JUMPSTART SCROLL

#### `JUMPSTART_SCROLL` *(Run FIRST when on `/app/ptc/window`)*
- **Action**: Immediately scroll to `Y: 3000–5000px` to bypass the page header and reach the ad list instantly.
- **Why**: Reduces initial triage time by ~70%.
- **Rule**: Always scroll BEFORE scanning for ads.

---

## 3. STRATEGIC EARNING ENGINE

#### `PRIORITY_QUEUE_TRIAGE`
- Sort ads by **TPS = Reward ÷ Duration**. PTC Window avg: **3.08 TPS**.
- Target highest-TPS first (5s → 10s → 15s → 30s → 60s).

#### `CHALLENGE_MONITOR`
- Background tracking towards **50x PTC + 50x Faucet** daily challenge (300 tokens + 40 exp).
- Auto-claim at `/app/challenge` when milestone is hit.

#### `START_MISSION_LOOP (V3.1)`
1. `BALANCE_INSPECTOR` → snapshot start balance.
2. `JUMPSTART_SCROLL` → reach ad list.
3. 2x Speed-PTC Ads (5-10s).
4. `TAB_AUTO_CLOSE` on timer completion.
5. Bonus Claim (`/app/bonus`).
6. Faucet Cycle every 240s (`/app/faucet`).
7. `CORTEX_AUDIT` → Brain update.
8. Output **chain summary** with 🟢🔵🟡 color report.

---

## 4. LIVE VIEW EXECUTION (VIEFAUCET)

#### `EXECUTE_PTC_MISSION`
- Step 1: On Viefaucet PTC window, click "View" → new tab opens (the advertiser site).
- Step 2: **IMMEDIATELY SWITCH FOCUS to the advertiser tab**. Do NOT stay on or return to Viefaucet.
- Step 3: **STAY on the advertiser tab for timer duration + 5 seconds buffer**. Examples:
  - 5s ad → wait **10s** total
  - 10s ad → wait **15s** total
  - 15s ad → wait **20s** total
  - 30s ad → wait **35s** total
  - 60s ad → wait **65s** total
- Step 4: After timer + buffer completes → `TAB_AUTO_CLOSE`: Close the advertiser tab.
- Step 5: Focus returns to Viefaucet tab → captcha modal appears → solve "Least Often" icon → Verify.
- Step 6: `BALANCE_INSPECTOR`: Read new balance → report 🟢 delta.
- **⚠️ CRITICAL RULE**: Never switch focus away from the advertiser tab during the timer. Viefaucet detects tab focus. Leaving = timer reset = mission failure.

#### `TAB_AUTO_CLOSE`
- **Logic**: After timer duration elapses, execute `browser.closeTab(externalTabId)`.
- **Rule**: Only close the external ad tab, not the Viefaucet tab.

#### `EXECUTE_FAUCET_CLAIM`
- Identify selection order (FAUCET_ORDER_3 pattern) → pause for CAPTCHA → collect.
- `BALANCE_INSPECTOR`: Read new balance → report 🟢 delta.

---

## 5. FAILURE COOLDOWN SYSTEM

#### `FAILURE_TRACKER`
- **Trigger**: A PTC ad fails consecutively ≥ 3 times (e.g., Cloudflare block, focus-lock).
- **Action**: 
  1. Mark the ad as `[FAILED]` in the Pattern Vault.
  2. Assign a **30-mission cooldown counter**.
  3. Skip this ad and move to the next in the priority queue.
- **Retry Logic**: After 30 other missions complete, reset the cooldown. Mark ad as `[RETRY]`.
- **Repeat**: Keep repeating the cycle until the ad succeeds or is permanently blacklisted (after 10+ failures).

---

## 6. PATTERN RECOGNITION (EVOLVING)

#### `PATTERN_RECOGNITION_SURVEY`
- During Live View, analyze element IDs/Classes for new question/captcha patterns.
- Store discoveries in `faucet_pattern_vault.md`.

#### `TOKEN_COST_OPTIMIZER`
- If pattern is recognized → skip research step → execute with direct element selector.

#### `CORTEX_AUDIT` *(Post-chain)*
- Identify 1 strategic improvement. Auto-refine SKILL.md silently.
- Append **Token Savings %** to chain summary.

---

## 7. DOCUMENT HUB RULES

- `faucet_session_ledger.md`: Update after every chain with balance delta.
- `faucet_pattern_vault.md`: Update with every new pattern learned.
- `viefaucet_strategy_v2.md`: Update if TPS metrics or mission availability changes.
- **Silent Mode**: No individual claim logs. One chain summary only.

---

_V3.1 AI Faucet Full Optimizer — 2026-04-01_
