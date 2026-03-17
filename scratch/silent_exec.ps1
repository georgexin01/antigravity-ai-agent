param(
    [string]$Command
)

if (-not $Command) {
    Write-Error "No command provided."
    exit 1
}

Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -Command $Command" -WindowStyle Hidden
