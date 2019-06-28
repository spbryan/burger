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
        // res.json({ id: result.insertId});
        res.redirect('back');
        // res.render("index", allBurgers);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    console.log("req.body", req.body);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;