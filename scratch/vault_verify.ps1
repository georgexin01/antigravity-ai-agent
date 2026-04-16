# Vault Verify (V1.0)
$vaultPath = "C:\Users\User\.gemini\antigravity\vault\secrets.bin"
$encryptedContent = Get-Content $vaultPath -Raw
$secureString = $encryptedContent | ConvertTo-SecureString
$ptr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureString)
$plaintextJson = [System.Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
[System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)
$vault = $plaintextJson | ConvertFrom-Json
$vault | ConvertTo-Json
