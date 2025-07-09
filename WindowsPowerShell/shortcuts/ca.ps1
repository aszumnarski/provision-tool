pm2 kill;
$proj = "c:\Users\Y357882\Projects\ca-online-mobile\";
cd "$proj\mock";
pm2 start index.js --watch --name ca-backend-mock;
cd $proj;
pm2 start c:\Users\Y357882\Documents\WindowsPowerShell\runners\ecosystem.ca.front.config.json;
vx
