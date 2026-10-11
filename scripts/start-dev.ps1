<#
.SYNOPSIS
  Bootstraps and starts the local Next.js dev server for this repo.

.DESCRIPTION
  Checks the Node.js version, stops any dev server already running for this repo or holding the
  port, installs dependencies when node_modules is missing or older than package-lock.json, then
  runs `next dev` in the foreground. Press Ctrl+C to stop it, or run ./scripts/stop-dev.ps1 from another terminal.

.PARAMETER Port
  Port to serve on. Defaults to 3000.

.PARAMETER Open
  Open the site in the default browser once the server responds.

.PARAMETER SkipInstall
  Never run `npm ci`, even if dependencies look out of date.

.EXAMPLE
  ./scripts/start-dev.ps1
  ./scripts/start-dev.ps1 -Port 3100 -Open
#>
param(
  [int]$Port = 3000,
  [switch]$Open,
  [switch]$SkipInstall
)

$ErrorActionPreference = "Stop"
$repo = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$minimumNode = [version]"20.9.0"

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Error "Node.js was not found on PATH. Install Node $minimumNode or newer from https://nodejs.org."
}
$nodeVersion = [version]((& node --version).TrimStart("v"))
if ($nodeVersion -lt $minimumNode) {
  Write-Error "Node $nodeVersion is too old; Next.js needs $minimumNode or newer."
}
Write-Host "Using Node $nodeVersion"

Push-Location $repo
try {
  # Stop first: a running server keeps files in node_modules locked, which makes `npm ci` fail on Windows.
  & (Join-Path $PSScriptRoot "stop-dev.ps1") -Port $Port

  $installedLock = Join-Path $repo "node_modules/.package-lock.json"
  $lockFile = Join-Path $repo "package-lock.json"
  $stale = -not (Test-Path $installedLock) -or
    ((Get-Item $lockFile).LastWriteTimeUtc -gt (Get-Item $installedLock).LastWriteTimeUtc)

  if ($stale -and -not $SkipInstall) {
    Write-Host "Installing dependencies (npm ci)..."
    & npm ci
    if ($LASTEXITCODE -ne 0) { Write-Error "npm ci failed with exit code $LASTEXITCODE." }
  }

  $url = "http://localhost:$Port"
  if ($Open) {
    # Polls in a separate process because `next dev` below holds this one until it exits.
    Start-Job -ArgumentList $url -ScriptBlock {
      param($url)
      for ($i = 0; $i -lt 120; $i++) {
        try {
          Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 5 | Out-Null
          Start-Process $url
          return
        } catch { Start-Sleep -Seconds 1 }
      }
    } | Out-Null
  }

  Write-Host "Starting dev server at $url (Ctrl+C to stop)"
  & npm run dev -- --port $Port
  exit $LASTEXITCODE
}
finally {
  Pop-Location
}
