var express = require("express");

var router = express.Router();

// Import the model (taco.js) to use its database functions.
var taco = require("../models/taco.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    taco.selectAll(function (data) {
        var hbsObject = {
            tacos: data
        };

        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/tacos", function (req, res) {
    taco.create([
        "taco_name", "shell", "vegetarian", "picked_up"], [
            req.body.name, req.body.vegetarian
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

router.put("/api/tacos/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    taco.update({
        taco_name: req.body.name,
        shell: req.body.shell,
        vegetarian: req.body.vegetarian,
        picked_up: req.body.picked_up
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/tacos/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    taco.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
