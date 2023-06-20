import express from "express";
import { signupUser } from "./userControllers";

const router = express.Router();

router.post("/signup", signupUser);

// router.post("/login", () => {});

module.exports = router;
