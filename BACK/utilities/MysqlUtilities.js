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
    //  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
    //                                  APPRENANTS                                  //
    //  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //


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
            callback(result, error);
        });
        connection.end();
    }

    recupererApprenant(pIdAp, callback)
    {
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`SELECT * FROM apprenant WHERE idAp=?`, [pIdAp.idAp], (error, results) => {
            callback(results, error);
        });
        connection.end();
    }
    modifierApprenant(apprenantModifier,callback)
    {
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`UPDATE apprenant SET nom= (?), prenom= (?), pseudo= (?), mail= (?),mdp= (?),age= (?),genre= (?) WHERE idAp=?`,[apprenantModifier.nom, apprenantModifier.prenom, apprenantModifier.pseudo, apprenantModifier.mail,apprenantModifier.mdp,apprenantModifier.age,apprenantModifier.genre, apprenantModifier.idAp] , (error, result) => {
            callback(result, error);
        });
        connection.end();
    }
    //  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
    //                                  ENSIGNANTS                                  //
    //  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
    listerEnseignant(callback)
    {
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`SELECT nom,prenom,pseudo,idEns FROM enseignant`, (error, results) => {
            callback(results, error);
        });
        connection.end();
    }
    creerEnseignant(nouveauEnseignant,callback)
    {
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`INSERT INTO enseignant(nom, prenom, pseudo, mail,mdp) VALUES (?,?,?,?,?)`,[nouveauEnseignant.nom, nouveauEnseignant.prenom, nouveauEnseignant.pseudo, nouveauEnseignant.mail, nouveauEnseignant.mdp] , (error, result) => {
            callback(result, error);
        });
        connection.end();
    }
    
    supprimerEnseignant(pIdEns,callback)
    {
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`DELETE FROM enseignant WHERE idEns=?`,[pIdEns.idEns] , (error, result) => {
            callback(result, error);
        });
        connection.end();
    }

    recupererEnseignant(pIdEns, callback)
    {
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`SELECT * FROM enseignant WHERE idEns=?`, [pIdEns.idEns], (error, results) => {
            callback(results, error);
        });
        connection.end();
    }
    modifierEnseignant(enseignantModifier,callback)
    {
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query(`UPDATE enseignant SET nom= (?), prenom= (?), pseudo= (?), mail= (?),mdp= (?) WHERE idEns=?`,[enseignantModifier.nom, enseignantModifier.prenom, enseignantModifier.pseudo, enseignantModifier.mail,enseignantModifier.mdp, enseignantModifier.idEns] , (error, result) => {
            callback(result, error);
        });
        connection.end();
    }
}

module.exports = new MysqlUtilities();