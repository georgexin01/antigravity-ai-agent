# Audit_Workspace.ps1
# B: Quality Seal. Reviews core YAML for consistency.
Get-ChildItem -Path "C:\Users\User\.gemini\antigravity" -Filter "*.yaml" -Recurse | ForEach-Object {
    $file = $_.FullName
    $name = $_.Name
    Write-Host "Auditing: $name" -ForegroundColor Cyan
    & "C:\Users\User\.gemini\antigravity\governance\sovereign_senate.ps1" -TaskSummary "Audit $name for logic leaks"
}
