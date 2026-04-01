# Viefaucet Profile — V1.1 (Research & Execution Asset)

> **PURPOSE**: Provide detailed context and operational strategy for AI Faucet Flow 1.
> **SOURCE**: https://viefaucet.com/

## 1. PLATFORM OVERVIEW
- **Type**: Multi-coin Crypto Faucet & PTC Ecosystem.
- **Earning Channels**:
    - **Faucet**: Periodic claims (timer-based).
    - **PTC (Paid-To-Click)**: Core earning module (`/app/ptc/window`).
    - **Offerwalls**: Surveys and tasks.
    - **Daily Bonuses**: Incentivized login streaks.

## 2. MISSION EXECUTION STRATEGY (V1.1)
- **Speed-to-Bonus then Max**: 
    1. Identify and click two (2) shortest duration PTC ads (5-10s).
    2. Unlock and claim the **Daily Bonus** (`/app/bonus`).
    3. Transition to **Max Earnings**: Target high-token PTC ads (30-60s).

## 3. PAGE LOGIC (DEEP DIVE)

### Faucet Page (`/app/faucet`)
- **Antibot**: Order-based selection (e.g., text/image order like "mouse-cow-fox").
- **Verification**: reCAPTCHA checkbox.
- **Claim Action**: "Collect Your Reward" button.

### PTC Page (`/app/ptc/window`)
- **Stay Outside Mechanic**: Must stay on the external ad window for the full timer duration.
- **Verification**: "Least Often" captcha icon modal.
- **Trigger**: "View" button -> External Tab -> Wait -> Returns to Viefaucet -> Solving captcha.

### Bonus Page (`/app/bonus`)
- **Requirement**: Locked until 2x PTC ads are completed.
- **Action**: "Claim" in the streak table.

---

_V1.1 Viefaucet Profile — 2026-04-01_
