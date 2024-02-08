'use strict';
const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors()); // Inicializa el middleware de CORS

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Servir archivos estáticos desde la carpeta "public"
const publicFolderPath = path.join(__dirname, 'public');
app.use(express.static(publicFolderPath));

// Cadena de conexión
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'm06',
    user: 'userangular',
    password: 'alumne123'
});

// Establece la conexión a la base de datos
connection.connect(function (error) {
    if (error) {
        console.error("Error connecting: " + error.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

app.listen(3000, () => {
    console.log('API-REST en ejecución en http://localhost:3000');

    app.post('/api/login', function (req, res) {
        console.log("Estamos en login");


        //recojo los valores enviados desde cliente
        const usuari = req.body.user;
        const contra = req.body.password;

        console.log(usuari);
        console.log(contra);

        connection.query('SELECT username from users where username = ?' + 'AND userpass = ?', [usuari,contra], function (error, results) {
            if (error) {
                res.status(400).send({results: null});
            } else {
                res.status(200).send({results: results});
            }
        });
    });

    // GET para realizar una consulta a la base de datos
    app.get('/api/select/:userName', function (req, res) {
        console.log("Estamos en login");


        //recojo los valores enviados desde cliente
        const usuari = req.params.userName;


        console.log(usuari);

        connection.query('SELECT username from users', function (error, results) {
            if (error) {
                res.status(400).send({results: null});
            } else {
                res.status(200).send({results: results});
            }
        });
    });


    //només fem la petició get
    app.get('/', (req, res) => {
        res.send({
            message: 'Hola món'
        });
    })




});


