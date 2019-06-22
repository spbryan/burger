/***********************************************
 * Project: Burger
 * Developer: Sean Bryan
 * Date: 2019-06-22
 ***********************************************/
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Edzumedzu*01",
    database: "wishes_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

module.exports = {
    connection: connection
}