const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  email: {
    type: String,
    default: ""
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
