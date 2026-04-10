# Design Snippet: Workflow Lifecycle Grid

> **Type**: PROCESS_SECTION
> **DNA**: INDUSTRIAL_VELOCITY
> **Context**: Highlighting service speed and professionalism.

## 🎨 VISUAL STRUCTURE
Grid of glass cards with step indicators.

```html
<div class="workflow-grid">
  <div class="workflow-card glass-panel" data-aos="fade-up">
    <div class="workflow-header">
      <div class="workflow-icon"><i data-lucide="[ICON]"></i></div>
      <span class="workflow-step">第 [NUMBER] 天</span>
    </div>
    <h3>[PHASE_TITLE]</h3>
    <p>[PHASE_DESCRIPTION]</p>
  </div>
</div>
```

## 🛠️ CSS TOKENS
- **Step Badge**: `var(--color-primary)` text, `var(--font-mono)` typography.
- **Card Padding**: Relaxed `40px` for readability.
- **AOS Stagger**: `data-aos-delay="[100 * i]"`.

---
_ZETA Design Vault — Workflow Pattern_
