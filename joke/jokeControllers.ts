import { Request, Response } from "express";
const Joke = require("./jokeModel");

export const getAllJokes = async (req: Request, res: Response) => {
  try {
    const jokes = await Joke.find({ approved: true });
    res.status(200).json(jokes);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const createJoke = async (req: Request, res: Response) => {
  const { joke, language } = req.body;
  try {
    if (!joke) {
      throw Error("Please type in your joke before submitting next time");
    } else {
      const duplicateJoke = await Joke.findOne({ joke });
      if (duplicateJoke) {
        throw Error("The joke already exists - do a different one");
      } else {
        const da_joke = await Joke.create({ joke, language });
        res.status(200).json(da_joke);
      }
    }
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
      error: "You do not have the proper authorization to complete this action",
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
    const jokes = await Joke.find({ approved: true, language: "Malayalam" });
    res.status(200).json(jokes);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getRandomMalayalamJokes = async (req: Request, res: Response) => {
  try {
    const count = await Joke.countDocuments({
      approved: true,
      language: "Malayalam",
    }).exec();
    const randomIndex = Math.floor(Math.random() * count);
    const joke = await Joke.findOne({ approved: true })
      .skip(randomIndex)
      .exec();
    res.status(200).json(joke);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getManglishJokes = async (req: Request, res: Response) => {
  try {
    const jokes = await Joke.find({ approved: true, language: "Manglish" });
    res.status(200).json(jokes);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getRandomManglishJokes = async (req: Request, res: Response) => {
  try {
    const count = await Joke.countDocuments({
      approved: true,
      language: "Manglish",
    }).exec();
    const randomIndex = Math.floor(Math.random() * count);
    const joke = await Joke.findOne({ approved: true })
      .skip(randomIndex)
      .exec();
    res.status(200).json(joke);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteJoke = async (req: Request, res: Response) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) {
      throw Error("Joke does not exist");
    }
    await joke.deleteOne();

    res.json({ message: "Joke deleted" });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};
