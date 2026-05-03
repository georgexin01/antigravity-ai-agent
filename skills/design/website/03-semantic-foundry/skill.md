---
name: 03-semantic-foundry
description: "HTML5 Semantic Scaffolding: Building the structural backbone of the page with focus on SEO, accessibility, and clean grouping."
step: 3
version: 1.0
---

# 🏗️ [03] Semantic Foundry — The Structural Backbone

## 🎯 Objective
To build a clean, semantic HTML5 structure that Google "understands" and that provides a solid foundation for CSS layering. No `div`-soup; we use meaningful tags.

## 📖 The Protocol
1.  **Semantic Layout Mapping**:
    - Use `<header>` for the navigation/logo area.
    - Use `<main>` as the primary container for unique page content.
    - Use `<section>` for logical content blocks (Hero, Features, Inventory).
    - Use `<footer>` for bottom navigation and legal.
2.  **ID & Class Naming Convention**:
    - Use unique, descriptive IDs for interaction targets (e.g., `#main-search-form`).
    - Use component-based classes (e.g., `.premium-card`, `.tactile-input`).
3.  **Accessibility (A11y)**:
    - Ensure `alt` tags are present (even if empty `""` for decorative images).
    - Use `aria-label` for icon-only buttons.
4.  **SEO Hierarchy**:
    - Exactly one `<h1>` per page.
    - Proper heading levels (`<h2>`, `<h3>`) in chronological order.

## 📦 Code Vault: The Sovereign Scaffold

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('lib/htmlHead.php'); ?>
</head>
<body class="body header-fixed">
    <?php include('lib/header.php'); ?>
    
    <main id="main-content" class="clearfix">
        <!-- Hero Section -->
        <section id="hero-portal" class="tf-section">
            <div class="container">
                <!-- Content Here -->
            </div>
        </section>

        <!-- Main Feature Section -->
        <section id="feature-grid" class="tf-section bg-light">
            <div class="container">
                <!-- Content Here -->
            </div>
        </section>
    </main>

    <?php include('lib/footer.php'); ?>
    <?php include('lib/htmlFoot.php'); ?>
</body>
</html>
```

## 🛠️ Validation Checklist
- [ ] Is there only one `<h1>`?
- [ ] Are `<main>`, `<section>`, and `<article>` used correctly?
- [ ] Are all interactive elements given unique IDs?
- [ ] Is the viewport properly configured in `htmlHead.php`?

---
*Premium Design Node 03 — Semantic Foundry*
