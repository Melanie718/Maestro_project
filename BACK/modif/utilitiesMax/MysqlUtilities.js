//import a la lib mysql 
const mysql = require('mysql');

///////////////////////////////////////////////
/////////////////////////////////////////
//Config connexion à la base de donnée
//changer la config
const config = {
    host : 'localhost',
   user : 'jojo', 
   password : '020000',
   database : 'maestro', 
};

class MysqlUtilities{

//////////////////////////////////////////////////////////
//Partie utilisateur : ////////////////////////////////////
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
    //Voir Tout les utilisateur :

    //Récupère tout les utilisateurs :
    // getUtilisateur(callback){
    //     //On définis la connexion
    //     var connection = mysql.createConnection(config)
    //     //On lance la connexion
    //     connection.connect()
    //     //On envoi la query
    //     connection.query('SELECT * from utilisateur', (error, results) => {
    //         callback(results,error) 
    //         })
    //     //On ferme la connexion
    //     connection.end()
    //     }

    //////////////////////////////////////////////////////////       
    // // partie ajouter des utilisateur :
    // sendUtilisateur(callback,user){
    //     var connection = mysql.createConnection(config)
    //     //On lance la connexion
    //     connection.connect()
    //     //On envoi la query
    //     connection.query('INSERT INTO utilisateur (nom,prenom,pseudo,mail,mdp,type) VALUES (?,?,?,?,?,?)',[user.nom,user.prenom,user.pseudo,user.mail,user.mdp,user.type],(error, results) => {
    //         callback(results,error) 
    //     })
    //     //On ferme la connexion
    //     connection.end()
    //     }    


//////////////////////////////////////////////////////////
//Partie admin : ////////////////////////////////////////
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
    //Voir Tout les admins :

    //Récupère tout les admins :
    getAdmin(callback){
        //On définis la connexion
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('SELECT * from admin', (error, results) => {
            callback(results,error) 
            })
        //On ferme la connexion
        connection.end()
        }



    //////////////////////////////////////////////////////////       
    // ajouter des admin :
    sendAdmin(callback,user){
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('INSERT INTO admin (nom,prenom,pseudo,mail,mdp) VALUES (?,?,?,?,?)',[user.nom,user.prenom,user.pseudo,user.mail,user.mdp],(error, results) => {
            callback(results,error) 
        })
        //On ferme la connexion
        connection.end()
        }            




    ////////////////////////////////////////////////////////// 
    // supprimer des admin :
    deleteAdmin(callback,user){
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('DELETE FROM admin WHERE idAdm = ?',[user],(error, results) => {
        callback(results,error) 
        })
        //On ferme la connexion
        connection.end()
    }    
    
    ////////////////////////////////////////////////////////// 
    // partie modifier des admin :
    updateAdmin(callback,user){
        console.log(user)
    var connection = mysql.createConnection(config)
    //On lance la connexion
    connection.connect()
    //On envoi la query
    connection.query('UPDATE admin SET nom = ?, prenom = ?, pseudo = ?, mail = ?, mdp = ? WHERE admin.idAdm = ?',[user.nom,user.prenom,user.pseudo,user.mail,user.mdp,user.idAdm],(error, results) => {
        callback(results,error) 
    })
    //On ferme la connexion
    connection.end()
    }    





//////////////////////////////////////////////////////////
//Partie enseignant : ///////////////////////////////////
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
    //Voir Tout les enseignants :

    //Récupère tout les enseignants :
    getEnseignant(callback){
        //On définis la connexion
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('SELECT * from enseignant', (error, results) => {
            callback(results,error) 
            })
        //On ferme la connexion
        connection.end()
        }

    //////////////////////////////////////////////////////////       
    // partie ajouter des enseignants :
    sendEnseignant(callback,user){
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('INSERT INTO enseignant (nom,prenom,pseudo,mail,mdp) VALUES (?,?,?,?,?)',[user.nom,user.prenom,user.pseudo,user.mail,user.mdp],(error, results) => {
            callback(results,error) 
        })
        //On ferme la connexion
        connection.end()
        }           



    ////////////////////////////////////////////////////////// 
    // supprimer des Enseignant :
    deleteEnseignant(callback,user){
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('DELETE FROM enseignant WHERE idEns = ?',[user],(error, results) => {
        callback(results,error) 
        })
        //On ferme la connexion
        connection.end()
    }    



 ////////////////////////////////////////////////////////// 
    // partie modifier des enseigants :
    updateEnseignant(callback,user){
        console.log(user)
    var connection = mysql.createConnection(config)
    //On lance la connexion
    connection.connect()
    //On envoi la query
    connection.query('UPDATE enseignant SET nom = ?, prenom = ?, pseudo = ?, mail = ?, mdp = ? WHERE enseignant.idEns = ?',[user.nom,user.prenom,user.pseudo,user.mail,user.mdp,user.idEns],(error, results) => {
        //             UPDATE `personnes` SET `prenom` = 'fe', `nom` = 'zef' WHERE `personnes`.`id_p` = 2
        callback(results,error) 
    })
    //On ferme la connexion
    connection.end()
    }            




//////////////////////////////////////////////////////////
//Partie apprenant : ////////////////////////////////////
////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
    //Voir Tout les apprenant :

    //Récupère tout les apprenant :
    getApprenant(callback){
        //On définis la connexion
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('SELECT * from apprenant', (error, results) => {
            callback(results,error) 
            })
        //On ferme la connexion
        connection.end()
        }


    //////////////////////////////////////////////////////////       
    // partie ajouter des apprenant :
    sendApprenant(callback,user){
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('INSERT INTO apprenant (nom,prenom,pseudo,mail,mdp,score,tauxUtiliser,age,genre,progression) VALUES (?,?,?,?,?,?,?,?,?,?)',[user.nom,user.prenom,user.pseudo,user.mail,user.mdp,user.score,user.tauxUtiliser,user.age,user.genre,user.progression],(error, results) => {
            callback(results,error) 
        })
        //On ferme la connexion
        connection.end()
        }   



 ////////////////////////////////////////////////////////// 
    // partie modifier des apprenant :
    // updateApprenant(callback,user){
    //     console.log(user)
    // var connection = mysql.createConnection(config)
    // //On lance la connexion
    // connection.connect()
    // //On envoi la query
    // connection.query('UPDATE apprenant SET nom = ?, prenom = ?, pseudo = ?, mail = ?, mdp = ?, score = ?, tauxUtiliser =?, age = ?, genre =?, progression = ? WHERE apprenant.idAp = ?',[user.nom,user.prenom,user.pseudo,user.mail,user.mdp,user.score,user.tauxUtiliser,user.age,user.genre,user.progression],(error, results) => {
       
    //     callback(results,error) 
    // })
    // //On ferme la connexion
    // connection.end()
    // }            


 ////////////////////////////////////////////////////////// 
    // partie modifier des enseigants :
    updateApprenant(callback,user){
        console.log(user)
    var connection = mysql.createConnection(config)
    //On lance la connexion
    connection.connect()
    //On envoi la query
    connection.query('UPDATE apprenant SET nom = ?, prenom = ?, pseudo = ?, mail = ?, mdp = ?,score = ?, tauxUtiliser = ?, age = ?, genre = ?, progression = ? WHERE apprenant.idAp = ?',[user.nom,user.prenom,user.pseudo,user.mail,user.mdp,user.score,user.tauxUtiliser,user.age,user.genre,user.progression],(error, results) => {
        callback(results,error) 
    })
    //On ferme la connexion
    connection.end()
    }            







//////////////////////////////////////////////////////////
//Partie niveaux : ////////////////////////////////////
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
    //Voir Tout les niveaux :

    //Récupère tout les niveaux :
    getNiveau(callback){
        //On définis la connexion
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('SELECT * from niveau', (error, results) => {
            callback(results,error) 
            })
        //On ferme la connexion
        connection.end()
        }



    //////////////////////////////////////////////////////////       
    // partie ajouter des niveaux :
    sendniveau(callback,user){
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('INSERT INTO niveau (idNiv,idEns,nom,nbrUtilisation,jaime) VALUES (?,?,?,?,?) ',[user.idNiv,user.idEns,user.nom,user.nbrUtilisation,user.jaime],(error, results) => {
            callback(results,error) 
        })
        //On ferme la connexion
        connection.end()
        }    



    ////////////////////////////////////////////////////////// 
    // supprimer des niveau :
    deleteNiveau(callback,user){
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('DELETE FROM niveau WHERE idNiv = ?',[user],(error, results) => {
        callback(results,error) 
        })
        //On ferme la connexion
        connection.end()
    }    




 ////////////////////////////////////////////////////////// 
    // partie modifier des niveau :
    updateNiveau(callback,user){
        console.log(user)
    var connection = mysql.createConnection(config)
    //On lance la connexion
    connection.connect()
    //On envoi la query
    connection.query('UPDATE niveau SET idEns = ? , nom = ?, nbrUtilisation = ?, jaime = ? WHERE niveau.idNiv = ? AND niveau.idEns = ?' [user.idNiv,user.idEns,user.nom,user.nbrUtilisation,user.jaime],(error, results) => {
        callback(results,error) 
    })
    //On ferme la connexion
    connection.end()
    }            



//////////////////////////////////////////////////////////
// Partie Musique : /////////////////////////////////////
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
    //Voir Toutes les musiques :

    //Récupère toutes les musique :
    getMusique(callback){
        //On définis la connexion
        var connection = mysql.createConnection(config)
        //On lance la connexion
        connection.connect()
        //On envoi la query
        connection.query('SELECT * from musique', (error, results) => {
            callback(results,error) 
            })
        //On ferme la connexion
        connection.end()
        }
}


//module pour exporté la fonction MysqlUtilities() dans app.js et ne pas oublié de le récupéré dans le fichier app.js
module.exports = new MysqlUtilities()    
    

