/***********************************************
 * Project: Burger
 * Developer: Sean Bryan
 * Date: 2019-06-22
 ***********************************************/
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

var orm = {
    all: function (tableInput, cb) {
        var sqlString = "SELECT * FROM " + tableInput + ";";
        connection.query(sqlString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (tableInput, cols, vals, cb) {
        var sqlString = "INSERT INTO " + tableInput;
        sqlString += " (";
        sqlString += cols.toString();
        sqlString += ") VALUES (";
        sqlString += printQuestionMarks(vals.length);
        sqlString += ") ";

        console.log(sqlString);

        connection.query(sqlString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;
