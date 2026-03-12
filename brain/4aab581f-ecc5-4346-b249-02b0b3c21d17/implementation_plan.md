# Implementation Plan - Convert Downloaded Template to PHP Project

Convert the `downloaded-template` HTML files into a structured PHP project following the pattern found in `htdocs_superiorheavy`.

## User Review Required

> [!IMPORTANT]
> The `template/` folder will be removed as requested. All page skeletons (like `home.php`) will be placed in the root directory, and the `index.php` routing will be updated accordingly.

## Proposed Changes

### Assets and Structural Preparation

#### [NEW] [style2.css](file:///c:/Users/user/Desktop/lla.landing.agent/css/style2.css)
Create an empty style file as requested.

#### [NEW] [main.js](file:///c:/Users/user/Desktop/lla.landing.agent/js/main.js)
Create an empty script file as requested.

#### [MODIFY] [assets folder](file:///c:/Users/user/Desktop/lla.landing.agent/assets)
Move/merge contents from `downloaded-template/assets` into the root `assets` folder.

---

### Component Extraction (lib/ folder)

#### [MODIFY] [htmlHead.php](file:///c:/Users/user/Desktop/lla.landing.agent/lib/htmlHead.php)
Extract the `<head>` section from `colorfull.html`, updating all resource paths to point to the root `assets/`, `css/`, or `js/` folders as appropriate.

#### [MODIFY] [header.php](file:///c:/Users/user/Desktop/lla.landing.agent/lib/header.php)
Extract the `<header>` section from `colorfull.html`.

#### [MODIFY] [footer.php](file:///c:/Users/user/Desktop/lla.landing.agent/lib/footer.php)
Extract the footer/copyright section from `colorfull.html`.

#### [MODIFY] [htmlBody.php](file:///c:/Users/user/Desktop/lla.landing.agent/lib/htmlBody.php)
Extract the script tags from the bottom of `colorfull.html`, updating paths.

---

### Page Conversion & Routing

#### [NEW] [home.php](file:///c:/Users/user/Desktop/lla.landing.agent/home.php)
Create the main home page by assembling the extracted components and the unique content from `colorfull.html`.

#### [MODIFY] [index.php](file:///c:/Users/user/Desktop/lla.landing.agent/index.php)
Update routes to point to root `.php` files instead of `/template/...`.

---

### Cleanup

#### [DELETE] [template folder](file:///c:/Users/user/Desktop/lla.landing.agent/template)
Remove the `template` folder after moving its contents or replacing them.

#### [DELETE] [downloaded-template folder](file:///c:/Users/user/Desktop/lla.landing.agent/downloaded-template)
Remove the source template folder once conversion is verified.

## Verification Plan

### Manual Verification
1.  Open the project in a PHP server (if available) or verify the file structure.
2.  Check `home.php` to ensure all `include` paths for `lib/` components are correct.
3.  Verify that `assets` paths in `htmlHead.php` and `htmlBody.php` are correctly updated to the root `assets/` folder.
4.  Confirm `main.js` and `style2.css` exist in their respective directories.
