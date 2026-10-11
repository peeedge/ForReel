@echo off
rem Stops dev servers started from this repo and any Node server on port 3000. Extra arguments go to scripts\stop-dev.ps1, e.g. stop.cmd -DryRun
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\stop-dev.ps1" %*
