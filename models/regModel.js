const mongoose = require("mongoose");

const regSchema = mongoose.Schema({
  mail: {
    type: String,
    require: true,
  },
  pass: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

const regModel = mongoose.model("Registration", regSchema);
module.exports = regModel;
