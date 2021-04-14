# Maestro_project

1_Consigne pour la communication entre la base de donné sur la machine virtuel (VM) de l'adrar : 

Pour que la connection entre la base de donné et la page web fonctionne, il faut se connecter sur
la VM de l'adrar : 
192.168.70.36
avec l'identifiant et le mot de passe suivant :
user7
Adra7

Une fois que cela est fait, vous devez lancer l'application en vous positionnant sur le BACK avec la
ligne de commande "cd yazemmeb_maestro/BACK", puis en tapant la ligne de commande "node app.js"

Une fois cela fait, vous pouvez lancer la page visiteur depuis votre machine.

------------------------------------------------------------------------------------------------------

2_Consigne pour la communication entre la base de donné sur votre machine:

Ouvrir le dossier BACK/axios/axiosVariables.js et changer la premier ligne
"const url = 'http://192.168.70.36:3007';" en  "const url = 'http://localhost:3007';"

lancer Xampp, faite start a appach et mySql puis cliquer sur "admin". Cela devrait lancer une page
web "localhost/phpmyadmin".
Créer une base de donner avec le nom que vous désirez (exemple : "maestro").

une fois cela fait, importez le fichier database.sql sur ce site (bouton importé) //REMARQUE, CE FICHIER
N'EST PAS ENOCORE SUR LE GIT, JE LE DEPOSERAI LE 19 AVRIL 2021

Puis, dans le fichier BACK/utilities/MySqlUtilities.js, changer l'information de la database avec len nom
que vous avez donné à votre base de donné (dans l'exemple , c'était "maestro", ici nous avon "user7"
puisque c'est le nom de la base de donné de la VM de l'adrar)
const config =
{
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'user7' // ICI
};

Une fois cela fait, vous pouvez lancer la page visiteur en local! =]HF
