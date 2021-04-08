//import a la lib mysql
const mysql = require('mysql');

//Config connexion à la base de donnée
const config =
{
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'maestro' //A DETERMINER
};

class MysqlUtilities
{
    listerApprenant(callback)
    {
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`SELECT nom,prenom,pseudo,idAp FROM apprenant`, (error, results) => {
            callback(results, error);
        });
        connection.end();
    }

    creerApprenant(nouveauApprenant,callback)
    {
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`INSERT INTO apprenant(nom, prenom, pseudo, mail,mdp,age,genre) VALUES (?,?,?,?,?,?,?)`,[nouveauApprenant.nom, nouveauApprenant.prenom, nouveauApprenant.pseudo, nouveauApprenant.mail, nouveauApprenant.mdp, nouveauApprenant.age, nouveauApprenant.genre] , (error, result) => {
            callback(result, error);
        });
        connection.end();
    }

    supprimerApprenant(pIdAp,callback)
    {
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`DELETE FROM apprenant WHERE idAp=?`,[pIdAp.idAp] , (error, result) => {
            console.log("ICICICICICI",pIdAp.idAp ,pIdAp )
            callback(result, error);
        });
        connection.end();
    }
}

module.exports = new MysqlUtilities();