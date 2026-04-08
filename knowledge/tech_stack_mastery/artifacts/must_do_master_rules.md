# Mandatory Master Rules & Mandatory Execution Checklist (V4.2)

> **Source**: User instruction 2026-04-08
> **Status**: S-CORE 95 (Mandatory Compliance)

## 🎯 1. VISION MASTER RULE (SNIPASTE)
- **Tool**: Snipaste (F1)
- **Hot Folder**: `C:\Users\user\Desktop\workspace\snipaste`
- **Logic**: Whenever the AI needs to verify a complex UI state or solve a captcha that fails autonomously, it must look for a screenshot in this folder.
- **Handshake**: AI signals "VISION_PULSE" -> User saves Snipaste to folder -> AI reads and executes.

## ⚙️ 2. EXECUTION STANDARDS
- **Build First**: `npm run build` before any production deployment.
- **Dynamic Targeting**: Do not use static coordinates for buttons that refresh/shift. Re-calculate bounding boxes via JS after every interaction.
- **Unique Outlier Logic**: For 5-icon captchas, find the 4 similar (rotated) icons and select the one unique icon.

## 🧹 3. CLEANUP PROTOCOL
- **Tmp Files**: Delete scratch scripts after 1 session.
- **Browser Recordings**: Purge after verification to save disk space.

---
_Master Rules V4.2 — Predictive Intelligence Synchronized (2026-04-08)_
