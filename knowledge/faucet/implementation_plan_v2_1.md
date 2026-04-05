# Session V22.1: Omniscient Earning Engine (Updated V2)

This session has been recalibrated based on user feedback to prioritize high-yield stable missions and enforce a platform blacklist.

## User Review Required

> [!IMPORTANT]
> **PROCEDURE UPDATE**: For iframe PTC missions, the engine will now:
> 1. Click "View".
> 2. Wait for the new tab/window to open.
> 3. **WAIT FOR TIMER TO END** on the viewer page.
> 4. Select **"I am not a robot"** / Captcha on the viewer page.
> 5. Click **"Verify"** to finalize the claim within that tab.

> [!CAUTION]
> **TAB MANAGEMENT**: I have detected multiple open PTC viewer tabs. I will reconcile these and close redundant sessions to prevent anti-cheat flags.

## Proposed Changes

### [Knowledge] Procedure Sync
Updating the core logic to match user-validated stealth/execution patterns.

#### [MODIFY] [task.md](file:///C:/Users/C:/Users/User/.gemini/antigravity/knowledge/faucet/task.md)
* Added specific "View -> Wait -> I am not a robot -> Verify" sub-tasks to Mission 2.

### [Execution] Mission Wave 2: iframe Raid
Executing the high-stability `iframe` missions with the new sequence.

* **Target**: `https://viefaucet.com/app/ptc/iframe`.
* **Action**: Sequentially clear 5x ads.
* **Audit**: Delta check after every 3 successful claims.

## Open Questions

1. Should I automatically close any `solkong.live` tabs found in the browser? (Default: YES)

## Verification Plan

### Manual Verification
* Checking reward deltas in `faucet_session_ledger.md`.
* Visual confirmation of iframe task completion via browser recording.
