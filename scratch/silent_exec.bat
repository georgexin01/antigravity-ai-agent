@echo off
if "%~1"=="" (
    echo No command provided.
    exit /b 1
)
powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process cmd.exe -ArgumentList '/c %*' -WindowStyle Hidden"
