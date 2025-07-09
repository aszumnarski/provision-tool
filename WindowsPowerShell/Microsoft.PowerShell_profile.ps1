Set-Alias n10 c:\Users\cdeez\Documents\WindowsPowerShell\n10.ps1
Set-Alias n14 c:\Users\cdeez\Documents\WindowsPowerShell\n14.ps1
Set-Alias n16 c:\Users\cdeez\Documents\WindowsPowerShell\n16.ps1
Set-Alias g c:\Users\cdeez\Documents\WindowsPowerShell\g.ps1
Set-Alias o c:\Users\cdeez\Documents\WindowsPowerShell\o.ps1
Set-Alias v c:\Users\cdeez\Documents\WindowsPowerShell\v.ps1
Set-Alias s c:\Users\cdeez\Documents\WindowsPowerShell\s.ps1
Set-Alias pl c:\Users\cdeez\Documents\WindowsPowerShell\pl.ps1
Set-Alias gb c:\Users\cdeez\Documents\WindowsPowerShell\gb.ps1
Set-Alias gpu c:\Users\cdeez\Documents\WindowsPowerShell\gpu.ps1
Set-Alias gg c:\Users\cdeez\Documents\WindowsPowerShell\gg.ps1
Set-Alias gfp c:\Users\cdeez\Documents\WindowsPowerShell\gfp.ps1
Set-Alias grep rg
Set-Alias c "cd ~"

function Fuzzy-Find { & cd ~/Projects; gci -Name -Recurse -Directory -Depth 1 | % { $_ -replace "\\", "/" } | fzf | cd }
New-Alias -Name ff -Value Fuzzy-Find -Force -Option AllScope

function Fuzzy-Find-All { & gci -Name -Recurse -Directory -Depth 2 | % { $_ -replace "\\", "/" } | fzf | cd }
New-Alias -Name fa -Value Fuzzy-Find-All -Force -Option AllScope

function Get-GitAdd { & git add -- $args }
New-Alias -Name ga -Value Get-GitAdd -Force -Option AllScope

function List-All { & eza -la }
New-Alias -Name l -Value List-All -Force -Option AllScope

function Get-Vx { & neovide $args --no-srgb --no-tabs --no-vsync }
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

function Pm2-Kill { & pm2 kill }
New-Alias -Name pk -Value Pm2-Kill -Force -Option AllScope


Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete

Invoke-Expression (& { (zoxide init powershell | Out-String) })
Invoke-Expression (&starship init powershell)

# Import the Chocolatey Profile that contains the necessary code to enable
# tab-completions to function for `choco`.
# Be aware that if you are missing these lines from your profile, tab completion
# for `choco` will not function.
# See https://ch0.co/tab-completion for details.
$ChocolateyProfile = "$env:ChocolateyInstall\helpers\chocolateyProfile.psm1"
if (Test-Path($ChocolateyProfile)) {
  Import-Module "$ChocolateyProfile"
}
