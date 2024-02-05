'use strict';

//importacions i creació de constants per a la seva utiliutzació
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors); //todos los accesos estan 'protegidos' del error de CORS

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'test',
    user: 'root',
    password: ''
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000');

    //només fem la petició get
    app.get('/',(req,res)=>{
        res.send({
            message:'Hola món'
        });
    })
});

