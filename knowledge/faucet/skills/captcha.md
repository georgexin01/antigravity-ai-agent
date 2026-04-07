# AI Faucet CAPTCHA Solving: Universal Skills & API Schemas

This document details the automated "skills" for bypassing common faucet CAPTCHAs, including hCaptcha, reCAPTCHA, and specialized **Drag-and-Drop / Slider** puzzles.

---

## 🧩 1. The "Drag-and-Drop" Skill (Slider Puzzle)
**Service:** CapSolver (Recommended)
**Task Type:** `SliderTask` / `SliderTaskProxyLess`

### How it Works:
The slider CAPTCHA (popular on modern faucets) requires moving a puzzle piece into a hole in a background image. The service returns the exact **X-coordinate** (in pixels) needed to complete the slide.

### API Request Schema (Node.js/JS):
```javascript
const solveSlider = async (apiKey, websiteURL, captchaImages) => {
  const response = await fetch('https://api.capsolver.com/createTask', {
    method: 'POST',
    body: JSON.stringify({
      clientKey: apiKey,
      task: {
        type: "SliderTaskProxyLess",
        websiteURL: websiteURL,
        images: captchaImages // Array of [base64_bg, base64_puzzle]
      }
    })
  });
  const data = await response.json();
  // Returns: { x: 142, y: 0 }
  return data.solution.x;
};
```

---

## 🤖 2. The hCaptcha Skill (Enterprise Sync)
**Service:** 2Captcha / CapSolver
**Task Type:** `hCaptchaTaskProxyLess`

### How it Works:
You provide the `siteKey` and the `websiteURL`. The service returns a `token` which you inject into the `h-captcha-response` textarea.

### Implementation Workflow:
1.  **Extract siteKey:** Usually found in the `data-sitekey` attribute of the captcha div.
2.  **Request Solution:** Wait 20-40 seconds for the worker to solve.
3.  **Inject Token:**
    ```javascript
    document.querySelector('[name="h-captcha-response"]').innerHTML = hCaptchaToken;
    document.querySelector('[name="g-recaptcha-response"]').innerHTML = hCaptchaToken;
    // Call Callback
    window.hcaptcha.execute();
    ```

---

## ⚙️ 3. Universal "AI Faucet" Solver Logic
To use these skills in a Faucet script (like Tampermonkey), use a "Detection Observer" that waits for the captcha to appear, identifies the type, and triggers the solver.

### Detection logic:
```javascript
const captchaDetector = () => {
    if (document.querySelector('.h-captcha')) return "HCAPTCHA";
    if (document.querySelector('.g-recaptcha')) return "RECAPTCHA";
    if (document.querySelector('.geetest_slider_anchor')) return "SLIDER";
    return null;
};
```

> [!TIP]
> **Anti-Detection:** Always use a `proxyless` task when using these APIs with a browser extension or a local script to ensure the solve matches your IP context as closely as possible.

---

## 👁️ 4. Vision-Based Custom Logic (V23.1 Zeta Standard)
This section details the internal "Vision-Only" brain logic for solving captchas that standard APIs (CapSolver/2Captcha) may struggle with.

### 🔄 4.1 Rotation & Symmetry Scanning (5-Slot)
**Scenario:** 5 slots, all similar icons, find the one that is rotated differently.
1.  **Symmetry Analysis:** Calculate the vertical and horizontal symmetry of each of the 5 icons.
2.  **Frequency Match:** Count orientaton-matches. If 4 icons are oriented at 0° (or follow a 90/270/180 majority), target the outlier.
3.  **Feature Inversion:** Specifically look for "inverted" features like weight distribution (base vs. top) to detect upside-down orientation.

### 🎨 4.2 Bait Resistance (Shape vs. Color)
**Scenario:** 5 icons, colors vary, find the odd shape/rotation.
- **Rule:** Color is used as "bait" to distract from path differences.
- **Action:** Convert source images to grayscale or bitmask before comparison to negate color-based decision making.
- **Protocol:** If 4 items share a shape + rotation but differ in color, and 1 item shares the background color but differs in rotation -> **TARGET THE ROTATION-DEVIANT.**

### 🚫 4.3 "No Option" Logic
**Scenario:** "None of the above" or "Captcha is broken/empty".
- If the Vision Engine confidence score for all 5 slots is < 15% (No upside-down found) -> **Select the "No Option" button** or trigger a "Refresh" pulse.

---

## 🛠️ 5. Implementation (Pseudo-Code)
```javascript
const solveVisualOddity = (slots) => {
    const bitmasks = slots.map(img => convertToShapeBitmask(img));
    const rotationScores = bitmasks.map(mask => calculateOrientation(mask));
    
    const majorityRotation = getMajority(rotationScores);
    const outlierIndex = rotationScores.findIndex(s => s !== majorityRotation);
    
    if (outlierIndex === -1) return "SELECT_NO_OPTION";
    return outlierIndex; // 0-4
};
```

_Last Updated: 2026-04-07 (Omniscient Synergy Protocol)_
