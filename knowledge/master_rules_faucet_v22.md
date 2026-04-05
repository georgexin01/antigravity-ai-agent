# Master Rules V22.1 — The Omniscient Engine

> Derived from V15 Master Rules & V21 ROI Logic.
> Focus: Sub-Second Triage, Human-Sync Jitter, Zero-Miss Timing.

## 🧠 1. Engine Core (P0)

1. **Sub-Second Triage (SST)**: The agent must execute any visible button (Faucet, PTC, Claim) within **800ms** of it appearing in the DOM. Use `MutationObserver`.
2. **"3-Hit Rule" (Fail-Safe)**: If an Antibot or Captcha fails (as indicated by page reset or error message), the system must:
   - Attempt 1: Refresh & Re-try.
   - Attempt 2: Wait 5s & Re-try.
   - Attempt 3: Skip to the next mission (PTC → Faucet fallback).
3. **Baton Sync (Persistence)**: Every mission state must be written to the `BOREALIS_MISSION_BATON_V22` in `localStorage` for cross-tab synchronization.

## 🛡️ 2. Stealth & Human-Sync (P1)

1. **Gaussian Curvature (GC)**: Mouse movements must not be linear. They must follow a Bezier curve to mimic human wrist motion.
2. **Latency Mimicry (LM)**: Add random "hesitation" delays (1500ms - 2500ms) before clicking critical "Verify" buttons.
3. **Focus Lock (FL)**: The site must NEVER detect that it is in a background tab. Use the `VisibilityState` mock.

## 📊 3. ROI Telemetry (P2)

1. **Single-Source Ledger**: ALL rewards (Faucet, PTC, Challenges) must be logged in `faucet_session_ledger.md` within 5 seconds of the "Success" toast.
2. **Velocity Threshold**: If Tokens Per Hour (TPH) drops below 2,000 for > 15 minutes, notify the Mission Commander.
3. **Referral Factor**: Add a +10% estimation to all observed yields in the dashboard calculation.

## 🎨 4. Aesthetic Code (V22.1 Tactical)

1. **Terminal Sync**: Dashboard Terminal must show logic tags: `[TRIAGE]`, `[SYNC]`, `[YIELD]`, `[ERROR]`.
2. **Lucide Alignment**: Use ONLY Lucide icons for status. No basic emojis in the Command Center.
3. **Singularity Orb**: The background must feel "alive" with an animated canvas or CSS pulse.

---
_V22.1 Omniscience Rule Set — 2026-04-04_
