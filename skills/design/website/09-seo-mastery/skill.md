---
name: 09-seo-mastery
description: "SEO & Meta Hardening: Optimizing the page for search engine visibility. Descriptive titles, meta tags, and structured data injection."
step: 9
version: 1.0
---

# 🔍 [09] SEO Mastery — The Search Catalyst

## 🎯 Objective
To ensure the premium design is discoverable. We harden the metadata and semantic structure to rank higher on search engines and social media previews.

## 📖 The Protocol
1.  **Meta Tag Injection**:
    - Define unique `<title>` for every page (e.g., `[PAGE] - Carnews Marketplace`).
    - Craft compelling `<meta name="description">` (150-160 chars).
    - Add Open Graph (`og:`) tags for Facebook/WhatsApp sharing.
2.  **Schema.org Structured Data**:
    - Inject JSON-LD for "Products" (Cars) and "Organization".
    - This creates "Rich Snippets" (Stars, Price, Availability) in Google results.
3.  **Semantic Hierarchy Audit**:
    - Verify `<h1>` to `<h6>` order.
    - Check for missing `alt` attributes on images.
4.  **URL Friendliness**:
    - Ensure routes are clean and descriptive (e.g., `/car/honda-civic-2023`).

## 📦 Code Vault: SEO Metadata Snippets

```html
<head>
    <title>Sell My Car Fast | Carnews Marketplace Malaysia</title>
    <meta name="description" content="Get the highest price for your car in Malaysia. 175-point inspection, fast approval, and 100% secure process. List your car for free today!">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Sell My Car Fast | Carnews">
    <meta property="og:image" content="/images/og-selling.jpg">
    
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Used Honda Civic 2023",
      "image": "https://carnews.com/images/car.jpg",
      "description": "Premium condition Honda Civic RS...",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "MYR",
        "price": "92800"
      }
    }
    </script>
</head>
```

## 🛠️ Validation Checklist
- [ ] Is the title tag unique and keyword-rich?
- [ ] Does the meta description have a call-to-action (CTA)?
- [ ] Are social preview tags (`og:`) included?
- [ ] Is JSON-LD present for product pages?

---
*Premium Design Node 09 — SEO Mastery*
