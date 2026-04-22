# Mobile Popup-Modal Sidebar from a Hamburger Button

**Date solved:** 2026-04-22
**Context:** `alexis` project, `template/rbz-download.php`. User had tried to build this pattern
several times in `.gemini/antigravity` and failed; this is the working recipe.

---

## 1. What the user asked for (their vocabulary)

> "rbz-download pages — when user click `.mobile-menu-toggle`, `.dashboard-sidebar` this will
> become a popup modal display showing to user."
>
> Follow-ups:
> - "are you sure i press the mobile-menu-toggle the dashboard-sidebar wont show or should
>   update the css to position absolute?"
> - "Uncaught ReferenceError: $ is not defined"
> - "add some fadein fadeout animation"

Translated requirements:
1. Below the `991px` breakpoint, the sidebar must stop being an inline panel and become
   a **centered popup modal** with a dimmed backdrop.
2. Desktop layout (sticky sidebar inside a flex wrapper) must stay untouched.
3. Works with vanilla JS — no jQuery on the page.
4. Fade-in / fade-out animation, not an instant show/hide.

---

## 2. Why earlier attempts failed (the three traps)

These are the traps that broke it for the user before. Every reusable implementation must
defend against all three.

### Trap A — `position: fixed` silently broken by an ancestor

If **any** ancestor has `transform`, `filter`, `perspective`, `will-change`, `contain`, or
`backdrop-filter`, that ancestor becomes the containing block for `position: fixed`
descendants. The modal then anchors to that ancestor instead of the viewport, often
rendering far offscreen or not at all.

Compiled CSS bundles (`main.*.css`) and libraries like AOS routinely introduce transforms
on ancestors. **You cannot rely on auditing the ancestor chain.**

> **Fix:** On open, detach the modal + backdrop and `appendChild` them to `<body>`.
> On close, return them to their original parents after the transition completes.

### Trap B — `$ is not defined`

Template sites from free HTML packs often **don't ship jQuery** in the final bundle, even
though the tutorial uses `$`. `alexis/assets/js/main.js` is a 15KB vanilla-JS IIFE.
Always check the actual bundle before writing `$(...)`.

> **Fix:** Write the modal script in vanilla JS. Guard any optional jQuery plugin calls
> (isotope, slick, etc.) behind `if (window.jQuery)`.

### Trap C — `display: none → block` kills the CSS transition

CSS transitions do not animate the `display` property. Switching from `display: none` to
`display: block` makes the browser skip the transition — the modal just pops in.

> **Fix:** Use `visibility: hidden` + `pointer-events: none` + `opacity: 0` for the
> closed state, and transition `opacity`, `transform`, and `visibility` (with a delay
> on close so `visibility` flips *after* the fade completes).

---

## 3. The working recipe

### 3.1 HTML — add a backdrop sibling

Place the backdrop as a sibling of the sidebar (or anywhere in the page — it will be
moved to `<body>` on open anyway).

```html
<div class="mobile-dashboard-nav mb-30">
    <div class="nav-label"><i class="icon_tag_alt"></i> MENU</div>
    <button class="mobile-menu-toggle" id="mobileDashToggle">
        <i class="icon_menu"></i>
    </button>
</div>

<!-- Backdrop lives outside .dashboard-wrapper -->
<div class="sidebar-backdrop" id="sidebarBackdrop"></div>

<div class="dashboard-wrapper">
    <aside class="dashboard-sidebar" id="dashboardSidebar">
        <!-- sidebar content: search, category filters, etc. -->
    </aside>
    <div class="dashboard-content"><!-- grid --></div>
</div>
```

### 3.2 CSS — mobile-only modal rules

Scoped inside `@media (max-width: 991px)` so desktop is unaffected.

```css
@media (max-width: 991px) {
    /* Keep display:block; use visibility+opacity so transitions work */
    .dashboard-sidebar {
        display: block !important;
        visibility: hidden;
        pointer-events: none;
        position: fixed !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -55%) scale(0.92) !important;
        width: calc(100% - 40px) !important;
        max-width: 440px !important;
        max-height: 85vh !important;
        overflow-y: auto !important;
        flex: none !important;
        z-index: 100001 !important;
        box-shadow: 0 25px 60px rgba(0,0,0,0.35) !important;
        background-color: var(--dashboard-surface) !important;
        border: 1px solid var(--dashboard-border) !important;
        border-radius: 16px !important;
        padding: 30px 25px !important;
        opacity: 0;
        transition:
            opacity 0.3s ease,
            transform 0.4s cubic-bezier(0.34, 1.5, 0.64, 1),
            visibility 0s linear 0.3s;
    }

    /* Extra safety when the sidebar has been detached to <body> */
    body > .dashboard-sidebar:not(.active) {
        visibility: hidden !important;
    }

    .dashboard-sidebar.active,
    body > .dashboard-sidebar.active {
        visibility: visible;
        pointer-events: auto;
        opacity: 1 !important;
        transform: translate(-50%, -50%) scale(1) !important;
        transition:
            opacity 0.3s ease,
            transform 0.4s cubic-bezier(0.34, 1.5, 0.64, 1),
            visibility 0s linear 0s;
    }

    .sidebar-backdrop {
        display: block !important;
        visibility: hidden;
        pointer-events: none;
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        background: rgba(0, 0, 0, 0.6) !important;
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
        z-index: 100000 !important;
        opacity: 0;
        transition:
            opacity 0.3s ease,
            visibility 0s linear 0.3s;
    }

    .sidebar-backdrop.active,
    body > .sidebar-backdrop.active {
        visibility: visible;
        pointer-events: auto;
        opacity: 1 !important;
        transition:
            opacity 0.3s ease,
            visibility 0s linear 0s;
    }

    body.sidebar-modal-open {
        overflow: hidden !important;
    }
}
```

Key CSS points:
- Every modal property uses `!important` to beat compiled bundle overrides.
- The `body > .modal.active` selector is an extra-specificity fallback for when the
  element has been moved under `<body>`.
- Starting transform is `translate(-50%, -55%) scale(0.92)` — the subtle upward drift
  and slight scale give a premium pop-in instead of a flat fade.
- `cubic-bezier(0.34, 1.5, 0.64, 1)` is a gentle overshoot spring.
- `visibility 0s linear 0.3s` on close keeps the element visible during the fade, then
  flips it to hidden exactly when the opacity transition finishes.

### 3.3 JS — vanilla, with the body-append trick

```html
<script>
(function () {
    function ready(fn) {
        if (document.readyState !== 'loading') fn();
        else document.addEventListener('DOMContentLoaded', fn);
    }

    ready(function () {
        var sidebar  = document.getElementById('dashboardSidebar');
        var backdrop = document.getElementById('sidebarBackdrop');
        var toggleBtn = document.getElementById('mobileDashToggle');
        if (!sidebar || !backdrop || !toggleBtn) return;

        var sidebarHome  = sidebar.parentNode;
        var backdropHome = backdrop.parentNode;
        var toggleIcon   = toggleBtn.querySelector('i');

        function openModal() {
            document.body.appendChild(sidebar);
            document.body.appendChild(backdrop);
            // Force reflow — commits the "closed" state before .active flips it,
            // so the browser actually runs the transition.
            void sidebar.offsetHeight;
            sidebar.classList.add('active');
            backdrop.classList.add('active');
            document.body.classList.add('sidebar-modal-open');
            if (toggleIcon) {
                toggleIcon.classList.add('icon_close');
                toggleIcon.classList.remove('icon_menu');
            }
        }

        function closeModal() {
            sidebar.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.classList.remove('sidebar-modal-open');
            if (toggleIcon) {
                toggleIcon.classList.add('icon_menu');
                toggleIcon.classList.remove('icon_close');
            }
            // Return to original parents AFTER the longest transition (400ms).
            setTimeout(function () {
                if (!sidebar.classList.contains('active')) {
                    sidebarHome.appendChild(sidebar);
                    backdropHome.appendChild(backdrop);
                }
            }, 420);
        }

        toggleBtn.addEventListener('click', function () {
            if (sidebar.classList.contains('active')) closeModal();
            else openModal();
        });

        backdrop.addEventListener('click', closeModal);

        // Close when any sidebar menu item is clicked (filters, links, etc.)
        sidebar.querySelectorAll('.sidebar-menu-item').forEach(function (btn) {
            btn.addEventListener('click', closeModal);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                closeModal();
            }
        });
    });
})();
</script>
```

Key JS points:
- `void sidebar.offsetHeight` **after** moving the element, **before** adding `.active`.
  Without this forced reflow the browser batches the append + class change and skips
  the transition.
- Close-timeout **must match or exceed** the longest CSS transition duration. We use
  420ms here because the transform is 400ms.
- The close check (`if (!sidebar.classList.contains('active'))`) guards against the
  user rapidly reopening during the fade-out — we don't want to move the element back
  home while it's being shown again.

---

## 4. Reusability checklist

When porting this pattern to another page or project:

- [ ] The sidebar has a unique `id` (for JS grabbing).
- [ ] A backdrop div with its own `id` is in the markup.
- [ ] The trigger button has an `id` and contains an `<i>` for the icon swap.
- [ ] Modal CSS lives inside `@media (max-width: 991px)` (or your mobile breakpoint).
- [ ] Every modal property carries `!important`.
- [ ] `z-index` is high enough to beat stickies/headers (100000+).
- [ ] JS appends sidebar + backdrop to `<body>` on open.
- [ ] JS forces a reflow before adding `.active`.
- [ ] JS return-to-home `setTimeout` duration ≥ longest CSS transition.
- [ ] Backdrop click, Escape, and menu-item click all call `closeModal()`.
- [ ] `body.sidebar-modal-open { overflow: hidden }` locks background scroll.
- [ ] Before using `$(...)`, confirm jQuery is actually loaded on the page.

---

## 5. Quick-reference: the three fixes, named

| Name                 | What it solves                                          | Where it lives            |
|----------------------|---------------------------------------------------------|---------------------------|
| **Body-Append Trick** | Defeats any ancestor transform/filter breaking `fixed`  | JS `openModal()`         |
| **Vanilla Port**      | Site has no jQuery — no `$ is not defined`             | JS IIFE + `ready()`       |
| **Visibility Swap**   | `display` flipping skips transitions — use visibility   | CSS closed/active states  |

These three together are the difference between "the modal pops in instantly" /
"the modal doesn't appear at all" / "crash on page load" and a smooth, reliable
fade-in popup.
