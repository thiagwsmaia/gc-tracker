$ErrorActionPreference = "Stop"

$AppRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$Desktop = [Environment]::GetFolderPath("Desktop")
$ShortcutPath = Join-Path $Desktop "GC Tracker.lnk"
$Launcher = Join-Path $AppRoot "abrir-gc-tracker.vbs"
$Icon = Join-Path $AppRoot "assets\icons\gc-tracker-jin.ico"

$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($ShortcutPath)
$shortcut.TargetPath = $Launcher
$shortcut.WorkingDirectory = $AppRoot
$shortcut.IconLocation = $Icon
$shortcut.Description = "Abrir GC Tracker"
$shortcut.Save()

Write-Host "Atalho criado em: $ShortcutPath"
