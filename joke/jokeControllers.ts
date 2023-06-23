import { Request, Response } from "express";
const Joke = require("./jokeModel");
const NotApproved = require("./jokeModel");

export const createJoke = async (req: Request, res: Response) => {
  const { joke, language } = req.body;
  try {
    const _id = await Joke.estimatedDocumentCount();
    const da_joke = await NotApproved.create({ joke, _id, language });
    res.status(200).json(da_joke);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
    return;
  }
};

export const getJoke = async (req: Request, res: Response) => {
  try {
    const _id = await Joke.estimatedDocumentCount();
    const joke = await Joke.findById(Math.floor(Math.random() * _id));
    res.status(200).json(joke);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
    return;
  }
};
