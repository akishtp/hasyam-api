import { Request, Response } from "express";

const User = require("./userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "30d" });
};

// user signup controller
export const signupUser = async (req: Request, res: Response) => {
  const { name, password, email } = req.body;
  try {
    const user = await User.signup(name, password, email);
    const token = createToken(user._id);
    res
      .status(200)
      .json({ name, email: user.email, token, API_key: user.API_key });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
    return;
  }
};
