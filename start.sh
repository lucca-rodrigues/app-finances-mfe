echo "============================>"
echo "AUTOMATIZATION"
echo "============================>"


cd app-finances-root
npm i
pm2 start ecosystem.config.js

echo "============================"
echo "Finances Root Started"
echo "============================"


cd ../app-my-account
npm i
pm2 start ecosystem.config.js

echo "============================"
echo "My Account Started"
echo "============================"


cd ../app-transactions
npm i
pm2 start ecosystem.config.js

echo "============================"
echo "Transactions Started"
echo "============================"


echo "============================>"
echo "   AUTOMATIZATION FINISHED"
echo "============================>"