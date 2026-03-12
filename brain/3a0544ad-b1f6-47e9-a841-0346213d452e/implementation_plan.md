# Jin Hong M&E Website v2 Implementation Plan

The goal is to create `jin-hong-me-html-v2`, finishing and redoing the design by integrating the actual company details extracted from the JIN_HONG_read.pdf file and applying premium, dynamic web design principles.

## Proposed Changes

### Project Setup

- Copy the entire contents of `jin-hong-me-html` to a new directory `jin-hong-me-html-v2`. This acts as our base.

### Global Design & Styling (CSS)

#### [MODIFY] `css/style.css` (or equivalent main CSS file)

- **Aesthetics**: Implement a premium visual identity. We will use curated color palettes (deep corporate blues, sleek dark accents, subtle gradients).
- **Typography**: Apply modern Google Fonts (e.g., Inter or Outfit) for clean, readable, and sophisticated text.
- **Dynamic Elements**: Add smooth micro-animations, glassmorphism effects on cards, and CSS-only visual elements instead of generic placeholder images.

### Content Integration (HTML Pages)

Update all HTML pages with the extracted data:

- **Company Name**: Jin Hong Contracting Sdn. Bhd.
- **Registration**: 202101016266 (1416566-K)
- **Contact**: Mr. Liu Bin (017-5688750 / liu_bin@ansonintl.com)
- **Address**: No, 7-31 Carnelian Tower, Forest City, Johor Bahru

#### [MODIFY] `index.html`

- **Hero**: Premium introduction.
- **About Us**: "Established in 2020... Professional M&E contracting company." Mention CIDB G7, ST Class A, SPAN C1 certificates. Mention 38 management staff, 800-1000 labor, 80% localization.
- **Services**: Include the 6 exact services (Electrical, ACMV, Lightning Protection, Plumbing, Fire Protection, ELV).
- **Projects Highlight**: Feature top projects (e.g., PDG Data Centre, Risen Solar Factory).

#### [MODIFY] `about.html`

- Expand on the company profile, mentioning its branches in Jakarta and Bangkok.
- Highlight the business principle: "people-oriented, integrity first".

#### [MODIFY] `services.html`

- Detail the 6 precise services extracted from the PDF, using premium card designs with CSS hover animations.

#### [MODIFY] `projects.html`

- List the actual "Ongoing" and "Completed" projects divided into "Factories" and "Data Centers".
- _Completed_: Risen Solar, Jiu Long Paper, Longi, Ferrotec, AT&S, Infineon, PDG, BDC (秦淮), Cheetah.
- _Ongoing_: PDG, Alton Super, Ferry Tech, TF-AMD, BDC (MY06 PH5), EVE, GDS.

#### [MODIFY] `contact.html` & Footers

- Update contact forms and footer sections across all pages with the real address, email, and phone number.

## Verification Plan

### Automated Tests

- N/A for static HTML generation.

### Manual Verification

- Open the resulting HTML pages in a browser (or use the webapp-testing Playwright skill if needed) to visually verify:
  1. The new premium design system is applied across all pages.
  2. All placeholder text is replaced with the correct PDF data.
  3. Animations and responsive layouts function seamlessly.
