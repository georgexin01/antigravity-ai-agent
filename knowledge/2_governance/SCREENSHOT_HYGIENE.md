---
name: screenshot-hygiene
description: "🧹 Post-use screenshot purge mandate. Tier-1 Governance."
triggers: ["screenshot", "browser_recordings", "cleanup", "hygiene", "disk", "temp", "tempmedia", "brain folder"]
phase: constitutional
version: 1.1
status: authoritative
tier: 1
date_created: "2026-04-23"
date_updated: "2026-04-24"
---

# 🧹 SCREENSHOT HYGIENE (V1.1)

**Rule**: After ANY screenshot is consumed for its textual finding, delete it **the same turn**. No exceptions except user-pinned.

Tier-1 Governance — same level as [AOE_PROTOCOL.md](AOE_PROTOCOL.md) and [KARPATHY_OPERATIONAL_STANDARD.md](KARPATHY_OPERATIONAL_STANDARD.md). Origin: disk hit 100% full on 2026-04-23 due to 291 MB / 823 orphaned screenshots.

---

## 🗂️ Where screenshots live

| Path | Retention |
|---|---|
| `brain\{session-uuid}\.tempmediaStorage\` | **Delete same turn** |
| `brain\{session-uuid}\.system_generated\click_feedback\` | **Delete same turn** |
| `brain\{session-uuid}\*.png\|*.jpg` (loose) | **Delete at session close** unless user pinned |
| `antigravity\browser_recordings\` | Delete when session done |
| `antigravity-browser-profile\` | **Never** auto-delete (auth state) |

---

## 🔄 The loop

1. **CONSUME** — read/analyze screenshot.
2. **EXTRACT** — record OCR / coords / DOM state into the response.
3. **PURGE** — delete the file. Verify path absent.

**Session-start sweep** (turn 1 of every new session):
```powershell
Get-ChildItem "C:\Users\user\.gemini\antigravity\brain" -Recurse -Force -Directory `
  | Where-Object { $_.Name -eq '.tempmediaStorage' -or $_.Name -eq 'click_feedback' } `
  | Remove-Item -Recurse -Force
```

**Post-use purge** (after each turn that captured screenshots):
```powershell
Remove-Item "C:\Users\user\.gemini\antigravity\brain\{session-uuid}\.tempmediaStorage" -Recurse -Force -ErrorAction SilentlyContinue
```

---

## 🛡️ Exceptions — DO NOT delete if

- User said "keep", "save", "I want to see it again"
- Screenshot is pinned in session metadata
- Lives outside `brain/` (user uploads, Desktop, `html_artifacts/`)
- Is a deliverable (before/after proof, visual diff the user requested)

When in doubt, ask in one sentence before purging.

---

## 📊 Audit trail

Every cleanup reports: folders purged · files deleted · MB recovered · free-space delta.

---

## 🧪 Session-close checklist

- [ ] No orphaned `.tempmediaStorage/` under `brain/`
- [ ] Total loose `.png`/`.jpg` under `brain/` < 30 files
- [ ] Audit summary printed this session

---

## 🔗 Related

- [AOE_PROTOCOL.md](AOE_PROTOCOL.md) · [KARPATHY_OPERATIONAL_STANDARD.md](KARPATHY_OPERATIONAL_STANDARD.md) · [dna_core.md](../1_core/dna_core.md) P13 (Ignore Injection)

---
**V1.1 trimmed 2026-04-24** — merged duplicate cross-refs, removed decorative sections, kept enforceable rules.
