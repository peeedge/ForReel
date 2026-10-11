@echo off
rem Installs dependencies if needed and starts the dev server. Extra arguments go to scripts\start-dev.ps1, e.g. start.cmd -Port 3100 -Open
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\start-dev.ps1" %*
