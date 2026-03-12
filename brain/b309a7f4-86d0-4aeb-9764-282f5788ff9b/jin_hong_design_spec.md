# Jin Hong M&E - Design Specifications & Tokens

## 1. Brand Identity & Global Theme

- **Brand Name:** 锦鸿建筑 (JIN HONG M&E)
- **Positioning:** Professional, Reliable, High-Tech, B2B Engineering Contractor.
- **Visual Style:** Modern Corporate, Minimalist, Engineering / Industrial Feel.

## 2. Design Tokens (CSS Variables)

### 2.1 Color System (色彩体系)

```css
:root {
  /* Primary Colors - Business Blue */
  --color-primary: #0066cc; /* Main Brand Blue - Trust, Technology */
  --color-primary-hover: #0052a3; /* Interactive states */
  --color-primary-light: #e6f0fa; /* Background highlights */

  /* Neutral Colors - Industrial Gray */
  --color-gray-900: #1a1a1a; /* Main text */
  --color-gray-700: #333333; /* Secondary text, Subtitles */
  --color-gray-500: #666666; /* Muted text, borders */
  --color-gray-200: #e5e5e5; /* Dividers, card borders */
  --color-gray-50: #f8f9fa; /* Backgrounds, off-white areas */

  /* Semantic Colors */
  --color-success: #10b981; /* Success states, indicators */
  --color-warning: #f59e0b; /* Alerts, highlights */
  --color-error: #ef4444; /* Errors, important warnings */
  --color-white: #ffffff; /* Pure white */
}
```

### 2.2 Typography System (字体体系)

```css
:root {
  /* Font Families */
  --font-primary:
    "Inter", "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;

  /* Font Sizes */
  --text-xs: 0.75rem; /* 12px */
  --text-sm: 0.875rem; /* 14px */
  --text-base: 1rem; /* 16px - Body Text */
  --text-lg: 1.125rem; /* 18px */
  --text-xl: 1.25rem; /* 20px */
  --text-2xl: 1.5rem; /* 24px - Section Titles */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem; /* 36px - Hero Titles */

  /* Font Weights */
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### 2.3 Spacing & Layout (排版与间距)

```css
:root {
  /* Spacing Scale */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-12: 3rem; /* 48px - Section padding */
  --space-16: 4rem; /* 64px */

  /* Max Widths */
  --container-max-width: 1200px; /* Standard PC content width */
}
```

### 2.4 Elevation & Radii (阴影与圆角)

```css
:root {
  /* Border Radius */
  --radius-sm: 4px; /* Small inputs, tags */
  --radius-md: 8px; /* Cards, Buttons */
  --radius-lg: 12px; /* Large panels, modals */

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md:
    0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg:
    0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Hover states */
}
```

## 3. UI Component Blueprint (组件蓝图)

### 3.1 Header (Navigation)

- **Structure:** Left (Logo), Middle (Nav Links), Right (Phone/Contact Button).
- **Behavior:** Sticky top, light shadow (`--shadow-sm`) on scroll. White background. Active link uses `--color-primary`.

### 3.2 Feature/Project Cards

- **Border/Bg:** `--color-white` background, 1px solid `--color-gray-200`.
- **Radii:** `--radius-md`.
- **Hover:** Transform `translateY(-4px)` with `--shadow-lg` and smooth transition (`0.3s ease`).
- **Inner Padding:** `--space-4` or `--space-6`.

### 3.3 Buttons

- **Primary:** Background `--color-primary`, Text `--color-white`. Hover: `--color-primary-hover`.
- **Outline:** Border 1px solid `--color-primary`, Text `--color-primary`, Background transparent. Hover: Background `--color-primary-light`.
- **Padding:** `10px 24px` for medium buttons.
- **Radii:** `--radius-sm`.

### 3.4 Footer

- **Background:** `--color-gray-900` or `--color-primary`.
- **Text:** White/Light gray.
- **Structure:** Grid layout containing Logo/Slogan, Links, Contact Info.

## 4. Interaction Rules (交互规则)

1. **Transitions:** Use `transition: all 0.3s ease;` universally on interactive elements.
2. **Hover States:** Links turn primary blue, cards lift up with shadows, primary buttons darken.
3. **Responsiveness:** Use CSS Grid/Flexbox. Stack into single columns on screens `< 768px`.
4. **Accessibility:** Ensure high contrast for all text (WCAG AA).
