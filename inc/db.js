// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: '137.184.224.175',
    user: 'beneventos',
    database: 'saboroso',
    password: '8mQntneXna',
    multipleStatements: true
});

module.exports = connection;

