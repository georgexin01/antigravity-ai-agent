# AI Design DNA Library

This library codifies the structural and visual patterns of high-end website templates. Use these "formulas" to replicate premium layouts and artistic layering.

## 1. Layout Notation System (LNS)

The LNS provides a shorthand for session div structures.

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

---

## 3. Implementation Protocols

### Pseudo-element Layering

To achieve "Artistic Layers":

1. Parent div must be `position: relative; overflow: hidden;`.
2. Use `::before` for background textures (grain, noise, subtle gradients).
3. Use `::after` for floating motifs (blobs, sparks, thematic PNGs).
4. `z-index: -1` for background, `z-index: 10` for foreground floating elements.

### Content Strategy Mapping

- **For SaaS/Tech**: `Hero -> Tech Specs -> Social Proof -> Features -> FAQ`.
- **For High-End Retail/Food**: `Hero -> Signature Item -> Menu/Gallery -> Story -> Reservations`.
- **For Construction/B2B**: `Hero -> Stats -> Services -> Portfolio -> Team -> Contact`.

---

## 4. Evolution Protocol (Self-Update Rules)

To ensure this library remains the ultimate design authority, the AI must follow these rules:

1. **Codify on Completion**: Immediately after building a high-end section or studying a template, generate it's LNS formula and add it to Section 2.
2. **Layering Discovery**: If a new CSS "wow" factor is discovered (e.g., specific filter combos, complex SVG masks), document the exact "Trick" in Section 2.
3. **Cross-Pollinate**: Look for ways to apply a pattern from one industry (e.g., Restaurant "Organic Spills") to another (e.g., Tech "Digital Glitch").
4. **Prune & Polish**: Monthly, review existing LNS formulas. If a pattern is consistently underperforming in user ratings, move it to an "Archived" section.
