// import des librairies :
const express = require('express') 
const bodyParser = require('body-parser')
const app = express() 
app.use(bodyParser.json());

// choix du port
const port = 3007         

// import de la syntaxe MYSQL :
const mysqlUtilities = require('./utilities/MysqlUtilities.js')

//import des Classes :
// const Utilisateur = require('./beans/utilisateur')
const Admin = require('./beans/admin')
const Apprenant = require('./beans/apprenant');
const Enseignant = require('./beans/enseignant');
const Musique = require('./beans/musique');
const Niveau = require('./beans/niveau');


///////////////////////////////////////////////
// voir tout les utilisateurs :
// app.get('/utilisateur', 
//     (req, res) => { 
//         console.log("La liste de tout les utilisateurs /") 
//         mysqlUtilities.getUtilisateur((result,error) => { 
            
//         if (!error){ 
//             res.send(result)
//             console.log(result) 
//             }else{ 
//             res.status(500).send(error) 
//         } 
//     }) 
// })



// ///////////////////////////////////////////////
// // rajouter un utilisateur dans la database : //
// app.post('/utilisateur', (req, res) => {
//     console.log("nouvelle personne ajoutée")
//     let user = new Utilisateur(req.body.nom,req.body.prenom,req.body.pseudo,req.body.mail,req.body.mdp,req.body.type) //la classe utilisateur doit être placer dans un autre fichier js

//     mysqlUtilities.sendUtilisateur((result,error) => {
//         if (!error){ 
//             user.id = result.insertId
//             res.send(user) 
//             }else{ 
//             res.status(500).send(error) 
//         } 
//     },user)
// })




//////////////////////////////////////////////////////////
//Partie admin : ////////////////////////////////////////
////////////////////////////////////////////////////////

// voir tout les admin :
app.get('/admin', 
    (req, res) => { 
        console.log("La liste de tout les admins /") 
        mysqlUtilities.getAdmin((result,error) => { 
            
        if (!error){ 
            res.send(result)
            console.log(result) 
            }else{ 
            res.status(500).send(error) 
        } 
    }) 
})



///////////////////////////////////////////////
// rajouter un admin dans la database : //
app.post('/admin', (req, res) => {
    console.log("nouvelle admin ajoutée")
    let user = new Admin(req.body.nom,req.body.prenom,req.body.pseudo,req.body.mail,req.body.mdp) //la classe utilisateur doit être placer dans un autre fichier js

    mysqlUtilities.sendAdmin((result,error) => {
        if (!error){ 
            user.id = result.insertId
            res.send(user) 
            }else{ 
            res.status(500).send(error) 
        } 
    },user)
})


///////////////////////////////////////////////
//  supprimer un admin de la database : //
app.delete('/admin/:idAdm', (req, res) => {
    console.log("admin retirée")
    const user = req.params.idAdm
    console.log(user)

    mysqlUtilities.deleteAdmin((result,error) => {
        if (!error){ 
            res.send("L'utilisateur " + user + " a ete supp") 
            }else{ 
            res.status(500).send(error) 
        } 
    },user)
})

//////////////////////////////////////////////
// modifier un admin dans la database : //
app.put('/admin/:idAdm', (req, res) => {
    
    console.log("admin modifié")
    
    const user = new Admin(req.body.nom,req.body.prenom,req.body.pseudo,req.body.mail,req.body.mdp) //la classe Admin doit être placer dans un autre fichier js
    user.idAdm = req.params.idAdm
    mysqlUtilities.updateAdmin((result,error) => {
        if (!error){ 
            res.send("L'admin  a ete modifié") 
            }else{ 
            res.status(500).send(error) 
        } 
    },user)
})


//////////////////////////////////////////////////////////
//Partie enseignant : ///////////////////////////////////
////////////////////////////////////////////////////////

// voir tout les enseignants :
app.get('/enseignant', 
    (req, res) => { 
        console.log("La liste de tout les enseignant /") 
        mysqlUtilities.getEnseignant((result,error) => { 
            
        if (!error){ 
            res.send(result)
            console.log(result) 
            }else{ 
            res.status(500).send(error) 
        } 
    }) 
})



///////////////////////////////////////////////
// rajouter un enseignant dans la database : //
app.post('/enseignant', (req, res) => {
    console.log("nouvelle enseignant ajoutée")
    let user = new Enseignant(req.body.nom,req.body.prenom,req.body.pseudo,req.body.mail,req.body.mdp,req.body.nbrUtilisation) //la classe utilisateur doit être placer dans un autre fichier js

    mysqlUtilities.sendEnseignant((result,error) => {
        if (!error){ 
            user.id = result.insertId
            res.send(user) 
            }else{ 
            res.status(500).send(error) 
        } 
    },user)
})


///////////////////////////////////////////////
//  supprimer un enseignant de la database : //
app.delete('/enseignant/:idEns', (req, res) => {
    console.log("enseignant retirée")
    const user = req.params.idEns
    console.log(user)

    mysqlUtilities.deleteEnseignant((result,error) => {
        if (!error){ 
            res.send("L'utilisateur " + user + " a ete supp") 
            }else{ 
            res.status(500).send(error) 
        } 
    },user)
})

//////////////////////////////////////////////
// modifier un enseignant dans la database : //
app.put('/enseignant/:idEns', (req, res) => {
    
    console.log("enseignant modifié")
    
    const user = new Enseignant(req.body.nom,req.body.prenom,req.body.pseudo,req.body.mail,req.body.mdp) //la classe Enseignant doit être placer dans un autre fichier js
    user.idEns = req.params.idEns
    mysqlUtilities.updateEnseignant((result,error) => {
        if (!error){ 
            res.send("L'enseignant  a ete modifié") 
            }else{ 
            res.status(500).send(error) 
        } 
    },user)
})


//////////////////////////////////////////////////////////
//Partie apprenant : ////////////////////////////////////
////////////////////////////////////////////////////////

// voir tout les apprenants :
app.get('/apprenant', 
    (req, res) => { 
        console.log("La liste de tout les apprenants /") 
        mysqlUtilities.getApprenant((result,error) => { 
            
        if (!error){ 
            res.send(result)
            console.log(result) 
            }else{ 
            res.status(500).send(error) 
        } 
    }) 
})

///////////////////////////////////////////////
// rajouter un apprenant dans la database : //
app.post('/apprenant', (req, res) => {
    console.log("nouvelle apprenant ajoutée")
    let user = new Apprenant(req.body.nom,req.body.prenom,req.body.pseudo,req.body.mail,req.body.mdp,req.body.score,req.body.tauxUtiliser,req.body.age,req.body.genre,req.body.progression) //la classe apprenant doit être placer dans un autre fichier js

    mysqlUtilities.sendApprenant((result,error) => {
        if (!error){ 
            user.id = result.insertId
            res.send(user) 
            }else{ 
            res.status(500).send(error) 
        } 
    },user)
})



//////////////////////////////////////////////
// modifier un apprenant dans la database : //
// app.put('/apprenant/:idAp', (req, res) => {
    
//     console.log("apprenant modifié")
    
//     const user = new Apprenant(req.body.nom,req.body.prenom,req.body.pseudo,req.body.mail,req.body.mdp,req.body.score,req.body.tauxUtiliser,req.body.age,req.body.genre,req.body.progression) //la classe Enseignant doit être placer dans un autre fichier js
//     user.idAp = req.params.idAp
//     mysqlUtilities.updateApprenant((result,error) => {
//         if (!error){ 
//             res.send("L'apprenant  a ete modifié") 
//             }else{ 
//             res.status(500).send(error) 
//         } 
//     },user)
// })


//////////////////////////////////////////////
// modifier un enseignant dans la database : //
app.put('/apprenant/:idAp', (req, res) => {
    
    console.log("apprenant modifié")
    
    const user = new Apprenant(req.body.nom,req.body.prenom,req.body.pseudo,req.body.mail,req.body.mdp,req.body.score,req.body.tauxUtiliser,req.body.age,req.body.genre,req.body.progression) //la classe Enseignant doit être placer dans un autre fichier js
    user.idAp = req.params.idAp
    mysqlUtilities.updateApprenant((result,error) => {
        if (!error){ 
            res.send("L'apprenant  a ete modifié") 
            }else{ 
            res.status(500).send(error) 
        } 
    },user)
})



//////////////////////////////////////////////////////////
//Partie niveau : ///////////////////////////////////////
////////////////////////////////////////////////////////

// voir tout les niveaux :
app.get('/niveau', 
    (req, res) => { 
        console.log("La liste de tout les niveaux /") 
        mysqlUtilities.getNiveau((result,error) => { 
            
        if (!error){ 
            res.send(result)
            console.log(result) 
            }else{ 
            res.status(500).send(error) 
        } 
    }) 
})



///////////////////////////////////////////////
// rajouter un niveau dans la database : //
app.post('/niveau', (req, res) => {
    console.log("nouveau niveau ajoutée")
    let user = new Niveau(req.body.idEns,req.body.nom,req.body.nbrUtilisation,req.body.jaime) //la classe niveau doit être placer dans un autre fichier js

    mysqlUtilities.sendniveau((result,error) => {
        if (!error){ 
            user.id = result.insertId
            res.send(user) 
            }else{ 
            res.status(500).send(error) 
        } 
    },user)
})


///////////////////////////////////////////////
//  supprimer un niveau de la database : //
app.delete('/niveau/:idNiv', (req, res) => {
    console.log("niveau retirée")
    const user = req.params.idNiv
    console.log(user)

    mysqlUtilities.deleteNiveau((result,error) => {
        if (!error){ 
            res.send("Le niveau " + user + " a ete supp") 
            }else{ 
            res.status(500).send(error) 
        } 
    },user)
})

//////////////////////////////////////////////
// modifier un niveau dans la database : //
app.put('/niveau/:idNiv', (req, res) => {
    
    console.log("niveau modifié")
    
    const user = new Niveau(req.body.idEns,req.body.nom,req.body.nbrUtilisation,req.body.jaime) //la classe Niveau doit être placer dans un autre fichier js
    user.idNiv = req.params.idNiv,
    // user.idEns = req.params.idEns
    mysqlUtilities.updateNiveau((result,error) => {
        if (!error){ 
            res.send("Le niveau a ete modifié") 
            }else{ 
            res.status(500).send(error) 
        } 
    },user)
})



///////////////////////////////////////////////
// voir toutes les musiques :
app.get('/musique', 
    (req, res) => { 
        console.log("La liste de toutes les musiques /") 
        mysqlUtilities.getMusique((result,error) => { 
            
        if (!error){ 
            res.send(result)
            console.log(result) 
            }else{ 
            res.status(500).send(error) 
        } 
    }) 
})





/////////////////////////
// partie connexion : //
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


