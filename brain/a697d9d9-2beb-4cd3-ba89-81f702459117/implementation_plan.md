# Phase 12.5: Intelligent PDF Image Extraction & Review

## Objective

To reduce reliance on AI image generation and utilize actual corporate assets, the agent will script an automated extraction of all images from the provided `锦鸿公司简介 JIN HONG Company Profile .pdf`. The AI will then visually review these images and dynamically inject the most suitable ones into `jin-hong-me-html-v2`. This process will be codified as a new fundamental rule in the AI configuration.

## Proposed Changes

### [Component] Automated PDF Extraction (Node.js / Portable Toolkit)

#### [NEW] `scripts/extract_pdf_images.js`

- Create a Node.js script using `pdf-export-images` or download `mutool` (MuPDF portable) to identify and save all embedded high-resolution images within the PDF document since Python is not available on the host system.
- Output directory: `jin-hong-me-html-v2/images/pdf_extracted/`.

### [Component] AI Visual Review Mechanism

#### [NEW] `jin-hong-me-html-v2/review_gallery.html`

- Build a temporary HTML gallery that cleanly displays all extracted images.
- The AI will launch a `browser_subagent` to view this gallery, visually evaluating the images based on:
  1. No heavy text overlays.
  2. Thematic fit (Industrial, M&E, dark aesthetic compatibility).
  3. Quality and resolution.

### [Component] Website Integration

#### [MODIFY] `index.html`, `projects.html`, `about.html`, etc.

- Replace the current temporary `hero_data_center.png` placeholders with the most suitable, real images selected during the AI review phase.

### [Component] AI Global Knowledge Base

#### [MODIFY] `C:\Users\user\Desktop\antigravity\antigravity_agent_config_summary.txt`

- Insert a new "PDF Asset Extraction Pipeline" rule. The AI MUST proactively scan the workspace for PDF company profiles BEFORE generating any images. If found, it will auto-extract, review, and utilize those real corporate photos to save generation tokens.

## Verification Plan

- Ensure `PyMuPDF` runs successfully on the local Windows environment.
- Confirm images are successfully dumped into the `pdf_extracted` folder.
- Run the subagent review and verify the selected images are injected correctly into the live website code.
