# i18n Multilingual Mastery (Vue 3 + vue-i18n)

> **SOURCE**: Extracted from Four Win Travel App (2026-03). Complete patterns for adding multi-language support to any Vue 3 app.
> **Includes**: Bilingual Semantic Protocol (merged from bilingual_semantic_protocol.md)
> **V13 Upgraded**: 2026-03-27

---

## WHEN TO USE THIS FILE

```
Trigger:    task_type = APP, AND project needs multi-language support
            User says: "add i18n", "multi-language", "translate", "bilingual"
Pre-check:  Vue 3 project exists with router + views
Depends:    unified_app_blueprint.md (app structure must exist first)
Next:       → must_do_master_rules.md Phase 2 Rule 2.4 (language consistency)
```

---

## 0. Bilingual Intent Detection (EN/CN Mixed Input)

User communicates in "Fluid Bilingual Pattern" (Mixed English + 简体中文). AI MUST:

- **Shorthand Expansion**: "方程式" → AI Design Logic / Technical Blueprints
- **Semantic Search Mirroring**: Search English term → also search Chinese equivalent, and vice versa
- **Intent Mapping**:
  - "重做/Redo" = HIGH-PRIORITY rejection (full redo)
  - "一点/Abit" = Minor tweak only (NOT full redo)
  - "方程式" = AI agent knowledge / implementation blueprints
- **Response Protocol**: Respect mixed-language style. Use whichever language best describes the technical requirement.

---

## 1. Setup Recipe (5 Minutes)

```bash
npm install vue-i18n@10
```

### 1.1 Plugin Config (`src/i18n/index.js`)
```js
import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'
import ms from './ms'

const savedLocale = localStorage.getItem('locale') || 'en'

const i18n = createI18n({
  legacy: false,          // MUST be false for Composition API
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: { en, zh, ms },
})

export default i18n
```

### 1.2 Register in `main.js`
```js
import i18n from './i18n'
app.use(i18n)
```

### 1.3 File Structure
```
src/i18n/
├── index.js    # Plugin config + localStorage persistence
├── en.js       # English (fallback)
├── zh.js       # 简体中文
└── ms.js       # Bahasa Melayu
```

---

## 2. Translation Key Architecture

### 2.1 Domain-Based Organization
```js
export default {
  nav: { home, tours, referral, profile },
  header: { tourPackages, selectLanguage, cancel },
  home: { promoTitle, promoDesc, contactUs, featuredTours, viewAll },
  tours: { noTours, category: { all, hot, china, korea, japan, taiwan } },
  tour: { itinerary, includes, bookingNow, confirmBooking, day },
  auth: { welcomeBack, login, phoneNumber, sendCode, signUp },
  otp: { verification, enterCode, enterDigits, resendIn, resendCode },
  signup: { completeProfile, yourName, referralCode },
  profile: { myReferrals, earnings, tourPackages, logout },
  referral: { earnWhileTravel, directRate, indirectRate, howItWorks },
  toast: { loginSuccess, signupComplete, loggedOut, linkCopied },
  common: { copy, cancel, back, pax, close },
  whatsapp: { greeting },
  tourData: { /* per-product translations — see Section 3 */ },
}
```

### 2.2 Naming Conventions
| Pattern | Example | Usage |
|---|---|---|
| `domain.key` | `nav.home` | Simple labels |
| `domain.subKey` | `tours.category.china` | Nested groups |
| `domain.actionVerb` | `auth.sendCode` | Buttons |
| `domain.descriptor` | `home.promoTitle` | Section content |
| `tourData.{id}.field` | `tourData.xian.name` | Product data |

---

## 3. Product/Data Translation Pattern

### 3.1 Structure (Per Product)
```js
tourData: {
  xian: {
    name: "Xi'an",
    tagline: 'Ancient Capital of Thirteen Dynasties',
    description: 'Explore the ancient capital where the Silk Road began...',
    highlights: ['Big Wild Goose Pagoda', 'Bell & Drum Tower', 'Terracotta Warriors'],
    itinerary: [
      { title: 'Arrival', desc: 'Airport pickup, check-in to 5-star hotel' },
      { title: 'Terracotta Warriors', desc: 'Full day museum visit' },
    ],
    includes: ['5-star hotel', 'VIP airport transfer', 'Private guide'],
  },
  harbin: { /* ... */ },
}
```

### 3.2 Keep Structural Data in JS, Text in Locales
```
tours.js (data file):   id, price, duration, image, category, featured
en.js (locale file):    name, tagline, description, highlights[], itinerary[], includes[]
```

**Why**: Price, duration, images don't change per language. Text does.

### 3.3 Accessing Product Translations
```vue
<!-- Simple string -->
{{ $t(`tourData.${tour.id}.name`) }}

<!-- Array (highlights, includes) — use tm() -->
<li v-for="(h, i) in $tm(`tourData.${tour.id}.highlights`)" :key="i">{{ h }}</li>

<!-- Array of objects (itinerary) — use tm() -->
<div v-for="(day, idx) in $tm(`tourData.${tour.id}.itinerary`)" :key="idx">
  <h4>{{ $t('tour.day', { day: idx + 1 }) }} — {{ day.title }}</h4>
  <p>{{ day.desc }}</p>
</div>
```

### 3.4 Critical: `t()` vs `tm()`
| Function | Returns | Use For |
|---|---|---|
| `t('key')` | Resolved string | Simple text, interpolated strings |
| `tm('key')` | Raw message (array/object) | Arrays, nested objects |
| `$t('key')` | Template version of `t()` | Inside `<template>` |
| `$tm('key')` | Template version of `tm()` | Inside `<template>` |

---

## 4. Interpolation Patterns

### 4.1 Named Parameters
```js
// Locale: "Earn {direct}% direct + {indirect}% indirect commission"
$t('home.earnDesc', { direct: 3, indirect: 1 })

// Locale: "From RM {price}/pax"
$t('home.fromPax', { price: tour.price.toLocaleString() })

// Locale: "Day {day}"
$t('tour.day', { day: idx + 1 })
```

### 4.2 WhatsApp Message Translation
```js
const waLink = computed(() => {
  const msg = t('tour.waBooking', {
    consultant: COMPANY.consultant,
    tour: t(`tourData.${tour.id}.name`),
    duration: tour.duration,
    price: tour.price.toLocaleString(),
    name: currentUser.value?.name || '',
    phone: currentUser.value?.phone || '',
  })
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
})
```
**Rule**: Always `computed()` for links that depend on locale — they must update reactively.

---

## 5. Language Switcher Implementation

### 5.1 Switcher Component
```js
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ms', label: 'BM', flag: '🇲🇾' },
]

function selectLang(code) {
  locale.value = code
  localStorage.setItem('locale', code)
  showModal.value = false
}
```

### 5.2 Persistence Flow
```
App Load → read localStorage('locale') → set i18n locale
User Switch → set locale.value → save localStorage → all $t() auto-update
```

### 5.3 Reactive Computed Values
Any value derived from `t()` MUST be `computed()`:
```js
// CORRECT — reactive
const tabs = computed(() => [
  { label: t('nav.home'), path: '/' },
])

// WRONG — computed once, never updates
const tabs = [
  { label: t('nav.home'), path: '/' },
]
```

---

## 6. Category/Group Translation Pattern

### 6.1 Problem: Data Functions Return Keys, Not Translated Strings
```js
// tours.js — returns category IDs as group keys
export function getToursGrouped(category) {
  const list = getToursByCategory(category)
  if (category === 'all') {
    const groups = {}
    list.forEach(t => {
      groups[t.category] = groups[t.category] || []
      groups[t.category].push(t)
    })
    return groups
  }
  return { [category]: list }
}
```

### 6.2 Template: Translate the Key
```vue
<template v-for="(tourList, groupKey) in grouped" :key="groupKey">
  <h3>{{ $t(`tours.category.${groupKey}`) }}</h3>
</template>
```

**Rule**: Data layer returns IDs/keys. Presentation layer translates. Never mix.

---

## 7. Translation Checklist (Per Page)

- [ ] Import `useI18n` → `const { t } = useI18n()`
- [ ] Replace every hardcoded string with `$t('key')` or `t('key')`
- [ ] Toast messages: `success(t('toast.xxx'))`
- [ ] WhatsApp/external links: wrap in `computed()` with `t()`
- [ ] Form labels, placeholders, button text
- [ ] Empty states, error messages
- [ ] Modal titles, confirm/cancel buttons
- [ ] Meta page titles (if AppHeader reads route)

## 8. Common Pitfalls

1. **Variable shadowing**: Don't name local variables `t` (e.g., `const t = setInterval(...)`) — shadows i18n `t` function
2. **Non-reactive labels**: Always `computed()` for i18n-dependent arrays/objects
3. **Missing `legacy: false`**: Without this, Composition API `useI18n()` won't work
4. **Arrays in locales**: Use `tm()` not `t()` — `t()` stringifies arrays
5. **Forgetting fallback**: Always set `fallbackLocale: 'en'` — prevents missing key errors during development
6. **Toast in callbacks**: Ensure `t` is still in scope (not shadowed by local variable)

---

## 9. Regional Language Standards

### 9.1 Malaysia Context (3 Languages)
| Language | Code | Flag | Typical Users |
|---|---|---|---|
| English | `en` | 🇬🇧 | Default, international |
| 简体中文 | `zh` | 🇨🇳 | Chinese Malaysian community |
| Bahasa Melayu | `ms` | 🇲🇾 | Malay community |

### 9.2 Translation Quality Rules
- Chinese: Use 简体中文 (Simplified), not 繁體中文
- Malay: Use standard Bahasa Melayu, avoid slang
- Keep brand names untranslated (e.g., "Four Win Travel")
- Currency always "RM" (Malaysian Ringgit) regardless of language
- Phone format: +60 prefix always shown

---

## 10. VERIFICATION CHECKLIST

After adding i18n to a project:

```
- [ ] vue-i18n@10 installed, legacy: false set
- [ ] Locale files: en.js + zh.js (+ ms.js if needed)
- [ ] localStorage persistence: saved on switch, loaded on start
- [ ] Every hardcoded string replaced with $t('key')
- [ ] Toast messages use t('toast.xxx')
- [ ] WhatsApp links wrapped in computed() with t()
- [ ] Form labels, placeholders, buttons all translated
- [ ] Empty states, error messages translated
- [ ] Product data: structural in JS, text in locale files
- [ ] No mixed languages in same UI element
- [ ] Language switcher component with flag + label
```

### WRONG / CORRECT Examples

```javascript
// WRONG — non-reactive nav labels (computed once, never updates on language switch)
const tabs = [
  { label: t('nav.home'), path: '/' },
]

// CORRECT — reactive with computed()
const tabs = computed(() => [
  { label: t('nav.home'), path: '/' },
])
```

```javascript
// WRONG — t() for array data (stringifies the array)
const highlights = t('tourData.xian.highlights')

// CORRECT — tm() for arrays and objects
const highlights = tm('tourData.xian.highlights')
```

```javascript
// WRONG — legacy mode (breaks Composition API)
createI18n({ locale: 'en', messages })

// CORRECT — composition mode
createI18n({ legacy: false, locale: 'en', messages })
```

### Next Step
→ Test language switching in all pages
→ Verify computed() values update reactively
→ Run `must_do_master_rules.md` Phase 3

---

_i18n Mastery V1.1 — V13 Upgraded with trigger, verification, WRONG/CORRECT (2026-03-27)_
