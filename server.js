import express from 'express';
import { connectToDB } from './connect.js';
//import data from './Data/fakeData.js';
import dotenv from 'dotenv';

dotenv.config();
await connectToDB();
//await data();

const app = express();
app.use(express.json());

connectToDB().then(() => {
  app.listen(process.env.PORT);
  console.log(`Server is running on port ${process.env.PORT}`);
});
