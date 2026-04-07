# Master Rules V23.3 — The Omniscient Synergy Engine (Evolution Mode)

> Derived from V15 Master Rules & V21 ROI Logic.
> **V23.1**: Hardened with G3 Director ↔ G4 Analyst cooperative mandate (Vision Upgrade).

## 🧠 1. Engine Core (P0)

1. **Sub-Second Triage (SST)**: The agent must execute any visible button (Faucet, PTC, Claim) within **800ms** of it appearing in the DOM. Use `MutationObserver`. | **Agent: G3 Director**
2. **"3-Hit Rule" (Fail-Safe)**: If an Antibot or Captcha fails, the system must:
   - Attempt 1: Refresh & Re-try.
   - Attempt 2: Wait 5s & Re-try.
   - Attempt 3: Skip to the next mission (PTC → Faucet fallback).
3. **Baton Sync (Persistence)**: Every mission state must be written to the `BOREALIS_MISSION_BATON_V22` in `localStorage` for cross-tab synchronization.
4. **[NEW] Synergy Handoff**: On every captcha encounter, G3 Director solves first → passes screenshot to G4 Analyst for dual-check → compare at 90% confidence gate before executing click. | **Agent: G3 + G4 Required**
5. **[NEW] Cloud-Solo Fallback**: If G4 Analyst is offline, G3 Director bypasses the dual-check gate and executes with 85% confidence minimum. | **Agent: G3 Director only**
6. **[NEW] Supervisor Role (SR)**: Gemini 3 Flash is no longer the primary worker. It acts as the **Task Deployer** and **Final Audit Gate**. Local Gemma-4 26B is the primary brain for all math and logic.

## 🛡️ 2. Stealth & Human-Sync (P1)

1. **Gaussian Curvature (GC)**: Mouse movements must not be linear. They must follow a Bezier curve to mimic human wrist motion.
2. **Latency Mimicry (LM)**: Add random "hesitation" delays (1500ms - 2500ms) before clicking critical "Verify" buttons.
3. **Focus Lock (FL)**: The site must NEVER detect that it is in a background tab. Use the `VisibilityState` mock.
4. **[NEW] Vision-First Confidence (VF)**: On all 5-slot captchas, enforce a "Color-Blind" mask. Analyze **Path** and **Rotation** independently of hex values to avoid bait.
    - **Outcome A**: Identify odd orientation -> Target.
    - **Outcome B**: No orientation found -> Select "No Option".

## 📊 3. ROI Telemetry (P2)

1. **Single-Source Ledger**: ALL rewards (Faucet, PTC, Challenges) must be logged in `faucet_session_ledger.md` within 5 seconds of the "Success" toast.
2. **Velocity Threshold**: If Tokens Per Hour (TPH) drops below 2,000 for > 15 minutes, notify the Mission Commander.
3. **Referral Factor**: Add a +10% estimation to all observed yields in the dashboard calculation.
4. **[NEW] Local-First Triage (LF)**: Before performing Cloud Vision on any captcha, the engine MUST check the local `tmp/snips/` directory for a user-provided Snipaste capture.

## 🎨 4. Aesthetic Code (V22.1 Tactical)

1. **Terminal Sync**: Dashboard Terminal must show logic tags: `[TRIAGE]`, `[SYNC]`, `[YIELD]`, `[ERROR]`.
2. **Lucide Alignment**: Use ONLY Lucide icons for status. No basic emojis in the Command Center.
3. **Singularity Orb**: The background must feel "alive" with an animated canvas or CSS pulse.
4. **[NEW] Snipaste Synergy (SS)**: Integrate F1-capture as the primary high-fidelity visual feed to bypass browser-tool latency and token costs.

---

## 📋 FUTURE KNOWLEDGE RULE (PERMANENT)

> Any new rule added here MUST include:
> - **Agent Tag**: G3 Director, G4 Analyst, or G3 + G4 Required
> - **Fallback**: What happens when G4 is offline (Cloud-Solo mode)

---
_V23.3 Synergy Evolution Rules — Local-First Active (2026-04-07)_

## 🛡️ 5. SELF-EVOLUTION (P3)
1. **Autonomous Update**: Individual task-delegation rules must be updated in the knowledge base after 3 successful Gemma-4 cycles.
2. **Path Priority**: All screenshots must be stored in workspace folder `./snipaste/`. Do not write to root or hidden system folders.
