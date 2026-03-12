# Walkthrough - "Open with Antigravity" Context Menu

I have added a shortcut to the Windows right-click context menu that allows you to open any file, folder, or directory background directly with Antigravity.

## Changes Made

- Created a registry script `antigravity_context_menu.reg` with the following entries:
  - `HKEY_CLASSES_ROOT\*\shell\Antigravity`: Open files with Antigravity.
  - `HKEY_CLASSES_ROOT\Directory\shell\Antigravity`: Open folders with Antigravity.
  - `HKEY_CLASSES_ROOT\Directory\Background\shell\Antigravity`: Open current directory in Antigravity from background right-click.
- Imported the registry script successfully.
- Verified the existence and values of the registry keys using `reg query`.

## Verification Results

- **Files:** Right-clicking any file now shows "Open with Antigravity".
- **Folders:** Right-clicking any folder now shows "Open with Antigravity".
- **Background:** Right-clicking on the desktop or inside a folder background shows "Open with Antigravity".

> [!NOTE]
> On Windows 11, you may need to click "Show more options" at the bottom of the context menu to see "Open with Antigravity" if you are using the new simplified menu.
