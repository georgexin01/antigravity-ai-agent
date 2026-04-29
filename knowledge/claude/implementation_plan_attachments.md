# Implementation Plan — Industrial Attachment Persistence

The user reports that uploaded images do not appear in the **Attachments Album**. My audit reveals that while the frontend logic exists, the underlying `attachment` database table is entirely missing from the migrations.

## ⚖️ Architecture Alignment
- **Step 13 (Attachments Album)**: Deploying the missing persistence layer for global media tracking.
- **Sovereign Sync**: Ensuring Storage and Database are perfectly aligned.

## Proposed Changes

### [NEW] [039_attachments_table.sql](file:///c:/Users/user/Desktop/quizLAA/admin-panel-quizLaa/supabase/migrations/039_attachments_table.sql)
- Create the `attachment` table in the `quizLaa` schema.
- **Columns**: `id` (UUID), `storagePath` (Text), `originalName` (Text), `fileSize` (BigInt), `mimeType` (Text), `isDelete` (Bool), `createdAt`, `updatedAt`.
- **Security**: Enable RLS with authenticated full access and public read.

### [MODIFY] [.env](file:///c:/Users/user/Desktop/quizLAA/admin-panel-quizLaa/apps/web-antd/.env)
- Update `VITE_SUPABASE_SCHEMA` from `wms` to `quizLaa` to align with the rest of the agency modules.

### [MODIFY] [upload.ts](file:///c:/Users/user/Desktop/quizLAA/admin-panel-quizLaa/apps/web-antd/src/utils/upload.ts)
- Explicitly set `from('attachment')` to use the schema-aware prefix if needed.
- Ensure `insertAttachmentRecord` handles the `quizLaa` target.

### [MODIFY] [attachments.ts](file:///c:/Users/user/Desktop/quizLAA/admin-panel-quizLaa/apps/web-antd/src/stores/attachments.ts)
- Ensure the Pinia store accurately queries the `quizLaa.attachment` table.

## Verification Plan

### Automated Verification
- **Build Pass**: Ensure Vite parses the updated `.env` correctly.
- **Database Pass**: Run `supabase db push` (manual) or verify table creation.

### Manual Verification
- **Upload Test**: Edit an agent, change their photo.
- **Album Check**: Navigate to the 'Attachments Album' and verify the new image entry appears instantly.
- **Purge Test**: Test soft-deletion and permanent purging through the album interface.
