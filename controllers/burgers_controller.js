/***********************************************
 * Project: Burger
 * Developer: Sean Bryan
 * Date: 2019-06-26
 ***********************************************/
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");


// Default router
router.get("/", function(req, res) {
    burger.all(function(data) {
        var allBurgers = {
            burgers: data
        }
        console.log(allBurgers);
        res.render("index", allBurgers);
    });
});

// Add new Burger
router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, false
    ], function(result) {
        res.json({ id: result.insertId});
    });
});

module.exports = router;