# Extraction: Old Project UI Patterns (Volatile Knowledge)

**Usage Count:** `1/10` (Subject to auto-removal if unused/unhelpful or auto-upgrade if critical).

## Extracted UI/UX Patterns (HTML/CSS/JS Focus)

Based on an analysis of the user's past 8 projects (e.g., choonsenghardware, jbtransport), these are the core UI expectations and structural components that **MUST** be implemented in future websites:

### 1. Mandatory Functional UI Components

- **Floating WhatsApp Button**: Almost all live sites feature a floating CTA in the bottom right corner.
  - _Standard CSS:_ `.float { position: fixed; width: 50px; height: 50px; bottom: 85px; right: 22px; background-color: #25d366; color: #FFF; border-radius: 50px; text-align: center; font-size: 30px; z-index: 100; }`
- **Sticky / Double Headers**: The header always features a top bar (for search/user/cart) and a secondary sticky navigation bar (`header_height-90_1 header-sticky`).
- **Breadcrumb Banners**: Multi-page sites must use large, image-backed breadcrumb hero banners (`.breadcrumb-area`) for interior pages.

### 2. Layout Mechanics & Color Synergies

- **Grid Systems**: Strong reliance on standard Bootstrap grids (`col-lg-`, `col-md-`) interwoven with custom flexbox containers (`display: flex; flex-wrap: wrap; justify-content: center;`).
- **Section Titles**: Custom centered section titles with bottom borders:
  - _Example Pattern:_ `.section-title--center1::after { position: absolute; content: ""; left: 50%; bottom: 0; background: #1200FF; height: 4px; width: 70px; transform: translateX(-50%); margin-bottom: 30px; }`
- **Theme Colors**: Strong reliance on bold accent colors (like `#1200FF` or `#fa2964`) against `#F4F5F7` grey backgrounds for maximum readability and modern aesthetics.
- **Footer Styling**: Footer sections typically utilize a `#F4F5F7` background with deeply contrasting text elements and nested social links (`ul.list.footer-social-networks`).

### 3. Frontend Libraries & JS Tooling

- **Sliders & Carousels**: Heavy utilization of `slick.js` and `owl.carousel` for product and hero displays.
- **Image Zoom**: Implementation of `easyzoom` and `magnific-popup` for product galleries.
- **Alerts**: Standardized use of `SweetAlert2` (`swal2`) instead of native browser alerts, specifically customized with box-shadows and dark text.
