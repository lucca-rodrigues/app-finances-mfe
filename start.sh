echo "============================>"
echo "AUTOMATIZATION"
echo "============================>"


echo "============================"
echo "Finances Root Started"
echo "============================"
cd app-finances-root
npm i
npm run build
pm2 start ecosystem.config.js



echo "============================"
echo "My Account Started"
echo "============================"
cd ../app-my-account
npm i
npm run build
pm2 start ecosystem.config.js



echo "============================"
echo "Transactions Started"
echo "============================"
cd ../app-transactions
npm i
npm run build
pm2 start ecosystem.config.js



echo "============================>"
echo "   AUTOMATIZATION FINISHED"
echo "============================>"