const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const reviewModel = require("../Model/reviewModel");
const Review = new mongoose.model("Review", reviewModel);

// GET ALL THE Review
router.get("/", async (req, res) => {
  await Review.find((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "Success",
        });
      }
    });
});

// GET A Review by ID
router.get("/:id", async (req, res) => {
  await Review.find({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        result: data,
        message: "Success",
      });
    }
  });
});

// POST A Review
router.post("/addReview", async (req, res) => {
  const newReview = new Review(req.body);
  await newReview.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Review was inserted successfully!",
      });
    }
  });
});


// DELETE Review
router.delete("/:id", async (req, res) => {
  await Review.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Review was deleted successfully!",
      });
    }
  });
});

module.exports = router;
