# Zeta App China - Project Blueprint

This document defines the recurring patterns and configuration for the "Zeta" style of applications: AI-driven, high-fidelity mobile-responsive websites.

## Core Design Philosophy
- **Colors**: Red (#FF0000) for highlights, Deep Black (#0A0A0A) for backgrounds, and Slate Gray (#333333) for secondary elements.
- **Aesthetic**: Premium "Motion 3D" (Glassmorphism + Three.js dynamic backgrounds).
- **Typography**: Sans-serif (Inter/Roboto for UI, Orbitron/Display for tech headers).

## Recommended Tech Stack
- **Framework**: Vue 3 + Vite.
- **Styling**: SASS (SCSS) + Element Plus (Glassmorphism theme).
- **Core Libraries**:
  - `three`: 3D rendering.
  - `lucide-vue-next`: Tech-style icons.
  - `pinia`: State management.
  - `axios`: API communication.

## Quick Setup Command
```powershell
# Create folder and init Vite
mkdir zeta-app-<name>; cd zeta-app-<name>
npx -y create-vite@latest ./ --template vue
# Install core dependencies
npm install; npm install element-plus three lucide-vue-next axios pinia vue-router
# Install dev dependencies
npm install -D sass
```

## Folder Structure Template
```text
/src
  /assets        # Images and 3D models
  /components    # UI components (Navbar, Hero, AppCard)
  /views         # Main pages (Home, Apps, AI-Tech)
  /store         # Pinia stores
  /router        # Vue Router config
  /styles        # Global SCSS variables
  /utils         # Three.js helpers
```

## Standard Requirements
Always include `project_requirements.md` in the root for AI context and future reference.
