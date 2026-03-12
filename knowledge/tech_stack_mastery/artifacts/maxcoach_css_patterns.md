# ThemeForest Extraction: MaxCoach (Volatile Knowledge)

**Usage Count:** `1/10` (Subject to auto-removal if unused/unhelpful or auto-upgrade if critical).

## Extracted Premium CSS Patterns (60 Rules)

This document contains raw CSS rules extracted from the premium MaxCoach template. These rules cover advanced structural padding, sophisticated hover transitions, box-shadows, and rgba background overlays.

### Interaction & Transition Rules

- **Universal Transitions:** All interactive elements (`a`, `.theme-btn`, `.social-icon`) use standard transitions: `transition:all 500ms ease; -moz-transition:all 500ms ease; -webkit-transition:all 500ms ease; ...`
- **Button Hover States:**
  - `.btn-style-one`: Solid background `#fa2964` to transparent with border.
  - `.btn-style-two`: Transparent with `#222222` border to solid `#fa2964`.
- **Dropdown Animations:** Nested menus utilize `-webkit-box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.05);` to create depth.
- **Scroll-to-top:** Fixed positioning with `background:rgba(250,51,100,0.80);` fading to opacity 1 on hover.

### Padding & Layout Standard (Margin/Padding Hierarchies)

- **Auto Container:** `max-width: 1200px; padding: 0px 15px; margin: 0 auto;` (Crucial for consistent centering).
- **List Style Spacing:**
  - `.list-style-one li`: `padding-left: 28px; margin-bottom: 15px; line-height: 1em;`
  - `.list-style-two li`: `padding-left: 60px; padding-bottom: 15px; border-bottom: 1px solid #eeeeee;`

### Typography Standards

- Base body: `font-size: 15px; color: #777777; line-height: 1.8em; font-family: 'Poppins', sans-serif;`
- Headings: `font-weight: normal; margin: 0px; line-height: 1.6em;` (Relying on specific class weights rather than raw `h1`-`h6` tags).

_Note: These patterns must be applied directly to the Jin Hong V2 `about.html`, `services.html`, etc., converting the static layouts into dynamic, premium pages._
