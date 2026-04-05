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
