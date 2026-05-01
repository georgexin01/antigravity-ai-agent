# 🧠 FAUCET OPTIMIZATION: VISION-SYNC (V1.0)

Documenting the 'Least Frequent' pattern for IconCaptcha on free-bonk.com.

## 🧬 Patterns Discovered
- **Pattern A (Frequency Audit)**: IconCaptcha on free-bonk.com always follows the 'Least Often' rule.
- **Visual Mapping**:
    - Trophy + Star (High Frequency)
    - Toilet/Bowl (High Frequency)
    - Medal (Target: 1x Frequency)

## 🏹 Surgical Selectors
- Antibot order varies but is always clear text in the orange banner.
- Captcha container: `div.iconcaptcha` or similar.

## 🚀 Optimization Goal
- Automate frequency counting via `browser_subagent` pixel-matching or OCR in future iterations to reduce human/model latency.
