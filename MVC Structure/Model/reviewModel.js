const mongoose = require("mongoose");

const reviewModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:  {
    type: String,
    required: true,
  },
  job : {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = reviewModel;
