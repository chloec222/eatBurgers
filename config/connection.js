// ===========connecting node to mySQL=============
var mysql = require('mysql');


// ===========creating environment for app deployment: heroku/localhost=============
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Isaacaveryjoshua1!', //delete password before deployment
        database: 'burgers_db'
    });
};


// ===========once connection made- either throw err if error || connected=============
connection.connect(function(err){
    if (err) {
        console.log('Error! Connection could not be established: ' + err.stack);
    } else {
        console.log('Connected as id: ' + connection.threadId);
    }
});


// ===========export config connecton=============
module.exports = connection;

