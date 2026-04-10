# LAA Frontend Sync Protocol — Master Architecture Rules

> **Status**: S-CORE 100 (Immutable Architectural Standard)
> **Applicability**: All project frontend apps (webApp-LAA-*, apps/web-*)

## 🎯 Core Directive
All frontend development in this workspace must be "Hybrid-Ready" and "Sync-First." Applications must seamlessly transition between Local Docker, Shared Dev, and Nitro Mock environments without code changes.

## ⚙️ 1. Environment Standards
Every project must maintain the following `.env` ecosystem:
- `.env.development`: Points to the **Main Dev Server** (`aisolo.vip`). Matches Vben Admin config.
- `.env.local`: Points to the **Local Docker** (`localhost:54321`).
- `.env.mock`: Points to the **Nitro Mock Web Server**.

## 🧬 2. Hybrid Data Implementation
- **VITE_NITRO_MOCK**: MUST be used in logic to toggle between `axios` (mock) and `supabase-js` (db).
- **Stores**: Any Pinia store fetching data must implement a bridge pattern matching both data sources.
- **Auto-Sync**: Credentials (URL/Key) must be sourced from the primary admin panel settings (`apps/web-antd`) during initialization.

## 🎨 3. UI/UX "First-Impression" Hardening
- **Skeletons**: All list views MUST have loading skeletons or progressive blur-loads.
- **Empty States**: Clear "No Data" UI is required for every list-based view.
- **Safety**: Views must gracefully handle cases where the question pool or course data is null/undefined.

## 📦 4. Mandatory Scripts
Every `package.json` must include:
```json
"dev": "vite",
"dev:local": "vite --mode local",
"dev:mock": "concurrently \"npm run dev:mock-server\" \"vite --mode mock\""
```

---
_V1.0 Knowledge Pulse — Immutable Standards for ZETA IT / LAA Ecosystem (2026-04-10)_
