---
name: website-template-design
description: "Standardized Web Design workflow for creating high-quality, premium websites by referencing ThemeForest templates, extracting layout concepts, and implementing dynamic sliders and structured CSS."
triggers: ["website template design", "website-template-design", "premium website design"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_inner_frontmatter: |-
  name: website-template-design
  description: Standardized Web Design workflow for creating high-quality, premium websites by referencing ThemeForest templates, extracting layout concepts, and implementing dynamic sliders and structured CSS.
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: SKILL
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# Premium Website Design Workflow

## Overview

This skill outlines the step-by-step process for overhauling or creating a website from scratch using professional templates as inspiration. By acting systematically, the AI will produce visually stunning and structured websites instead of basic, generic layouts.

## Step-by-Step Execution

### Step 1: Design Reference (LOCAL FIRST, then ThemeForest)

⚑ ALWAYS CHECK LOCAL PATTERN LIBRARY FIRST before searching ThemeForest.
>
File: `C:\Users\user\.gemini\antigravity\skills\web-design-guidelines\constructionagencylayout_patterns.yaml`
>
This file contains 21 copy-paste section templates (HTML + CSS) learned from live premium websites (ConstX + Gencyo), including 3 ready-to-use Section Combination Recipes for:
>
- Corporate Construction sites
- Industrial / M&E sites
- Digital Agency sites
>
Use this FIRST. Only go to ThemeForest when the local patterns don't cover the required section.

If ThemeForest research IS needed:

1. Search `https://themeforest.net/category/site-templates?term=[topic]` for a relevant premium template.
2. Identify modern layout composition, typography hierarchy, and color palette.
3. Extract concepts from the template to supplement the local pattern library.

### Step 2: Asset Gathering & Cleaning

1. Download or source required high-quality images.
2. Save ALL images strictly into the project's `images/` directory.
3. Proactively delete any unused, generic, or old placeholder images from the folder to keep the repository clean.

### Step 3: Layout & Structure Extraction

1. Extract the core HTML structure concepts (e.g., Hero Slider, About Us split-sections, Services Grid, Footer).
2. Write raw HTML5 structure avoiding generic `div` soup. Use semantic tags (`section`, `main`, `article`, `header`, `footer`).
3. Ensure the homepage has a Dynamic Slider / Slideshow at the very top.

### Step 4: Premium CSS Styling

1. Write custom CSS (or use Tailwind/Bootstrap if specified by user) reflecting the premium template conventions.
2. Use modern CSS (Flexbox, Grid, CSS Variables for tokens).
3. Implement micro-animations (hover effects, smooth transitions, fade-ins).
4. Do NOT use fake image divs or pure CSS background colors if a real image slot is clearly required by the template design.

### Step 5: Iterative Implementation

1. Integrate the new HTML and CSS into the project files. Start with `index.html` and `global.css`.
2. Expand the unified design to sub-pages (`about.html`, `services.html`, etc.) to ensure a consistent premium feel.
3. Test responsiveness across mobile and desktop breakpoints.

### Step 6: Visual Validation

Before marking the task complete:

- [ ] No section looks like a plain Bootstrap default
- [ ] At least one memorable "wow" element per page (hero overlay, counter ribbon, hover portfolio overlay, etc.)
- [ ] Dark theme is consistent throughout — no white/light background divs
- [ ] All images are real (not CSS placeholders)
- [ ] All internal links point to real `.html` files
