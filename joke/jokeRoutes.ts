import express, { Request, Response } from "express";
import {
  approveJoke,
  createJoke,
  deleteJoke,
  getAllJokes,
  getJoke,
  getMalayalamJokes,
  getManglishJokes,
  getRandomMalayalamJokes,
  getRandomManglishJokes,
  notApproved,
} from "./jokeControllers";

const router = express.Router();

router.get("/", getAllJokes);
router.post("/", createJoke);
router.get("/random", getJoke);
router.get("/notapproved", notApproved);
router.put("/:id", approveJoke);
router.get("/malayalam", getMalayalamJokes);
router.get("/malayalam/random", getRandomMalayalamJokes);
router.get("/manglish", getManglishJokes);
router.get("/manglish/random", getRandomManglishJokes);
router.delete("/:id", deleteJoke);

module.exports = router;
