pm2 kill;
$proj = "c:\Users\Y357882\Projects\SOHO\ca-online-soho-rwd\";
cd "$proj\mock";
pm2 start index.js --watch --name soho-rwd-backend-mock;
cd $proj;
pm2 start c:\Users\Y357882\Documents\WindowsPowerShell\runners\ecosystem.soho-rwd.front.config.json;
vx
