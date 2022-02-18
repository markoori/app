const mysql = require('mysql');
require('dotenv');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : process.env.PASSWORD,
    database : 'tasteclandb'
});

db.connect((err) => { if(err) throw err; else console.log('SQL_db connected') });

module.exports = db
