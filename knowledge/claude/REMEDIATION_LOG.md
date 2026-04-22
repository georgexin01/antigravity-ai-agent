# SWF Error Remediation & Hardening Log

This document tracks systemic failures and their corresponding industrial fixes to prevent recursive logic errors in Gemini's execution.

## 🚫 Critical Failure: Empty Edit Form
- **Symptom**: Editing an entity (Agent, Lead, etc.) opens a drawer with an empty form.
- **Root Cause**: Mismatch between `useEditDrawer` parameters and the Drawer component.
- **Remediation Code**:
    1. **Key Requirement**: Always use `getDetailApi` (not `fetchApi`). [FE:Step 06]
    2. **ID Mapping**: Always provide `idKey: 'yourEntityId'` (e.g., `'agentId'`) in the options. [FE:Step 09]
    3. **Generic Order**: `useEditDrawer<TEntity, TFormValues, TIdData>`.
    4. **State Sync**: Use the `entity` ref returned by the composable for the form's `:agent` or `:lead` prop. [FE:Step 09]
    5. **Empty Input Check**: [edit tables + error] Verify the `entity` ref is not null/empty when passing to the form.

## 🚫 Critical Failure: Missing Translation Prefix
- **Symptom**: RAW keys like `common.add` appear in the UI.
- **Root Cause**: `page.json` is loaded under the `page` namespace; keys like `common` are nested within it.
- **Remediation Code**:
    1. **Namespace Awareness**: Use `$t('page.common.add')` instead of `$t('common.add')`.
    2. **Consistency**: Apply this to `imageProcessor`, `modal`, and `table` keys located in `page.json`.

## 🚫 Critical Failure: Incomplete Feature Chain
- **Symptom**: "I added the edit drawer but the icon is missing" or "I saved but the list didn't refresh".
- **Remediation Checklist (MUST check on every implementation)**:
    1. **Trigger**: Is the `actionButtons` or `toolbarButtons` array updated?
    2. **Registry**: Is the Drawer component imported AND mounted in the `<template>`?
    3. **Success Chain**: Does the Drawer emit `@success`? Does the parent call `gridApi.query()` on that event?
    4. **Data Bridge**: Is the `setData({...})` call passing the correct ID keys? (Check `VOCABULARY.md`).
    5. **Workflow Bridge**: Are `__workflow_listActions` and `__workflow_fkLinkActions` handlers registered for E2E testing? [FE:Step 14]
    6. **Submission Check**: [create/edit tables + error] Analyze the `submit` handler logic. Are all required fields in the generic Type? Is the `loading` state handled?
    7. **Store Update Check**: [CRUD] Ensure `.update().single()` in the Pinia store doesn't crash if the update returns no payload (use `.maybeSingle()` or check row count if appropriate).

## 🚫 Critical Failure: Double Success Alerts (Silent Photo Step)
- **Symptom**: User sees "Updated successfully" multiple times, or success followed by a "Failed to update" error.
- **Root Cause**: Photo upload callback in `*-form.vue` triggers a `message.success`.
- **Remediation**:
    1. **Rule**: Photo/File uploads in forms MUST be silent. NO `message.success` in the upload callback.
    2. **Logic**: The ONLY success alert should be at the end of the `handleSubmit` process in the Drawer/Composables layer.

## 🚫 Critical Failure: State Serialization Crash
- **Symptom**: ReferenceError (e.g., `agentId is not defined`) when opening a detail drawer.
- **Root Cause**: Logic inside `onOpenChange` or `onOpened` triggers before the data is serialized into state.
- **Remediation Code**: 
    1. Explicitly define the ID `ref` (e.g., `const agentId = ref('')`) at the top of the script.
    2. Synchronize it in `onOpenChange`: `const data = drawerApi.getData<OpenData>(); if (data) agentId.value = data.agentId;`.

## 🚫 Critical Failure: The Orphaned Storage Path (Broken Preview)
- **Symptom**: Image uploads successfully and shows a green progress bar, but turns into a broken image icon immediately.
- **Root Cause**: Internal storage paths (e.g., `folder/xyz.jpg`) assigned directly to the UI without hydration.
- **Remediation**: Always wrap internal paths with `getStorageUrl(path)` before displaying in the frontend.

## 🚫 Critical Failure: The Persistence Ghost (State Leak)
- **Symptom**: Opening an item with no image shows the images from the *previously* edited item.
- **Root Cause**: Failure to explicitly clear `fileList.value = []` when the new entity is loaded in Edit mode.
- **Remediation**: In the entity `watch` block, ensure a ternary or else condition exists: `fileList.value = entity.photo ? urlsToFileList([entity.photo]) : [];`.

---
**Status**: Active | **Last Update**: 2026-04-21 | **Goal**: Zero-Defect SWF Implementation
