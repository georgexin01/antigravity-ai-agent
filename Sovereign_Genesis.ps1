# 🌌 SOVEREIGN GENESIS BOOTSTRAP (V1.0)
# Purpose: Total System Resurrection (0% to 100%)
# Usage: .\Sovereign_Genesis.ps1

$ErrorActionPreference = "Stop"

Write-Host "🌌 INITIALIZING SOVEREIGN GENESIS..." -ForegroundColor Cyan

# 1. SCAFFOLD SKELETON
$directories = @(
    "knowledge/0_apex",
    "knowledge/1_core",
    "knowledge/2_governance",
    "skills/claude",
    "skills/normal",
    "skills/faucet",
    "vault",
    "memory/snapshot"
)

foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -Path $dir -ItemType Directory -Force | Out-Null
        Write-Host "🐣 Created Directory: $dir" -ForegroundColor Green
    }
}

# 2. VERIFY CORE DNA
$coreFiles = @(
    "knowledge/0_apex/GROUND_KERNEL.md",
    "knowledge/ROUTER.idx",
    "knowledge/ATLAS.idx",
    "GENESIS_SEED.yaml"
)

foreach ($file in $coreFiles) {
    if (Test-Path $file) {
        Write-Host "🧬 DNA Verified: $file" -ForegroundColor Green
    } else {
        Write-Warning "🚨 DNA MISSING: $file. Please restore from GitHub."
    }
}

# 3. INITIALIZE MEMORY (COLD START)
$memoryFiles = @(
    "memory/snapshot/SNAPSHOT_MASTER.idx",
    "memory/PULSE.idx"
)

foreach ($file in $memoryFiles) {
    if (!(Test-Path $file)) {
        New-Item -Path $file -ItemType File -Force | Out-Null
        Write-Host "🍼 Initialized Memory Node: $file" -ForegroundColor Yellow
    }
}

Write-Host "🚀 GENESIS SKELETON COMPLETE." -ForegroundColor Cyan
Write-Host "👉 NEXT STEP: Tell the AI 'ai read .gemini' to complete hydration." -ForegroundColor White
