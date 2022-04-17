const express = require("express");
const mongoose = require("mongoose");
const adminController = require("./MVC Structure/Controller/adminController");
const reviewController = require("./MVC Structure/Controller/reviewController");
const itemController = require("./MVC Structure/Controller/itemController");
const sliderItemController = require("./MVC Structure/Controller/sliderItemController");

// express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose
  .connect("mongodb://localhost/cloudkitchenDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

// application routes
app.use("/admin", adminController);
app.use("/review", reviewController);
app.use("/items", itemController);
app.use("/sliderItems",sliderItemController );

// default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(7000, () => {
  console.log("app listening at port 7000");
});
