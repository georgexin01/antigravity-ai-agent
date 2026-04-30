# Get-ProjectPulse.ps1
# VERSION: 1.0 (The Observational Eye)
# PURPOSE: Automatically detects project type, maturity, and info-type.

$ProjectPath = "C:\Users\User\OneDrive\Desktop\workspace" # Default workspace
Write-Host "SCANNING PROJECT PULSE: $ProjectPath" -ForegroundColor Cyan

$Pulse = @{
    stack = @()
    type = "Unknown"
    maturity = "Seed"
    files = 0
}

# 1. Detect Stack
if (Test-Path "$ProjectPath\package.json") {
    $Pulse.stack += "Node.js"
    $pkg = Get-Content "$ProjectPath\package.json" | ConvertFrom-Json
    if ($pkg.dependencies.vue) { $Pulse.stack += "Vue.js" }
    if ($pkg.dependencies.next) { $Pulse.stack += "Next.js" }
}

# 2. Detect Complexity
$Files = Get-ChildItem -Path $ProjectPath -Recurse -File
$Pulse.files = $Files.Count
if ($Pulse.files -gt 50) { $Pulse.maturity = "Scaling" }
if ($Pulse.files -gt 200) { $Pulse.maturity = "Legacy/Enterprise" }

# 3. Detect Info-Type
if (Test-Path "$ProjectPath\src\api") { $Pulse.type = "Full-Stack / API centric" }
elseif (Test-Path "$ProjectPath\index.html") { $Pulse.type = "Marketing / Static Asset" }

Write-Host "--- PULSE RESULT ---" -ForegroundColor Green
$Pulse | ConvertTo-Json
return $Pulse
