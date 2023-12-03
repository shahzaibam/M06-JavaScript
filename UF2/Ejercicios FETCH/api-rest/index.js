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
    database: 'testM06',
    user: 'root',
    password: '',
});

// Conectar a la base de datos
connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la bbdd');
        return;
    }
    console.log('Connectado!!');

    // Configurar las rutas después de conectar a la base de datos
    //ponerlo mejor en una funcion para asi ordenarlo mejor
    rutas();
});


function rutas() {
    // // POST
    // app.post('/api/login', function (req, res) {
    //     console.log("Estamos en login POST");
    //     connection.query('SELECT * FROM users', function (error, results, field) {
    //         if (error) {
    //             res.status(400).json({
    //                 error: true,
    //                 resultats: null,
    //                 message: "Error en la consulta a la base de datos"
    //             });
    //         } else {
    //             res.status(200).json({
    //                 error: false,
    //                 resultats: results,
    //                 message: "Consulta POST HECHA"
    //             });
    //         }
    //     });
    // });


    // POST para realizar un INSERT
    app.post('/api/login', function (req, res) {
        console.log("Estamos en login POST");

        const datos = req.body;

        connection.query('INSERT INTO users SET ?', datos, function (error, results, fields) {
            if (error) {
                res.status(400).json({
                    error: true,
                    results: null,
                    message: "Error al insertar en la base de datos"
                });
            } else {
                res.status(200).json({
                    error: false,
                    results: results,
                    message: "Inserción POST realizada con éxito"
                });
            }
        });
    });


    // GET
    app.get('/api/login', function (req, res) {
        console.log("Estamos en login GET");
        connection.query('SELECT * FROM users', function (error, results, field) {
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

    app.listen(3000, () => {
        console.log('La API-REST está en http://localhost:3000');
    });
}
