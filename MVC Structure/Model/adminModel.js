const mongoose = require("mongoose");

const adminModel = mongoose.Schema({
    email : String
});

module.exports = adminModel;
