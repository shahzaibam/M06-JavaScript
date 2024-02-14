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

const publicFolderPath = path.join(__dirname, 'public');
app.use(express.static(publicFolderPath));

//nos conectamos a la base de datos
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

app.post('/api/login', function (req, res) {
    console.log("Estamos en login");

    // Recojo los valores enviados desde el cliente
    const usuari = req.body.user;
    const contra = req.body.password;

    console.log(usuari);
    console.log(contra);

    connection.query('SELECT username from users where username = ?' + 'AND userpass = ?', [usuari, contra], function (error, results) {
        if (error) {
            res.status(400).send({results: null});
        } else {
            res.status(200).send({results: results});
        }
    });
});

//app.get('/api/select/:userName', function (req, res) {
app.get('/api/select', function (req, res) {

    console.log("Estamos en login");

    // Recojo los valores enviados desde el cliente
    const usuari = req.params.userName;

    console.log(usuari);

    connection.query('SELECT * from users', function (error, results) {
        if (error) {
            res.status(400).send({results: null});
        } else {
            res.status(200).send({results: results});
        }
    });
});


app.get('/api/select/user1', function (req, res) {

    console.log("Estamos en login");

    // Recojo los valores enviados desde el cliente
    const usuari = req.params.userName;

    console.log(usuari);

    connection.query('SELECT userpass from users where username = "user1"', function (error, results) {
        if (error) {
            res.status(400).send({results: null});
        } else {
            res.status(200).send({results: results});
        }
    });
});



app.post('/api/create-user', function(req, res) {
    const { username, userpass } = req.body;
    connection.query('INSERT INTO users (username, userpass) VALUES (?, ?)', [username, userpass], function(error, results) {
        if (error) {
            res.status(400).send({ message: 'Failed to create user' });
        } else {
            res.status(201).send({ message: 'User created successfully' });
        }
    });
});



// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send({
        message: 'Hola món'
    });
});

// configuramos una ruta genérica para servir el archivo HTML de la aplicación Angular
// para cualquier otra ruta no manejada anteriormente.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Iniciamos el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API-REST en execució a http://localhost:${port}`);
});
