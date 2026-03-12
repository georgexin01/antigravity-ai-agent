# Goal Description

Develop a premium, robust HTML/CSS multi-page website for the **Malaysian Talent Development Board (MTDB)**.
The website will utilize the strictly enforced "Euro-US/ThemeForest" aesthetics defined in the global agent configuration, including deep background HSL layering, 4-column service grids, sticky headers, dynamic sliders, and high-impact trust ribbons. The content will be drawn from the user's prompt and the provided `Malaysian Talent Development Board_PPT_V1 1.pdf`.

## User Review Required

No major blockers exist, but the design will synthesize elements from the user's 4 provided templates (e.g., Digiplus, Whitehall) to create a custom MTDB-branded experience using Bootstrap/Tailwind hybrid principles in pure CSS.

## Proposed Changes

### Core Architecture & Structural Setup

#### [NEW] index.html

- The high-impact homepage.
- **Components**:
  - Sticky Global Header with navigation.
  - Dynamic Hero Slider (using Swiper.js) introducing MTDB.
  - Trust Ribbon featuring core stats (e.g., 5.5% talent outflow addressed, 6,000+ returning experts).
  - "About MTDB" summary addressing national brain drain.
  - 4-Column "Focus Industries" Service Grid (Digital, Green, Mfg, Med, Tourism).
  - "Our Programs" overview (AiI, REP, MySIP).
  - Global Footer containing required legal links and Zeta Capital credits.

#### [NEW] about.html

- Detailed organizational profile.
- **Components**: Vision, Mission Pillars (Resource Integration, Elite Cultivation, National Service, International Connection), and the 10-Year Development Roadmap.

#### [NEW] services.html

- Deep dive into the Service Range.
- **Components**: Talent Training, International Recruitment, Incubation Support, Strategic Consulting.

### Mandatory Auxiliary Pages

As mandated by the Global Agent Configuration rules:

#### [NEW] project-details.html (or program-details.html)

- A template page for expanding on specific initiatives like the Academy in Industry (AiI).

#### [NEW] faq.html

- High-fidelity accordion layout answering core questions (e.g., "How does MTDB address brain drain?").

#### [NEW] privacy.html

- Standardized, mobile-readable privacy policy.

#### [NEW] terms.html

- Standardized, mobile-readable terms of service.

### Asset Centralization

#### [NEW] css/global.css

- The master stylesheet containing the 5-Tier background logic, typography (Montserrat/Open Sans), and `.btn-v3-` UI library variables.

#### [NEW] js/main.js

- Global interaction handlers for sticky logic, mobile hamburger menus, and Swiper.js initialization.

## Verification Plan

### Automated Tests

- Validate HTML/CSS formatting using built-in linter checks (if available in the environment).
- Run a crawler script or check file sizes to ensure no empty `src=""` or 404 images exist in the build.

### Manual Verification

- The user will open `index.html` in their local browser to verify the visual fidelity against the "ThemeForest Standard" rules, specifically looking for the implemented Trust Ribbon and the 5-tier layer depth.
