#! /bin/bash
#run as sudo
currentDir=$(pwd)

apt install apache2 -y
rm /var/www/html/index.html
cp $currentDir/Apache/* /var/www/html/

apt install nodejs -y
apt install npm -y

(crontab -l 2>/dev/null; echo "@reboot sh $currentDir/Node/serverStart.sh") | crontab -
./serverStart.sh
