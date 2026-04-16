# Sovereign Redesign — Assigned Lessons Dropdown

I will redo the "Assigned Lessons" feature using the **Sovereign Web Framework (SWF) Protocol (V4.5)**. This plan focuses on ensuring the design is **1:1 identical** to your core tables while injecting a premium "Level 10" cinematic aesthetic.

## Proposed Changes

### [Phase 1: Relational Alignment (SWF Step 8)]
- **Reuse Core Components**: Instead of rebuilding the table, I will embed the official [user-lesson-list.vue](file:///C:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/views/user-lessons/user-lesson-list.vue) component directly into a dropdown. 
- **Benefit**: This guarantees that every column, action icon (Eye/Trash), and alignment is exactly what you see on the main "User Lessons" page.

### [Phase 2: Aesthetic Injection (SWF Step 12)]
- **Cinematic Dropdown**: Create [assigned-lessons-drawer.vue](file:///C:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/views/users/drawer/assigned-lessons-drawer.vue) with:
    - **Glassmorphism**: `backdrop-blur-md` for a premium translucent depth effect.
    - **Emerald Cinematic Accent**: A subtle Emerald glowing header bar to represent a "Sovereign" active list.
    - **Page-Style Header**: A high-fidelity title section that mirrors the "Questions" page reference.

### [Phase 3: Integration]
- **User List Update**: Re-inject the **Layers** action button into the [User List](file:///C:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/views/users/user-list.vue).
- **Trigger**: The icon will slide down the new cinematic dropdown from the top.

## Verification Plan

### Automated Tests
-   Verify component mounting and `userId` prop passing to the embedded list.
-   Check for `ReferenceError` or `SyntaxError` in the console.

### Manual Verification
-   Open the User List.
-   Click the **Layers** icon for an agent.
-   Confirm the dropdown slides from the top and the table looks **exactly** like the standard "Assign Lesson" table.
