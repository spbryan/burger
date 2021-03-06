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

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
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

        connection.query(sqlString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;
