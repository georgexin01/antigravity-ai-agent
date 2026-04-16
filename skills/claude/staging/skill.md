---
name: staging
description: Switch between mock, supabase, and default staging modes — manages env files and build/deploy commands.
triggers: ["staging mode", "dev local", "dev supabase", "switch env", "build local", "build supabase"]
phase: reference
requires: []
unlocks: []
inputs: [mode]
output_format: command_list
model_hint: gemini-3-flash
version: 2.0
---

# Staging Mode Management

This project has 3 staging modes for development and deployment. Use this command to switch between them or build for a specific mode.

| Mode | Dev Command | Build Command | Description |
|------|-------------|---------------|-------------|
| **unified** | `pnpm dev` | `pnpm build` | Local Docker Supabase. Unified context. |


## Environment Files

```
apps/web-antd/
  .env                         # Shared: app title, namespace, Supabase config
  .env.development             # Dev local: VITE_NITRO_MOCK=false
  .env.development.supabase    # Dev supabase: VITE_NITRO_MOCK=false
  .env.production              # Build local: VITE_NITRO_MOCK=false, hash router
  .env.production.supabase     # Build supabase: VITE_NITRO_MOCK=false, hash router
```

## Key Environment Variable

`VITE_NITRO_MOCK` controls which data source is used:
- `true` → In-browser mock system intercepts all axios requests (no network)
- `false` → Real Supabase backend via `@supabase/supabase-js`

## Build & Deploy (Local)

```bash
# 1. Rebuild shared package (required after pnpm install)
cd packages/@core/base/shared && pnpm unbuild && cd -

# 2. Build static files for local backend
pnpm build:local

# 3. Output: apps/web-antd/dist/ and dist.zip
```

## Build & Deploy (Supabase)

```bash
# 1. Rebuild shared package (required after pnpm install)
cd packages/@core/base/shared && pnpm unbuild && cd -

# 2. Build for Supabase
pnpm build:supabase

# 3. Output: apps/web-antd/dist/ and dist.zip
# Deploy to server with Supabase access
```

## Mock Login Credentials

| Username | Password | Role |
|----------|----------|------|
| `super` | `123456` | super |
| `admin` | `123456` | admin |
| `jack` | `123456` | user |

## Regenerate Mock Data

If entity schemas change, regenerate the seed data:

```bash
pnpm generate:mock-data
```

This runs `scripts/generate-mock-data.ts` which imports the backend mock DB, extracts all entity data with FK enrichment, and writes `apps/web-antd/src/mock/mockData.json`.

## Instructions

When the user invokes this command, ask them which action they want:
1. **Start dev server** — Ask which mode (local or supabase), then run the appropriate `pnpm dev:xxx` command
2. **Build for deployment** — Ask which mode, run `pnpm unbuild` in shared package first, then run `pnpm build:xxx`
3. **Show current mode info** — Display the env files and current configuration
