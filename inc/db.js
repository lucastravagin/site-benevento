// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'saboroso',
    password: 'Senha',
    multipleStatements: true
});

module.exports = connection;


sudo certbot --nginx -d espacobenevento.com.br -d www.espacobenevento.com.br
