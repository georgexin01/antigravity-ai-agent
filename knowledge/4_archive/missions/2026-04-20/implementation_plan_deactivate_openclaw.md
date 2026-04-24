# [🏹 APEX PLAN] | [⚡ MODE: ARCHITECT] | [🎯 GOAL: DEACTIVATE OPENCLAW DOMAIN]

## 🌌 Overview
Per user directive, the **OpenClaw** project is currently inactive. This plan executes a "Layer Scale-Down," moving the entire domain to **Tier 4 (Archive)** to ensure absolute focus on active projects (Claude, Faucet, Normal) and to prevent accidental trigger logic from consuming context.

## ⚖️ User Review Required

> [!NOTE]
> **DORMANT STATUS**: OpenClaw will no longer be visible in the active Domain specialist node (Tier 3). It will only be accessible via Tier 4 "Dormant Domains."

## 🏗️ Proposed Changes

### 1. Architectural Migration
- **MOVE** `knowledge/3_domains/openclaw/` -> `knowledge/4_archive/domains/openclaw/`.
- **MOVE** `skills/openclaw/` -> `knowledge/4_archive/skills/openclaw/`.
- This ensures the `openclaw` skills are 100% invisible to the regular skill router.

### 2. Atlas De-Triggering
- **MODIFY** `0_apex/PYRAMID_ATLAS.md`:
    - Relocate `mode.openclaw` link from Tier 3 to Tier 4.
    - **REMOVE** all `openclaw` triggers from the "Logic Gates" section.
    - Mark OpenClaw as `[🧊 STATUS: DORMANT]` in the topology.

### 3. Kernel Updates
- **MODIFY** `0_apex/GROUND_KERNEL.md`:
    - Remove `openclaw` references from the Tier-0 "NUCLEAR" check list to save discovery tokens.

## 🧪 Verification Plan

### Automated Tests
- Verify `skills/openclaw` no longer exists.
- Grep `PYRAMID_ATLAS.md` to ensure zero `openclaw` triggers remain in the Logic Gates.

### Manual Verification
- Test a generic prompt (e.g., "how is the machine?") to ensure no OpenClaw logic attempt is made.
