import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const mongoose = require("mongoose");

// route imports
const userRoutes = require("./user/userRoutes");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const cors = require("cors");
app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use("/api/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("ശുദ്ധ ഹാസ്യം മരിച്ചിട്ടില്ല ?");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(`ഹാസ്യം is running on http://localhost:${port}`);
    });
  })
  .catch((error: any) => {
    console.log(error);
  });
