# Consolidate & Redesign Language Switcher

Consolidate local assets and redesign the language switcher into a single, premium dropdown component across all pages.

## Proposed Changes

### [Global Assets]

#### [MODIFY] [global.css](file:///c:/Users/user/Desktop/antigravity/jin-hong-me-html-v2/css/global.css)

- Add dropdown-specific styles for `.lang-switcher`.
- Implement hover/click states for the dropdown menu.

#### [MODIFY] [main.js](file:///c:/Users/user/Desktop/antigravity/jin-hong-me-html-v2/js/main.js)

- Add `setLang` function to handle UI updates and persistence.
- Add logic to toggle the dropdown visibility.

### [Pages]

#### [MODIFY] [index.html](file:///c:/Users/user/Desktop/antigravity/jin-hong-me-html-v2/index.html)

- Remove inline switcher styles and scripts.

#### [MODIFY] [about.html](file:///c:/Users/user/Desktop/antigravity/jin-hong-me-html-v2/about.html)

- Sync header HTML structure.
- Remove inline switcher styles/scripts if any.

#### [MODIFY] [services.html](file:///c:/Users/user/Desktop/antigravity/jin-hong-me-html-v2/services.html)

- Sync header HTML structure.
- Remove inline switcher styles/scripts if any.

#### [MODIFY] [projects.html](file:///c:/Users/user/Desktop/antigravity/jin-hong-me-html-v2/projects.html)

- Sync header HTML structure.
- Remove inline switcher styles/scripts if any.

### [Testimonials Refinement]

#### [MODIFY] [index.html](file:///c:/Users/user/Desktop/antigravity/jin-hong-me-html-v2/index.html)

- Revert Bootstrap Carousel to Swiper structure.
- Configure Swiper for 3 items per view (desktop), 1 (mobile).
- Enable `loop: true`, `autoplay`, and `grabCursor: true` (mouse drag).
- Remove all navigation and pagination markup.

#### [MODIFY] [global.css](file:///c:/Users/user/Desktop/antigravity/jin-hong-me-html-v2/css/global.css)

- Remove Bootstrap Carousel overrides.
- Refine Swiper container spacing.

## Verification Plan

### Manual Verification

- Check every page to ensure the language switcher looks and behaves exactly like the homepage version.
- Verify "English version coming soon" alert works correctly on all pages.
