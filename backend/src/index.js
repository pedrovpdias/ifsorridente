const express = require('express');
const routes = require('./routes');

const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'ifsorridente'
});

const conn = connection.connect();

module.exports = conn;

app.use(express.json());
app.use(routes);

app.listen(3334);