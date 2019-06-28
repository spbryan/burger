/***********************************************
 * Project: Burger
 * Developer: Sean Bryan
 * Date: 2019-06-26
 ***********************************************/
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Default router
router.get("/", function (req, res) {
  burger.all(function (data) {
    var allBurgers = {
      burgers: data
    }
    console.log(allBurgers);
    res.render("index", allBurgers);
  });
});

// Add new Burger
router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
      req.body.name, false
    ], function (result) {
      res.redirect('back');
    });
});

//Update a Burger
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log("req.body", req.body);

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//Delete a Burger
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;