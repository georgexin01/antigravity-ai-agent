# Jin Hong M&E Company Website Walkthrough

## Project Overview

Successfully completed the pure HTML/CSS migration and implementation of the Jin Hong M&E enterprise website. Following the directive to strictly use Multi-Page HTML Architecture (instead of Vue/React frameworks), we built a 6-page comprehensive website tailored for B2B engineering clients.

## Key Accomplishments

### 1. Centralized "Design Token" Implementation

We translated the official corporate design constraints (Business Blue `#0066CC`, Industrial Gray, etc.) into CSS native variables inside `css/global.css`. This ensures 100% color and typography uniformity without needing large CSS frameworks.

- Variables structure: `:root { --color-primary: #0066CC; ... }`

### 2. File Architecture

All pages operate natively in the browser without Node.js or a build step required, living in `jin-hong-me-html`:

- `index.html` (Hero banner and core advantage shortcuts)
- `about.html` (Corporate stats, organization structure)
- `services.html` (Six core engineering domains using CSS grids)
- `projects.html` (Filterable tab system via vanilla JS for ongoing vs. completed projects)
- `honors.html` (G7 construction qualifications and client awards)
- `contact.html` (Interactive contact grid and business form)

### 3. Shared Assets

- **`css/components.css`:** Centralized styles for Buttons, Form elements, App Header, and App Footer. Applied consistently across all HTML pages.
- **`js/main.js`:** Native JavaScript that auto-mounts the "active" state highlight on the navigation menu depending on the URL path.

## How to View

Because it is raw HTML, you can simply open `c:\Users\user\Desktop\antigravity\jin-hong-me-html\index.html` directly in your web browser (Chrome, Edge) to view and test the website immediately. No server necessary!
