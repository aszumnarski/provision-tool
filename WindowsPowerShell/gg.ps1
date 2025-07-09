git add . ;
git commit -m $args;
$currentBranchExt = $((git branch) -match "\*");
$dupa = $currentBranchExt -replace '[*]',''
$currentBranchName = $dupa.Trim();
git push --set-upstream origin $currentBranchName