import express from "express";
import { createJoke, getJoke } from "./jokeControllers";

const router = express.Router();

router.post("/", createJoke);
router.get("/", getJoke);

module.exports = router;
