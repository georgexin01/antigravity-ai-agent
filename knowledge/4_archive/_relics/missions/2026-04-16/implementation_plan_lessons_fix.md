# Implementation Plan: Restoring Assigned Lessons Visibility

The user reports that the "Assign Lessons" table is missing. My investigation confirms that while the table exists in the database as `user_lessons`, it is currently "Fail-Closed" due to missing RLS policies, making it appear empty or inaccessible.

## User Review Required

> [!IMPORTANT]
> I will be applying security policies to the `user_lessons` table. This will make your existing assignments visible in both the Admin Panel and the Student WebApp. 
> I will also seed some test data so you can immediately see the results on `http://localhost:3000/courses`.

## Proposed Changes

### Internationalization (i18n) Fix

#### [MODIFY] [page.json (en-US)](file:///C:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/locales/langs/en-US/page.json)
#### [MODIFY] [page.json (zh-CN)](file:///C:/Users/user/Desktop/admin-panel-quizLaa/apps/web-antd/src/locales/langs/zh-CN/page.json)
- Add missing `username` key to the `users.table` section.

### Database Hardening & Seeding

#### NEW] [027_user_lessons_policies.sql `(file removed)`
- Enable RLS for `quizLaa.user_lessons`.
- Add `SELECT`, `INSERT`, `UPDATE`, and `DELETE` policies for authenticated users.

#### NEW] [028_seed_user_lessons.sql `(file removed)`
- Seed several assignments linking the Admin and Agent accounts to the current lessons to populate the "Assign Lesson" views.

## Verification Plan

### Automated Verification
- Run a `SELECT` query via CLI to ensure policies allow row retrieval.
- Verify through a Node.js script that the `user-lessons` store in the WebApp can now see the results.

### Manual Verification
- Check the **Users List** in the Admin panel for the "Username" label fix.
- Visit `http://localhost:3000/courses` and verify that assigned courses appear.
- Open the **Assign Lessons** view in the Admin panel and verify that data is now visible.
