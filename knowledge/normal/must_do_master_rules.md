# Must-Do Master Rules V15 — Compressed

> Wave-batched gate system. Phase 1→2→3→4 sequential. Within each phase: parallel waves.
> Claude sections moved to `claude/mode_config.md`. Faucet sections moved to `faucet/mode_config.md`.

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
| **Build** | `npm run build` → zero errors → deploy |

---

## UTILITY RULES

### AskUserQuestion (Blocking Tool)
```
Trigger:  Ambiguity, design blocker, user-choice point
Action:   STOP all execution. Use > [!CAUTION] block. Wait for user reply.
          Context → Question → Options list. Zero progress during wait.
```

### Token Economy (Always Active)
| Rule | Action | Savings |
|------|--------|---------|
| Semantic search | `grep_search` before `view_file`. Never read entire folders | -60% |
| Artifact-first | Read implementation_plan before re-scanning source | -40% |
| Delta bug fix | Read ONLY 20 lines around error | -80% |
| Auto-cleanup | Delete /tmp scripts after session | Fast indexing |
| No live view | Use browser_subagent only for major UI completions | Time savings |
| Context purge | If >500K tokens → summarize + clear | Prevent overflow |

### Final Compliance Audit
| Category | Pass Criteria |
|----------|--------------|
| Layout | No h-scroll, 540px container, mobile-first |
| PWA/SEO | Manifest + SW + meta in public/ |
| Language | 100% single language, zero mixing |
| CTA | WhatsApp float on B2B/B2C |
| Content | Real data, no placeholders, no TODOs |
| Tokens | Zero hardcoded colors/fonts |

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

_Must-Do Master Rules V15 — Compressed from 567→~200 lines. Same rules. Same output. (2026-04-02)_
