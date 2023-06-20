import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// route imports
const userRoutes = require("./users/userRoutes");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/user", userRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('ശുദ്ധ ഹാസ്യം മരിച്ചിട്ടില്ല');
});

app.listen(port, () => {
  console.log(`ഹാസ്യം is running on http://localhost:${port}`);
});