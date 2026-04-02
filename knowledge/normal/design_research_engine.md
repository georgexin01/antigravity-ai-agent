# V11 Design Research Engine — AI-Powered Design Intelligence

> **Purpose**: AI must proactively research, discover, and apply the best design patterns from the internet
> **Rule**: Before starting any new design task, AI should reference these tools and resources
> **Philosophy**: In 2026, thousands of designers create beautiful websites daily. AI should LEARN from them, not design from scratch.
> **Created**: 2026-03-19

---

## 1. AI DESIGN GENERATION TOOLS (Use Before Manual Coding)

> Before coding any UI manually, check if these tools can generate it faster.

### 1.1 Instant Design Generators

| Tool | What It Does | Cost | Best For | URL |
|---|---|---|---|---|
| **Google Stitch** | Text prompt → full UI screens (our primary tool) | Free | Full page generation, mobile apps | stitch.withgoogle.com |
| **Uizard** | Prompt/screenshot → wireframe → UI | Free (3 gen) / $12/mo | Quick wireframes, non-designers | uizard.io |
| **Galileo AI** | Prompt → high-fidelity Figma screens | Paid | Polished UI screens | usegalileo.ai |
| **Figma Make** | AI-assisted design within Figma | $16/user/mo | Iterating on existing designs | figma.com |
| **UX Pilot** | AI screen generation + website cloner | Free (7 screens) / $19/mo | Quick prototypes + cloning | uxpilot.ai |
| **Readdy** | URL/screenshot/prompt → full editable website | Free tier | Cloning existing sites | readdy.ai |
| **Relume** | AI sitemap → wireframe → Figma/Webflow | Free trial | Full website structure | relume.io |

### 1.2 Website Cloning / Design Study Tools

| Tool | What It Does | Best For |
|---|---|---|
| **UX Pilot Website Cloner** | Paste URL → get editable clone with all sections | Studying competitor layouts |
| **10Web AI** | Recreate any website from URL | Full site cloning |
| **UX Magic** | Clone any website into editable design | Section-by-section extraction |
| **Same.new** | AI clone of any website | Quick reference copies |
| **SingleFile** (browser ext) | Save complete page as single HTML | Offline study of any site |
| **Cyotek WebCopy** | Download entire website structure + assets | Deep offline analysis |
| **WebsiteDownloader** | HTTrack alternative with JS rendering | Modern site downloading |

### 1.3 AI Workflow: When to Use What

```
USER SAYS: "Create a new app"
  → STEP 1: Check client DNA profile for brand colors/style
  → STEP 2: Search inspiration sites (Section 2) for similar app designs
  → STEP 3: Use Google Stitch to generate initial screens
  → STEP 4: Use copy-paste component library (Section 3) for individual components
  → STEP 5: Customize with brand tokens + business logic
  → STEP 6: Code the final version in Vue/React

USER SAYS: "Make it look like [URL]"
  → STEP 1: Use UX Pilot or Same.new to clone the reference
  → STEP 2: Extract: layout structure, color palette, typography, spacing
  → STEP 3: Apply extracted DNA to current project's design tokens
  → STEP 4: Rebuild in our stack (Vue + Tailwind)

USER SAYS: "Improve the design"
  → STEP 1: Search Awwwards/Godly/Mobbin for similar app category
  → STEP 2: Compare our design against top 3 references
  → STEP 3: Identify gaps (animations, micro-interactions, typography, whitespace)
  → STEP 4: Propose improvements using Strategic Proposing Engine (V11 §11.3)
```

---

## 2. DESIGN INSPIRATION SOURCES (AI Must Know These)

### 2.1 Award-Winning Websites (Study for Premium Design)

| Source | What It Is | Best For | URL |
|---|---|---|---|
| **Awwwards** | Curated award-winning websites | Premium web design patterns | awwwards.com |
| **Godly** | Hand-picked best web design | Modern/trendy landing pages | godly.website |
| **Muzli** | Design inspiration feed (Chrome ext) | Daily inspiration, 60+ patterns | muz.li |
| **Behance** | Designer portfolios | Full case studies, process | behance.net |
| **Dribbble** | UI/UX design shots | Quick visual inspiration | dribbble.com |

### 2.2 Real Product UI Libraries (Study for App Design)

| Source | What It Is | Best For | URL |
|---|---|---|---|
| **Mobbin** | Real app screenshots (10,000+ screens) | Mobile app UI patterns | mobbin.com |
| **Screenlane** | UI/UX design inspiration from real apps | Flow patterns, onboarding | screenlane.com |
| **Page Flows** | User flow recordings from top apps | Checkout, auth, onboarding flows | pageflows.com |
| **Refero** | Real product design references | Dashboard, SaaS, e-commerce | refero.design |

### 2.3 Landing Page & Template Sources

| Source | What It Is | Best For | URL |
|---|---|---|---|
| **Lapa Ninja** | Landing page gallery | Landing page layouts | lapa.ninja |
| **One Page Love** | One-page website gallery | Single page designs | onepagelove.com |
| **Land-book** | Landing page designs | Conversion-focused pages | land-book.com |
| **Figma Community** | Free design files (layers, components) | Learning exact implementation | figma.com/community |
| **Nicepage** | 15,000+ free website templates | Quick starting points | nicepage.com |

### 2.4 Typography & Color Tools

| Tool | What It Does | URL |
|---|---|---|
| **Typewolf** | Best fonts in use on real websites | typewolf.com |
| **Fontjoy** | AI font pairing generator | fontjoy.com |
| **Coolors** | Color palette generator | coolors.co |
| **Realtime Colors** | Preview colors on real website layout | realtimecolors.com |
| **Happy Hues** | Curated color palettes with context | happyhues.co |

---

## 3. COPY-PASTE COMPONENT LIBRARIES (Use in Code)

### 3.1 Tailwind-Based (Our Primary Stack)

| Library | Components | Style | Best For | URL |
|---|---|---|---|---|
| **DaisyUI** | 50+ components, 35 themes | Clean, versatile | General use, fastest adoption | daisyui.com |
| **Shadcn/UI** | 40+ Radix-based components | Minimal, accessible | React apps, full code ownership | ui.shadcn.com |
| **Magic UI** | 50+ animated components | Animated, premium feel | Landing pages, wow-factor | magicui.design |
| **Aceternity UI** | 30+ Framer Motion components | Animated, glossy | Hero sections, testimonials | ui.aceternity.com |
| **Untitled UI React** | Largest collection, Tailwind v4 | Professional, systematic | Enterprise/SaaS apps | untitledui.com |
| **Flowbite** | 600+ components | Bootstrap-like | Quick prototyping | flowbite.com |
| **Preline UI** | 300+ components | Modern, clean | Marketing sites | preline.co |

### 3.2 Vue-Specific

| Library | Best For | URL |
|---|---|---|
| **Radix Vue** | Accessible primitives (our standard) | radix-vue.com |
| **PrimeVue** | Rich enterprise components | primevue.org |
| **Naive UI** | Clean, TypeScript-first | naiveui.com |
| **Element Plus** | Chinese ecosystem, form-heavy apps | element-plus.org |

### 3.3 Animation Libraries

| Library | What It Does | URL |
|---|---|---|
| **GSAP** | Professional-grade scroll/timeline animations | gsap.com |
| **Framer Motion** | React declarative animations | framer.com/motion |
| **Lenis** | Smooth scroll engine | lenis.darkroom.engineering |
| **Auto-Animate** | One-line animation for Vue/React lists | auto-animate.formkit.com |
| **AOS** | Scroll-triggered fade/slide animations | michalsnik.github.io/aos |

---

## 4. AI DESIGN RESEARCH PROTOCOL

### 4.1 When AI Must Research

| Trigger | Research Action |
|---|---|
| New project starts | Search Mobbin/Awwwards for same app category (F&B, travel, SaaS, etc.) |
| User shares reference URL | Clone with UX Pilot → extract design DNA → save to client profile |
| User says "make it look better" | Compare against Godly/Muzli top designs → identify 3 specific improvements |
| User says "like [brand]" | Find that brand's website → extract colors, fonts, spacing, layout patterns |
| Building a hero section | Check Awwwards for latest hero trends → apply modern patterns |
| Building a dashboard | Check Refero for SaaS dashboard patterns → apply best practices |
| Stuck on layout | Search Figma Community for similar templates → study layer structure |

### 4.2 Design DNA Extraction (From Any Website)

When studying a reference website, AI extracts:

```
1. COLOR PALETTE
   → Primary, secondary, accent colors (exact hex values)
   → Background colors (light/dark sections)
   → Text colors (heading vs body vs muted)

2. TYPOGRAPHY
   → Font families (heading vs body)
   → Font sizes (h1, h2, h3, body, caption)
   → Font weights used
   → Line-height and letter-spacing

3. SPACING SYSTEM
   → Section padding (top/bottom)
   → Content max-width
   → Grid gap sizes
   → Card internal padding

4. LAYOUT PATTERNS
   → Header style (sticky? transparent? colored?)
   → Hero layout (left-aligned? centered? split?)
   → Grid structure (2-col, 3-col, 4-col)
   → Card design (rounded corners? shadows? borders?)
   → Footer complexity

5. INTERACTIONS
   → Hover effects
   → Scroll animations
   → Page transitions
   → Loading states
   → Micro-interactions (button press, toggle, etc.)

6. SPECIAL ELEMENTS
   → Gradient usage
   → Glassmorphism
   → 3D elements
   → Video/animation backgrounds
   → Custom illustrations vs photos
```

Save extracted DNA to `clients/{project}.md` under a "Design Reference" section.

### 4.3 Competitive Analysis Template

```
🔍 DESIGN ANALYSIS: {reference_url}
Category: {F&B / SaaS / E-commerce / Corporate / etc.}
Score: {1-10 visual quality}

STRENGTHS (steal these):
  • {what they do well}

WEAKNESSES (avoid these):
  • {what they do poorly}

EXTRACTABLE PATTERNS:
  • Color: {palette}
  • Typography: {fonts}
  • Layout: {grid/structure}
  • Animation: {effects used}

APPLICABLE TO: {which of our projects could use this}
```

---

## 5. DESIGN WORKFLOW OPTIMIZATION

### 5.1 Speed Tier (Fastest → Slowest)

| Method | Speed | Quality | When to Use |
|---|---|---|---|
| **Clone + Customize** | 5 min | 85% | User provides reference URL |
| **Stitch + Refine** | 15 min | 80% | New page from prompt |
| **Component Library + Assemble** | 30 min | 90% | Building from proven components |
| **Custom Design** | 1-2 hrs | 95% | Unique brand-heavy pages |

### 5.2 AI Decision Tree

```
Does a reference URL exist?
├── YES → Clone it (UX Pilot / Same.new) → Extract DNA → Rebuild in our stack
└── NO
    ├── Does a similar app exist on Mobbin/Awwwards?
    │   ├── YES → Study top 3 → Extract patterns → Apply to our design
    │   └── NO → Use Google Stitch to generate → Refine manually
    └── Is there a component library match?
        ├── YES → Copy-paste from Magic UI / Shadcn / Aceternity
        └── NO → Custom build (last resort)
```

### 5.3 What AI Should Do Proactively

1. **Before every new page**: Search Mobbin for the same page type (login, product list, cart, profile)
2. **Before every hero section**: Check Awwwards/Godly for latest trends
3. **Before choosing colors**: Run through Coolors or Realtime Colors with brand color
4. **Before choosing fonts**: Check Typewolf for what's trending + Google Fonts pairing
5. **After completing a page**: Compare against 2-3 real app screenshots from Mobbin for quality check

---

## 6. GEMINI INTEGRATION (PRIMARY AGENT)

> Gemini is the primary agent for ALL design work. These are Gemini's direct capabilities.

### 6.1 Gemini Design Workflow

```
1. User says "create a beautiful login page"
2. Gemini: Search Mobbin/Awwwards for "login page 2026" → study top 3
3. Gemini: Generate 2-3 options using Google Stitch
4. User picks one
5. Gemini: Code it in Vue + Tailwind, using Magic UI/Aceternity patterns
6. Gemini: Save approved pattern to score_ledger.md with D11 score
```

### 6.2 Gemini's Design Tools

| Capability | How Gemini Does It |
|---|---|
| **Search inspiration** | Browse Awwwards, Mobbin, Godly, Dribbble directly |
| **Generate UI** | Google Stitch → full screens from prompts |
| **Clone websites** | UX Pilot, Same.new, Readdy → paste URL → editable clone |
| **Study design files** | Figma Community → inspect layers, components, auto-layout |
| **Compare designs** | Screenshot analysis → side-by-side with references |
| **Extract colors** | Coolors, Realtime Colors → generate palettes from brand |
| **Copy components** | Magic UI, Aceternity, DaisyUI → copy-paste into code |
| **Analyze competitor** | Browse competitor URL → extract full design DNA |

### 6.3 Gemini Self-Sufficiency Rule

Gemini must handle 100% of design tasks without needing Claude:
- Research → Design → Code → Build → Deploy
- All knowledge, tools, and resources live in `.gemini/` files
- Claude is only called for deep debugging when Gemini is stuck

---

_Design Research Engine V1.0 — Created 2026-03-19_
_Integrated with V11 Partner Brain, ADPRS V4.1, Client Profiles_
