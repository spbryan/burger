/***********************************************
 * Project: Burger
 * Developer: Sean Bryan
 * Date: 2019-06-22
 ***********************************************/
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll(function(res) {
			cb(res);
		});
	},
	insertOne: function(burgerName, cb) {
		orm.insertOne(burgerName, function(res) {
			cb(res);
		});
	},
	updateOne: function(inputId, inputDevoured, cb) {
		orm.updateOne(inputId, inputDevoured, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;