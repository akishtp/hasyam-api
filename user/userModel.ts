const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
import * as crypto from "crypto";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  API_key: { type: String, required: true, unique: true },
});

userSchema.statics.signup = async function (
  name: string,
  password: string,
  email: string
) {
  if (!name || !email || !password) {
    throw Error("All fields must be filled");
  }
  const nameExists = await this.findOne({ name });
  if (nameExists) {
    throw Error("Name already in use");
  }
  const emailExist = await this.findOne({ email });
  if (emailExist) {
    throw Error("Email already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash_password = await bcrypt.hash(password, salt);
  const API_key = crypto.randomBytes(12).toString("hex");
  const hash_API = await bcrypt.hash(password, salt);

  const user = await this.create({
    name,
    password: hash_password,
    email,
    API_key: hash_API,
  });

  return user;
};

module.exports = mongoose.model("User", userSchema);
