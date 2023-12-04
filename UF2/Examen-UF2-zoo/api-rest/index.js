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
    database: 'zoo',
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
    app.get('/api/zoo', (req, res) => {
        console.log("Estamos en zoo get");

        connection.query('SELECT * FROM animals', (error, results) => {
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


    /**
     * :id es el id que cuando eliminemos se le pasará
     */
    app.delete('/api/zoo/:id', (req, res) => {
        const animalId = req.params.id;

        console.log("estamos en eliminar")

        connection.query('DELETE FROM animals WHERE id = ?', [animalId], (error, results) => {
            if (error) {
                console.error('Error en la eliminación:', error);
                res.status(500).json({
                    error: true,
                    message: "Error en la eliminación en la base de datos"
                });
            } else {
                if (results.affectedRows > 0) {
                    res.status(200).json({
                        error: false,
                        message: "Eliminación exitosa"
                    });
                } else {
                    res.status(404).json({
                        error: true,
                        message: "Animal no encontrado"
                    });
                }
            }
        });
    });
}

app.listen(3000, () => {
    console.log('API-REST en ejecución en http://localhost:3000');
});
