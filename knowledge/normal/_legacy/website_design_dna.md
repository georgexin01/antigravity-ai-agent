# MASTER WEBSITE DESIGN DNA & SECTION PROTOCOLS (2026)

[!IMPORTANT]
HIGHEST PRIORITY PROTOCOL: All website generation must follow the `stitch-app-developer` (1.1-1.4) hierarchical loop. Designs are birthed in the Google Stitch framework before being exported to production code.
SENIOR DESIGNER STANDARD: Every project must adhere to the [Senior Designer Protocol](file:///C:/Users/User/.gemini/antigravity/knowledge/normal/research/research_and_learn/artifacts/agentic_baton_relay.yaml).

## 0. Stitch Master Protocols (2026)

1. 1.1 Material Tagging: Classified into 【核心】, 【参考】, etc.
2. 1.2 AI Studio Research: Dynamic verification of 2026 interaction patterns.
3. 1.3 Tool Scripts: Integration of official Slider, Modal, and Auth components.
4. 1.4 Hierarchical Context: Logic-first structured text generation.
5. 1.5 Brand Kit Mastery: Mandatory extraction of client color tokens and font weights before UI construction.

---

## 1. Vector Shorthand Syntax (VSS) System

The VSS allows the AI to extract and store complex nested design layouts (from images or online research) into compact strings.

### Core Syntax Rules

- `( )` = Section Boundary (e.g., `<section>`)
- `{ }` = Div / Container Box (e.g., `<div>`). Everything inside these brackets acts as children of that div.
- `[ ]` = Pure CSS Style Injector. e.g., `[font-size:14px color:red]`
- `" "` (Space) = Grouping and separation tool for easier AI parsing. Keep variables distinct: `{ a + b }` not `{a+b}`.

### Expanded Variable Dictionary (VSS 5.0: Singularity Level)

The AI is permitted to use an unlimited combination of symbols and strict 2-letter semantic codes. Case matters:

The `Aa` Double-Vector Syntax:
Always use a two-letter structural prefix. The 1st is Uppercase (Element Type). The 2nd is Lowercase (State/Variant).
- Containers (`C`): `Cg` (Grid), `Cf` (Flex), `Ca` (Absolute), `Cg` (Glass/Bento).
- Typography (`T`): `Th` (Headline), `Tp` (Paragraph), `Tq` (Quote), `Tm` (Muted).
- Buttons (`B`): `Bp` (Primary CTA), `Bs` (Secondary), `Bo` (Outline), `Bg` (Ghost/Liquid).
- Media (`I`): `Ib` (Background Image), `Iv` (Video), `Ii` (Micro Icon).

Ghost Logic & Data Primitives (Brain Hookups):
- `< >` = Vue/API Data Injection (`<price>`). Tells Gemma-4 to inject a variable, not static text.
- `{$ }` = Pinia / React State Binding. *Critical Upgrade:* If the AI sees `Bp{$cartstate}`, the AI is FORCED to not only write the button, but write the Javascript reactive logic underneath it simultaneously. 
- `~` = Accordion / Foldable.
- `=` = Carousel / Slider Track. 
- `^` = Modal overlay (Z-index 9999).
- `?` = Tooltip / Popover trigger.

The Infinity Engine & Motion Vectors (GSAP Hookups):
- `>>`, `<<`, `^^` = Base Motion vectors (CSS Fade Right, Left, Up).
- `@gsap_pin` = Advanced Scroll Pinning. The AI must wrap this container in a `ScrollTrigger.create({pin:true})` engine block.
- `@gsap_scrub` = Scroll Linked Animation.
- `@magnet_x` = Magnetic Hover Physics (cursor pull logic).

Master Keyboard Symbols (Logic & Routing):
- `&` = Tight Link: Bind two elements with zero CSS gap (`Ii & Tp`).
- `%` = Responsive Layout Break: Switches state (`Cg %md Cf`).
- `/` = Physical Divider: `<hr>` line.
- `:` = State Trigger: Hover/Focus/Active (`Bp:hover`).
- `#` = Identity Anchor: DOM ID link.
- `*` = Multiplier: Iterate elements (`c * 4`).
- `@` = Absolute Position Layer.

### VSS Read/Write Examples

- Basic Card: `{ [bg:dark pad:5] I1 | T1 + t2 }`
  (A dark padded div containing an image above a row containing title and text)
- Singularity Hero Extraction: `( { CMain [pos:relative h:100vh] { @gsapscrub IbVideo } | { ThHero [fw:bold marginb:5] + { !BpGetNow{$checkout} [padx:5 depth:3] + !Bs_Read } } } )`
  (A relative God-tier hero with GSAP scrubbing video, 3-layer depth button tied to Pinia state logic).

---

## 2. Advanced Component Prototypes (The 200% DNA)

Building beautiful design means structural depth and Predictive Intelligence (Physiological UX). A section with `< 3` layers is considered "boring" and must be rejected. The website should "think" ahead of the user.

DEEPER THINKING RULE (Density Check): Before implementing any section, mentally decompose the objective into a VSS formula. If the formula is too simple (e.g., just an image and text: `{ img + t }`), it is NOT high-end. You MUST aim for at least 4-5 layered components per section to achieve God-Tier density.

### A. The 200% Physics & Structure Baseline

- Recursive Layering & Textures: Parent divs must use `[position-relative overflow-hidden]`. Use nested `{ }` arrays with 5+ stacked pseudo-elements each with unique blending modes (`overlay`, `color-dodge`, `screen`).
- Symbiotic Glass & Hyper-Bento: Use `{ Card_Glass [backdrop-filter:blur(20px) bg:rgba(255,255,255,0.05)] }` grids for all data presentation. Symbiotic glass must sample the average color of the nearest 3 images to create harmonized UI accents.
- Neural Grids & Ghost Intent: Layouts shift slightly based on scroll velocity (Physics-based parallax). Elements track cursor "intent" using Ghost Scripts to pre-glow buttons before they are hovered.

### B. Micro-Interaction & Detail Matrix

| Component         | God-Tier (200%) Requirement                                                                                                                  |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| Labels/Tags   | Multi-layered: `border-radius: 50px`, `backdrop-filter: blur(10px)`, and a subtle `box-shadow` with accent glow.                             |
| Tabs/Menus    | Physics-based: Indicator line must be an animated SVG or a div with `transition: cubic-bezier(0.16, 1, 0.3, 1)`.                         |
| Lists (ul li) | Custom Bullet DNA: Use custom icons (crystal/geometric) instead of dots. Every item must have a subtle `padding-left` increase on hover. |
| Buttons       | Glass-Fill: Liquid-style hover animations (fill from edges). Small Buttons require high-contrast text and a micro-icon.                  |

### C. Advanced Visual CSS Frameworks

1. The "Crystal Icon" System:
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

2. Animated Line Border (Super Developer Signature):
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

1. Scroll Reveal 2.0: Every section uses a staggered reveal, but strictly with a Scale-Up + Fade-In combo (`0.95 -> 1.0` scale).
2. Figma Flow: Micro-adjustments (1-3px) on every hover. Nothing should be static.
3. Typography: Pair H1 titles with a large, low-opacity (0.05) background symbol or gradient character. For specific captions, the first word is BOLD, UPPERCASE, and 2px LARGER. Script Code Injection (monospaced font snippets at opacity 0.1) should be used as background decorative "code rain".
4. Liquid Typography: Text using `background-clip: text` and `linear-gradient` with `@keyframes` that move at 0.5% speed for a "breathing" effect.

---

## 3. Consolidated Template DNA Profiles

### A. Zeta 200% (The standard)

- Aesthetic: Immersive, High-density, Physics-based.
- Hero VSS: `( { @motif [pos:absolute top:0 right:0 blur:30px] + { ThMain [fw:800] | !BpPrimary [depth:3] } } )`
- Strategy: Hero -> Trust Ribbon (Floating) -> About (Asymmetrical LNS) -> Services (Symbiotic Glass) -> Workflow (Neural Grid) -> Partner Network (Code Rain) -> Tech Stack (Liquid Typography) -> Footer.

---

## 4. Hyper-Visual Atmospheric Protocols (PRIORITY: TOP)

To reach God-Tier (2.0.00+) aesthetics, the AI must move beyond flat sections. These protocols are MANDATORY for all future builds.

### A. Section-Specific Design Backgrounds

Every section MUST have a unique "Atmosphere". Do not repeat the same background for consecutive sections.

- Theme Color Rotation: Shift background hues slightly between sections.
- Spatial Design: Use overlapping transparent geometric shapes, circles, or floating motifs to create depth.
- Slowing Effects: Implement CSS-driven background elements with slow `rotate` or `pulse` animations (0.01x speed).
- Gradient Mastery: Use multi-stop radial gradients (e.g., `radial-gradient(at 0% 0%, var(--bg-1), transparent)`) to create "Thematic Lighting".

### B. The BLOOD System: Symphonic OKLCH Color Physics (120/100 Depth)

The biological core of visual hierarchy. HEX/RGB/HSL ARE OFFICIALLY BANNED. The AI must computationally convert to and separate the main theme into a massive 10-Tier OKLCH Lighter/Darker spectrum via CSS Variables.

The Super-Long OKLCH Spectrum Rule:
The AI must declare `oklch(L C H)` mapping across all layers:
*   `--primary-100` (`L: 0.95` Ultra Lighter): Used as text contrast on deep backgrounds.
*   `--primary-400 to 500` (`L: 0.60` Core Theme): The exact brand chroma. Used for CTAs.
*   `--primary-900 to 1000` (`L: 0.10` Ultra Darker): Used as the base root simulation for deep void space.

---

## 5. Master Evolution & Intelligence Protocol

To expand the AI's design intelligence autonomously, the AI MUST actively and constantly update this document:

1. Auto-Evolution of Syntax: If the AI encounters a complex layout/property that the current VSS syntax handles poorly, the AI MUST invent a new VSS symbol/rule and permanently append it.
2. Visual Image/Code Extraction: When researching live websites or parsing images, immediately convert their structures into VSS.
3. DNA Hybridization: Combine `Crafix` structural grid logic with `Zeta 200%` ghost intent styling to invent new High-Conversion layouts.

---

## 6. Extreme Content Density (ECD) Protocols

Goal: Transform "Landing Pages" into "Digital Ecosystems".

- Section Multiplication: If a page feels short, add: Process, Tech Stack, FAQ, Testimonials, Blog Preview.
- Micro-Copy Depth: Use technical technical descriptions instead of generic ones.
- Page Specific Mastery: Home, About, Services, Portfolio, Contact. Every page must be deeply architected.

---

## 7. Evolution Mandate (AI Autonomous Update)

- AI MUST perform one "Pattern Harvest" every 3 research sessions.
- VSS syntax MUST evolve to include new interaction primitives.
- Mature patterns (> 1 month old) MUST be pruned or upgraded.
