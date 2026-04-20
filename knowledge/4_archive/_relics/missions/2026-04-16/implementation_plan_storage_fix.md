# Implementation Plan: Restoring Image Upload Functionality

The user reports a "row-level security policy" error when uploading images. My investigation confirms that RLS is enabled on the `storage.objects` table, but no policies currently exist to allow authenticated users to perform uploads.

## User Review Required

> [!IMPORTANT]
> I will be applying global security policies to your **Supabase Storage**. 
> This will allow the Admin Panel to upload images and the Student app to view them. 
> I will also ensure the `attachments` bucket is properly configured for public reading.

## Proposed Changes

### Storage Security Hardening

#### NEW] [031_storage_rls_policies.sql `(file removed)`
- Enable RLS for `storage.objects` (already enabled, but ensuring parity).
- Add `SELECT` policy for all users (to view images).
- Add `INSERT`, `UPDATE`, and `DELETE` policies for `authenticated` users (to manage uploads).
- Ensure the `attachments` bucket exists in the `storage.buckets` table.

## Verification Plan

### Automated Verification
- Simulate a file upload record insertion via CLI to test the policy.
- Verify through the browser that existing image links (if any) are readable.

### Manual Verification
- Attempt to upload a course image in the Admin Panel and verify that the "Row Level Security" error no longer appears.
