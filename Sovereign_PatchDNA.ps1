# Sovereign_PatchDNA.ps1
# VERSION: 1.0 (Evolution Core)
# PURPOSE: Surgically update a single key-value block in a YAML DNA file without overwriting.

param(
    [Parameter(Mandatory=$true)]
    [string]$TargetFile,
    
    [Parameter(Mandatory=$true)]
    [string]$Key,
    
    [Parameter(Mandatory=$true)]
    [string]$NewValueYaml
)

if (-not (Test-Path $TargetFile)) {
    Write-Error "Target DNA file not found: $TargetFile"
    exit 1
}

# 1. Validation (Schema Check - Step 1/2)
if ($NewValueYaml -notmatch ":") {
    Write-Error "NewValueYaml must be a valid key-value structure."
    exit 1
}

# 2. Archival Snapshot (Step 6/12)
$Timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$SnapshotDir = "C:\Users\User\.gemini\antigravity\governance\history"
Copy-Item $TargetFile (Join-Path $SnapshotDir "$((Split-Path $TargetFile -Leaf))_$Timestamp.bak")

# 3. Simple Atomic Replacement
# Note: For production, we'd use a YAML parser. Here we use an atomic Rewrite for safety.
$Content = Get-Content $TargetFile -Raw
$Pattern = "(?s)($Key:\s*.*?\n)(?=\w+:|\Z)"

# If key exists, replace. If not, append.
if ($Content -match $Pattern) {
    $NewContent = $Content -replace $Pattern, "$NewValueYaml`n"
} else {
    $NewContent = $Content + "`n$NewValueYaml`n"
}

$NewContent | Set-Content $TargetFile -Force

Write-Host "SUCCESS: $Key patched into $TargetFile"
Write-Host "SNAPSHOT SAVED TO: $SnapshotDir"
