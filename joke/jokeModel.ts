const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const joke = new Schema({
  joke: { type: String, required: true, unique: true },
  language: { type: String, required: true },
  approved: { type: Boolean, default: false },
});

module.exports = mongoose.model("Joke", joke);
