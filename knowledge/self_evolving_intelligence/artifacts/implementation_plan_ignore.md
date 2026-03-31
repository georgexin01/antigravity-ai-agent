# Extreme Performance .claudeignore Optimization

The Vben monorepo is unique because it includes separate apps for every major UI framework (Ant Design, Element Plus, Naive UI, TDesign). Since we are building an **Ant-Design-Vue-based Admin Panel**, the other frameworks are essentially "dead weight" in the AI's context.

## User Review Required

> [!IMPORTANT]
> This "Extreme" configuration will ignore the following major folders which you may occasionally need for cross-reference. Please approve if you only want to focus on the **web-antd** (Ant Design) project.

### Major Additions to Ignore:
- **`apps/web-ele`**, **`apps/web-naive`**, **`apps/web-tdesign`**: Prevents the AI from searching through thousands of lines of code for frameworks we aren't using.
- **`playground/`**: Removes experimental code patterns that might confuse the AI's "Production" logic.
- **`.github/`** & **CI Configs**: Removes CI/CD clutter that isn't relevant to UI/Logic tasks.
- **`docs/`**: Prevents the AI from reading hundreds of documentation files when it should be reading your code.

## Proposed Changes

### [Root Config]

#### [MODIFY] [.claudeignore](file:///c:/Users/user/Desktop/admin-panel-quizLaa/.claudeignore)
- Group by "Performance Priority".
- Explicit framework pruning.
- Monorepo metadata suppression.

## Open Questions

- Do you ever need to reference logic from the **Element Plus** (`web-ele`) or **Naive UI** (`web-naive`) versions of the dashboard? If YES, we should keep them. If NO, ignoring them will make me much faster.

## Verification Plan

### Manual Verification
- I will simulate a global search and verify that results only come from `web-antd` and `@core` packages.
