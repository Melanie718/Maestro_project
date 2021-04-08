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




















//----------------------------------------------------------------------------------//
//-------------------------------LISTEN demarrage app-------------------------------//
//----------------------------------------------------------------------------------//
app.listen(port,()=>{
    console.log(`exemple app listening at http://localhost:${port}`);
});