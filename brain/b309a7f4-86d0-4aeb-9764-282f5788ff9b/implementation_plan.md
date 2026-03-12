# Jin Hong M&E - Pure HTML/CSS Implementation Plan

Based on the pivot request, we will build a **Multi-Page Pure HTML/CSS Website** inside `jin-hong-me-html`.

## Phase 1: Project Setup & Global Assets

1. **Directory Structure:**
   - `jin-hong-me-html/`
     - `index.html` (Home)
     - `about.html` (About Us)
     - `services.html` (Business Domains)
     - `projects.html` (Project References)
     - `honors.html` (Honors & Awards)
     - `contact.html` (Contact Us)
     - `css/`
       - `global.css` (Variables, Typography, Base Layouts)
       - `components.css` (Buttons, Cards, Navigation)
     - `js/`
       - `main.js` (Mobile menu toggle, interactions)
     - `images/` (Logos, placeholders)

2. **Design Tokens Translation:**
   Translate `jin_hong_design_spec.md` into CSS variables inside `css/global.css`.

## Phase 2: Building Shared Components (HTML structure)

Instead of Vue components, we will structure reusable HTML blocks for:

- Navbar `<nav class="navbar">` (with mobile hamburger menu via JS)
- Footer `<footer>` (site map, contact details)
- Reusable Card layouts `<div class="card">`

## Phase 3: Page Output

1. **Home (`index.html`)**: Hero banner, core advantages, short intro.
2. **About Us (`about.html`)**: Company data, structure, philosophy.
3. **Services (`services.html`)**: The 6 core engineering services.
4. **Projects (`projects.html`)**: Highlight top B2B projects (Completed/Ongoing).
5. **Honors (`honors.html`)**: Qualifications and awards.
6. **Contact (`contact.html`)**: Form and interactive Google map integration.

## Phase 4: Delivery

Provide the raw folder structure with HTML/CSS fully validated and compliant with modern B2B responsive design.
