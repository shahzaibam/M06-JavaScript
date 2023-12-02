"use strict"

//////AIXÒ JA HO TENÍEM
const express = require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


////// AIXÒ ÉS NOU I SERIA PER TREBALLAR AMB MYSQL
////// COMPTE: hem d'instal·lar mysql per a Node Express amb npm i -S mysql
////// importem mysql
const mysql = require('mysql');


////// declarem els paràmetres de connexió (millor si l’usuari de connexió no és root sinó un usuari específic per aquesta BBDD
////// i amb permissos restringits
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'todolist',
    user: 'root',
    password: ''
});

/////// fem servir la BBDD que tenim
app.post('/api/login', function (req, res) {
    console.log("estem a login");
    ////// provem de connectar-nos i capturar possibles errors
    connection.connect(function (err) {
        console.log(err);
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
        console.log('Connected as id ' + connection.threadId);
    });
})

