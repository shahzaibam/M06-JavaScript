const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');


const app = express();
const accessTokenSecret = "67463fghfgh43473";

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'project_upc_angular',
    user: 'root', // Asegúrate de usar credenciales seguras y apropiadas
    password: '' // Idealmente, las credenciales no deben estar hard-coded
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};


app.post('/login', function (req, res) {
    const { name, password } = req.body;
    connection.query('SELECT * FROM users WHERE name = ? AND password = ?', [name, password], function (error, results, fields) {
        if (error) {
            return res.json({ error: true, data: 'Problemas con el servidor' });
        }
        if (results.length > 0) {
            const accessToken = jwt.sign({ username: name }, accessTokenSecret, { expiresIn: '20m' });
            res.json({ error: false, data: accessToken });
        } else {
            res.json({ error: true, data: 'Credenciales incorrectas' });
        }
    });
});


app.get('/allUsers', authenticateJWT, function (req, res) {
    // Igual que antes, asegúrate de gestionar los roles correctamente
    connection.query('SELECT * FROM users', function (error, results, fields) {
        if (error) {
            connection.end();
            return res.json({ error: true, data: 'Problemas con el servidor' });
        }
        res.json({ error: false, data: results });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
