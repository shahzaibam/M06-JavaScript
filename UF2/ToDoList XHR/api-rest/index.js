"use strict";

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
    database: 'todolist',
    user: 'root',
    password: ''
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la bbdd:', err);
        return;
    }
    console.log('Conectado a la base de datos');
    rutas();
});

function rutas() {
    app.get('/api/todoList', (req, res) => {
        console.log("Estamos en todoList get");

        connection.query('SELECT name FROM todolist', (error, results) => {
            if (error) {
                console.error('Error en la consulta:', error);
                res.status(500).json({
                    error: true,
                    results: null,
                    message: "Error en la consulta a la base de datos"
                });
            } else {
                if (results.length > 0) {
                    res.status(200).json({
                        error: false,
                        results: results,
                        message: "Consulta exitosa"
                    });
                } else {
                    res.status(404).json({
                        error: true,
                        results: null,
                        message: "No se encontraron tareas en la lista"
                    });
                }
            }
        });
    });





    //post enviar datos del todo list
    app.post('/api/todoListPost', (req, res) => {
        console.log("Estamos en todoList Post");

        const tarea = req.body;

        connection.query('INSERT INTO todolist SET ?', tarea, (error, results) => {
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
}

app.listen(3000, () => {
    console.log('API-REST en ejecución en http://localhost:3000');
});
