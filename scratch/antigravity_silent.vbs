Set shell = CreateObject("WScript.Shell")
appPath = "C:\Users\user\AppData\Local\Programs\Antigravity\Antigravity.exe"
args = ""
If WScript.Arguments.Count > 0 Then
    args = " """ & WScript.Arguments(0) & """"
End If
shell.Run """" & appPath & """" & args, 1, False
