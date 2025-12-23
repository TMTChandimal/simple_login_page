const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');


const app = express();
app.use(express.json());

app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_system'
});

app.post('/register', (req, res) => {
    const sql = "INSERT INTO test_login (username, email, password) VALUES (?, ?, ?)";
    const pass = bcrypt.hashSync(req.body.password, 10);
    const values = [req.body.username, req.body.email, pass];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
        }
        return res.json("User registered successfully");
    });
});


app.post('/login', (req, res) => {
    const sql = "SELECT password FROM test_login WHERE username = ?";
    const values = [req.body.username, req.body.password];

    db.query(sql, req.body.username, (err, result) => {
        if (err) {
            console.error(err);
        }
        if (result.length > 0) {
            isitmatch = bcrypt.compareSync(req.body.password, result[0].password);
            if (isitmatch) {
                return res.json("Login successful");
            } else {
                return res.status(401).json("Password is incorrect");
            }
        } else {
            return res.json("User not found");
        }
    });
});





app.listen(3001, () => {
    console.log('Server is running on port 3001');
});