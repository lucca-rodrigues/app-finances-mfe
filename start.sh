echo "============================>"
echo "AUTOMATIZATION"
echo "============================>"

echo "============================"
echo "Transactions Started"
echo "============================"
cd ./app-transactions
# npm i
npm run build
cd build
# pm2 start ecosystem.config.js
pm2 start npm --name "app-transactions" -- run start --watch



echo "============================"
echo "My Account Started"
echo "============================"
cd ../app-my-account
# npm i
npm run build
cd build
# pm2 start ecosystem.config.js
pm2 start npm --name "app-account" -- run start --watch


echo "============================"
echo "Finances Root Started"
echo "============================"
cd ../app-finances-root
# npm i
npm run build
cd build
pm2 start npm --name "root" -- run start --watch


echo "============================>"
echo "   AUTOMATIZATION FINISHED"
echo "============================>"