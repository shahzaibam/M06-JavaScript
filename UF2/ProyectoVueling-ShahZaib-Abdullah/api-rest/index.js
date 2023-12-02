'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'vueling',
    user: 'root',
    password: '',
});

connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la bbdd');
        return;
    }
    console.log('Connectado!!');

    rutas();
});

function rutas() {
    // POST para realizar un login
    app.post('/vueling/login', function (req, res) {
        console.log("Estamos en login POST");

        const { email, password } = req.body;

        // Verificar el usuario y la contraseña en la base de datos
        connection.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
            if (error) {
                console.error(error);
                res.status(400).json({
                    error: true,
                    results: null,
                    message: "Error al autenticar"
                });
            } else {
                if (results.length > 0) {
                    res.status(200).json({
                        error: false,
                        results: results,
                        message: "Autenticación exitosa"
                    });
                } else {
                    res.status(401).json({
                        error: true,
                        results: null,
                        message: "Credenciales incorrectas"
                    });
                }
            }
        });
    });




    // GET
    app.get('/vueling/booking', function (req, res) {
        console.log("Estamos en login GET");
        connection.query('SELECT nomCiutat FROM ciutats', function (error, results, field) {
            if (error) {
                res.status(400).json({
                    error: true,
                    results: null,
                    message: "Error en la consulta a la base de datos"
                });
            } else {
                res.status(200).json({
                    error: false,
                    results: results,
                    message: "Consulta GET HECHA"
                });
            }
        });
    });


    // POST route for registration
    app.post('/vueling/registration', function (req, res) {
        console.log("Estamos en registro POST");

        // Retrieve registration data from the request body
        const nom = req.body.nom;
        const cognoms = req.body.cognoms;
        const email = req.body.email;
        const password = req.body.password;
        const dni = req.body.dni;

        // Insert registration data into the database
        connection.query('INSERT INTO usuarios (nom, cognoms, email, password, dni) VALUES (?, ?, ?, ?, ?)',
            [nom, cognoms, email, password, dni],
            function (error, results, fields) {
                if (error) {
                    res.status(400).json({
                        error: true,
                        results: null,
                        message: "Error en la inserción en la base de datos"
                    });
                } else {
                    res.status(200).json({
                        error: false,
                        results: results,
                        message: "Inserción en la base de datos exitosa"
                    });
                }
            }
        );
    });


    app.listen(3000, () => {
        console.log('La API-REST está en http://localhost:3000/vueling/booking');
    });
}
