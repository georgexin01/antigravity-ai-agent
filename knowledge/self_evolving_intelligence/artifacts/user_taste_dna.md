# User Taste DNA — Quick Profile (Read First, Every Session)

> **Purpose**: 50-token summary of user's design taste. AI reads this BEFORE any design decision.
> **Rule**: This file is TINY on purpose. Load it in full every session. No selective reading.
> **Updated**: 2026-03-19

---

## LOVES (Score +12 when AI applies these)

- Dark gradient backgrounds (from-primary-600 via-700 to-900) with ambient white/5 circles
- Glassmorphism (bg-white/10 backdrop-blur-xl border-white/20)
- Status-colored gradient cards (different gradient per status — amber, green, blue, purple)
- Bold typography (font-black, tracking-tight, uppercase labels with tracking-widest)
- Premium shadows (shadow-premium, shadow-float, shadow-2xl)
- Generous rounded corners (rounded-[28px], rounded-[32px], rounded-[40px])
- Color-coded badges (small pills with bg-color/50 + text-color + border)
- White card sections below gradient headers (-mt-6 overlap effect)
- Glassmorphism icon badges (w-10 h-10 bg-white/10 backdrop-blur-md rounded-2xl)
- Red brand accent (#8B1A1A) used sparingly for prices and CTAs
- Clean mobile-first 540px layouts
- Chinese UI with English uppercase tracking-widest labels

## HATES (Score -20 if AI uses these — AVOID ALWAYS)

- Light gray text on white background (text-gray-300 on bg-white = invisible)
- Flat boring cards with no visual depth (just border, no gradient or shadow)
- Default Bootstrap/Tailwind look (generic, template-feeling)
- Emoji as UI icons (use SVG/Lucide only)
- Mixed languages in same UI element
- Too much whitespace with no content (empty pages)
- Hash URLs (/#/login) — always clean URLs (/login)
- Asking permission before doing things
- Over-explaining instead of just doing
- Skeleton/placeholder pages (build complete or don't build)

## STYLE FINGERPRINT

```
Premium Mobile App = dark gradient header + white content cards + colored badges + glassmorphism touches
Premium Website = full dark theme + GSAP animations + Lenis scroll + dramatic whitespace
```

## QUICK DECISION TABLE

| Situation | User Prefers |
|---|---|
| Card background | White with shadow-premium, NOT flat gray |
| Header/banner | Dark gradient with ambient circles, NOT solid color |
| Status indicator | Colored gradient card, NOT just a text label |
| Button style | Rounded-xl with shadow + active:scale-[0.97] |
| Empty state | Big icon + dark heading + muted subtitle + CTA button |
| Modal | Teleport to body, bg-black/60 backdrop-blur, rounded-[32px] card |
| Navigation | Bottom tab nav (app), fullscreen dark modal (website) |
| Typography | Plus Jakarta Sans + Noto Sans SC, font-black for headings |
| Price display | Brand color + font-black + RM prefix |
| Icons | Lucide (stroke, not filled), 18-20px in UI, 48px in empty states |
