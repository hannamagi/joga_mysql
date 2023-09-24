const express = require('express')
const app = express()

const mysql = require('mysql')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'joga_mysql'
})

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to joga_mysql db');
})

app.listen(3000, () => {
    console.log('App is starting at http://localhost:3000')
})