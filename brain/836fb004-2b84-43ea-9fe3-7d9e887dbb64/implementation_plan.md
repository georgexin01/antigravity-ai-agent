# Add "Open with Antigravity" to Context Menu (Silent Mode)

This plan updates the context menu shortcut to run Antigravity in the background using a hidden PowerShell window, preventing terminal popups from interrupting the user.

## Proposed Changes

### [Component Name] Registry Modifications (Silent)

We will update the registry keys to wrap the execution in `powershell.exe -WindowStyle Hidden`.

#### [MODIFY] [antigravity_context_menu.reg](file:///C:/Users/user/.gemini/antigravity/scratch/antigravity_context_menu.reg)

Updated to use silent invocation:

- Use `powershell.exe -WindowStyle Hidden -Command ...` for all commands.
- Ensure correct escaping for paths and arguments.

**Executable Path:** `C:\Users\user\AppData\Local\Programs\Antigravity\Antigravity.exe`
**Icon Path:** `C:\Users\user\AppData\Local\Programs\Antigravity\resources\app\resources\win32\default.ico`

## Verification Plan

### Automated Verification

- Run `reg query` to ensure the new `powershell` wrappers are correctly imported.

### Manual Verification

1.  Right-click on a file and select "Open with Antigravity". Verify NO terminal window flashes or stays open.
2.  Repeat for folders and background.
