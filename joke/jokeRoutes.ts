import express, { Request, Response } from "express";
import {
  approveJoke,
  createJoke,
  getAllJoke,
  getJoke,
  notApproved,
} from "./jokeControllers";

const router = express.Router();

router.get("/", getAllJoke);
router.post("/", createJoke);
router.get("/random", getJoke);
router.put("/:id", approveJoke);
router.get("/notapproved", notApproved);

module.exports = router;
