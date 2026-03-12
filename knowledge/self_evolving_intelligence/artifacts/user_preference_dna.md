# User Preference DNA — Learned Taste Profile

> **Status**: Permanent Knowledge — Auto-updated after every project session.
> **Last Updated**: 2026-03-12 (V1.0 — Initial profile)

---

## How This Works

This file is the AI's learned understanding of the user's design taste. It is built silently over time based on approval/rejection signals during real projects. AI reads this BEFORE generating any design to pre-filter patterns.

---

## Color Taste

| Preference | Confidence | Source |
|---|---|---|
| Prefers warm, rich palettes over cold/sterile ones | Medium 🟡 | Anti-Blue/Navy rule in agent_must_read.md |
| Rejects default Navy/Blue unless brand-required | High 🟢 | Explicit rule |
| Likes dark theme for industrial/corporate (Deep Onyx #0a0b10) | High 🟢 | Jin Hong project |
| Likes warm accents (red, orange) for F&B apps | Medium 🟡 | Japanese food app patterns |
| _(more learned over time)_ | | |

---

## Spacing Preference

| Preference | Confidence | Source |
|---|---|---|
| Prefers generous whitespace — Japanese "Ma" style (120-150px gaps) | High 🟢 | Jin Hong V5, cross-cutting wisdom |
| Likes `line-height: 1.75` for body text | High 🟢 | Jin Hong design protocols |
| _(more learned over time)_ | | |

---

## Typography Style

| Preference | Confidence | Source |
|---|---|---|
| Poppins / Roboto for leisure/casual apps | Medium 🟡 | agent_must_read.md mobile standards |
| Montserrat / Open Sans for business/corporate | Medium 🟡 | agent_must_read.md mobile standards |
| `letter-spacing: 0.02em` for headings | Medium 🟡 | Jin Hong V5 |
| _(more learned over time)_ | | |

---

## Animation Preference

| Preference | Confidence | Source |
|---|---|---|
| Premium motion: `cubic-bezier(0.16, 1, 0.3, 1)` as baseline | High 🟢 | Jin Hong design protocols |
| Prefers subtle micro-interactions over flashy animations | Medium 🟡 | UI First rule |
| _(more learned over time)_ | | |

---

## Layout Density

| Preference | Confidence | Source |
|---|---|---|
| Homepage minimum 6 deeply designed sections | High 🟢 | agent_must_read.md |
| 4-column grid preferred for Services/Features | High 🟢 | agent_must_read.md |
| _(more learned over time)_ | | |

---

## Mobile Priority

| Preference | Confidence | Source |
|---|---|---|
| _(to be learned from project feedback)_ | | |

---

## Interaction Style

| Preference | Confidence | Source |
|---|---|---|
| Bottom sheet/drawer for mobile (single-hand use) | Medium 🟡 | Japanese food app analysis |
| Glassmorphism modals with backdrop blur | High 🟢 | Jin Hong + Stitch protocols |
| _(more learned over time)_ | | |

---

## Anti-Preferences (Things User Consistently Dislikes)

| Dislike | Confidence | Source |
|---|---|---|
| Generic stock photos (handshakes, people at whiteboards) | High 🟢 | agent_must_read.md image protocol |
| Default Bootstrap/Tailwind look | High 🟢 | Cross-cutting wisdom #14 |
| Decorative emojis in UI | High 🟢 | Top priority rule |
| Mixed languages in same UI | High 🟢 | master_strategy.md |
| Light/white containers in dark theme context | High 🟢 | Jin Hong design protocols |
| _(more learned over time)_ | | |

---

## Communication Style (How User Gives Feedback)

| Trait | Observed Pattern | Confidence |
|---|---|---|
| **Language** | Mixed English + Chinese (中文). Casual, short sentences. | High 🟢 |
| **Approval style** | Short and direct: "nice", "correct", "yeah that good", "not bad", "可以", "好" | High 🟢 |
| **Rejection style** | Direct: "i dont like this", "design not good", "不好看", "重做" | High 🟢 |
| **Revert signals** | "before is good", "i like the history design", "undo last change", "之前的好" | High 🟢 |
| **Minor tweak style** | "just change abit", "update some design in here", "改一下" | High 🟢 |
| **Typos are common** | "cahgne", "abit", "dont" — AI must parse intent, not exact spelling | High 🟢 |
| **Malay words** | May use "boleh", "ok la", "can" as casual approval | Medium 🟡 |

**Key insight**: Short responses = real opinion. If user says just "nice" — that's a genuine +10 approval. Don't wait for long praise. This user is efficient with words.

---

> **This profile evolves automatically.** AI updates it after every project based on user approval/rejection signals.
