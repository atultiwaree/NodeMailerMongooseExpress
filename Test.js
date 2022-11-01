const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/userData")
  .then(() => {
    console.log("Okay");
  })
  .catch((error) => console.log(error.message));
