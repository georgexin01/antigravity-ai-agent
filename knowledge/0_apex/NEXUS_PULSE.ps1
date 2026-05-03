# NEXUS_PULSE.ps1 - V4.0 (IMPACT ENGINE)
# The Sovereign Self-Healing & Impact Engine

$ErrorActionPreference = "SilentlyContinue"
$RootPath = "C:\Users\User\.gemini\antigravity"
$RouterPath = "$RootPath\knowledge\ROUTER.idx"
$AtlasPath = "$RootPath\knowledge\ATLAS.idx"
$PulseLog = "$RootPath\memory\PULSE.idx"

Write-Host "--- NEXUS PULSE V4.0: IMPACT ENGINE INITIATED ---" -ForegroundColor Cyan

function Sync-Sovereign-Index {
    Write-Host "[🛰️] Triggering GitNexus Neural Analysis (0-Token)..." -ForegroundColor Yellow
    # Update the physical knowledge graph
    npx gitnexus analyze
    
    Write-Host "[🛰️] Discovering knowledge and skills..." -ForegroundColor Yellow
    $KnowledgeFiles = Get-ChildItem -Path "$RootPath\knowledge", "$RootPath\skills" -Recurse -File | Where-Object { $_.Extension -match "\.md|\.yaml|\.json" }
    
    $Pillars = @{ "0_apex" = @(); "1_core" = @(); "2_governance" = @(); "skills" = @(); "other" = @(); }
    
    foreach ($File in $KnowledgeFiles) {
        $RelPath = $File.FullName.Replace($RootPath, "").TrimStart("\").Replace("\", "/")
        if ($RelPath -match "ROUTER\.idx" -or $RelPath -match "ATLAS\.idx") { continue }
        
        $Content = Get-Content $File.FullName -TotalCount 20
        $Tags = @()
        foreach ($Line in $Content) {
            if ($Line -match "triggers:\s*\[(.*)\]") { $Tags += $Matches[1].Replace('"', '').Replace("'", "").Split(",") }
            elseif ($Line -match "name:\s*(.*)") { $Tags += $Matches[1].Trim() }
        }
        $TagStr = ($Tags | Select-Object { $_ -ne $null } | ForEach-Object { $_.Trim() } | Select-Object -Unique) -join ","
        if (-not $TagStr) { $TagStr = $File.BaseName }
        $Entry = "$RelPath=$TagStr"
        
        if ($RelPath -match "/0_apex/") { $Pillars["0_apex"] += $Entry }
        elseif ($RelPath -match "/1_core/") { $Pillars["1_core"] += $Entry }
        elseif ($RelPath -match "/2_governance/") { $Pillars["2_governance"] += $Entry }
        elseif ($RelPath -match "^skills/") { $Pillars["skills"] += $Entry }
        else { $Pillars["other"] += $Entry }
    }
    
    $AtlasOut = @("# PILLAR 0: APEX (KERNEL)", $Pillars["0_apex"], "", "# PILLAR 1: CORE (DNA)", $Pillars["1_core"], "", "# PILLAR 2: GOVERNANCE", $Pillars["2_governance"], "", "# PILLAR 3: SKILLS", $Pillars["skills"], "", "# MEMORY & VITALS", "memory/SYNTHESIS_LOG.json=synthesis,log,feedback", "memory/SESSION_SHADOW.json=shadow,memory", "memory/PULSE.idx=pulse,vitals")
    $AtlasOut | Out-File -FilePath $AtlasPath -Encoding utf8
    ($Pillars["0_apex"] + $Pillars["1_core"] + ($Pillars["skills"] | Where-Object { $_ -match "SKILL.md" })) | Out-File -FilePath $RouterPath -Encoding utf8
    
    Write-Host "[🟢] IMPACT ENGINE READY. INDEXES SYNCHRONIZED." -ForegroundColor Green
}

Sync-Sovereign-Index
$Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
"TIMESTAMP: $Timestamp | STATUS: IMPACT_ENGINE_ACTIVE | ENGINE: NEXUS V4.0" | Out-File -FilePath $PulseLog -Append
Write-Host "--- NEXUS PULSE COMPLETE ---"
