$mike = Get-ChildItem -Path "c:\Users\cdeez\Documents\WindowsPowerShell\shortcuts\" -Name 
$array = "`n--------------------------------------`n`n"
Foreach ($key in $mike) {
    $key = $key.Replace(".ps1", "")
    $array += " > $key `n"
 }
$array += "`n--------------------------------------`n"
echo $array | lolcat
