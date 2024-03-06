const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');

const app = express();
const accessTokenSecret = "67463fghfgh43473";

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'practicauf4',
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
    const email = req.body.email;
    const password = req.body.password;

    const sql = 'SELECT * FROM USERS WHERE email = ? AND password = ?';

    connection.query(sql, [email, password], function (error, result) {
        if (error) {
            res.json({ error: true, data: 'Problemes amb el servidor' });
        } else {
            if (result.length > 0) {
                const accessToken = jwt.sign({ email: result[0].email }, accessTokenSecret, { expiresIn: '20m' });
                res.json({ error: false, data: accessToken });
            } else {
                res.json({ error: true, data: 'Credencials incorrectes' });
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
