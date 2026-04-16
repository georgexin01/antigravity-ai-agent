---
name: golden-shop-design-dna
description: "🏮 Golden Shop Design DNA (Heritage Cyber-Luxury)"
triggers: ["golden shop design dna", "golden_shop_design_dna", "golden shop design"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: golden_shop_design_dna
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# 🏮 Golden Shop Design DNA (Heritage Cyber-Luxury)

V1.0 — 2026-03-31
Style Category: Traditional Chinese Heritage x Modern Dark-Mode Glassmorphism
Purpose: Template for high-end boutique apps and "Cyber Luxury" Chinese brands.

---

## 🎨 1. Color Palette & Visual Identity

| Token | Value | Role |
|---|---|---|
| Heritage Red | `#C1272D` (`cal-red-strong`) | Primary UI, Borders, Emphasis |
| Golden Accent | `#D4AF37` | Premium Dividers, Icons, Level 1 Badges |
| Cyber Dark | `#1A1A1A` (`brand-dark`) | Backgrounds, Primary Headers |
| Bone White | `#FDF5E6` | High-contrast text on Red, Background Cards |
| Accessible Slate | `slate-500` | Secondary metadata (Deepened from 400 for contrast) |

### Visual Stamps
- Double-Border Seals: `border-4 border-double border-cal-red-strong` for critical sections.
- Inner Shadows: Use `shadow-inner` on background containers to create depth.
- Glassmorphism: `backdrop-blur-md bg-white/30` for floating elements.

---

## ✍️ 2. Typography System
- Master Header: `font-family: 'Noto Serif SC', serif; font-weight: 900; font-style: italic; letter-spacing: tracking-widest;`
- Component Headers: `text-brand-dark font-black tracking-wider`.
- Metadata: `text-[10px] uppercase tracking-tighter`.

---

## 🧩 3. Component Blueprints

### A. Genealogy Node (Referral Tree)
- Structure: Recursive `ReferralTreeNode` with vertical and horizontal connector lines.
- Style: Circular avatar frame (`w-50 h-50 rounded-full border-3 shadow-md`).
- Logic: Use `chunkedReferrals` (max 4 per row) for mobile-first readability.
- Vertical Connectors: Absolute `border-l border-[#D4AF37]/60` for the central trunk.

### B. Singleton Tooltip Flow
- Pattern: Centralized `activeTooltipId` in the parent component.
- Rule: Only ONE tooltip at a time.
- Mechanism: Global `click` listener that clears the ID if target is not a `.referral-node-card`.
- UI: Border-less shadow-popover with `z-100` priority.

### C. Heritage Confirmation Modals
- Pattern: `<Teleport to="body">` for absolute z-index authority.
- UI: Dark blurred backdrop (`bg-black/60`), centered heritage-themed card, red icon for danger.

---

## ⚖️ 4. Business Logic Patterns

### Point & Redemption
- Conversion: `RM 1 = 10 Points` (or vice-versa depending on project settings).
- Tiers: Standardized redemption blocks: RM 10, 20, 30, 50, 100.
- Guards: Auto-disable/grayscale redemption buttons if user balance is insufficient.

### Shipping & Logic
- WM/EM Split: Different free shipping thresholds for West/East Malaysia.
- Assurance Section: Explicit "Golden Assurance" cards explaining authenticity and shipping policies to build trust.

---

## 🛠️ 5. Infrastructure DNA
- Apache/cPanel Strategy:
    - `.htaccess` must include `Cache-Control: no-cache, no-store, must-revalidate` for `index.html`.
    - Assets (`js`/`css`) use `max-age=31536000, immutable` for performance.
- SPA Redirection: Standard 404-to-index rewrite logic (Gate 3.2 compliance).

---

## 🧬 6. User Preference Fingerprint
- Preference: Zero-placeholder policy (All content must be "real-world" density).
- Standard: "Golden Planning Protocol" (Deep thinking -> Plan -> User approval).
- Radius: `rounded-[24px]` (Sharper modern heritage).

Extracted from Golden Shop App Production Cycle 2026Q1
