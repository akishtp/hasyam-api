import express from "express";
import { createJoke } from "./jokeControllers";

const router = express.Router();

router.post("/", createJoke);

module.exports = router;
