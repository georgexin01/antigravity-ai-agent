# Environment & Configuration (V2.0)

> **Config Files**: `.env.development`, `.env.production`
> **Access**: `import.meta.env.VITE_*`
> **Rule**: Never hardcode URLs or API keys in source code

---

## 1. ENVIRONMENT FILES

```bash
# .env.development (local Supabase Docker)
VITE_GLOB_API_URL=http://localhost:54321
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...local-anon-key
VITE_DB_SCHEMA=quizLaa
VITE_APP_TITLE=QuizLAA Dev

# .env.production (remote Supabase)
VITE_GLOB_API_URL=https://api.zeta-groups.com
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...prod-anon-key
VITE_DB_SCHEMA=quizLaa
VITE_APP_TITLE=QuizLAA

# .env.development.supabase (SSH tunnel to remote Supabase)
VITE_GLOB_API_URL=http://localhost:54321
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...remote-anon-key
VITE_DB_SCHEMA=quizLaa
VITE_APP_TITLE=QuizLAA Supabase Dev
```

---

## 2. VITE ENV TYPE DECLARATIONS

```typescript
// src/env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GLOB_API_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_DB_SCHEMA: string
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

---

## 3. ACCESSING ENV IN CODE

```typescript
// In request.ts or any .ts file:
const apiUrl = import.meta.env.VITE_GLOB_API_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const schema = import.meta.env.VITE_DB_SCHEMA
```

**Rules:**
- Only `VITE_` prefixed variables are exposed to the browser
- Never put secrets (service_role key, DB password) in `.env` files
- The `anon_key` is safe to expose — it's rate-limited and RLS-protected
- `.env.*.local` files are gitignored (use for personal overrides)

---

## 4. APP BOOTSTRAP

```typescript
// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './styles/main.css' // Tailwind CSS

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Set document title from env
document.title = import.meta.env.VITE_APP_TITLE || 'WebApp'

app.mount('#app')
```

---

## 5. DEV SERVER CONFIG

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    host: true, // Allow external access (for mobile testing)
  },
})
```

---

## 6. SUPABASE CONNECTION MODES

| Mode | API URL | When to Use |
|------|---------|-------------|
| Local Docker | `http://localhost:54321` | Local development with Docker Supabase |
| SSH Tunnel | `http://localhost:54321` (tunneled) | Dev against remote DB via PuTTY tunnel |
| Production | `https://api.zeta-groups.com` | Production deployment |

**SSH Tunnel Setup** (for remote Supabase access in dev):
```bash
# PuTTY: Local port 54321 -> Remote VPS Supabase port 8000
# Then use .env.development.supabase with:
# VITE_GLOB_API_URL=http://localhost:54321
```

---

## 7. PACKAGE.JSON SCRIPTS

```json
{
  "scripts": {
    "dev": "vite",
    "dev:supabase": "vite --mode development.supabase",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
  }
}
```

---

_Claude-Frontend Master Manual V2.0 (2026-04-08)_
