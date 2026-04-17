# Hardening Sovereign Web Architecture — Final Phase

This plan outlines the final steps to transition the **LAA Quiz Platform** from a "Mocked" state to a hardened, production-ready Sovereign Ecosystem. We will enforce strict relational integrity, eliminate hardcoded placeholders, and inject cinematic UI aesthetics as per the **Sovereign Web Framework (SWF) V4.5** protocol.

## User Review Required

> [!IMPORTANT]
> **Performance Shift**: Aggregating progress metrics (completed vs. total modules) will now occur in real-time during the `fetchUser` and `getList` cycles.
> 
> **SSR Constraint**: Per user instruction, **Vue SSR will NOT be installed or implemented** at this stage. We will stick to the PWA/Client-side architecture for the build.
> 
> **Aesthetic Overhaul**: We will be injecting cinematic gradients (Emerald/Rose) and liquid glass tokens into the main layout to meet the V4.5 premium standard.

## Proposed Changes

---

### [Auth & Profile Hardening]

Summary: Replace hardcoded fallback values and placeholders in the authentication store with dynamic, relational counts.

#### [MODIFY] [auth.ts](file:///c:/Users/user/Desktop/admin-panel-quizLaa/webApp-LAA-quiz-v2/src/stores/auth.ts)
- Remove hardcoded `totalModules: 12` and `completedModules: 0`.
- Implement a `fetchDashboardStats` method that queries:
    1.  `lessons`: To get the total count of available training modules.
    2.  `question_answers`: To count lessons where the user has a passing score (>= 80).
- Replace the fallback Unsplash avatar with a dynamic UI-Avatar generation service if the database field is empty.

### [Data Layer Optimization]

Summary: Hardening the relational logic for lesson assignments and question counts.

#### [MODIFY] [lessons.ts](file:///c:/Users/user/Desktop/admin-panel-quizLaa/webApp-LAA-quiz-v2/src/stores/lessons.ts)
- Refine the `getList` logic to ensure that "Completed" status is retrieved from the `question_answers` table.
- Ensure the `dbToCourse` transform correctly maps the latest score to the Course object for the UI to display.

### [UI & Aesthetics (Step 12/14)]

Summary: Injecting cinematic design tokens into the layout.

#### [MODIFY] [index.css](file:///c:/Users/user/Desktop/admin-panel-quizLaa/webApp-LAA-quiz-v2/src/index.css)
- Define Cinematic Utility Classes: `.bg-cinematic-emerald`, `.bg-cinematic-rose`, `.glass-liquid`.
- Update the global background to **Deep Onyx** (#0a0b10).

#### [MODIFY] [App.vue](file:///c:/Users/user/Desktop/admin-panel-quizLaa/webApp-LAA-quiz-v2/src/App.vue)
- Apply the glassmorphic transitions and cinematic background tokens to the main container.

### [Meta & PWA Strategy (No-SSR)]

Summary: Ensuring high-fidelity meta tags and PWA compatibility without server-side rendering.

#### [MODIFY] [index.html](file:///c:/Users/user/Desktop/admin-panel-quizLaa/webApp-LAA-quiz-v2/index.html)
- Ensure all static OG/Twitter meta tags represent the brand correctly.
- Implement a client-side `head` hydration logic in the router to update `document.title` dynamically to bridge the gap until future SSR/SSG decisions.

---

## Open Questions

- **RPC Usage**: Would you prefer I implement a Postgres RPC function for the "Progress Aggregation" to reduce frontend query count, or should I stick to the current Pinia-side aggregation for visibility?
- **PWA Scope**: Should I initialize the `vite-plugin-pwa` configuration now, or is that reserved for the final "Ship" phase?

## Verification Plan

### Automated Tests
- Run `check-connection.ts` to verify the hardened Supabase clients (`supabase` and `publicClient`).
- Perform a Trace-Log check on the `login` flow to ensure the Project ID context-switching is executing without errors.

### Manual Verification
- Log in with a test account from `025_seed_testing_accounts.sql`.
- Verify that the module counts (completed/total) accurately reflect the database records in `lessons` and `question_answers`.
- Ensure the Emerald/Rose cinematic gradients are visible on the dashboard.
