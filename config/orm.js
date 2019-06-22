/***********************************************
 * Project: Burger
 * Developer: Sean Bryan
 * Date: 2019-06-22
 ***********************************************/
var connection = require("./connection.js");

var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
    insertOne: function (burgerName, cb) {
        var query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false);"
        connection.query(query, [burgerName], function(err, result) {
			if (err) {
				throw err;
			}
			console.log(result);
			cb(result);
		});
    },
    updateOne: function (inputId, inputDevoured, cb) {
        connection.query("UPDATE burgers SET ? WHERE ?", 
        [
            {
                devoured: inputDevoured
            },
            {
                id: inputId
            }
        ],
        function(err, result) {
			if (err) {
				throw err;
			}
			console.log(result);
			cb(result);
		});
    }
};

module.exports = orm;