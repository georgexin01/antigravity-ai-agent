# Implementation Plan: Duplicate-Prevention for Lesson Assignments

The goal is to ensure that a lesson already assigned to a user cannot be re-selected in the "Add Lesson" interface.

## User Review Required

> [!NOTE]
> I will be making the **Lesson Selection** field and dynamic field. It will only populate *after* a user is selected, or it will refresh immediately when the user context changes.

## Proposed Changes

### Data Layer

#### [MODIFY] [lessons.ts](../../../../../scratch/extraction-staging/webapp-live/src/stores/lessons.ts)
- Add `fetchAvailableOptions(userId: string)` action.
- Logic:
    1. Fetch all lesson options (`fetchOptions`).
    2. Fetch all current assignments for `userId` from `user_lessons`.
    3. Return only the lessons not found in the assignment list.

### UI Layer

#### [MODIFY] [user-lesson-form.vue](file:///C:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/views/user-lessons/user-lesson-form.vue)
- Update `createSchema` to dynamically change the `api` of the `lessonIds` field.
- Implement a `watch` on the `userId` field (via `formApi`).
- When `userId` is selected:
    - Update the `lessonIds` field schema to call `lessonsStore.fetchAvailableOptions(userId)`.
    - If `userId` is cleared:
        - Disable or clear the lessons list to prevent context-less assignment.

## Verification Plan

### Automated Tests
- Script an audit to ensure `fetchAvailableOptions` returns the correct subset of lessons.

### Manual Verification
- Select a user who has 1 assignment. Verify the dropdown only shows the remaining lessons.
- Select a user with NO assignments. Verify the dropdown shows all lessons.
- Assign a lesson, then immediately try to assign another to the same user; verify the previous lesson is gone from the list.
