
Set-Alias n10 c:\Users\Y357882\Documents\WindowsPowerShell\n10.ps1
Set-Alias n14 c:\Users\Y357882\Documents\WindowsPowerShell\n14.ps1
Set-Alias n16 c:\Users\Y357882\Documents\WindowsPowerShell\n16.ps1
Set-Alias g c:\Users\Y357882\Documents\WindowsPowerShell\g.ps1
Set-Alias o c:\Users\Y357882\Documents\WindowsPowerShell\o.ps1
Set-Alias v c:\Users\Y357882\Documents\WindowsPowerShell\v.ps1
Set-Alias s c:\Users\Y357882\Documents\WindowsPowerShell\s.ps1
Set-Alias pl c:\Users\Y357882\Documents\WindowsPowerShell\pl.ps1
Set-Alias gb c:\Users\Y357882\Documents\WindowsPowerShell\gb.ps1
Set-Alias gpu c:\Users\Y357882\Documents\WindowsPowerShell\gpu.ps1
Set-Alias gfp c:\Users\Y357882\Documents\WindowsPowerShell\gfp.ps1
Set-Alias grep c:\Users\Y357882\Downloads\tools\chocolatey\bin\rg.exe
Set-Alias a c:\Users\Y357882\Downloads\tools\Alacritty\alacritty22.exe
Set-Alias volta "C:\Users\Y357882\Downloads\tools\Volta\volta.exe"
Set-Alias node2 "C:\Users\Y357882\Downloads\tools\Volta\node.exe"
Set-Alias npm2 "C:\Users\Y357882\Downloads\tools\Volta\npm.exe"

function Get-GitAdd { & git add -- $args } 
New-Alias -Name ga -Value Get-GitAdd -Force -Option AllScope 

function Get-Vx { & v $args --nosrgb --notabs --novsync } 
New-Alias -Name vx -Value Get-Vx -Force -Option AllScope 

function Get-Vxs { & v $args --frame=none --geometry=79x49 --nosrgb --notabs --novsync } 
New-Alias -Name vxs -Value Get-Vxs -Force -Option AllScope 

function Get-GitCommit1 { & git commit $args } 
New-Alias -Name gcc -Value Get-GitCommit1 -Force -Option AllScope 

function Get-GitCommitEdit { & git commit -ev $args } 
New-Alias -Name gce -Value Get-GitCommitEdit -Force -Option AllScope 

function Get-GitCommit { & git commit -m $args } 
New-Alias -Name gcm -Value Get-GitCommit -Force -Option AllScope 

function Get-GitFetch { & git fetch $args } 
New-Alias -Name gf -Value Get-GitFetch -Force -Option AllScope 

function Get-GitCheckout { & git checkout $args } 
New-Alias -Name gco -Value Get-GitCheckout -Force -Option AllScope 

function Get-GitCheckoutBranch { & git checkout -b $args } 
New-Alias -Name gcob -Value Get-GitCheckoutBranch -Force -Option AllScope 

Set-Alias lg lazygit

cowsay "Siema Michu" | lolcat
Invoke-Expression (& 'C:\Users\Y357882\Downloads\tools\chocolatey\lib\starship\tools\starship.exe' init powershell)
