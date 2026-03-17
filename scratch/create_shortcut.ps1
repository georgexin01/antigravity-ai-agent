$WshShell = New-Object -ComObject WScript.Shell
$DesktopPath = [System.Environment]::GetFolderPath('Desktop')
$Shortcut = $WshShell.CreateShortcut("$DesktopPath\Silent Runner.lnk")
$Shortcut.TargetPath = "powershell.exe"
$Shortcut.Arguments = "-NoProfile -ExecutionPolicy Bypass -Command `"$command = Read-Host 'Enter command to run silently'; if ($command) { Start-Process cmd.exe -ArgumentList '/c ' + $command -WindowStyle Hidden }`""
$Shortcut.IconLocation = "powershell.exe,0"
$Shortcut.Description = "Run any command silently"
$Shortcut.Save()
