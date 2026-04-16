---
name: mode-routing
description: "🧭 MODE ROUTING & TASK CLASSIFICATION (V1.0)"
triggers: ["mode routing", "task routing", "mode config", "routing rules"]
phase: constitutional
model_hint: gemini-3-flash
version: 1.0
---

# 🧭 MODE ROUTING & TASK CLASSIFICATION (V1.0)

This document defines the task classification logic, folder isolation, and predictive next-steps for the Normal Mode ecosystem. It replaces: `mode_config.md` and `category_index.md`.

---

## 🏗️ 1. TASK CLASSIFICATION (V15+)

The AI must autonomously route the mission based on the `task_type`:

| Task Type | Core Reading Path | Primary Build Order |
| :--- | :--- | :--- |
| **APP/ADMIN** | `MASTER_DNA` + `TECH_STACK` | Tokens → Types → Stores → Layout → Views → Verify |
| **WEBSITE** | `MASTER_DNA` + `DESIGN_DNA` | Hero → Sections → Nav/Footer → AOS → Mobile → SEO |
| **BUGFIX** | None (Use `GROUND_KERNEL` Triage) | Read → Classify → Fix → Rebuild → Verify |
| **ENHANCE** | Existing File Logic | Read → Apply Difference → Match Aesthetic → Verify |

---

## 🔒 2. FOLDER ISOLATION

- **Unlocked Path**: `_shared/` + `normal/` + `skills/normal/`.
- **Blocked Path**: `claude/`, `faucet/`, `openclaw/` (unless specific `ai [mode]` trigger is detected).
- **GUI Fidelity**: All mission responses MUST follow standard atomic markdown templates.

---

## 🎯 3. FINGERPRINT & PREDICTIVE LOGIC

### 3.1 Fingerprint Shortcuts
- **FP-001 (F&B)**: `APP` + `Bilingual` modules.
- **FP-002 (B2B)**: `APP` standard structure.
- **FP-003 (Travel)**: `APP` + `i18n` + `GSAP` modules.
- **FP-006 (E-Commerce)**: `APP` + `PWA` + `Supabase` modules.

### 3.2 Predictive Momentum (V9)
- **Login Complete** → Auto-prep Auth Chain (OTP, Signup, Guards).
- **Products Complete** → Auto-prep Cart & Checkout patterns.
- **Layout Finished** → Auto-prep View Templates.
- **Hero Built** → Auto-prep remain sections (Authority Flow).

---

## 📊 4. ECOSYSTEM INDEX

| Module | Purpose | File Source |
| :--- | :--- | :--- |
| **DESIGN** | Cinematic UI, Bento, OKLCH | `normal/DESIGN_DNA.md` |
| **APP** | Vue 3, Pinia, PWA, i18n | `normal/TECH_STACK.md` |
| **AGENCY** | Singularity Law, GCP Sync | `normal/MASTER_DNA.md` |

---
**MODE ROUTING V1.0 — Antigravity Authoritative Task Hub (2026-04-14)**
