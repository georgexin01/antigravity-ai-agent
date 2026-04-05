# Implementation Plan: AI Faucet Learning Engine (V22.2)

This plan outlines the creation of a persistent feedback loop that allows the AI to "train" itself on mission efficiency, reducing token cost and execution time over every session.

## User Review Required

> [!IMPORTANT]
> **DYNAMIC SPEED BANDS**: I will implement three "Speed Bands" (Safe, Balanced, Turbo). The engine will automatically shift bands based on the last 5 missions. 
> **MYSTERY SOLVING**: Any failed click will trigger a `DOM_FORENSICS` report in the ledger to prevent the same error from recurring.

## Proposed Components

### 1. The Performance Ledger (Data Layer)
Upgrading `faucet_session_ledger.md` to a data-rich log.

*   **New Fields**:
    - `TTC` (Time to Complete): Measured from Start -> Reward Toast.
    - `Latency`: Delay between page load and first interaction.
    - `Efficiency Score`: Reward / TTC.
*   **Audit Frequency**: Every 2 missions.

### 2. The Pattern Synthesizer (Brain Layer)
Upgrading `faucet_pattern_vault.md` with "Refinement Logic."

*   **Logic**:
    - If `SR` (Success Rate) is 100% for 5 missions → **DECREMENT** wait-buffers by 2 seconds.
    - If `Click_Fail` occurs → **NULLIFY** old selector → **RE-SCAN** DOM → **SAVE** new "Mystery Solution."
*   **Distance Calculation**: The engine will calculate the distance between "Ad Widgets" and "Interaction Buttons" to predict misclicks before they happen.

### 3. The Execution Watchdog (Action Layer)
A real-time monitor during browser sessions.

*   **Wait-Timer Recalculation**: Instead of hardcoded 10s buffers, use `Duration + Dynamic_Buffer`.
*   **Proactive Ad Dismissal**: Automatically scanning for and closing obstruction elements (BitLabs, Gemshop, Play Now) based on previous "Mystery" logs.

## Phase 1: Knowledge Scaffolding (Research)
1.  Review the last 10 successful missions in the ledger to establish the **Baseline SPM (Seconds Per Mission)**.
2.  Identify the "Critical Path" for VieFaucet PTC (fastest route to verification).

## Phase 2: Schema Implementation
1.  [MODIFY] `faucet_session_ledger.md` to include PMT (Performance Metrics Table).
2.  [MODIFY] `faucet_pattern_vault.md` to include Dynamic Buffers.

## Phase 3: Live Training (Execution)
1.  Execute 5x iframe ads.
2.  Log performance.
3.  Recalculate buffers.
4.  Execute next 5x with updated speed.

## Open Questions

1. **Safety Floor**: What is the absolute minimum wait time you are comfortable with (e.g. "Never wait less than 5 seconds")?
2. **Mystery Reporting**: Do you want me to explain the "Mystery Solved" in text, or just log it silently in the ledger?

## Verification Plan

### Metrics Tracking
*   Compare SPM of the first 5 missions vs. the last 5 missions.
*   Verify that `solkong.live` and other distractions remain blocked.
