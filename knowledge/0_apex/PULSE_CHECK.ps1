# PULSE_CHECK.ps1 - V1.0
# Validates all paths in ROUTER.idx and ATLAS.idx

$ErrorActionPreference = "SilentlyContinue"
$RootPath = "C:\Users\User\.gemini\antigravity"
$RouterPath = "$RootPath\knowledge\ROUTER.idx"
$AtlasPath = "$RootPath\knowledge\ATLAS.idx"

Write-Host "--- PULSE CHECK INITIATED ---" -ForegroundColor Cyan

function Validate-Index($Path) {
    $Lines = Get-Content $Path
    $Total = 0
    $Broken = 0
    
    foreach ($Line in $Lines) {
        if ($Line -match "=") {
            $Total++
            $FilePart = $Line.Split("=")[0]
            $FullPath = Join-Path $RootPath $FilePart
            
            if (-not (Test-Path $FullPath)) {
                Write-Host "[❌] BROKEN PATH: $FilePart" -ForegroundColor Red
                $Broken++
            }
        }
    }
    
    Write-Host "Checked $Path`: $Total total, $Broken broken."
    return $Broken
}

$BrokenCount = 0
$BrokenCount += Validate-Index $RouterPath
$BrokenCount += Validate-Index $AtlasPath

if ($BrokenCount -eq 0) {
    Write-Host "[🟢] SYSTEM PULSE: STEADY (All Paths Validated)" -ForegroundColor Green
} else {
    Write-Host "[⚠️] SYSTEM PULSE: IRREGULAR ($BrokenCount errors found)" -ForegroundColor Yellow
}
