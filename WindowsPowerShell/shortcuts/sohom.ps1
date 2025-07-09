pm2 kill;
$proj = "c:\Users\Y357882\Projects\SOHO\ca-online-soho-mobile\";
cd "$proj\mock";
pm2 start index.js --watch --name soho-mobile-backend-mock;
cd $proj;
pm2 start c:\Users\Y357882\Documents\WindowsPowerShell\runners\ecosystem.soho-mobile.front.config.json;
vx
