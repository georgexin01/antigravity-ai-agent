# Design Snippet: Outline Marquee (V5.3)

> **Type**: UTILITY_SECTION
> **DNA**: HIGH_DENSITY_BRANDING
> **Context**: Section separation and corporate velocity.

## 🎨 VISUAL STRUCTURE
Uses `-webkit-text-stroke` to create a transparent hollow effect.

```html
<div class="outline-marquee">
  <div class="marquee-content">
    <span class="marquee-text">ZETA CAPITAL · SMART APPLICATIONS · DIGITAL FUTURE · BEYOND LIMITS · </span>
    <span class="marquee-text">ZETA CAPITAL · SMART APPLICATIONS · DIGITAL FUTURE · BEYOND LIMITS · </span>
  </div>
</div>
```

## 🛠️ CSS TOKENS
- **Stroke**: `1px rgba(255, 255, 255, 0.1)`.
- **Text Color**: `transparent`.
- **Animation**: `linear infinite marquee 60s`.
- **Letter Spacing**: `0.1em`.

---
_ZETA Design Vault — Outline Marquee Pattern_
