const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  _id: { type: Number, required: true, unique: true },
  joke: { type: String, required: true },
});

module.exports = mongoose.model("Joke", jokeSchema);
