import { Request, Response } from "express";
const Joke = require("./jokeModel");

export const getAllJokes = async (req: Request, res: Response) => {
  try {
    const joke = await Joke.find({ approved: true });
    res
      .status(200)
      .json({ _id: joke._id, joke: joke.joke, language: joke.language });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const createJoke = async (req: Request, res: Response) => {
  const { joke, language } = req.body;
  try {
    const da_joke = await Joke.create({ joke, language });
    res.status(200).json(da_joke);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
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
  }
};

export const approveJoke = async (req: Request, res: Response) => {
  const { key } = req.headers;
  if (key !== process.env.ADMIN_KEY) {
    res.status(400).json({
      error: "you do not have the proper authorization to complete this action",
    });
  } else {
    const id = req.params.id;
    try {
      const foundJoke = await Joke.findById(id);
      foundJoke.approved = true;
      await foundJoke.save();
      res.status(200).json(foundJoke);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};

export const notApproved = async (req: Request, res: Response) => {
  Joke.find({ approved: false })
    .then((jokes: any) => {
      res.json(jokes);
    })
    .catch((error: any) => {
      res.status(400).json({ error: error });
    });
};

export const getMalayalamJokes = async (req: Request, res: Response) => {
  try {
    const joke = await Joke.find({ approved: true, language: "malayalam" });
    res
      .status(200)
      .json({ _id: joke._id, joke: joke.joke, language: joke.language });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getManglishJokes = async (req: Request, res: Response) => {
  try {
    const joke = await Joke.find({ approved: true, language: "manglish" });
    res
      .status(200)
      .json({ _id: joke._id, joke: joke.joke, language: joke.language });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
