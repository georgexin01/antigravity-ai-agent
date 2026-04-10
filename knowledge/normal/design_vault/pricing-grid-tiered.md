# Design Snippet: Tiered Pricing Grid

> **Type**: PRICING_SECTION
> **DNA**: TRUST_ARCHITECTURE
> **Context**: Commercial conversion and transparent pricing.

## 🎨 VISUAL STRUCTURE
Uses a flex-grid with a `.featured` class for high-impact plans.

```html
<div class="flex-pricing-grid">
  <!-- Standard Tier -->
  <div class="pricing-card">
    <div class="pricing-header">
      <h3>[TIER_NAME]</h3>
      <div class="price">RM <span>[VALUE]</span>++</div>
    </div>
    <ul class="pricing-features">
      <li><i data-lucide="check"></i> Feature 01</li>
      <li><i data-lucide="check"></i> Feature 02</li>
    </ul>
    <a href="#" class="btn btn-primary">咨询</a>
  </div>

  <!-- Featured Tier -->
  <div class="pricing-card featured">
    <span class="pricing-badge">旗舰方案</span>
    <!-- ... same structure ... -->
  </div>
</div>
```

## 🛠️ CSS TOKENS
- **Glassmorphism**: `rgba(255, 255, 255, 0.02)` background.
- **Featured Glow**: `border: 1px solid var(--color-primary)` + inner shadow.
- **Badge**: Monospace, upper-case, font-size `10px`.

---
_ZETA Design Vault — Pricing Grid Pattern_
