node -v > c:\Users\Y357882\nver.txt
$NodeVer = Get-Content -Path c:\Users\Y357882\nver.txt
$servername=$args[0]
echo "to jest $servername"
write-host "If this script were really going to do something, it would do it on $servername in the environment"
echo C $NodeVer