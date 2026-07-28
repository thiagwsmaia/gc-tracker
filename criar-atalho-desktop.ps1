$ErrorActionPreference = "Stop"

$AppRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$Desktop = [Environment]::GetFolderPath("Desktop")
$ShortcutPath = Join-Path $Desktop "GC Tracker.lnk"
$Launcher = Join-Path $AppRoot "abrir-gc-tracker.vbs"
$BuiltExe = Join-Path $AppRoot "dist\win-unpacked\GC Tracker.exe"
$Icon = Join-Path $AppRoot "assets\icons\gc-tracker-jin.ico"

$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($ShortcutPath)
if (Test-Path $BuiltExe) {
  $shortcut.TargetPath = $BuiltExe
  $shortcut.WorkingDirectory = Split-Path -Parent $BuiltExe
} else {
  $shortcut.TargetPath = $Launcher
  $shortcut.WorkingDirectory = $AppRoot
}
$shortcut.IconLocation = $Icon
$shortcut.Description = "Abrir GC Tracker"
$shortcut.Save()

Write-Host "Atalho criado em: $ShortcutPath"
