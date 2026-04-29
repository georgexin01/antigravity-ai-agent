---
archive_type: "blueprint-seed"
project_type: "project"
stack: ["PHP 8", "Bootstrap 5", "jQuery", "Owl Carousel", "Supabase REST", "Apache htaccess", "Trilingual i18n"]
pattern: "public-marketing-website"
tags: ["marketing", "public", "php", "bootstrap", "multilingual", "i18n", "supabase", "contact-form", "seo"]
best_for: "Public company homepage / marketing site / multilingual PHP website / no-login public portal"
origin_project: "website-LAA-website (quizLAA ecosystem)"
archived_date: "2026-04-29"
isolation_firewall: "applied — all business data stripped"
---

# 🛡️ BLUEPRINT SEED — PHP Public Marketing Website

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
- **Primary Users**: [e.g. General public, potential customers, partners]
- **Access Model**: Fully public — no login required
- **Device**: Desktop + Mobile responsive
- **Language**: [placeholder — e.g. Trilingual EN/CN/MS or single language]

---

## 📌 PROJECT OVERVIEW
- **Folder**: `[project-folder]/`
- **Type**: Public Marketing Website (PHP)
- **Framework**: Custom PHP lightweight router
- **Purpose**: [placeholder — public-facing company homepage]
- **Dev URL**: http://localhost:[PORT]
- **Dev Command**: `php -S localhost:[PORT] -t . _server.php`
- **Production**: Apache with `.htaccess` mod_rewrite

---

## 🛠️ TOOLS USED
- **Language**: PHP 8.x
- **Routing**: `router.php` + Apache `.htaccess`
- **Dev Server**: `_server.php` (custom MIME router — MANDATORY)
- **UI**: Bootstrap + jQuery + Owl Carousel
- **i18n**: Custom JS i18n from `lang/{en,cn,ms}.json` (`data-i18n` attributes)
- **Database**: Supabase REST API (optional — for dynamic content)
- **Email**: PHP mail via `api/Config.php` (contact form)
- **Deploy**: Apache (`.htaccess` handles routing)

---

## 🏗️ STRUCTURE MAP
```
[project-root]/
├── api/                  # Sovereign PHP Supabase REST client (optional)
│   ├── Config.php        # DB + email config
│   └── core/             # SupabaseClient, SovereignQuery, SovereignStorage
├── template/             # Page content files (included by router)
│   ├── home.php          # Homepage (hero/slideshow + feature sections)
│   ├── about.php         # About the company
│   ├── [services].php    # Services / products / courses
│   ├── [concept].php     # Philosophy / approach page
│   └── contact.php       # Contact form
├── lib/                  # Shared PHP includes
│   ├── htmlHead.php      # <head> + meta + i18n JS loader
│   ├── header.php        # Nav bar + top contact bar
│   └── footer.php        # Footer with address, social links
├── lang/
│   ├── en.json           # English translations
│   ├── cn.json           # Chinese translations (if multilingual)
│   └── ms.json           # Malay translations (if multilingual)
├── css/                  # Custom stylesheets
├── js/                   # Custom JS
├── images/               # Static image assets
├── router.php            # URL router
├── index.php             # Entry point
├── _server.php           # PHP dev-only MIME router (MANDATORY)
└── .htaccess             # Production Apache rewrite rules
```

---

## 🎨 DESIGN SYSTEM
- **Style**: Corporate / professional marketing
- **Primary Color**: [placeholder — brand color]
- **Background**: White / light gray alternating sections
- **Font**: [placeholder — Bootstrap default or Google Fonts]
- **Hero**: Owl Carousel slideshow (full-width with overlay text + CTA)
- **Cards**: Bootstrap cards with shadow for services/courses
- **Counters**: Animated number counters (JS-driven)
- **i18n**: `data-i18n` attributes on all text elements → translated from JSON

---

## ⚙️ FUNCTION REGISTRY (Patterns — Adapt for New Project)

| Feature | Pattern | Notes |
|---|---|---|
| Multilingual i18n | `lang/{en,cn,ms}.json` + `data-i18n` | JS loads translations on page load |
| Homepage slideshow | Owl Carousel in `template/home.php` | `_server.php` fixes MIME so carousel assets load |
| Contact form | `template/contact.php` | Email via `api/Config.php` mailer |
| Shared header/footer | `lib/header.php`, `lib/footer.php` | Included by `htmlHead.php` |
| URL routing | `router.php` | Maps `/about` → `template/about.php` etc. |
| PHP dev MIME fix | `_server.php` | MANDATORY — prevents jQuery/CSS/manifest 404s |
| Supabase REST | `api/core/` | Optional — for dynamic content from DB |

---

## 💡 IDEAS BACKLOG
*(empty — fill for new project)*

---

## 🔗 CROSS-PROJECT RELATIONSHIPS
*(empty — fill for new project)*

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
- **Stack Pattern**: PHP + Bootstrap + jQuery + i18n + Apache
- **Clone Seed**: Yes — strip `[placeholder]` values and fill for new project
