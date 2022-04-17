const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const adminModel = require("../Model/adminModel");
const Admin = new mongoose.model("Admin", adminModel);

// GET ALL THE Admin
router.get("/", async (req, res) => {
  await Admin.find((err, data) => {
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

// GET A Admin by ID
router.get("/:id", async (req, res) => {
  await Admin.find({ _id: req.params.id }, (err, data) => {
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

// POST A Admin
router.post("/addAdmin", async (req, res) => {
  const newAdmin = new Admin(req.body);
  await newAdmin.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Admin was inserted successfully!",
      });
    }
  });
});


// DELETE Admin
router.delete("/:id", async (req, res) => {
  await Admin.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Admin was deleted successfully!",
      });
    }
  });
});

module.exports = router;
