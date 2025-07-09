pm2 kill;
$proj = "c:\Users\cdeez\Projects\pizza-game\";
cd $proj;
pm2 start 'node_modules/vite/bin/vite.js' --name pizza;
vx
