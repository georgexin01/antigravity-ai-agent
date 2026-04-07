# Master Rules V23.0 — The Omniscient Synergy Engine

> Derived from V15 Master Rules & V21 ROI Logic.
> **V23.0**: Hardened with G3 Director ↔ G4 Analyst cooperative mandate.

## 🧠 1. Engine Core (P0)

1. **Sub-Second Triage (SST)**: The agent must execute any visible button (Faucet, PTC, Claim) within **800ms** of it appearing in the DOM. Use `MutationObserver`. | **Agent: G3 Director**
2. **"3-Hit Rule" (Fail-Safe)**: If an Antibot or Captcha fails, the system must:
   - Attempt 1: Refresh & Re-try.
   - Attempt 2: Wait 5s & Re-try.
   - Attempt 3: Skip to the next mission (PTC → Faucet fallback).
3. **Baton Sync (Persistence)**: Every mission state must be written to the `BOREALIS_MISSION_BATON_V22` in `localStorage` for cross-tab synchronization.
4. **[NEW] Synergy Handoff**: On every captcha encounter, G3 Director solves first → passes screenshot to G4 Analyst for dual-check → compare at 90% confidence gate before executing click. | **Agent: G3 + G4 Required**
5. **[NEW] Cloud-Solo Fallback**: If G4 Analyst is offline, G3 Director bypasses the dual-check gate and executes with 85% confidence minimum. | **Agent: G3 Director only**

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

## 📋 FUTURE KNOWLEDGE RULE (PERMANENT)

> Any new rule added here MUST include:
> - **Agent Tag**: G3 Director, G4 Analyst, or G3 + G4 Required
> - **Fallback**: What happens when G4 is offline (Cloud-Solo mode)

---
_V23.0 Omniscience Rule Set — Synergy Hardened (2026-04-07)_
