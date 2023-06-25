import { Request, Response } from "express";
const Joke = require("./jokeModel");

export const createJoke = async (req: Request, res: Response) => {
  const { joke, language } = req.body;
  try {
    const da_joke = await Joke.create({ joke, language });
    res.status(200).json(da_joke);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
    return;
  }
};

export const getJoke = async (req: Request, res: Response) => {
  try {
    const count = await Joke.countDocuments({ approved: true }).exec();

    const randomIndex = Math.floor(Math.random() * count);

    const joke = await Joke.findOne({ approved: true })
      .skip(randomIndex)
      .exec();
    res.status(200).json(joke);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
    return;
  }
};
