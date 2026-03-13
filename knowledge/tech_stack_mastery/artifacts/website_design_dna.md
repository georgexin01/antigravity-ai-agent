# AI Design DNA Library

This library codifies the structural and visual patterns of high-end website templates. Use these "formulas" to replicate premium layouts and artistic layering.

## 1. Layout Notation System (LNS) & Deeper Thinking

The LNS provides a shorthand for session div structures. **Deeper Thinking Rule**: Before implementing any section, mentally (or in scratchpad) decompose the objective into an LNS formula. If the formula is too simple (e.g., only 2 components), it is NOT high-end. Aim for at least 4-5 layered components per session.

### Syntax:

- `( )` = Section Division
- `1-9` = Positional Weighting / Grid Slots
  - `1-3` = Left/Top
  - `4-6` = Center
  - `7-9` = Right/Bottom
- `a-z` = Component Type:
  - `a` = Large Media (Image/Video)
  - `b` = Ornamental (Icon/Shape/Pill)
  - `c` = Content Block (Text/Title)
  - `d` = Interactive (Button/Form)
  - `e` = Nested Grid/Repeater
- `+` = Flex Row (Horizontal)
- `|` = Flex Column (Vertical)
- `/` = Split Ratio (e.g., `/2` for 50/50, `/3` for 33/66)
- `@` = Absolute Layer (z-index level)

### Decoded Examples:

- **(1ab23+3c|2)**:
  - `1ab` = Large Image (a) + Icon (b) at Position 1 (Top Left).
  - `23` = Position indicator (Bottom Side).
  - `+` = Flex/Container.
  - `3c|2` = List of 3 content items (c) in 2 rows (|2) on the right.
- **(1t+7i@)**: Top-left text group flexed with an absolute layered image shifted to the right.
- **(5vg\*3)**: Centered grid of 3 icon-boxes.

---

## 2. Template DNA Profiles

### Aiero AI Tech (`aiero-1`)

- **Core Aesthetic**: Cybernetic, High-contrast, Deep layering.
- **Hero Formula**: `( { [t1vb] + [i1p@] } )`
- **Session Strategy**: Modern Tech -> Social Proof -> Core Tech (Neural/GSAP) -> Shop/Pricing.
- **Layering Trick**: Uses `.section::before` with `background-image: url('noise.png')` and `opacity: 0.05` to add texture. Abstract PNGs are positioned `@top-right` with `z-index: -1`.

### Crafix Construction (`crafix-1`)

- **Core Aesthetic**: Solid, Structural, Industrial.
- **Hero Formula**: `( { [t1] | [i1g] } )`
- **Session Strategy**: Trusted History -> Service Grid (Bento) -> Project Stories -> Team -> Footer.
- **Layering Trick**: Transparent property overlays (`.overlay-text`) using `backdrop-filter: blur(10px)` on cards.

### Themesflat Restaurant Series (`tf-rest-1`)

- **Core Aesthetic**: Artistic, Organic, Warm.
- **Coffee Hero**: `( { [t1] @ [i1p] } )` -> Centered text over a multi-layered image backdrop.
- **Session Strategy**: Welcome -> Special Menu (Grid) -> Tables (CTA) -> Story -> Blog -> Map.
- **Layering Trick**: Extensive use of `:after` for "organic spills" or "grain patterns". PNGs of coffee beans or leaves are placed with `transform: rotate(...)` and `opacity: 0.2`.

### Zeta 150% "Super Developer" (`zeta-150`) [IMMR][TECH]

- **Core Aesthetic**: Immersive, High-density, Physics-based.
- **Hero Formula**: `( { 5[t1vb] + @[typography-symbol] + @[motif-circle] } )`
- **Session Strategy**: Hero (Typography Layer) -> Trust Ribbon (Floating Glass) -> About (Animated Border/LNS 15) -> Services (Crystal Icons) -> Workflow (Physics Borders) -> Partner Network -> Leader Spotlight -> Footer (Starfield Canvas).
- **Layering Trick**: **Artistic Motif System**. Every layered section must contain at least one `.artistic-motif` (blur > 30px) and one `.typography-symbol` (opacity < 0.05) to add extreme depth. Use `.animated-border-left` for structured readability.

---

## 3. Implementation Protocols

### Artistic Motif & Asset Integration

1. Parent div must be `position: relative; overflow: hidden;`.
2. Use `::before` for background textures (grain, noise, subtle gradients).
3. Use `::after` for floating motifs (blobs, sparks, thematic PNGs).
4. `z-index: -1` for background, `z-index: 10` for foreground floating elements.
5. **Logo Fetching Protocol**: When remaking/duplicating a website from a URL, auto-search for the logo, download to `images/logo.png`, and update references.
6. **Industrial Spacing Protocol [CRITICAL]**:
    - Every section MUST have a minimum `padding-top: 100px` and `padding-bottom: 100px`.
    - Never use `padding-bottom: 0` unless it is a transition section (e.g., overlapping elements) which requires explicit vertical gap compensation.
    - Consistency is mandatory across all pages to maintain the "Corporate Hub" feel.

8. **Animation Visibility Buffer Protocol**:
    - For components with `transform: translateY` animations and `border-bottom`, always add a `margin-bottom: 5px` (or similar).
    - This ensures the bottom border is not clipped by the container or hidden by the layout at rest/during transition.
    - Applies to `.service-card`, `.team-card`, and `.glass-panel` variants.

9. **Pre-Footer CTA Protocol**:
    - Every page MUST conclude with a high-impact Call to Action (CTA) section immediately preceding the footer.
    - Standard title: "Ready to Evolve?".
    - Design: Large typography symbol background, glassmorphism panel, and internal linear gradient for maximum conversion impact.

10. **Mirror Synthesis Protocol [NEW]**:
    - When duplicating a live site, the target is 95% content match.
    - **Header/Footer Mirroring**: Absolute parity in link structure and brand placement.
    - **Section Sequence Symmetry**: Replicate the exact vertical order of narrative themes (e.g., Hero -> Portfolio -> Pricing -> Testimonials).
    - **Visual Translation**: Convert standard sections into "Evolution 3.0" industrial components while preserving original copy.

11. **Layered Narrative Protocol [NEW]**:
    - Use staggered background shades to create visual "layers in line."
    - **Tokens**: `--color-bg-alt` (slightly lighter/textured) and `--color-bg-deep` (darker/pure black).
    - **Rhythm**: Toggle background classes (`.bg-alt`, `.bg-deep`, `.bg-main`) between sections to create structural separation.
    - **Industrial Edge**: Staggered backgrounds prevent visual fatigue and emphasize section-depth.

### Content Strategy Mapping

- **For SaaS/Tech**: `Hero -> Tech Specs -> Social Proof -> Features -> FAQ`.
- **For High-End Retail/Food**: `Hero -> Signature Item -> Menu/Gallery -> Story -> Reservations`.
- **For Construction/B2B**: `Hero -> Stats -> Services -> Portfolio -> Team -> Contact`.

---

---

## 4. Evolution Protocol (Smarter & Faster)

To ensure this library remains the ultimate design authority, the AI must follow these rules with **High Frequency**:

1.  **Deconstruct & Codify**: Every time a new session is built or a high-end site is researched, immediately generate its LNS formula. If it's a "New Species" (unique layout), add it to Section 2 within 1 tool call.
2.  **Structural "Smarter" Tagging**: Tag DNA formulas with their "Impact Value":
    *   `[CONV]` = Conversion Focused (CTA/Lead Gen)
    *   `[AUTH]` = Authority/Stats Focused
    *   `[IMMR]` = Immersive/Artistic Focused
    *   `[TECH]` = Heavy Data/Industrial Precision
3.  **App & Component Hybridization**: Study app-specific layouts (e.g., Dashboards, WebApps) and bridge their structural efficiencies into the DNA.
4.  **Active Pattern Hunting**: During every "Research" task, look for 2-3 emerging session patterns (e.g., Bento Grids, Floating Glass Navs) and update Section 2.
5.  **Deeper Refinement**: Every 5 iterations, perform a "Deeper Thinking Audit": Can the LNS notation be more precise? Are the Layering Tricks still "Premium"? Adjust Section 3 accordingly.

## 5. Active Patterns (Current Version)

- **Bento Core**: `( { 5[eb*4] } )` -> A high-density grid of 4 interactive cards with varying weights.
- **Floating Hero**: `( 5c + @[2ab|7i] )` -> Centered text group floating over deep-layered absolute media.
- **Telemetry Grid**: `( 5[c+c] + |[telemetry-line] )` -> Data blocks separated by glowing horizontal telemetry lines.
