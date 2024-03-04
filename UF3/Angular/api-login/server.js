const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');


const app = express();
const accessTokenSecret = "67463fghfgh43473";

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'upc_angular',
    user: 'userangular',
    password: 'alumne123'
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
    const { email, password } = req.body;
    console.log('Login attempt:', email, password); // Log incoming credentials
    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
        console.log('DB query results:', results); // Log query results
        if (error) {
            console.error('DB error:', error);
            return res.json({ error: true, data: 'Problemas con el servidor' });
        }
        if (results.length > 0) {
            const accessToken = jwt.sign({ username: email }, accessTokenSecret, { expiresIn: '20m' });
            res.json({ error: false, data: accessToken });
        } else {
            res.json({ error: true, data: 'Credenciales incorrectas' });
        }
    });
});




app.post('/register', function (req, res) {
    const { name, email, dni, password } = req.body;
    const sql = 'INSERT INTO users (name, email, dni, password) VALUES (?, ?, ?, ?)';
    connection.query(sql, [name, email, dni, password], function (error, results) {
        if (error) {
            console.error('Error en la base de datos:', error);
            return res.json({ error: true, data: 'Problemas con el servidor: ' + error.message });
        }
        // Comprobar si se insertó el nuevo usuario correctamente
        if (results.affectedRows > 0) {
            res.json({ error: false, data: 'Usuario registrado exitosamente' });
        } else {
            res.json({ error: true, data: 'No se pudo registrar el usuario' });
        }
    });
});



app.get('/allUsers', authenticateJWT, function (req, res) {
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
