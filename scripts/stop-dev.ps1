<#
.SYNOPSIS
  Stops local Next.js servers (next dev / next start) started from this repo.

.PARAMETER Port
  Also stop whatever Node process is listening on these ports, even if it was started elsewhere.

.PARAMETER DryRun
  List matching processes without stopping them.

.EXAMPLE
  ./scripts/stop-dev.ps1
  ./scripts/stop-dev.ps1 -DryRun
  ./scripts/stop-dev.ps1 -Port 3000,3100
#>
param(
  [int[]]$Port = @(),
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$repo = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$repoPattern = [regex]::Escape($repo)

$targets = @{}

Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" |
  Where-Object { $_.CommandLine -match $repoPattern -and $_.CommandLine -match "next" } |
  ForEach-Object { $targets[[int]$_.ProcessId] = $_.CommandLine }

foreach ($p in $Port) {
  Get-NetTCPConnection -State Listen -LocalPort $p -ErrorAction SilentlyContinue |
    Select-Object -ExpandProperty OwningProcess -Unique |
    ForEach-Object {
      $proc = Get-CimInstance Win32_Process -Filter "ProcessId = $_"
      if ($proc -and $proc.Name -eq "node.exe") { $targets[[int]$proc.ProcessId] = $proc.CommandLine }
    }
}

if ($targets.Count -eq 0) {
  Write-Host "No local dev servers found for $repo."
  exit 0
}

foreach ($id in $targets.Keys) {
  $ports = (Get-NetTCPConnection -State Listen -OwningProcess $id -ErrorAction SilentlyContinue |
    Select-Object -ExpandProperty LocalPort -Unique) -join ","
  $label = if ($ports) { "PID $id (port $ports)" } else { "PID $id" }

  if ($DryRun) {
    Write-Host "Would stop $label`n  $($targets[$id])"
    continue
  }

  # /T also stops child processes, e.g. the server that `next dev` spawns.
  & taskkill.exe /PID $id /T /F *> $null
  if ($LASTEXITCODE -eq 0) { Write-Host "Stopped $label" }
  elseif (-not (Get-Process -Id $id -ErrorAction SilentlyContinue)) { Write-Host "Already gone: $label" }
  else { Write-Warning "Could not stop $label (exit code $LASTEXITCODE)" }
}
