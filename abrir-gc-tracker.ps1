$ErrorActionPreference = "SilentlyContinue"

$AppRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$Electron = Join-Path $AppRoot "node_modules\.bin\electron.cmd"

if (Test-Path $Electron) {
  Start-Process -WindowStyle Hidden -FilePath $Electron -ArgumentList @(".") -WorkingDirectory $AppRoot
  exit
}

$Port = 4177
$Url = "http://127.0.0.1:$Port/?v=20260803-items-scroll"

$server = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
if (-not $server) {
  $python = Get-Command python
  if (-not $python) {
    $python = Get-Command py
  }

  if ($python) {
    Start-Process -WindowStyle Hidden -FilePath $python.Source -ArgumentList @("-m", "http.server", "$Port", "--bind", "127.0.0.1") -WorkingDirectory $AppRoot
    Start-Sleep -Milliseconds 700
  }
}

Start-Process $Url
