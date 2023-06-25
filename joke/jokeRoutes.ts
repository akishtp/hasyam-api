import express, { Request, Response } from "express";
import { createJoke, getJoke } from "./jokeControllers";
const Joke = require("./jokeModel");

const router = express.Router();

router.post("/", createJoke);
router.get("/", getJoke);

module.exports = router;
