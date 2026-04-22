# Implementation Plan — Global Media Indexing Hardening

The user reports that while "Lessons" successfully index images in the Album, "Agents" and "Reviews" are failing to synchronize. I will unify the global media pipeline to ensure 100% architectural integrity across the ecosystem.

## ⚖️ Architecture Alignment
- **Step 13 (Global Indexing)**: Hardening the `insertAttachmentRecord` protocol.
- **Sovereign Sync**: Eliminating "Silent Fails" in the database indexing layer.

## User Review Required

> [!IMPORTANT]
> I will be updating the core upload utility. This will affect all modules currently using image uploads. I am adding a "Double-Lock" verification to ensure that if a database record fails to save, the user is notified immediately.

## Proposed Changes

### [MODIFY] [upload.ts](file:///c:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/utils/upload.ts)
- **Harden Indexer**: Update `insertAttachmentRecord` to be more resilient and explicitly handle schema targeting via the client.
- **Error Visibility**: Ensure that `uploadPhoto` returns the database insertion status so forms can react to it.

### [AUDIT] [Reviews Module]
- Verify that `review-list.vue` and its related drawers are using the standard `uploadPhoto` utility.

### [AUDIT] [Leads Module]
- Verify consistency in the leads module for any attachment logic.

## Verification Plan

### Automated Verification
- **Relational Integrity Check**: A node script will verify that the last 5 files in Storage have matching entries in the `attachment` table.

### Manual Verification
- **Cross-Module Test**: 
  1. Upload a photo in an Agent Profile.
  2. Upload a photo in a Review.
  3. Verify BOTH appear sequentially in the 'Attachments Album'.
