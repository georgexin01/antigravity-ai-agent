# Implementation Plan - 'da-cheng-lok-lok' Vue 3 Migration

Objective: Convert the React-based점 (React 18 + TS) project into a modern Vue 3 + Vite application, following the newly established "Vue 3 Automation Protocol v3.0".

## User Review Required

> [!IMPORTANT]
>
> - Framework switch: **React -> Vue 3**.
> - Styling: **Tailwind CSS v4**.
> - Routing: **Vue Router 4** (preserving the 11-screen architecture).
> - Automation: **Silent background execution** and **Auto-open browser**.

## Proposed Changes

### [da-cheng-lok-lok]

#### [NEW] Vue 3 Scaffolding

- Scaffold new project in a temporary directory.
- Install dependencies: `vue`, `vue-router`, `tailwindcss`, `@tailwindcss/vite`.

#### [MIGRATE] Logic & Data

- **`src/constants.ts`**: Port directly (TypeScript compatible).
- **`src/types.ts`**: Port directly.
- **`src/App.tsx` -> `src/App.vue`**: Convert state (`useState` -> `reactive`/`ref`) and navigation logic.
- **`src/screens/`**: Migrate 11 screens (Home, Menu, Vouchers, etc.) to Vue SFC format.
- **`src/components/`**: Migrate `BottomNav` and other small UI bits to Vue.

#### [DELETE] Legacy React Files

- Once migration is verified, delete all `.tsx`, `.ts` (React-specific), and legacy config files (`tsconfig.json`, `vite.config.ts` of React).

## Verification Plan

### Automated Tests

- `npm run build` to check for compilation errors.
- Verify `da-cheng-lok-lok-v3` is NOT modified.

### Manual Verification

- Open the dev server and navigate through all 11 screens.
- Verify the "Login-First" guard works as configured in the global protocol.
