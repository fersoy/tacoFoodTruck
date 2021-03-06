// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var taco = {
    selectAll: function (cb) {
        orm.selectAll("tacos", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.insertOne("tacos", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("tacos", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (tacos_Controller.js).
module.exports = taco;
