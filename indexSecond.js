const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yahz',
    database: 'social_network'

});

var post = {title: 'Hello MySQL', body: 'avsdvsdvsdv', author_id: 1};
var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields){
    if (error) throw error;
})