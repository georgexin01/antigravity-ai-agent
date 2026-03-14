# AI Design DNA Library (VSS v2.0 - Hyper-Density Edition)

> **CRITICAL DIRECTIVE**: Building beautiful, structurally flawless design is the **HIGHEST PRIORITY**. This document is the ultimate authority for site architecture, replacing all prior DNA protocols (`design_evolution_200`, `ultra_premium`). Use these "formulas" to read, store, and replicate God-Tier (2.0.00+) website logic.

---

## 1. Vector Shorthand Syntax (VSS) System

The VSS allows the AI to extract and store complex nested design layouts (from images or online research) into compact strings. 

### Core Syntax Rules
- **`( )`** = Section Boundary (e.g., `<section>`)
- **`{ }`** = Div / Container Box (e.g., `<div>`). *Everything inside these brackets acts as children of that div.*
- **`[ ]`** = Pure CSS Style Injector. *e.g., `[font-size:14px color:red]`*
- **`" "` (Space)** = Grouping and separation tool for easier AI parsing. Keep variables distinct: `{ a + b }` not `{a+b}`.

### Expanded Variable Dictionary (Unlimited Storage)
The AI is permitted to use an unlimited combination of 26 lowercase letters, 26 uppercase letters, symbols, and numbers. **Case matters**:
- **Uppercase (Structural/Large)**: `C` (Container), `T` (Title/H1), `G` (Grid), `H` (Hero), `S` (Section).
- **Lowercase (Elements/Small)**: `c` (card), `t` (paragraph text), `i` (icon), `img` (image), `b` (button).
- **Symbols (Modifiers)**: `$` (Brand/Logo), `!` (Primary Action/CTA), `@` (Absolute Positioning/Z-index layer), `*` (Multiplier, e.g., `c * 4` means 4 cards).
- **Custom IDs**: Combine them for exact clarity: `GT1l` (Glass-Tier 1 left), `c_hero`.

### Utility-First Style Injector (Bootstrap & Tailwind Inspired)
When writing styling inside `[ ]`, adopt universal, predictable CSS-framework abbreviations to maximize AI parsing compatibility and cross-project consistency:
- **Spacing (`m` for margin, `p` for padding)**: Format `{property}{sides}-{size}`. Sides: `t` (top), `b` (bottom), `l` (left), `r` (right), `x` (horizontal), `y` (vertical). *E.g., `[pt-5 my-auto px-4]`, `[mb-100px]`.*
- **Sizing**: Combine `w` (width) or `h` (height) with values. *E.g., `[w-100]`, `[vh-100]`, `[w-auto]`.*
- **12-Column Layouts**: VSS actively uses the unified 12-column mental model. *E.g., `[col-6]` = 50% width, `[col-lg-4]` = 33.3% width.* For modern grids: `[d-grid gap-3]`.
- **Flexbox Mechanics**: Use standardized classes. *E.g., `[d-flex align-items-center justify-content-between flex-column]`.*
- **Positioning & Layers**: Use `[position-relative]`, `[position-absolute top-0 start-50 translate-middle]`, and `[z-n]` (where n is z-index).
- **Typography & Display**: Use `[fs-1]` to `[fs-6]` for font sizes, `[fw-bold]` for weights, `[text-center]`, `[text-truncate]`, and `[d-none]` / `[d-block]` for visibility.
- **Borders & Effects**: Define physical presence with `[rounded-circle]`, `[rounded-3]`, `[border-bottom]`, and `[shadow-lg]` or `[opacity-50]`.
- **Responsive Breakpoints**: Prepend standard viewport prefixes for media queries: `sm:`, `md:`, `lg:`, `xl:`, `xxl:`. *E.g., `[md:w-50 lg:d-none]`. This guarantees structural adaptability when parsing complex layouts.*

### VSS Read/Write Examples
- **Basic Card**: `{ [bg:dark p20px] I1 | T1 + t2 }`
  *(A dark padded div containing an image above a row containing title and text)*
- **God-Tier Hero Extraction**: `( { C_Main [relative h100vh] { @bg_vid } | { T_Hero [fw900 mb20px] + { !cta_1 [pl20px pr20px] + !cta_2 } } } )`
  *(A relative section with an absolute background video, and a column with a bold title above a row with two buttons built with specific padding).*

---

## 2. Advanced Component Prototypes (The 200% DNA)

Building beautiful design means structural depth and **Predictive Intelligence (Physiological UX)**. A section with `< 3` layers is considered "boring" and must be rejected. The website should "think" ahead of the user.

> **DEEPER THINKING RULE (Density Check)**: Before implementing any section, mentally decompose the objective into a VSS formula. If the formula is too simple (e.g., just an image and text: `{ img + t }`), it is NOT high-end. You MUST aim for at least 4-5 layered components per section to achieve God-Tier density.

### A. The 200% Physics & Structure Baseline
*   **Recursive Layering & Textures**: Parent divs must use `[position-relative overflow-hidden]`. Use nested `{ }` arrays with 5+ stacked pseudo-elements each with unique blending modes (`overlay`, `color-dodge`, `screen`).
*   **Symbiotic Glass & Hyper-Bento**: Use `{ Card_Glass [backdrop-filter:blur(20px) bg:rgba(255,255,255,0.05)] }` grids for all data presentation. Symbiotic glass must sample the average color of the nearest 3 images to create harmonized UI accents.
*   **Neural Grids & Ghost Intent**: Layouts shift slightly based on scroll velocity (Physics-based parallax). Elements track cursor "intent" using Ghost Scripts to pre-glow buttons *before* they are hovered.

### B. Micro-Interaction & Detail Matrix
| Component | God-Tier (200%) Requirement |
| :--- | :--- |
| **Labels/Tags** | Multi-layered: `border-radius: 50px`, `backdrop-filter: blur(10px)`, and a subtle `box-shadow` with accent glow. |
| **Tabs/Menus** | **Physics-based**: Indicator line must be an animated SVG or a div with `transition: cubic-bezier(0.16, 1, 0.3, 1)`. |
| **Lists (ul li)** | **Custom Bullet DNA**: Use custom icons (crystal/geometric) instead of dots. Every item must have a subtle `padding-left` increase on hover. |
| **Buttons** | **Glass-Fill**: Liquid-style hover animations (fill from edges). Small Buttons require high-contrast text and a micro-icon. |

### C. Advanced Visual CSS Frameworks
**1. The "Crystal Icon" System:**
Icons should not be flat. They must feel like 3D glass objects.
```css
.crystal-icon {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
}
```
**2. Animated Line Border (Super Developer Signature):**
A vertical/horizontal line that grows on hover or scroll.
```css
.animated-border-left { border-left: 2px solid transparent; transition: all 0.6s ease; padding-left: 20px; }
.animated-border-left:hover { border-color: var(--color-accent); padding-left: 35px; /* Visual push */ }
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

---

## 4. Implementation & Narrative Protocols

1. **Mirror Synthesis Protocol (Cloning)**: When duplicating a live site, the target is 95% content match. Header/Footer parity is absolute. Replicate exact narrative flow (Hero -> Portfolio -> Pricing -> Testimonials) but upgrade the visuals to "Evolution 3.0" VSS density.
2. **Layered Narrative Protocol**: Use staggered background shades to create visual "layers in line" (`--color-bg-alt` vs `--color-bg-deep`). Toggle these between sections to prevent visual fatigue and emphasize depth.
3. **Animation Visibility Buffer**: For components with `transform: translateY` animations and bottom borders (e.g., Glass Cards), always add `[mb5px]`. This ensures the border isn't clipped by the container during rest/transition.
4. **Pre-Footer CTA Protocol**: Every page MUST conclude with a high-impact Call to Action section immediately preceding the footer (e.g., "Ready to Evolve?"). Use large typography background, glassmorphism, and internal linear gradients.

### Content Strategy Mapping
- **For SaaS/Tech**: `Hero -> Tech Specs -> Social Proof -> Features -> FAQ`.
- **For High-End Retail/Food**: `Hero -> Signature Item -> Menu/Gallery -> Story -> Reservations`.
- **For Construction/B2B**: `Hero -> Stats -> Services -> Portfolio -> Team -> Contact`.

---

## 5. Master Evolution & Intelligence Protocol

To expand the AI's design intelligence autonomously, the **AI MUST actively and constantly update this document**:

1. **Auto-Evolution of Syntax**: If the AI encounters a complex layout/property that the current VSS syntax handles poorly, the AI **MUST** invent a new VSS symbol/rule and permanently append it to the "Core Syntax Rules" in this document.
2. **Visual Image/Code Extraction**: When researching live websites or parsing images, immediately convert their structures into VSS. e.g. "I see a navbar with logo left, menu center, button right. Storing as: `{ $logo + { NavLinks | * 4 } + !btn [r0] }`".
3. **DNA Hybridization**: Combine `Crafix` structural grid logic with `Zeta 200%` ghost intent styling to invent new High-Conversion layouts.
4. **Symbolic Tagging**: Tag stored VSS patterns with `[CONV]` (Conversion), `[AUTH]` (Authority), `[IMMR]` (Immersive/Visual), and `[TECH]` (Data heavy).
5. **Self-Pruning**: Whenever reading this file, if a VSS formula looks identical to another, merge them to save token space.
6. **MANDATORY EXTRACTION VAULTING**: Every unique design the AI generates or studies MUST be appended to "Section 5: The Extraction Repository". The AI has permission to store an **unlimited** number of samples.

---

## 5. The Extraction Repository (Website Vault)

This repository stores unlimited structural extraction patterns from high-end websites or UI inspiration images. When the AI scans an image or researches a layout, the exact structure MUST be codified and pushed here to build a long-term memory of design logic.

### Format Standard
- **Label**: [Component/Section Type]
- **Title**: [Human Readable Name & Key Dimensions/Grid setup]
- **Description**: [Detailed structural logic, interaction behavior, and what the user sees]
- **VSS Formula**: [The exact notation using `{ }` and `[ ]`]

---

### [Stored Samples]

#### Sample 1: 3x6 Interactive Image Gallery
- **Label**: gallery
- **Title**: 3x6 (width x height) row item row gallery
- **Description**: This will create an image gallery with 3 `div` boxes in a row. Inside, it has its own gallery images included. This will also create a popup modal window to see enlarged images when the user clicks.
- **VSS Formula**: `[i-7b[13r(3b+3C){1a{6c[23]}!3b}]3a]` *(Note: This is a legacy complex string example, preferred VSS V2 format would be `( { Gallery_Grid [grid-cols:3 gap20px] { Image_Wrap [cursor:pointer overflow:hidden] @ Modal_Trigger * 3 } } )`)*

#### Sample 2: Liquid Data Bento
- **Label**: Bento Grid
- **Title**: 4x2 Hyper-Bento with Pulse
- **Description**: A highly interactive bento grid featuring a main large card on the left and smaller data-heavy cards on the right. Includes neural-pulse animations on hover.
- **VSS Formula**: `( { Container [pt100px pb100px] { Bento_Grid [grid-cols:4] { Bento_Main [span2 row2 bg:glass-dark] T_Hero + p_Sub } + { Bento_Small [pulse-hover] * 4 } } } )`

#### Sample 3: Floating Cinematic Hero (Legacy Translated)
- **Label**: Hero Section
- **Title**: Deep Floating Media Hero
- **Description**: A centered typography group floating above deep-layered absolute media (images/videos) and structural icons. Creates a cinematic "lost in space" feeling.
- **VSS Formula**: `( { S_Hero [relative h100vh flex-center overflow:hidden] @ { Media_Layers [absolute inset0 z-0] img_Bg + img_Particle * 3 } + { Content_Group [z-10 text-center] t_Sub + T_Main + !Btn } + @ i_Float * 2 } )`

#### Sample 4: Telemetry Data Grid (Legacy Translated)
- **Label**: Data Grid
- **Title**: Glowing Telemetry Grid
- **Description**: Technical data blocks arrayed horizontally, actively separated by glowing, animated horizontal telemetry lines. Extremely high-tech industrial aesthetic.
- **VSS Formula**: `( { S_Stats [pt100 pb100] { Grid_Data [grid-cols:3 gap40px] { Stat_Block | T_Number + t_Label } * 3 } + { Telemetry_Divider [w-full h1px bg:blue shadow:glow pulse] } } )`
