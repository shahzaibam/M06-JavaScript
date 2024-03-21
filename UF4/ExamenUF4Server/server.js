const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const app = express();
const accessTokenSecret = "67463fghfgh43473";

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'examen',
    user: 'root',
    password: ''
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to database with thread id:', connection.threadId);
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
                console.log(err);
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.json({ error: true, data: "Permís denegat al servidor" });
    }
};

app.get('/', (req, res) => {
    res.send('Hello to my web');
});

app.post('/login', function (req, res) {
    const username = req.body.username;
    const userpass = req.body.userpass;

    const sql = 'SELECT * FROM USERS WHERE username = ? AND userpass = ?';

    connection.query(sql, [username, userpass], function (error, result) {
        if (error) {
            res.json({ error: true, data: 'Problemes amb el servidor' });
        } else {
            if (result.length > 0) {
                const accessToken = jwt.sign({ username: result[0].username }, accessTokenSecret, { expiresIn: '20m' });
                res.json({ error: false, data: accessToken });
            } else {
                res.json({ error: true, data: 'Credencials incorrectes' });
            }
        }
    });
});



app.post('/register', function (req, res) {
    const { username, userpass, role } = req.body; 
    const sql = 'INSERT INTO users (username, userpass, role) VALUES (?, ?, ?)';
    connection.query(sql, [username, userpass, role], function (error, results) {
        if (error) {
            console.error('Error en la base de datos:', error);
            res.json({ error: true, data: 'Problemas con el servidor: ' + error.message });
        } else {
            if (results.affectedRows > 0) {
                const accessToken = jwt.sign({ username: username, userpass: userpass, role: role }, accessTokenSecret, { expiresIn: '20m' });
                res.json({ error: false, data: accessToken }); // Envía el token con el correo electrónico
            } else {
                res.json({ error: true, data: 'No se pudo registrar el usuario' });
            }
        }
    });
});



app.get('/allUsers', authenticateJWT, (req, res) => {
    const sql = 'SELECT * FROM usuaris';
    connection.query(sql, (error, result) => {
        if (error) {
            res.json({ error: true, data: 'Problemes amb el servidor' });
        } else {
            if (result.length > 0) {
                res.json({ error: false, data: result });
            } else {
                res.json({ error: true, data: 'NO hi ha dades al servidor' });
            }
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
