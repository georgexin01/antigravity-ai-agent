---
archive_type: "blueprint-seed"
project_type: "project"
stack: ["PHP 8", "Bootstrap 5", "jQuery", "Owl Carousel", "Supabase REST", "Apache htaccess"]
pattern: "agent-portfolio-uuid-gated"
tags: ["portfolio", "personal-page", "uuid-routing", "php", "supabase", "bootstrap", "dynamic-profile"]
best_for: "Agent portfolio site / personal landing page / UUID-gated profile page / lead capture"
origin_project: "website-LAA-agent (quizLAA ecosystem)"
archived_date: "2026-04-29"
isolation_firewall: "applied — all business data stripped"
---

# 🛡️ BLUEPRINT SEED — PHP Agent Portfolio Website

> **How to use**: Clone this file → fill in `[placeholder]` values for new project → run shallow scan → ask user for deep scan if needed.

---

## 🏢 COMPANY
- **Company Name**: [placeholder]
- **Tagline**: [placeholder]
- **Address**: [placeholder]
- **Phone / WhatsApp**: [placeholder]
- **Email**: [placeholder]
- **Social Links**: [placeholder]

---

## 🎯 TARGET AUDIENCE
- **Primary Users**: [e.g. Clients visiting an agent's personal page]
- **Access Model**: Public — **gated by UUID** (no UUID = 404)
- **Device**: Mobile + Desktop responsive
- **Language**: [placeholder — English / Bilingual / etc.]

---

## 📌 PROJECT OVERVIEW
- **Folder**: `[project-folder]/`
- **Type**: Dynamic Profile/Portfolio Website (PHP)
- **Framework**: Sovereign PHP (custom REST + Supabase cURL client)
- **Purpose**: [placeholder — each entity gets a personalized landing page, gated by UUID]
- **Dev URL**: http://localhost:[PORT]
- **Dev Command**: `php -S localhost:[PORT] -t . _server.php`
- **Production**: Apache with `.htaccess` mod_rewrite

---

## 🛠️ TOOLS USED
- **Language**: PHP 8.x
- **Routing**: `router.php` + Apache `.htaccess` — UUID-only resolution (no slug routing)
- **Dev Server**: `_server.php` (custom MIME router — fixes `.webmanifest`, `.woff2` 404s on PHP dev server)
- **UI**: Bootstrap + jQuery + Owl Carousel
- **Database**: Supabase REST API (via Sovereign PHP cURL client)
- **Storage**: Supabase Storage — bucket: `[bucket-name]`
- **Email**: PHP mail via `api/Config.php`
- **Deploy**: Apache (`.htaccess` handles routing)

---

## 🏗️ STRUCTURE MAP
```
[project-root]/
├── api/                    # Sovereign PHP Supabase REST client
│   ├── Config.php          # DB + email config (dev + production)
│   ├── core/               # SupabaseClient, SovereignQuery, SovereignStorage
│   ├── Controllers/        # Business logic
│   ├── Models/
│   │   └── [Entity]Model.php  # normalizeImg() for Storage URL conversion
│   └── Lib/                # Utilities
├── lib/                    # Shared PHP includes
│   ├── htmlHead.php        # <head> + meta
│   ├── header.php          # Nav (conditionally hides sections if data empty)
│   ├── footer.php          # Footer
│   ├── sendLead.php        # Lead notification email
│   └── sendReview.php      # Review notification email
├── home.php                # Main profile page (all sections)
├── review.php              # Review submission
├── router.php              # URL router (UUID-based)
├── index.php               # Entry point
├── _server.php             # PHP dev-only MIME router (MANDATORY)
├── 404.php                 # Shown when UUID missing/invalid
└── .htaccess               # Production Apache rewrite rules
```

---

## 🎨 DESIGN SYSTEM
- **Style**: Professional, trust-building personal profile
- **Primary Color**: [placeholder — brand color]
- **Font**: [placeholder — Bootstrap default or Google Fonts]
- **Hero**: Profile photo (full-width) + name + title overlay
- **Carousel**: Owl Carousel for testimonials/reviews (with `< >` nav arrows)
- **Gallery**: Dynamic photo grid from DB JSONB `[{photo, title, year, caption}]`
- **Conditional Sections**: Auto-hide entire sections (videos, awards) when DB array is empty
- **Lightbox**: Custom JS modal reading `window._galleryItems` server-populated array

---

## ⚙️ FUNCTION REGISTRY (Patterns — Adapt for New Project)

| Feature | Pattern | Notes |
|---|---|---|
| UUID-gated routing | `router.php` + `.htaccess` | `?id=UUID` or `/profile/UUID` → load entity data |
| Entity data model | `api/Models/[Entity]Model.php` | `normalizeImg()` converts bare Storage paths to full URLs |
| Dynamic nav hiding | `lib/header.php` | Hide nav items when corresponding data array is empty |
| Owl Carousel reviews | `home.php #reviews` | Sorted newest-first; View More modal when count > threshold |
| Empty state UI | `home.php` | Dashed border card + icon + CTA link to contact form |
| Lead form | `home.php #contact` | Email notification via `sendLead.php` |
| Review form | `review.php` | Public review submission |
| Awards/gallery | `home.php #gallery` | Dynamic foreach over JSONB `[{photo,title,year,caption}]` |
| Video section | `home.php #videos` | Auto-hidden if video array empty; YouTube embed |
| PHP dev MIME fix | `_server.php` | MANDATORY — prevents jQuery/CSS/manifest 404s |
| Email config | `api/Config.php` | Dev + production SMTP/mail config |

---

## 💡 IDEAS BACKLOG
*(empty — fill for new project)*

---

## 🔗 CROSS-PROJECT RELATIONSHIPS
- **Data source**: [e.g. Admin panel creates/manages entity records — this project reads them]
- **Storage**: [e.g. Supabase Storage bucket `[name]` — photos uploaded via admin, served here]

---

## 📝 CHANGE LOG
*(empty — new project)*

---

## ✅ OPEN TASKS
*(empty — new project)*

---

## 🧬 BLUEPRINT META
- **Blueprint Type**: Project
- **Template Version**: V3.0
- **Stack Pattern**: PHP + Bootstrap + Supabase REST + UUID routing
- **Clone Seed**: Yes — strip `[placeholder]` values and fill for new project
