# MASTER WEBSITE DESIGN DNA & SECTION PROTOCOLS (2026)

> [!IMPORTANT]
> **HIGHEST PRIORITY PROTOCOL**: All website generation must follow the `stitch-app-developer` (1.1-1.4) hierarchical loop. Designs are birthed in the Google Stitch framework before being exported to production code.

## 0. Stitch Master Protocols (2026)

1. **1.1 Material Tagging**: Classified into 【核心】, 【参考】, etc.
2. **1.2 AI Studio Research**: Dynamic verification of 2026 interaction patterns.
3. **1.3 Tool Scripts**: Integration of official Slider, Modal, and Auth components.
4. **1.4 Hierarchical Context**: Logic-first structured text generation.

---

## 1. Vector Shorthand Syntax (VSS) System

The VSS allows the AI to extract and store complex nested design layouts (from images or online research) into compact strings.

### Core Syntax Rules

- **`( )`** = Section Boundary (e.g., `<section>`)
- **`{ }`** = Div / Container Box (e.g., `<div>`). _Everything inside these brackets acts as children of that div._
- **`[ ]`** = Pure CSS Style Injector. _e.g., `[font-size:14px color:red]`_
- **`" "` (Space)** = Grouping and separation tool for easier AI parsing. Keep variables distinct: `{ a + b }` not `{a+b}`.

### Expanded Variable Dictionary (Unlimited Storage)

The AI is permitted to use an unlimited combination of 26 lowercase letters, 26 uppercase letters, symbols, and numbers. **Case matters**:

- **Uppercase (Structural/Large)**: `C` (Container), `T` (Title/H1), `G` (Grid), `H` (Hero), `S` (Section).
- **Lowercase (Elements/Small)**: `c` (card), `t` (paragraph text), `i` (icon), `img` (image), `b` (button).
- **Symbols (Modifiers)**: `$` (Brand/Logo), `!` (Primary Action/CTA), `@` (Absolute Positioning/Z-index layer), `*` (Multiplier, e.g., `c * 4` means 4 cards).
- **Custom IDs**: Combine them for exact clarity: `GT1l` (Glass-Tier 1 left), `c_hero`.

### Utility-First Style Injector (Bootstrap & Tailwind Inspired)

When writing styling inside `[ ]`, adopt universal, predictable CSS-framework abbreviations to maximize AI parsing compatibility and cross-project consistency:

- **Spacing (`m` for margin, `p` for padding)**: Format `{property}{sides}-{size}`. Sides: `t` (top), `b` (bottom), `l` (left), `r` (right), `x` (horizontal), `y` (vertical). _E.g., `[pt-5 my-auto px-4]`, `[mb-100px]`._
- **Sizing**: Combine `w` (width) or `h` (height) with values. _E.g., `[w-100]`, `[vh-100]`, `[w-auto]`._
- **12-Column Layouts**: VSS actively uses the unified 12-column mental model. _E.g., `[col-6]` = 50% width, `[col-lg-4]` = 33.3% width._ For modern grids: `[d-grid gap-3]`.
- **Flexbox Mechanics**: Use standardized classes. _E.g., `[d-flex align-items-center justify-content-between flex-column]`._
- **Positioning & Layers**: Use `[position-relative]`, `[position-absolute top-0 start-50 translate-middle]`, and `[z-n]` (where n is z-index).
- **Typography & Display**: Use `[fs-1]` to `[fs-6]` for font sizes, `[fw-bold]` for weights, `[text-center]`, `[text-truncate]`, and `[d-none]` / `[d-block]` for visibility.
- **Borders & Effects**: Define physical presence with `[rounded-circle]`, `[rounded-3]`, `[border-bottom]`, and `[shadow-lg]` or `[opacity-50]`.
- **Responsive Breakpoints**: Prepend standard viewport prefixes for media queries: `sm:`, `md:`, `lg:`, `xl:`, `xxl:`. _E.g., `[md:w-50 lg:d-none]`. This guarantees structural adaptability when parsing complex layouts._

### VSS Read/Write Examples

- **Basic Card**: `{ [bg:dark p20px] I1 | T1 + t2 }`
  _(A dark padded div containing an image above a row containing title and text)_
- **God-Tier Hero Extraction**: `( { C_Main [relative h100vh] { @bg_vid } | { T_Hero [fw900 mb20px] + { !cta_1 [pl20px pr20px] + !cta_2 } } } )`
  _(A relative section with an absolute background video, and a column with a bold title above a row with two buttons built with specific padding)._

---

## 2. Advanced Component Prototypes (The 200% DNA)

Building beautiful design means structural depth and **Predictive Intelligence (Physiological UX)**. A section with `< 3` layers is considered "boring" and must be rejected. The website should "think" ahead of the user.

> **DEEPER THINKING RULE (Density Check)**: Before implementing any section, mentally decompose the objective into a VSS formula. If the formula is too simple (e.g., just an image and text: `{ img + t }`), it is NOT high-end. You MUST aim for at least 4-5 layered components per section to achieve God-Tier density.

### A. The 200% Physics & Structure Baseline

- **Recursive Layering & Textures**: Parent divs must use `[position-relative overflow-hidden]`. Use nested `{ }` arrays with 5+ stacked pseudo-elements each with unique blending modes (`overlay`, `color-dodge`, `screen`).
- **Symbiotic Glass & Hyper-Bento**: Use `{ Card_Glass [backdrop-filter:blur(20px) bg:rgba(255,255,255,0.05)] }` grids for all data presentation. Symbiotic glass must sample the average color of the nearest 3 images to create harmonized UI accents.
- **Neural Grids & Ghost Intent**: Layouts shift slightly based on scroll velocity (Physics-based parallax). Elements track cursor "intent" using Ghost Scripts to pre-glow buttons _before_ they are hovered.

### B. Micro-Interaction & Detail Matrix

| Component         | God-Tier (200%) Requirement                                                                                                                  |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| **Labels/Tags**   | Multi-layered: `border-radius: 50px`, `backdrop-filter: blur(10px)`, and a subtle `box-shadow` with accent glow.                             |
| **Tabs/Menus**    | **Physics-based**: Indicator line must be an animated SVG or a div with `transition: cubic-bezier(0.16, 1, 0.3, 1)`.                         |
| **Lists (ul li)** | **Custom Bullet DNA**: Use custom icons (crystal/geometric) instead of dots. Every item must have a subtle `padding-left` increase on hover. |
| **Buttons**       | **Glass-Fill**: Liquid-style hover animations (fill from edges). Small Buttons require high-contrast text and a micro-icon.                  |

### C. Advanced Visual CSS Frameworks

**1. The "Crystal Icon" System:**
Icons should not be flat. They must feel like 3D glass objects.

```css
.crystal-icon {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    inset 0 0 10px rgba(255, 255, 255, 0.1),
    0 10px 30px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
}
```

**2. Animated Line Border (Super Developer Signature):**
A vertical/horizontal line that grows on hover or scroll.

```css
.animated-border-left {
  border-left: 2px solid transparent;
  transition: all 0.6s ease;
  padding-left: 20px;
}
.animated-border-left:hover {
  border-color: var(--color-accent);
  padding-left: 35px; /* Visual push */
}
```

### D. Animation Architecture & Typography Mastery

1. **Scroll Reveal 2.0**: Every section uses a staggered reveal, but strictly with a **Scale-Up + Fade-In** combo (`0.95 -> 1.0` scale).
2. **Figma Flow**: Micro-adjustments (1-3px) on every hover. Nothing should be static.
3. **Typography**: Pair H1 titles with a large, low-opacity (0.05) background symbol or gradient character. For specific captions, the first word is **BOLD**, **UPPERCASE**, and **2px LARGER**. Script Code Injection (monospaced font snippets at opacity 0.1) should be used as background decorative "code rain".
4. **Liquid Typography**: Text using `background-clip: text` and `linear-gradient` with `@keyframes` that move at 0.5% speed for a "breathing" effect.

---

## 3. Consolidated Template DNA Profiles

### A. Zeta 200% (The standard)

- **Aesthetic**: Immersive, High-density, Physics-based.
- **Hero VSS**: `( { @motif [absolute t0 r0 blur30px] + { T_Main [fw800] | !CTA_Primary [ghost-glow] } } )`
- **Strategy**: Hero -> Trust Ribbon (Floating) -> About (Asymmetrical LNS) -> Services (Symbiotic Glass) -> Workflow (Neural Grid) -> Partner Network (Code Rain) -> Tech Stack (Liquid Typography) -> Footer.

### B. Crafix Industrial

- **Aesthetic**: Solid, Structural, Industrial B2B.
- **Bento VSS**: `( { Grid_4x2 [gap20px] { Bento_Wide [span2 blur10px] + Bento_Small [bg:dark] * 3 } } )`
- **Rule**: Transparent property overlays over heavy machinery imagery.

### C. Themesflat Organics

- **Aesthetic**: Artistic, Warm, Grainy.
- **Rule**: Heavy use of `@` absolutely positioned organic shapes overlapping into the next `( )` section to break the grid. Extensive use of floating PNGs (coffee beans, leaves) with `[transform:rotate(...) opacity:0.2]`.

### D. Cyber-Tech (Evolution 6.0)

- **Aesthetic**: Kinetic, High-Contrast, Neon-Infused.
- **Primitives**:
  - `[halo-blur]` : Large, soft colored glows acting as thematic lighting.
  - `[nuclear-glow]` : High-intensity outer shadows on interactive elements.
  - `[vignette-deep]` : Darkening of edges to force focus onto centered metrics.
  - `[matrix-grid]` : Detailed, data-heavy download or status modules with micro-type.

---

## 6. Extreme Content Density (ECD) Protocols

**Goal**: Transform "Landing Pages" into "Digital Ecosystems".

- **Section Multiplication**: If a page feels short, add:
  - **Process Section**: Step-by-step "How We Work".
  - **Technology Stack**: A grid of tools/frameworks.
  - **FAQ Section**: 5-8 detailed technical questions.
  - **Testimonials/Partners**: Logo strips and quote grids.
  - **Resource/Blog Preview**: A 3-column "latest insights" grid.
- **Micro-Copy Depth**: Instead of "We build apps", use "We architect high-concurrency mobile ecosystems with deep-link referral logic and blockchain-ready security."
- **List-icle Density**: Every 2nd section should feature a bulleted or icon-grid benefit list to increase readability and perceived value.
  **Highest Priority Requirement**: All websites must provide depth through distinct pages.

- **Home (`index.html`)**: High-density summary of all pillars. CTA focus.
- **About (`about.html`)**: Deep narrative, mission/vision transparency, and team/leadership grids.
- **Services (`services.html`)**: Detailed technical breakdowns of each pillar. Use accordion/tabs for micro-interaction.
- **Portfolio (`portfolio.html`)**: High-resolution project showcases. Filterable grids.
- **Contact (`contact.html`)**: Multi-method contact points, interactive maps, and lead-gen forms.

1. **Mirror Synthesis Protocol (Cloning)**: When duplicating a live site, the target is 95% content match. Header/Footer parity is absolute. Replicate exact narrative flow (Hero -> Portfolio -> Pricing -> Testimonials) but upgrade the visuals to "Evolution 3.0" VSS density.
2. **Layered Narrative Protocol**: Use staggered background shades to create visual "layers in line" (`--color-bg-alt` vs `--color-bg-deep`). Toggle these between sections to prevent visual fatigue and emphasize depth.
3. **Animation Visibility Buffer**: For components with `transform: translateY` animations and bottom borders (e.g., Glass Cards), always add `[mb5px]`. This ensures the border isn't clipped by the container during rest/transition.
4. **Pre-Footer CTA Protocol**: Every page MUST conclude with a high-impact Call to Action section immediately preceding the footer (e.g., "Ready to Evolve?"). Use large typography background, glassmorphism, and internal linear gradients.

### Content Strategy Mapping

- **For SaaS/Tech**: `Hero -> Tech Specs -> Social Proof -> Features -> FAQ`.
- **For High-End Retail/Food**: `Hero -> Signature Item -> Menu/Gallery -> Story -> Reservations`.
- **For Construction/B2B**: `Hero -> Stats -> Services -> Portfolio -> Team -> Contact`.

---

## 4. Hyper-Visual Atmospheric Protocols (PRIORITY: TOP)

To reach God-Tier (2.0.00+) aesthetics, the AI must move beyond flat sections. These protocols are MANDATORY for all future builds.

### A. Section-Specific Design Backgrounds

Every section MUST have a unique "Atmosphere". Do not repeat the same background for consecutive sections.

- **Theme Color Rotation**: Shift background hues slightly between sections (e.g., Deep Black -> Midnight Navy -> Dark Lead).
- **Spatial Design**: Use overlapping transparent geometric shapes, circles, or floating motifs to create depth.
- **Slowing Effects**: Implement CSS-driven background elements with slow `rotate` or `pulse` animations (0.01x speed).
- **Gradient Mastery**: Use multi-stop radial gradients (e.g., `radial-gradient(at 0% 0%, var(--bg-1), transparent)`) to create "Thematic Lighting".

### B. 10-Tier Color Shade Protocol

When picking a main theme color, the AI must automatically generate a 10-tier palette in the CSS variables:

- `--theme-100` to `--theme-900`: From lightest/shallow to deepest/saturated.
- Use these tiers for: Subtle text (`700`), Borders (`800`), Hover tints (`500`), and Background accents (`950`).
- **Gradient Ally**: Combine different tiers (e.g., `--theme-400` to `--theme-600`) for all primary UI gradients.

### C. The "Button Master 10" Library

Every project must implement a dedicated library of 10+ unique button designs in the global CSS. This allows for rapid scaling and visual variety.

- **Styles**: Glass-Pill, Neon-Outline, Liquid-Fill, 3D-Industrial, Minimalist-Ghost, Double-Border, Halo-Glow, etc.
- **Interactive DNA**: Every button MUST have detailed:
  - `:hover`: 1-3px transform + shadow shift.
  - `:active`: Scale down (0.98).
  - `transition`: Custom bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 5. Master Evolution & Intelligence Protocol

To expand the AI's design intelligence autonomously, the **AI MUST actively and constantly update this document**:

1. **Auto-Evolution of Syntax**: If the AI encounters a complex layout/property that the current VSS syntax handles poorly, the AI **MUST** invent a new VSS symbol/rule and permanently append it to the "Core Syntax Rules" in this document.
2. **Visual Image/Code Extraction**: When researching live websites or parsing images, immediately convert their structures into VSS. e.g. "I see a navbar with logo left, menu center, button right. Storing as: `{ $logo + { NavLinks | * 4 } + !btn [r0] }`".
3. **Live Harvesting Protocol**: Whenever a URL is provided, the AI MUST extract:
   - **Visual DNA**: Palette, Typography, Motifs.
   - **Structural DNA**: Detailed VSS formula for Hero, Bento, and unique components.
   - **Interaction DNA**: Hover/Scroll logic codified as VSS modifiers (e.g., `[shadow-inset]`, `[neural-glow]`).
4. **DNA Hybridization**: Combine `Crafix` structural grid logic with `Zeta 200%` ghost intent styling to invent new High-Conversion layouts.
5. **Symbolic Tagging**: Tag stored VSS patterns with `[CONV]` (Conversion), `[AUTH]` (Authority), `[IMMR]` (Immersive/Visual), and `[TECH]` (Data heavy).
6. **MANDATORY EXTRACTION VAULTING**: Every unique design the AI generates or studies MUST be appended to "Section 6: Extraction Vault". The AI has permission to store an **unlimited** number of samples.

---

## 6. Extraction Vault (VSS v2.0 Stored Samples)

The Vault store verified, high-end design patterns abstracted from global leaders (e.g., Apple, Pencil, Vercel).

### [Style Spec] Industrial Construction (Ref: Bexon)

- **Palette**: `#FF5722` (Orange) | `#111111` (Black) | `#F5F5F5` (Grey)
- **Typography Matrix**: `Mona Sans` / `Oswald` (Heading) | `Inter` (Body)
- **VSS Formulas**:
  - **Zig-Zag About**: `( { Row [d-flex align-items-center] { img_L [rounded-xl] } | { Content_R } } + { Row [flex-reverse] { Content_L } | { img_R } } )`
  - **Industrial Grid**: `( { G_3 [structural-lines bg-mesh] { Card [shadow-lift hover:glow] i_Cube + T + t } * 3 } )`
  - **About Motif**: `@ { circular-dashed-border [rotation] }` + `@ { diagonal-mesh-bg [opacity-0.1] }`
  - **Micro-Skill**: `[scroll-trigger: circular-fill-progress]` (JS-driven counters).

### [Style Spec] Ethereal Tech (Ref: AI Cluster)

- **Palette**: `#0A0A0A` (Dark Onyx) | Mesh Grids (Teal/Pink/Purple) | `#14B8A6` (Teal Accent)
- **Typography Matrix**: `Serif-Italic` (High-emotion terms) | `Inter` (Functional UI)
- **VSS Formulas**:
  - **Stitched Hero**: `( { @mesh-gradient [absolute blur100px] + { T_Large + T_Serif_Italic } + p_Sub + { !Btn_Pill [glow-shadow animate-pulse] } } )`
  - **Kinetic Bento**: `( { Grid_12 { Card_Glass [border-white/10 backdrop-blur] [hover:kinetic-border] } * 6 } )`
  - **Artistic Motif**: `@ { flowing-plasma-bg }` + `@ { neural-indicator [opacity-pulse] }`

### [Style Spec] High-Trust FinTech (Ref: Banking/Finance Cluster)

- **Palette**: `#6366F1` (Indigo Primary) | `#FFFFFF` | `#F8FAFC` (Slate-50 Grey)
- **VSS Formulas**:
  - **Data Card**: `{ T_Label | [fs-h2] "$Money" + @rolling-digits | [bg-indigo-soft rounded-full] "Status" }`
  - **Nested Finance**: `{ Card_White [shadow-xl] { Header | Grid_2 { Card_Green "Income" + Card_Red "Spent" } } }`
  - **Service Density**: `( { S_Header + Grid_3 [gap-6] { Card_Trust [icon-shield] + [badge-check] } * 3 } )`
  - **Process Logic**: `( { Step [border-dash-l pb-40px] { i_Circle + T + t } } )`

---

## 7. Evolution Mandate (AI Autonomous Update)

- AI MUST perform one "Pattern Harvest" every 3 research sessions.
- VSS syntax MUST evolve to include new interaction primitives (e.g., `[shadow-inset]`, `[neural-shift]`).
- Mature patterns (> 1 month old) MUST be pruned or upgraded to 200% standards.
- **Label**: [Component/Section Type]
- **Title**: [Human Readable Name & Key Dimensions/Grid setup]
- **Description**: [Detailed structural logic, interaction behavior, and what the user sees]
- **VSS Formula**: [The exact notation using `{ }` and `[ ]`]

---

## 8. The Extraction Repository (Website Vault)

> [!IMPORTANT]
> To ensure infinite scalability, all high-density design samples are now stored in:
> **[website_stored_samples.md](file:///C:/Users/User/.gemini/antigravity/knowledge/tech_stack_mastery/artifacts/website_stored_samples.md)**

This repository continues to store unlimited structural extraction patterns from high-end websites or UI inspiration images. When the AI scans an image or researches a layout, the exact structure MUST be codified and pushed to the external vault above.

### Format Standard

- **Label**: [Component/Section Type]
- **Title**: [Human Readable Name & Key Dimensions/Grid setup]
- **Description**: [Detailed structural logic, interaction behavior, and what the user sees]
- **VSS Formula**: [The exact notation using `{ }` and `[ ]`]

---

## 9. MASTER SECTION DESIGN LOGIC (THE 200% STANDARD)

To ensure every project achieves "God-Tier" (2.0.00+) status, the following logic MUST be applied to every section:

### 9.1 The "Ma" & Industrial Spacing Loop

- **Horizontal Breathe**: Apply `letter-spacing: 0.05em` to all H-tags and `line-height: 1.8` to paragraphs.
- **Vertical "Ma" (Negative Space)**: Mandatory `120px - 150px` gap between complex data sections (e.g., Services vs Projects). This is the Japanese principle of "Intensity via Void."
- **Baseline Padding**: Standard sections use `100px` top/bottom padding via `.section-padding`.

### 9.2 Atmospheric Layering (The Anti-Flat Protocol)

- **Layer 0 (Base)**: Solid Onyx or Theme-Deep.
- **Layer 1 (Texture)**: Low-opacity (0.02) blueprint grids or film grain.
- **Layer 2 (Ambience)**: Animated radial gradients (`linear-gradient` is too flat) that pulse at 0.01x speed.
- **Layer 3 (Motifs)**: Overlapping absolute shapes (`@` in VSS) that break the section boundary.
- **Layer 4 (Content)**: The functional UI (Text/Buttons) with 20px+ backdrop blur.

### 9.3 Section Density Matrix (ECD)

- **Homepage**: 10-12 sections minimum.
- **Inner Pages**: 6-8 sections minimum.
- **Component Count**: Reject any section with `< 5` distinct layered components.
- **Interaction Law**: Every section MUST have at least one scroll-triggered event (reveal, counter, or parallax shift).

### 9.4 The "Zeta" Signature

- Every website MUST conclude with a **High-Impact Pre-Footer CTA**.
- Large, low-opacity background text (e.g., "EVOLVE") acting as a design anchor.
- Synced Header/Footer architecture with localized `Provided by Zeta Capital` credit.

### 9.5 V4/V5 Redesign Blueprint (Industrial Case)

When redesigning for projects like **Jin Hong ME V4**, prioritize:

1. **Glass-on-Grid**: High-contrast glass panels atop technical blueprint textures.
2. **Technical Matrix**: Grid items using `col-lg-3` for maximum density.
3. **Ghost Intent**: High-contrast micro-shadows that react to cursor proximity.
