---
name: captcha
description: "Faucet CAPTCHA Skills: Sovereign Elite V25.0"
triggers: ["captcha", "faucet captcha skills"]
phase: reference
model_hint: gemini-3-flash
version: 42.0
_ohdy_wrapper: |-
  # OHDY COMPRESSED NODE (V42.0)
  <dna_node>
  v: 42.0
  n: captcha
  graph:
    req: []
    rel: []
  l: |-
  </dna_node>
---

# Faucet CAPTCHA Skills: Sovereign Elite V25.0

This document details the automated "skills" for bypassing faucet challenges using the Local Vision Sandbox. External APIs are now deprioritized (Rule SM-01).

---

## 👁️ 1. LOCAL VISION: FEATURE INVERSION (G4 Analyst)
Primary Resolution Logic for Free-Bonk / OnlyFaucet / VieFaucet

### How it Works:
Instead of sending images to a cloud service, the AI triggers a silent pulse (`autopulse.ps1`) and analyzes the local file `activemission.png` using Gemma-4.

### Key Techniques:
- Protocol 180° FLIP: Identify the icon with an inverted Y-axis silhouette (upside down).
- Protocol LEAST_DISPLAYED: Identify the "Unique Icon" by calculating the feature frequency of the 5-slot grid.
- Symmetry Analysis: Detect orientation differences by comparing left-right vs. top-bottom pixel density.

### 🧠 Phoenix Deep Learning (V1.0)
If the above logic fails:
1. `ztvv3solver.py --record-failure` saves the misclick coordinates.
2. `faucetpostmortemengine.py` reviews the failure and deduces why the logic failed (e.g., color baiting).
3. The new logic rule is appended as an archetype to this document via the SBP loop.

---

## 📐 1.5. UNIVERSAL LAYOUT SHIFT DELTA (G4 Analyst — SM-06)
Applied To: Any captcha where clicking an answer element causes it to HIDE, shifting lower elements UP.

### Detection Rule:
G4 Analyst must ask: *"When I click a target, does it disappear from the DOM?"*
- YES → Apply `LAYOUTSHIFTDELTA` rule.
- NO → Standard static coordinate click.

### Known Captcha Types Using This Rule:
| Platform | Captcha Type | Shift Trigger | Avg Element Height |
| :--- | :--- | :--- | :--- |
| Free-Bonk | Anti-Bot Links (3-step) | Click hides link | ~21px |
| Generic Multi-Step | Sequential Answer Forms | Click hides row | Varies (Ask G4) |
| Roman Numeral Verify | Ordered Number Click | Click removes number | ~21–35px |

### Execution Formula (SM-06):
```
YclickN = YoriginalN - (sum of heights of all previously clicked/hidden elements)
```
Example with 3 links (each H=21px):
- Click 1 → Y=132 (normal)
- Click 2 → Y=132 - 21 = 111
- Click 3 → Y=132 - 21 - 21 = 90

### G4 Prompt Instruction (SM-06):
When G4 Analyst detects a sequential multi-step captcha:
1. Identify all targets in ONE pulse (no rescan).
2. Return `coords` AND `height` for each element.
3. The Bridge applies the delta formula before each click.

### SBP Update Rule:
If a NEW captcha type is discovered that uses element hiding, the Bridge adds it to the Known Captcha Types table above via SBP.

---

## 🤖 2. EXTERNAL FALLBACK (Bridged Skills)
Service: CapSolver / 2Captcha (Only if SM-02 RAM Tier fails)

### 🧩 Drag-and-Drop (Slider)
- Task Type: `SliderTaskProxyLess`
- Logic: Returns the exact X-coordinate for the puzzle gap.
- Bait Resistance: Convert images to grayscale before analysis to negate color-based distraction.

---

## 🛠️ 3. SOVEREIGN SOLVER INTEGRATION (V30.0)
The logic is unified in `scripts/ztvv3solver.py`, which manages the handshake between visual capture and coordinate resolution.

### Execution Workflow (Elite):
1. Pulse: Trigger `Snipaste` CLI.
2. Scan: Gemma-4 reads the raw PNG.
3. Map: Resolution of internal (X, Y) coordinates relative to the browser viewport.
4. Bridge: Send JSON `{ "x": X, "y": Y }` to the Cloud Bridge for final tactical click.

---

## 🧬 4. MISSION DNA SIGNATURES (V31.0 Expand)
| Platform | Captcha Type | Layout Shift? | Height Est. |
| :--- | :--- | :--- | :--- |
| Free-Bonk | IconCaptcha (Unique Icon) + Anti-Bot 3-step | ✅ YES | ~21px |
| OnlyFaucet | ROTATION_SOLVE (180° flip) | ❌ NO (static) | — |
| DutchyCorp | hCaptcha / Text-Grid | ❌ NO | — |
| FireFaucet | hCaptcha / Custom Icon | ❌ NO | — |

---
V25.0 Sovereign Elite Captcha Skills — Universal Layout Shift Active (2026-04-09)
