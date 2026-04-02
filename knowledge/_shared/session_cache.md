# Session Warm-Up Cache — Instant Context Load

> **Purpose**: AI reads this FIRST (10 tokens). Instantly knows what project, what state, what to load next.
> **Rule**: Updated at END of every session. Read at START of next session BEFORE anything else.
> **Size**: Must stay under 30 lines. If it grows, trim old entries.

---

## LAST SESSION

```
Date:       2026-03-19
Project:    lee-ming-pork
Type:       APP (Vue 3 + Tailwind v4 + Pinia)
Client:     clients/lee-ming-pork.md
State:      9. ITERATE
Wave:       Wave 2 complete, Wave 3 in progress

What was done:
  - Fixed full ordering flow (auth → cart → checkout → order → WhatsApp)
  - Added FAQ page, OrderDetailView, date picker on orders
  - Redesigned order cards (gradient status), fixed 404 on refresh
  - Built V11 brain + ADPRS V4.1 + design vault + theme system

What to load next session:
  - Sections: §2 (During Coding), §3 (After Coding), §6 (Business Logic)
  - Skip: §1 (Before Coding — project exists), §7 (Error Quick-Fix — no bugs pending)
  - Vault: Check order-card-gradient.md if building list pages
  - Client: Load lee-ming-pork.md (brand #8B1A1A, WhatsApp 60123456789)

Predicted next tasks:
  - Admin reports page improvement
  - Product images (currently all null)
  - PWA final setup + deploy preparation
```

## ACTIVE PROJECTS QUEUE

| Priority | Project | State | Next Action |
|---|---|---|---|
| 1 | lee-ming-pork | 9. ITERATE | Admin reports, product images, deploy prep |
| 2 | dachengloklok | 1. PLAN | Start build (blueprint ready) |
| 3 | travel-app | 7. QA | Deploy, PWA conversion |

---

_Cache updated: 2026-03-19 — AI: overwrite this file at every session end._
