# MASTER CLIENT DNA VAULT (V15.2 APEX)
# [⚡ MODE: APOLLO] | [🧬 STATUS: ACTIVE]

---
---
name: 86car-design-dna
description: "86caraccessories.my â€” Design DNA & E-Commerce Logic"
triggers: ["86car design dna", "86car_design_dna", "86caraccessories design commerce"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: 86car_design_dna
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# 86caraccessories.my â€” Design DNA & E-Commerce Logic

## 1. Overview
`86caraccessories.my` (branded as Ninety Six / 96 Car Accessories) is a gold-standard reference for product-heavy e-commerce and booking applications. Its architecture is optimized for high category visibility and rapid visual scanning.

## 2. Structural DNA: Sidebar-First Layout
This layout is 100% approved for projects requiring product ordering, booking, or merchandise sales (e.g., `hh-tyres-app`).

- Architecture: Two-Column Fixed Sidebar.
- Left Column (Sidebar):
  - Width: ~80px to 120px.
  - Content: Vertical icon-based category menu.
  - Behavior: Fixed. Categories stay visible while products scroll.
  - Active State: Highlighted with Primary Accent (`#800000`).
- Right Column (Main):
  - Content: Product grid grouped by category headers.
  - Grid: 2-column (Mobile) or 3-4 column (Web).
  - Cards: High-impact imagery, bold maroon titles, and prominent pricing.

## 3. Visual DNA: Tactical Maroon
- Primary Color: Deep Maroon / Crimson (`#800000`). Used for titles, prices, and active states.
- Background: Clean White (`#FFFFFF`).
- Typography: Geometric Sans-Serif (Roboto, Montserrat, or Plus Jakarta Sans).
- Aesthetic: Clean Tech Professional. No clutter, heavy focus on product utility.

## 4. History & Legacy
- Brand: Ninety Six (96) Car Accessories.
- Context: Rooted in Malaysian automotive parts and services since ~2011.
- Evolution: Transitioned from physical service centers to high-density digital catalogs.
- Fingerprint: FP-006 (E-Commerce Standard).

## 5. Usage in V11
- Standard: For all "E-Commerce", "Booking", or "Product Selling" missions.
- Implementation: Start with `SidebarCategoryNav.vue` + `ProductGrid.vue`.

---
*Generated: 2026-03-20 | V11 Design Vault*


---
---
name: golden-shop-design-dna
description: "ðŸ® Golden Shop Design DNA (Heritage Cyber-Luxury)"
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

# ðŸ® Golden Shop Design DNA (Heritage Cyber-Luxury)

V1.0 â€” 2026-03-31
Style Category: Traditional Chinese Heritage x Modern Dark-Mode Glassmorphism
Purpose: Template for high-end boutique apps and "Cyber Luxury" Chinese brands.

---

## ðŸŽ¨ 1. Color Palette & Visual Identity

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

## âœï¸ 2. Typography System
- Master Header: `font-family: 'Noto Serif SC', serif; font-weight: 900; font-style: italic; letter-spacing: tracking-widest;`
- Component Headers: `text-brand-dark font-black tracking-wider`.
- Metadata: `text-[10px] uppercase tracking-tighter`.

---

## ðŸ§© 3. Component Blueprints

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

## âš–ï¸ 4. Business Logic Patterns

### Point & Redemption
- Conversion: `RM 1 = 10 Points` (or vice-versa depending on project settings).
- Tiers: Standardized redemption blocks: RM 10, 20, 30, 50, 100.
- Guards: Auto-disable/grayscale redemption buttons if user balance is insufficient.

### Shipping & Logic
- WM/EM Split: Different free shipping thresholds for West/East Malaysia.
- Assurance Section: Explicit "Golden Assurance" cards explaining authenticity and shipping policies to build trust.

---

## ðŸ› ï¸ 5. Infrastructure DNA
- Apache/cPanel Strategy:
    - `.htaccess` must include `Cache-Control: no-cache, no-store, must-revalidate` for `index.html`.
    - Assets (`js`/`css`) use `max-age=31536000, immutable` for performance.
- SPA Redirection: Standard 404-to-index rewrite logic (Gate 3.2 compliance).

---

## ðŸ§¬ 6. User Preference Fingerprint
- Preference: Zero-placeholder policy (All content must be "real-world" density).
- Standard: "Golden Planning Protocol" (Deep thinking -> Plan -> User approval).
- Radius: `rounded-[24px]` (Sharper modern heritage).

Extracted from Golden Shop App Production Cycle 2026Q1


---
---
name: japanese-food-app-design
description: "Japanese Food App UI/UX Design Mastery"
triggers: ["japanese food app design", "japanese_food_app_design", "japanese food design"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: japanese_food_app_design
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# Japanese Food App UI/UX Design Mastery

## æ ¸å¿ƒè®¾è®¡ç†å¿µ (Core Design Philosophy)

æ—¥æœ¬çš„é¤é¥®åº”ç”¨ï¼ˆå¦‚ç‚¹é¤ã€å¤–å–æœåŠ¡ï¼‰åœ¨å…¨çƒèŒƒå›´å†…ä»¥å…¶å¯¹ç»†èŠ‚çš„æžè‡´è¿½æ±‚ã€ç”¨æˆ·ä½“æ„Ÿçš„æžé«˜é‡è§†ä»¥åŠå°†â€œæž¯ç‡¥çš„å·¥å…·â€è½¬åŒ–ä¸ºâ€œæœ‰è¶£çš„ä½“éªŒâ€è€Œé—»åã€‚æ ¸å¿ƒç†å¿µå¯ä»¥ç”¨ä¸‰ä¸ªè¯æ¦‚æ‹¬ï¼šé«˜ä¿¡æ¯å¯†åº¦ä½†æœ‰åºã€è§†è§‰é©±åŠ¨é£Ÿæ¬²ã€æ¸¸æˆåŒ–æå‡ç•™å­˜ï¼ˆGamificationï¼‰ã€‚

## 3ä¸ªå…¸åž‹æ—¥æœ¬ç‚¹é¤App/Webåˆ†æž

### 1. Menu (æœ¬åœ°æ–°å…´å¤–å–å¹³å°)

è®¾è®¡ç†å¿µï¼š çŽ°ä»£åŒ–ã€å¹´è½»åŒ–ä¸Žæ¸¸æˆåŒ–ï¼ˆGamificationï¼‰ã€‚
æž„é€ æŽ’åˆ—ï¼š

- å…¨å±è§†è§‰å†²å‡»ï¼š æ‘’å¼ƒä¼ ç»Ÿçš„æ–‡å­—åˆ—è¡¨ï¼Œé‡‡ç”¨å¤§å°ºå¯¸ã€é«˜æ¸…æ™°åº¦çš„æ— èƒŒæ™¯ç¾Žé£Ÿå›¾ç‰‡ä½œä¸ºä¸»è§†è§‰ã€‚
- å¡ç‰‡å¼æŠ½å±‰å¸ƒå±€ï¼š åº•éƒ¨æŠ½å±‰å¼äº¤äº’ï¼ˆBottom Sheetsï¼‰é¡ºæ»‘ï¼Œå•æ‰‹æ“ä½œä½“éªŒæžä½³ã€‚
  ç”¨æˆ·ä½“éªŒä¸Žæœ‰ç”¨å¯å‘ï¼š
- Gachaï¼ˆæ‰­è›‹ï¼‰æœºåˆ¶ï¼š è¿™æ˜¯Menuæœ€æˆåŠŸçš„UXä¹‹ä¸€ã€‚ç”¨æˆ·ä¸‹å•æˆ–ç•™ä¸‹å¸¦å›¾å¥½è¯„å¯ä»¥èŽ·å¾—æ‰­è›‹ä»£å¸ï¼ŒæŠ½å–é™å®šå‘¨è¾¹æˆ–ä¼˜æƒ åˆ¸ã€‚å°†â€œç‚¹å¤–å–â€å˜æˆäº†â€œçŽ©æ¸¸æˆâ€ï¼Œæžå¤§åœ°æé«˜äº†ç•™å­˜çŽ‡ã€‚
- å¾®äº¤äº’ï¼ˆMicro-interactionsï¼‰ï¼š æ·»åŠ è´­ç‰©è½¦æ—¶çš„é£žå…¥åŠ¨ç”»ã€åŠ è½½æ—¶çš„è¶£å‘³UIï¼Œç¼“è§£äº†ç”¨æˆ·ç­‰å¾…çš„ç„¦è™‘æ„Ÿã€‚
- åº”ç”¨åˆ°åŽç»­ç”Ÿæˆï¼š åœ¨ç”Ÿæˆåº”ç”¨æ—¶ï¼Œå¯è€ƒè™‘åŠ å…¥ç±»ä¼¼çš„â€œè¿›åº¦æ¡â€ã€â€œæˆå°±å‹‹ç« â€æˆ–â€œç›²ç›’/æŠ½å¥–â€ç­‰æ¸¸æˆåŒ–UIç»„ä»¶æ¥æé«˜ç”¨æˆ·èŽ·å–æ„Ÿã€‚

### 2. å‡ºå‰é¦† (Demae-can - æ—¥æœ¬å›½æ°‘çº§å¤–å–å¹³å°)

è®¾è®¡ç†å¿µï¼š ä¿¡ä»»æ„Ÿã€é«˜æ•ˆè½¬åŒ–ä¸Žæœ¬åœŸåŒ–å¸ƒå±€ã€‚
æž„é€ æŽ’åˆ—ï¼š

- é«˜å¯†åº¦åˆ†ç±»ç½‘æ ¼ï¼ˆGrid Navigationï¼‰ï¼š é¦–é¡µä¸Šæ–¹å¯†é›†çš„Iconåˆ†ç±»ï¼ˆå¯¿å¸ã€æ‹‰é¢ã€ä¾¿å½“ç­‰ï¼‰ï¼Œå¥‘åˆæ—¥æœ¬ç”¨æˆ·ä¹ æƒ¯çš„é«˜ä¿¡æ¯å¯†åº¦é˜…è¯»ã€‚
- ä¼˜æƒ å‰ç½®ï¼ˆCoupon Firstï¼‰ï¼š å¤´å›¾è½®æ’­æˆ–æµ®åŠ¨æ¨ªå¹…æ°¸è¿œæ˜¯å½“å‰æœ€ä¼˜æƒ çš„æ´»åŠ¨ã€‚
  ç”¨æˆ·ä½“éªŒä¸Žæœ‰ç”¨å¯å‘ï¼š
- ç¡®å®šæ€§ä¸Žé€æ˜Žåº¦ï¼š æ¯ä¸€ä¸ªåº—é“ºåˆ—è¡¨æžå…¶æ˜¾çœ¼åœ°æ ‡æ³¨äº†â€œé…é€æ—¶é—´ï¼ˆå¦‚15-20åˆ†ï¼‰â€å’Œâ€œé…é€è´¹â€ï¼Œå¹¶ç”¨ä¸åŒé¢œè‰²é«˜äº®ã€‚
- æœ¬åœ°åŒ–è‰²å½©å¿ƒç†å­¦ï¼š å¤§é‡ä½¿ç”¨èƒ½å¤Ÿå¼•å‘é£Ÿæ¬²çš„æš–è‰²è°ƒï¼ˆä¸»è‰²è°ƒä¸ºçº¢è‰²ï¼‰ï¼ŒæŒ‰é’®çŠ¶æ€æžå…¶æ¸…æ™°ï¼ˆActive/Disabledï¼‰ã€‚
- åº”ç”¨åˆ°åŽç»­ç”Ÿæˆï¼š åœ¨è®¾è®¡UIæ—¶ï¼Œå¿…é¡»ä¿è¯ä»·æ ¼ã€æ—¶é—´ã€ä¼˜æƒ ä¿¡æ¯çš„å±‚çº§æœ€é«˜ä¸”æœ€æ˜“è¯»ï¼›åˆ©ç”¨è‰²å½©å¿ƒç†å­¦ï¼ˆçº¢/é»„ï¼‰åˆºæ¿€è´­ä¹°æ¬²ã€‚

### 3. è—å¯¿å¸ (Kura Sushi / ãã‚‰å¯¿å¸ å®˜æ–¹App)

è®¾è®¡ç†å¿µï¼š å…¨æ¸ é“èžåˆï¼ˆOmnichannelï¼‰ä¸Žå®¶åº­åŒ–ã€è¶£å‘³åŒ–äº¤äº’ã€‚
æž„é€ æŽ’åˆ—ï¼š

- æ¸…æ™°çš„æ“ä½œåŒºå—ï¼ˆChunky UIï¼‰ï¼š è€ƒè™‘åˆ°å¤šå¹´é¾„å±‚ç”¨æˆ·ï¼ŒæŒ‰é’®è®¾è®¡å·¨å¤§ï¼Œè‰²å½©å¯¹æ¯”å¼ºçƒˆï¼Œå¤šä½¿ç”¨å¸¦æœ‰åœ†è§’çš„ç›´è§‚æ‰å¹³åŒ–è®¾è®¡ã€‚
- å ‚é£Ÿä¸Žå¤–å¸¦çš„æ— ç¼åˆ‡æ¢ï¼š é¦–é¡µæœ€æ˜¾çœ¼çš„ä¸¤ä¸ªå…¥å£æ¸…æ™°åˆ’åˆ†â€œé¢„çº¦å ‚é£Ÿâ€å’Œâ€œå¤–å¸¦ä¸‹å•â€ï¼Œè·¯å¾„æžçŸ­ã€‚
  ç”¨æˆ·ä½“éªŒä¸Žæœ‰ç”¨å¯å‘ï¼š
- Bikkura Pon (æ‰­è›‹ç³»ç»Ÿ) æ•°å­—åŒ–ï¼š åŽŸæœ¬åº—é‡Œåƒ5ç›˜å¯¿å¸æŠ½ä¸€æ¬¡æ‰­è›‹çš„ç»å…¸çŽ©æ³•è¢«ç§»æ¤åˆ°Appä¸­ï¼Œçº¿ä¸Šç‚¹é¤ä¹Ÿèƒ½ç§¯æ”’â€œç›˜æ•°â€å‚ä¸ŽæŠ½å¥–ã€‚
- ä¼ é€å¸¦èˆ¬çš„é€‰é¤ï¼š é€‰è´­è§†è§‰åƒåœ¨çœŸå®žçš„ä¼ é€å¸¦ä¸Šæ‹¿å–ä¸€æ ·ç›´è§‚ã€‚
- åº”ç”¨åˆ°åŽç»­ç”Ÿæˆï¼š å¼ºè°ƒUIçš„â€œäº²å’ŒåŠ›ï¼ˆAffinityï¼‰â€ï¼Œå¤šä½¿ç”¨åœ†è§’ï¼ˆ`Border-radius: 12px ~ 16px`ï¼‰ï¼Œä½¿ç”¨æŸ”å’Œè€Œæ˜Žäº®çš„è‰²å½©ä»¥åŠæŸ”å’Œçš„æžæ·¡é˜´å½±ã€‚

---

## ðŸ’¡ AI Agent ä¸‹æ¬¡ç”Ÿæˆåº”ç”¨çš„è½åœ°æŒ‡å— (Actionable Guidelines for Next Generation)

å½“æˆ‘éšåŽçš„æ—¶é—´ä¸ºæ‚¨ç”Ÿæˆ Web æˆ– App æ—¶ï¼Œæˆ‘å°†è‡ªåŠ¨å›žæƒ³å¹¶åº”ç”¨æ­¤çŸ¥è¯†åº“ä¸­çš„ä»¥ä¸‹è§„åˆ™ï¼š

1. è‰²å½©ä¸Žè´¨æ„Ÿ (Color & Texture)
   - ä½¿ç”¨æš–è‰²è°ƒ(çº¢ã€æ©™ã€äº®é»„)ä½œä¸ºæ ¸å¿ƒCTA(Call to Action)æŒ‰é’®ï¼Œåˆºæ¿€ç‚¹å‡»ã€‚
   - ä¿ç•™å……è¶³ç•™ç™½ï¼ˆWhitespaceï¼‰ï¼Œå¤§èƒŒæ™¯å¤šä½¿ç”¨ä½Žé¥±å’Œå¾®ç°è‰²ï¼ˆå¦‚ `#f9fafb` æˆ– `#f5f7fa`ï¼‰ï¼Œä»¥å‡¸æ˜¾å‰æ–¹é«˜äº®äº®çš„é£Ÿç‰©å›¾ç‰‡ã€‚

2. æŽ’ç‰ˆä¸Žç»„ä»¶ (Typography & Components)
   - å¤§å›¾å¡ç‰‡ä¼˜å…ˆï¼š èœå“å±•ç¤ºå¿…é¡»ä»¥å¤§æ¯”ä¾‹çš„é«˜æ¸…å›¾ç‰‡ä¸ºä¸»ï¼Œåˆ©ç”¨å›¾ç‰‡æš—è§’å åŠ æ¸å˜é˜´å½±ä¿è¯æµ®åŠ¨æ–‡å­—å¯è¯»æ€§ã€‚
   - åœ†è§’ä¸Žè½¯é˜´å½± (Soft UI)ï¼š å¤§é‡ä½¿ç”¨ `border-radius: 16px` ä»¥åŠæŸ”å’Œçš„ `box-shadow: 0 10px 30px rgba(0,0,0,0.06)`ï¼Œè¥é€ æ—¥å¼ç²¾ç»†ã€æ¸©å’Œçš„è§†è§‰ä½“æ„Ÿã€‚
   - é«˜äº®çŠ¶æ€æ ‡ç­¾ (Status Badges)ï¼š èœå“å›¾ç‰‡å·¦ä¸Šè§’å¿…é¡»å¸¦æœ‰é†’ç›®çš„æ ‡ç­¾ï¼ˆå¦‚â€œäººæ°”No.1â€ã€â€œé™å®šâ€ã€â€œå‰©ä½™2ä»½â€ï¼‰ï¼Œåˆ©ç”¨æ¸…æ™°çš„ä¿¡æ¯å¯†åº¦ä¿ƒå•ã€‚

3. å¾®äº¤äº’ä¸Žæ¸¸æˆåŒ– (Micro-interactions & Gamification)
   - æä¾›è‰¯å¥½çš„æ“ä½œåé¦ˆï¼ˆå¦‚æ‚¬åœæ—¶çš„å¹³æ»‘ç¼©æ”¾ `transform: scale(1.02)`ï¼Œä»¥åŠå¹³æ»‘è¿‡æ¸¡ `transition: all 0.3s ease`ï¼‰ã€‚
   - é€‚æ—¶åœ¨ç”¨æˆ·ä¸»æµç¨‹ä¸­åµŒå…¥è¯¸å¦‚â€œè¿žç»­ä¸‹å•æŒ‘æˆ˜è¿›åº¦â€ã€â€œç§¯åˆ†/ä¼˜æƒ åˆ¸å…‘æ¢åŒºâ€ç­‰èƒ½å¤Ÿå¸¦æ¥æƒŠå–œæ„Ÿçš„UIæ¿å—ï¼Œæ‰“ç ´ä¼ ç»Ÿå·¥å…·ç±»APPçš„æž¯ç‡¥æ„Ÿã€‚


---
---
name: jin-hong-design-protocols
description: "Jin Hong M&E: Premium Corporate Design Protocol (V4)"
triggers: ["jin hong design protocols", "jin_hong_design_protocols", "hong premium corporate"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: jin_hong_design_protocols
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# Jin Hong M&E: Premium Corporate Design Protocol (V4)

Standard for Industrial High-Tech Precision Interfaces

## 1. Structural Standards (The "Modern Density" Protocol)

- 4-Column Grid Layout: Force `col-lg-3` for primary showcases (Services, Features) to ensure the interface feels "dense" and premium.
- Deep Detail Synchronization: Mandated sync of Header, Footer, and Scripts between Homepage and all interior pages (e.g., `project-details.html`).
- Main Session Wrapper: MANDATORY wrap of all mid-page content in `<div class="main-session">`.
- Layout Safety Rules:
  - `body`: Must have `padding: 0 !important;` to avoid top/bottom leaks.
  - `.footer-bottom`: Must have `padding-bottom: 30px;` (safety margin for floating elements).
  - `.main-session`: Handles the primary page-level bottom spacing (`60-90px`).

## 2. Aesthetic Evolution (Dark Tech Precision)

Avoid light foundations for high-tech industrial projects. Adhere to the "Dark + Gray + Blue" onyx palette:

1. Base Foundation: Deep Onyx (#0a0b10) for maximum contrast.
2. Surface Layer: Slate Slate (#14161f) for mid-ground elements.
3. Glassmorphism: MANDATORY Use of `.glass-panel` (backdrop-filter: blur(20px)) for all floating cards and menus.
4. Accent Glow: Electric Blue (HSL 217, 100%, 61%) used sparingly for icons, shadows, and navigation underlines.
5. Pattern Overlays: Apply low-opacity `linear-gradient` grids or masks to dark backgrounds to create "blueprint" texture.

## 3. UI Conversion Library & Animations

- Master Button Protocol: maintain `.btn-v3-` classes: Primary, Vibrant, Glass, Cyber, Soft, Outline, White, and Ghost.
- Trust Ribbon Strategy: Floating ribbon (20+ Years / 800+ Workers) immediately below Hero.
- Micro-Animations:
  - Staggered reveal delays (`.delay-1` to `.delay-4`) for grid items.
  - Floating vertical animations for high-impact trust numbers.

## 4. Engineering Standards (Conversion & Stability)

- Dark Theme Priority: All subpages must resolve to a unified dark theme; white background div-boxes are strictly prohibited in V4.
- WA Direct Hooks: All conversion buttons hook into `wa.me/` for immediate 1-to-1 industrial client response.
- Relative Path Migration: assets must be local (`images/certs/`) to ensure reliability.

## 5. Theme Visibility & Consistency Rules [NEW]

- Prohibited Contrasts: Pure white (`#fff`) or light grey (`#f8f9fa`) container backgrounds are strictly prohibited when the overall site theme is Dark/Onyx.
- Inner Div Policy: All internal session divs, cards, and modal boxes must use `var(--color-surface-base)`, `var(--color-surface-muted)`, or `.glass-panel`.
- Reasoning: To maintain the "Industrial High-Tech" visual integrity and avoid jarring visual spikes in dark mode environments.
- Save Priority: This rule is now a core part of the Jin Hong Design setting and must be enforced in all future layout expansions.

## 6. Master Tier Design Solutions (Awesome Skills Integration)

### 6.1 Micro-interactions (Design Spells)

- The "Wow" Factor: DO NOT settle for default Bootstrap/Tailwind behaviors. Use magnetic hover effects, physics-based scroll reveals, and fluid transitions to make the site feel "expensive."
- Execution: Apply `transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1)` as a baseline for premium motion.

### 6.2 Figma-Driven Accuracy

- Token Extraction: When a Figma URL is provided, prioritize extracting design tokens (colors, font-weights, spacing) via `figma-automation` to ensure 100% brand fidelity.
- Component Parity: Mirror Figma component hierarchies directly in the CSS architecture.

### 6.3 Rigorous Visual Validation

- Reverse Validation: Before claiming a UI task is done, actively look for visual flaws (misalignments, contrast issues, responsive breakage) as defined in `ui-visual-validator`.
- Objective Checklist: Verify every project against WCAG 2.1 contrast standards and pixel-perfect spacing before delivery.

## 7. Cross-Project Consistency (Memory Powered)

### 7.1 Historical Retrieval

- Pre-Flight Search: Before initializing a new page or component, the agent MUST query `agent-memory` for any previously successful patterns, specific color preferences (like the Dark/Onyx priority), or conversion hooks used in other industrial projects.
- Thinking Wider: Use historical data to avoid repeating mistakes and to evolve the design system across multiple separate workspaces.

## 8. Japanese Precision Integration (V5 Upgrade)

Integrating the Japanese Design Standard to achieve 100/100 visual and functional score:

### 8.1 Advanced Typography & "Ma" (Negative Space)

- Breathing Room: Implement a minimum `line-height: 1.75` for all description text and `letter-spacing: 0.02em` for headings.
- Intentional Whitespace: Between complex technical sections, introduce a `120px - 150px` vertical gap to prevent cognitive overloadâ€”this is the Japanese "Ma" (é—´) applied to industrial data.

### 8.2 Visual Signage Logic (Inspired by NAVITIME/Mercari)

- Status Badges: Use high-contrast, bold-background badges for "Status" or "Safety Certs" that mimic Japanese infrastructure signage (High legibility, sharp corners within a rounded container).
- Navigation Clarity: Every section must have a clear "Breadcrumb or Progress Anchor" to tell the user exactly where they are in the "Industrial Journey."

### 8.3 "Soft-Touch" Engineering (Hybrid Aesthetics)

- Refined Rounding: Standardize `border-radius: 16px` for all glass panels and `8px` for buttons. This creates a "precision gadget" feel rather than a "heavy iron" feel.
- Micro-Shadows: Use multi-layered, ultra-soft shadows (`box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 10px 15px rgba(0,0,0,0.1)`) to lift cards off the Onyx background without looking "dirty."

### 8.4 Contextual Intelligence (UX)

- Service Cross-Linking: On service-specific pages, automatically inject a "Smart Link" to a complementary service (e.g., Fire Protection â†’ Electrical) to mimic the Japanese "Demand Pre-judgment" logic.

---

Verified Status: V5 Upgrade (Japanese Precision) Integrated and Active.


---
---
name: zeta-branding-authority-dna
description: "ZETA Branding Authority DNA"
triggers: ["zeta branding authority dna", "zeta_branding_authority_dna", "zeta branding authority"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: zeta_branding_authority_dna
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# ZETA Branding Authority DNA

DNA Version: 5.3.0 (Cinematic Harden // Power AI)
Last Synced: 2026-04-10
Status: MASTERPROTOCOLENFORCED

---

## 0. Tier 1: Master Architecture Protocols [ABSOLUTE]

1.  Web Standards (Vanilla-First): All website projects MUST be built as standalone `.html` (Vanilla HTML/CSS/JS) files. NO VUE for standard websites.
2.  Multi-Page Architecture: High-end websites MUST provide depth through distinct pages: `index.html`, `about.html`, `services.html`, `portfolio.html`, `contact.html`.
3.  Hero Impact: lead with a `100vh` fullscreen element. In V5.3+, this must be a Cinematic Video Background with high-density overlays.
4.  Mobile Navigation: Responsive headers MUST implement a Popup Menu Slider (Off-canvas) for an app-like feel.
57.  Footer Synchronization: Every page within a website ecosystem MUST share a 100% Identical Footer (synchronized content, registration, and addresses).
8.  Self-Healing Deployment (Rule 3.9): `.htaccess` MUST include SPA fallbacks (`RewriteRule . /index.html [L]`) and "access plus 1 month" caching logic for assets.

---

## 1. ZETA V3: Power AI Protocol (Design Tokens)

The V3 protocol shifts from generic colors to a specific, high-contrast HSL-driven palette.

- Primary Color: `#a855f7` (Electric Purple)
- Background: `hsl(260 87% 3%)` (Deep Space Onyx)
- Typography Matrix:
    - Headers: `Orbitron` & `General Sans` (Industrial Precision).
    - Body: `Geist Sans` & `Plus Jakarta Sans` (Digital Modernity).
- Motion Curve: `0.8s cubic-bezier(0.2, 0, 0.2, 1)` (V3 Synergy Curve).

---

## 2. ZETA V5.3: Cinematic Harden Protocol

Standard for top-tier digital experiences requiring "Wow" factor.

### I. Atmospheric Layering
- Video Hero: `hero-bg.mp4` at 40% opacity + saturation boost.
- Galactic Cosmos: Vanilla JS procedural star generation (fallback/accent layer).
- Glow Pulse: Radial gradients with `@keyframes bg-pulse-v5` for breathing depth.

### II. Liquid Glass Material Utility
Sophisticated transparency engine for cards and panels.
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
}
/* Border-gradient mask logic for technical precision */
```

### III. Interaction Logic (Sticky Sync)
- Showcase: Binding scroll progress to UI state (e.g., sticky phone screen updates).
- Scrambled Text: Lucide-driven icon creation + GSAP-driven character scrambling on hover.

---

## 3. Section-by-Section DNA

| Section | Logic | High-Fidelity Implementation |
| :--- | :--- | :--- |
| Nav (V15) | Hyper-Glass Navbar | Fixed, 56px, backdrop-blur(20px), status pulse. |
| Hero (V3) | Scrollytelling Reveal | `reveal-trigger` for canvas or video-mask deconstruction. |
| Matrix (V5) | Intelligence Ecosystem | 3-column grid, desaturated icons, hover-glow. |
| Timeline | Release Log | Industrial vertical border with pulse indicators. |
| Footer (V5.2) | High-Density Navigation | Industrial Master layout with corporate registration. |

---

## 3. Section-by-Section DNA [EXPANDED]

| Section Type      | DNA Fragment                       | Requirement                                                                 |
| ----------------- | ---------------------------------- | --------------------------------------------------------------------------- |
| Hero (Subpage)| `hero-subpage-wave`                | Atmospheric star layers + meteors + monochromatic mono-tags.                |
| Marquee       | `outline-marquee-v5.3`             | Transparent outlined text + rapid linear animation for "Industrial Speed".   |
| Pricing       | `pricing-grid-tiered`              | 3-tier flex grid + Featured Card highlighted with Primary Glow.             |
| Workflow      | `workflow-lifecycle-grid`          | 6-step lifecycle cards + "Day X" timeline badges.                           |
| Values        | `values-matrix-grid`               | 2-column core values grid + Lucide utility icons.                          |
| Form          | `contact-form-glass`               | High-density glassmorphism card + Large primary submit button.              |
| Portfolio     | `gallery-grid-hover`               | Image overlay with "Visit Circle" transition on hover.                      |

## 4. Interaction Protocols (Logic DNA) [NEW]

- Cinematic Sync (V1.2): `ScrollTrigger` MUST synchronize with smooth scrolling (Lenis) to manage sticky frame image swaps.
- Galactic Cosmos (V1.5): Procedural generation of 50+ stars (`dynamic-star`) with randomized `star-twinkle` and `meteor-fly` CSS animations.
- Form Life-Cycle: Use GSAP to toggle between form entry and success states (`formSuccess.style.display = "flex"`) with `scale` and `opacity` transitions.

## 5. Engineering breakthroughs: Ghost Protocol [NEW]

- Context Optimization (V1.0): Delta-scanning logic that parses modified files in a specific time-window (e.g., 24h) to feed code snippets into the AI context window.
- Automation V16: 13-step automation framework for rapid multi-page deployment.
- Rule 3.9 Hardening: Server-side routing integrity to prevent 404s on refresh for SPA-lite designs.

---

Status: CRYSTALLIZED // CINEMATICHARDENV5.3
Engine: Power AI V3 / Antigravity V16.2



