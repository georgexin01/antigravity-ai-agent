# Temporary script to peek at vault structure
Add-Type -AssemblyName System.Security
$vaultPath = "C:\Users\User\.gemini\antigravity\vault\secrets.bin"
$encryptedContent = Get-Content $vaultPath -Raw
$secureString = $encryptedContent | ConvertTo-SecureString
$ptr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureString)
$plaintextJson = [System.Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
[System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)
$plaintextJson | Out-File -FilePath "c:\Users\User\.gemini\antigravity\vault\vault_peek.json"
