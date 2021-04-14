const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const { body,check,param ,validationResult,checkSchema  } = require('express-validator');


const MysqlUtilities = require('./utilities/MysqlUtilities');
const LogUtilities = require('./utilities/logUtilities');

// ICI ON IMPORTE LES CLASSES
const Utilisateur = require('./beans/Utilisateur');

const app = express();
const port = 3007; //   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   a DETERMINER

app.use(bodyParser.json());
app.use(cors());

//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
//                                  CONNECTION                                  //
//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //

app.get('/enseignant/pseudo/:pseudo/mdp/:mdp', (req, res) =>
{
    let utilisateurPseudo = req.params.pseudo;
    let utilisateurMdp = req.params.mdp;
    MysqlUtilities.connecterEnseignant(utilisateurPseudo, utilisateurMdp , (result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP GET /enseignant/pseudo/:pseudo/mdp/:mdp",result);
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP GET /enseignant/pseudo/:pseudo/mdp/:mdp",error);
        }
    });
});

app.get('/admin/pseudo/:pseudo/mdp/:mdp', (req, res) =>
{
    let utilisateurPseudo = req.params.pseudo;
    let utilisateurMdp = req.params.mdp;
    MysqlUtilities.connecterAdmin(utilisateurPseudo, utilisateurMdp , (result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP GET /admin/pseudo/:pseudo/mdp/:mdp",result);
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP GET /admin/pseudo/:pseudo/mdp/:mdp",error);
        }
    });
});

//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
//                                  INSCIRPTION                                  //
//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
app.post('/creerutilisateur', (req, res) =>
{
    let user = new Utilisateur(req.body.nom, req.body.prenom, req.body.pseudo, req.body.email, req.body.mdp, req.body.type)

    console.log(user)
    if (user.type === "Apprenti")
    {
        MysqlUtilities.creerApprenantInsciption(user,(result, error) => {
            if (!error) {
                user.id = result.insertId
                res.send(user)
            } else {
                res.status(500).send(error)
            }
        } )
    }
    else if (user.type === "Enseignant")
    {
        MysqlUtilities.creerEnseignantInsciption(user,(result, error) => {
            if (!error) {
                user.id = result.insertId
                res.send(user)
            } else {
                res.status(500).send(error)
            }
        })
    }



});
//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
//                                  APPRENANTS                                  //
//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //


// AFFICHAGE LISTE DES APPRENANTS
app.get('/apprenant', (req, res) =>
{
    MysqlUtilities.listerApprenant((result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP get/apprenant",result);
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP get/apprenant",error);
        }
    });
});

// AJOUT D'APPRENANTS
app.post('/apprenant' ,(req, res) =>
{
    let nouveauApprenant=req.body;
    MysqlUtilities.creerApprenant(nouveauApprenant,(result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP post/apprenant",result);
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP post/apprenant",error);
        }
    });
});

// SUPPRESSION D'APPRENANTS
app.delete('/apprenant' ,(req, res) =>
{
    let idAp=req.body;
    MysqlUtilities.supprimerApprenant(idAp,(result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP delete/apprenant",result);
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP delete/apprenant",error);
        }
    });
});

// RECUPERER UN APPRENANTS
app.get('/apprenant/:idAp', (req, res) =>
{
    let idAp = req.params;
    MysqlUtilities.recupererApprenant(idAp,(result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP get/apprenant/idAp", result);
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP get/apprenant/idAp",error);
        }
    });
});

// MODIFICATION D'APPRENANTS
app.put('/apprenant' ,(req, res) =>
{
    let apprenantModifier=req.body;
    MysqlUtilities.modifierApprenant(apprenantModifier,(result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP put/apprenant",result);
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP put/apprenant",error);
        }
    });
});
//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
//                                  ENSIGNANTS                                  //
//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //


// AFFICHAGE LISTE DES APPRENANTS
app.get('/enseignant', (req, res) =>
{
    MysqlUtilities.listerEnseignant((result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP get/enseignant",result);
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP get/enseignant",error);
        }
    });
});

// AJOUT D'ENSEIGNANTS
app.post('/enseignant' ,(req, res) =>
{
    let nouveauEnseignant=req.body;
    MysqlUtilities.creerEnseignant(nouveauEnseignant,(result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP post/enseignant",result);
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP post/enseignant",error);
        }
    });
});

// SUPPRESSION D'ENSEIGNANTS
app.delete('/enseignant/:idEns' ,(req, res) =>
{
    let idEns = req.params;
    MysqlUtilities.supprimerEnseignant(idEns,(result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP delete/enseignant/idEns");
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP delete/enseignant/idEns ERORO",idEns,error);
        }
    });
});


// RECUPERER UN APPRENANTS
app.get('/enseignant/:idEns', (req, res) =>
{
    let idEns = req.params;
    MysqlUtilities.recupererEnseignant(idEns,(result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP get/enseignant/idEns");
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP get/enseignant/idEns", );
        }
    });
});

// MODIFICATION D'APPRENANTS
app.put('/enseignant' ,(req, res) =>
{
    let enseignantModifier=req.body;
    MysqlUtilities.modifierEnseignant(enseignantModifier,(result, error) =>
    {
        if (!error) //if callback is ok
        {
            console.log("APP put/enseignant",result);
            res.send(result);
        }
        else //if callback isn't ok
        {
            res.status(500).send("APP put/enseignant",error);
        }
    });
});



















//----------------------------------------------------------------------------------//
//-------------------------------LISTEN demarrage app-------------------------------//
//----------------------------------------------------------------------------------//
app.listen(port,()=>{
    console.log(`exemple app listening at http://localhost:${port}`);
});