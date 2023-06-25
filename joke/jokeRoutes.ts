import express, { Request, Response } from "express";
import {
  approveJoke,
  createJoke,
  getJoke,
  notApproved,
} from "./jokeControllers";

const router = express.Router();

router.post("/", createJoke);
router.get("/", getJoke);
router.put("/:id", approveJoke);
router.get("/notapproved", notApproved);

module.exports = router;
