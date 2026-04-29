# Implementation Plan — Industrial Achievement Gallery (Agent Info)

The user reports that uploading images to 'Agent Info' (Achievements) is failing. My research shows that the current code only supports raw JSON for achievements, lacking any UI for image uploads in that section. This plan builds the **Sovereign Achievement Foundry**.

## ⚖️ Architecture Alignment
- **Step 07 (Image Spec)**: Applying the industrial upload pattern to nested JSON properties.
- **Step 08 (UI Standards)**: Moving from a 'Boring Textarea' to an 'Industrial Card List'.

## Proposed Changes

### [MODIFY] [agent-form.vue](file:///c:/Users/user/Desktop/quizLAA/admin-panel-quizLaa/apps/web-antd/src/views/agents/agent-form.vue)
- **Transform Achievements Logic**:
    - Replace `achievementsJson` (string) with `achievements` (Array of objects).
    - **New Structure**: `[{ title: '', value: '', icon: '', photo: '' }]`.
- **UI Overhaul**:
    - Create a dynamic list for Achievements.
    - Add a `photo` selection/upload button for EACH achievement row.
    - Use the existing `ImageCropModal` and `uploadPhoto` utilities.
- **Harden Submission**:
    - Map the reactive achievement list back to the `achievements` JSONB object for database persistence.

### [MODIFY] [agent-list.vue](file:///c:/Users/user/Desktop/quizLAA/admin-panel-quizLaa/apps/web-antd/src/views/agents/agent-list.vue)
- **Relational Sync**: Update the achievement display in the main table to handle the new object-based structure if needed.

## Verification Plan

### Manual Verification
- **Upload Test**: Create a new Achievement, upload a specific image to it, and SAVE.
- **Persistence Test**: Refresh the page and verify the image URL is correctly hydrated from the `achievements` JSON blob.
- **404 Check**: Ensure the new images resolve correctly using the 'Self-Healing' resolver.

## Open Questions
- **Achievement Sub-Table**: Would you prefer a separate `agent_achievements` table in the future, or are you happy keeping it in the JSONB `achievements` column?
