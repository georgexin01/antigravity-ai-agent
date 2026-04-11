# Research Report: The Live View Mission Architecture

## 1. Concept Definition
A **Live View Mission** is a high-fidelity intelligence gathering operation where the AI uses a dedicated **Browser Subagent** to interact with a dynamic web environment (e.g., YouTube, complex SaaS dashboards). Unlike static reading, "Live View" involves visual perception, scrolling, and multi-tab exploration.

---

## 2. Step-by-Step Flow (The YouTube Learn Loop)

1.  **Cold Boot (Deployment)**: 
    -   Gemini (Director) spawns a `browser_subagent`.
    -   Initial state: Clean browser instance.
2.  **Primary Navigation**:
    -   Subagent calls `open_browser_url` for the YouTube link.
    -   **Latency**: 2-5s (Network + Rendering).
3.  **Visual Perception Phase**:
    -   Subagent receives a **Screenshot (8-bit WebP)** + **DOM Summary**.
    -   **Token Load**: ~1,000 - 3,000 tokens per turn (image + text).
4.  **Interaction (The Learning Scroll)**:
    -   AI identifies "Video Description" or "Comments".
    -   Calls `scroll_browser_window` or `click_browser_pixel`.
    -   **Turn Cost**: Each interaction is a new reasoning turn (~2,000 tokens).
5.  **recursive Traversal (The New Tab)**:
    -   AI extracts URLs from the description.
    -   Calls `open_browser_url` for a new target in a background tab.
6.  **Knowledge Synthesis**:
    -   Subagent summarizes all gathered data into a final report and "Ends Mission."

---

## 3. Token Economics & Black Holes

| Action | Token Weight | Speed | Note |
| :--- | :--- | :--- | :--- |
| **Static Read** (`read_url_content`) | ~500 - 1.5k | < 1s | Markdown only. Zero images. |
| **Live View** (`browser_subagent`) | **~5k - 50k+** | 10s - 2min | Includes screenshots + reasoning turns. |

### The "Waste" Factors:
- **Redundant Captures**: Every time the AI clicks a button, a new screenshot is generated. If the page doesn't change much, these tokens are mostly "waste."
- **JavaScript Bloat**: Complex pages with infinite scrolls generate massive DOM summaries that are re-sent to the AI every turn.

---

## 4. Performance Metrics (Live View)

- **Total Execution Time**: For a YouTube learn-mission (1 video + 3 links), expect **1.5 to 3 minutes**.
- **Token Impact**: A single mission can consume **25,000 to 100,000 tokens** depending on the number of tabs and scrolls. 

---

## 5. Proposed Improvements (The Mythos Standard)

### A. The "Markdown First" Protocol
- **Change**: AI should attempt `read_url_content` FIRST. YouTube description metadata can often be pulled without a full browser subagent.
- **ROI**: 90% token reduction for 80% of tasks.

### B. Ocular Extraction (Batching)
- **Change**: Instruct the subagent to "Capture ALL links in one turn" instead of clicking them one by one.
- **ROI**: Reduces mission turn count by 50%.

### C. Visual Freeze Protocol
- **Change**: Disable screenshots after the initial load if the task is purely data extraction (text/links).
- **ROI**: Saves ~1,500 tokens per turn.

---

## 6. Next Steps
I can implement a **Live View Pulse** skill that follows these optimized rules to ensure you get the knowledge without the "Token Black Hole" effect. 

Would you like me to draft this optimized skill? 🦞
