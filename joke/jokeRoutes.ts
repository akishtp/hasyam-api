import express, { Request, Response } from "express";
import {
  approveJoke,
  createJoke,
  getAllJokes,
  getJoke,
  getMalayalamJokes,
  getManglishJokes,
  notApproved,
} from "./jokeControllers";

const router = express.Router();

router.get("/", getAllJokes);
router.post("/", createJoke);
router.get("/random", getJoke);
router.get("/notapproved", notApproved);
router.put("/:id", approveJoke);
router.get("/malayalam", getMalayalamJokes);
router.get("/manglish", getManglishJokes);

module.exports = router;
