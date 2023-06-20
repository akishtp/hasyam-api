import { Request, Response } from "express";
const Joke = require("./jokeModel");

export const createJoke = async (req: Request, res: Response) => {
  const { joke } = req.body;
  try {
    const _id = await Joke.estimatedDocumentCount();
    const da_joke = await Joke.create({ joke, _id: _id });
    res.status(200).json(da_joke);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
    return;
  }
};
