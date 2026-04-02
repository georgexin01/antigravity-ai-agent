# 86caraccessories.my — Design DNA & E-Commerce Logic

## 1. Overview
`86caraccessories.my` (branded as **Ninety Six / 96 Car Accessories**) is a gold-standard reference for product-heavy e-commerce and booking applications. Its architecture is optimized for high category visibility and rapid visual scanning.

## 2. Structural DNA: Sidebar-First Layout
This layout is **100% approved** for projects requiring product ordering, booking, or merchandise sales (e.g., `hh-tyres-app`).

- **Architecture**: Two-Column Fixed Sidebar.
- **Left Column (Sidebar)**:
  - Width: ~80px to 120px.
  - Content: Vertical icon-based category menu.
  - Behavior: **Fixed**. Categories stay visible while products scroll.
  - Active State: Highlighted with Primary Accent (`#800000`).
- **Right Column (Main)**:
  - Content: Product grid grouped by category headers.
  - Grid: 2-column (Mobile) or 3-4 column (Web).
  - Cards: High-impact imagery, bold maroon titles, and prominent pricing.

## 3. Visual DNA: Tactical Maroon
- **Primary Color**: Deep Maroon / Crimson (`#800000`). Used for titles, prices, and active states.
- **Background**: Clean White (`#FFFFFF`).
- **Typography**: Geometric Sans-Serif (Roboto, Montserrat, or Plus Jakarta Sans).
- **Aesthetic**: Clean Tech Professional. No clutter, heavy focus on product utility.

## 4. History & Legacy
- **Brand**: Ninety Six (96) Car Accessories.
- **Context**: Rooted in Malaysian automotive parts and services since ~2011.
- **Evolution**: Transitioned from physical service centers to high-density digital catalogs.
- **Fingerprint**: **FP-006** (E-Commerce Standard).

## 5. Usage in V11
- **Standard**: For all "E-Commerce", "Booking", or "Product Selling" missions.
- **Implementation**: Start with `SidebarCategoryNav.vue` + `ProductGrid.vue`.

---
*Generated: 2026-03-20 | V11 Design Vault*
