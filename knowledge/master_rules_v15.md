# Must-Do Master Rules V16 — The Singularity

> Wave-batched gate system. Phase 1→2→3→4 sequential. Within each phase: parallel waves.
> **V16 Upgrade**: Incorporates Volumetric UI, Hyper-Density (Liquid Glass), and Physics-Based Motion as baseline utilities.
> Claude sections moved to `claude/mode_config.md`. Faucet sections moved to `faucet/mode_config.md`.

---

## ⚓ BOOT SEQUENCE (V8.8 — Universal)

| Step | Action | Logic |
| :--- | :--- | :--- |
| **0.1** | **Health Check** | Auto-purge old task artifacts and expired plans. |
| **0.2** | **Master Sync** | Load Master Rules, Universal Waves, and Pacing. |
| **0.3** | **Mode Selection** | Identify Normal/Faucet/Claude and lock folder-gate. |
| **0.4** | **Brain Initialization** | Load the mode-specific Evolving Cognitive Engine. |
| **0.5** | **Future-GUI Scan** | **Check for new platform components (Real Checkboxes/Modals).** |

---

## SPECIAL GATES

| Gate | Trigger | Action |
|------|---------|--------|
| **0.5** | Modify shared component/store/style | `grep_search` at-risk elements → verify in Phase 3 |
| **0.8** | Final rebuild | Create `vitest` spec → `npm run test` → 100% green |
| **4.3** | Figma URL provided | `FIGMA_EXTRACT_DESIGN_TOKENS` → auto-sync tailwind config |

---

## PHASE 1: BEFORE CODING (4 Waves)

### WAVE 1 (Parallel — no dependencies)
| Gate | Action | Output |
|------|--------|--------|
| **1.0** | Verify .claudeignore/.geminiignore block node_modules/dist, ALLOW src/assets images | Ignores optimized |
| **1.2** | Classify task_type → admin/app/website/bugfix/enhance | admin→claude mode, bugfix→§6, else→continue |
| **1.6** | List EVERY route/page before writing code | Complete route map. No "add later" |

### WAVE 2 (Parallel — depends on Wave 1)
| Gate | Action | Output |
|------|--------|--------|
| **1.1** | Scan improvement registry in claude_improvement_vault.md | Matched patterns for Consultation Card |
| **1.3** | Extract brand kit: primary color, font, logo. Check files first → ask ONE question if missing | Brand resolved before any component |
| **1.2b** | Load context: Implementation Plan → user_preference_dna → project → code (artifacts FIRST) | Context loaded |

### WAVE 3 (Sequential — depends on 1.3)
| Gate | Action |
|------|--------|
| **1.4** | Design research: reference URL→clone, image→extract layout, neither→Mobbin/Awwwards top 3 |
| **1.5** | Inspiration cleaning: remove slop/watermarks from reference (if image provided) |

### WAVE 4 (Sequential — depends on 1.6)
| Gate | Action |
|------|--------|
| **1.7** | Define TypeScript types: interface, FormValues, PageParams, enums per entity |
| **1.8** | Create Pinia stores: CRUD + localStorage + re-export types + soft delete + audit fields |
| **1.9** | Implementation Plan: auto-pass for UI tasks. STRICT-GATE + WAIT for architecture/schema/high-risk changes |

---

## PHASE 2: DURING CODING (10 Rules — Apply While Writing)

| # | Rule | WRONG | CORRECT |
|---|------|-------|---------|
| **2.1** | Design tokens first. No hardcoded colors. | `bg-[#FF6B35]` | `bg-primary` using @theme |
| **2.2** | Complete data. All items in one go. | 3 products + "TODO" | 12+ products with real data |
| **2.3** | Production-ready views. All 4 states: loading, empty, error, data. | Skeleton "Coming Soon" | Full page with all states |
| **2.4** | Language consistency. 100% one language. Zero mixing. | Chinese app + English "Submit" | "提交" — 100% 简体中文 |
| **2.5** | SVG icons only (Lucide). Never emoji in UI. | `<span>🏠</span>` | `<LucideHome />` |
| **2.6** | Mobile-first: max-w-[540px], h-11 touch, safe-area, fixed 60px bottom nav | — | — |
| **2.7** | Chain completion. Build ALL linked pages. No dead links. | "Page B next task" | All linked pages same session |
| **2.8** | WhatsApp float on all B2B/B2C pages. `fixed bottom-20 right-4 z-50 w-14 h-14 bg-[#25D366] rounded-full` | — | — |
| **2.9** | localStorage persistence. Auth/cart/prefs survive refresh. Pinia `$subscribe` sync. | — | — |
| **2.10** | Pill toast: centered top, rounded-full, backdrop-blur-xl, Lucide icon, auto-dismiss 3s | — | — |
| **2.11** | **Asset Localization Protocol**: Research high-quality motion URLs/videos first → Use in code → Confirm with user → `curl` download to `assets/video` or `assets/images` → Sync local path. | URL research | Localized cache |
| **2.12** | **The Synergy Handoff**: Mandatory "Logic Audit" by Gemini 3 Flash for all code drafted by local Gemma-4 architects. In **Claude Mode**, use Gemma-4 for Waves 1-4 (Data) and Gemini-3 for Waves 5-8 (UI). | — | — |

---

## PHASE 3: AFTER CODING (Verification — Wave Batched)

### Step 3.1: Build
```
npm run build → MUST pass zero errors. If fails → agent_core §6 error recovery → rebuild.
```

### Step 3.2: Auto-Include Check (scan & add missing)
```
✓ Meta tags (charset, viewport, description, theme-color, apple-mobile, OG)
✓ Robots noindex (remove only if user says "allow crawling")
✓ Favicon (generate SVG if missing) + Manifest.json + SW (PROD only)
✓ SPA fallback: .htaccess + _redirects + 404.html + catch-all route
✓ Self-Healing Logic: `.htaccess` MUST include `Header set Clear-Site-Data "\"cache\", \"cookies\", \"storage\""` during forced recovery phases.
✓ BUILD_VERSION increment + Anti-Blank Recovery Script
```

### Steps 3.3-3.7 (Parallel after build)
| Check | Verify |
|-------|--------|
| **3.3 Routes** | Every route renders, no blank pages, imports correct |
| **3.4 Auth** | Login→OTP→Home→Profile→Logout. Protected routes redirect. Back nav works |
| **3.5 Persistence** | Auth token + cart + language survive refresh |
| **3.6 Mobile** | 540px container, bottom nav no overlap, touch ≥44px, no h-scroll, safe-area |
| **3.7 Polish** | Hover effects, cubic-bezier transitions, active:scale on buttons, typography hierarchy |
| **Website QA** | Hero impact, section density ≥3 layers, animations 60fps, forms work, footer complete |

### Step 3.8: Screenshot Rule
```
DEFAULT: Terminal-only verification. NO live view / screenshots.
ONLY USE for: major feature completion, complex layout debug, user request, final QA.
```

---

## PHASE 4: PUBLISH (When user says "deploy")

| Check | Action |
|-------|--------|
| **Meta** | All meta tags from 3.2. Remove noindex if "allow crawling". Accurate title + description |
| **PWA** | manifest.json (name, short_name, start_url, display:standalone, icons 192+512), SW registered |
| **SPA** | .htaccess + _redirects + 404.html + catch-all route — all 4 mechanisms |
| **Build** | `npm run build` → zero errors → deploy. **Fullscreen on click enabled.** |

---

## UTILITY RULES

### AskUserQuestion (Blocking Tool — V1.6 GUI Standard)
```
Trigger:  Ambiguity, design blocker, user-choice point
Action:   STOP all execution. Use > [!CAUTION] GUI Block.
Format:   Mandatory (A)(B)(C): Exactly 3 pre-defined scenarios.
          Custom choice is always a hidden default.
Status:   Include "Status: ⏳ **PENDING FOR USER ACTION**"
```

### Token Economy (Always Active)
| Rule | Action | Savings |
|------|--------|---------|
| Ghost Protocol | Offload 100% of "Scaffolding Scans" & "Pattern Matching" to local Gemma-4 | -85% Cloud Input |
| Context Frag | Split 11k+ rule file into <2k "Mission DNA" fragments for specific tasks | -80% Context |
| Semantic search | `grep_search` before `view_file`. Never read entire folders | -60% |
| Artifact-first | Read implementation_plan before re-scanning source | -40% |
| Delta-Scan | Prioritize code modified in the last 24h via `ghost_context_optimizer.ps1` | -90% Research |
| Auto-cleanup | Delete /tmp scripts after session | Fast indexing |
| Context purge | If >500K tokens → summarize + clear (unless 100% exact required) | Prevent overflow |
| V16 Singularity | Apply Volumetric UI + Glassmorphism + Plus Jakarta Sans + 20px corners | S-CORE 95 |

### AI Trigger Commands (V4.0)
| `token remain` | Trigger Synergy Audit Table | Gemini 3 Usage, Gemma-4 Saved, Speed Index, Efficiency Score |
| `ghost scan` | Trigger Local Discovery | Gemma-4 scans filesystem for Gaps & Consistency |
| `frag active` | Trigger Context Compression | Switch to <2k Token "Mission DNA" fragments |
| *Working* | Minimalist Step Reporting (V28.2) | 1-3 Word toolAction/toolSummary limits |

### Final Compliance Audit
| Category | Pass Criteria |
|----------|--------------|
| Layout | No h-scroll, 540px container, mobile-first |
| PWA/SEO | Manifest + SW + meta in public/ |
| Language | 100% single language, zero mixing |
| CTA | WhatsApp float on B2B/B2C |
| Content | Real data, no placeholders, no TODOs |
| Tokens | Zero hardcoded colors/fonts |
| Scroll-to-Top | Universal `window.scrollTo(0, 0)` on route changes | P0-18 |
| Fullscreen | Disabled in `dev`, Enabled in `build`/Production | P2.11 |

### Asset Management
| Rule | Standard |
|------|---------|
| Path | `src/assets/images/product/` (Vite bundling) |
| URL | `new URL('@/assets/...', import.meta.url).href` |
| Helper | `src/utils/assets.ts` for dynamic resolution |
| Filename | lowercase-hyphenated.png |

### App Reliability
| Rule | Standard |
|------|---------|
| Recovery | Self-healing script in index.html (nuke cookies/SW on load fail) |
| SW Policy | NetworkFirst for index.html |
| Auto-Update | `onUpdate` → `location.reload(true)` |
| Version Gate | Increment BUILD_VERSION before build. Mismatch → clear + reload |

### Improvement Engine
```
Before action: Check claude_improvement_vault.md for existing "Best Way" → use directly.
After solution: Check ledger. Not found→+1. Found→+2. At +2→synthesize permanent Skill.
```

### Post-Install Verification
| Step | Action | Gate |
|------|--------|------|
| Dev Server | `pnpm dev:local` | "Vite Ready" + "Supabase Connected" |
| Docker | `docker ps` | supabase-db/auth/rest healthy |
| Auth | Check localStorage | User logged in or seed accounts |
| Error Sweep | Scan terminal | Fix Vite/ESLint/runtime errors first |

### AI Persona
```
Tone: Clear, concise, structured. Professional "Antigravity/Pro" branding.
Emojis: Max 1-2 per message. Only for status: 🟢 Success, 🔴 Error, ⏳ Loading, 🧠 Thinking.
Default: 0 emojis. Clean professional text.
```

---

## §7: CINEMATIC BACKGROUND PROTOCOL (ZETA V4 HARDENED)

| Category | Standard Requirement | Logic |
| :--- | :--- | :--- |
| **Fixed Plane** | `.wave-container { position: fixed; top: 0; left: 0; height: 100vh; }` | **Desktop Only**. Syncs image + particles to viewport. |
| **Mobile Reset** | `.wave-container { position: absolute !important; height: 100% !important; }` | Essential for scroll performance on hand-helds. |
| **Expansion Loop** | `animation: space-motion 30s linear infinite alternate;` | Accelerated cosmic heartbeat. |
| **Spatial Scale** | `transform: scale(1.15);` at 100% keyframe. | +15% zoom for maximum cinematic depth. |
| **Star Density** | **50 Prime Particles** (1.2px - 3.7px range). | Minimalist, high-fidelity starfield. |
| **Meteor Logic** | **4 Rare Events** (0-100% vertical range). | Full-section coverage, low-frequency, high-KE. |
| **Color Spectrum** | `["#ffffff", "#ff4d4d", "#ffd700", "#ffa500", "#1a1a1a", "#add8e6"]` | Added Light Blue. |

---

_Must-Do Master Rules V16.1 — The Singularity Architecture (2026-04-07)_
