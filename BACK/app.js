const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const { body,check,param ,validationResult,checkSchema  } = require('express-validator');


const MysqlUtilities = require('./utilities/MysqlUtilities');
const LogUtilities = require('./utilities/logUtilities');

// ICI ON IMPORTE LES CLASSES

const app = express();
const port = 3000; //   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   a DETERMINER

app.use(bodyParser.json());
app.use(cors());

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

app.delete('/apprenant' ,(req, res) =>
{
    let idAp=req.body;
    console.log("CHEHCIU.GE IUGC " , idAp)
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


















//----------------------------------------------------------------------------------//
//-------------------------------LISTEN demarrage app-------------------------------//
//----------------------------------------------------------------------------------//
app.listen(port,()=>{
    console.log(`exemple app listening at http://localhost:${port}`);
});