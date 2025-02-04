import express from 'express';
import { connectToDB } from './connect.js';
import dotenv from 'dotenv';
import { bookRouter } from './Routes/bookRoutes.js';

dotenv.config();
await connectToDB();

const app = express();
app.use(express.json());
app.use('/api/books', bookRouter);

connectToDB().then(() => {
  app.listen(process.env.PORT);
  console.log(`Server is running on port ${process.env.PORT}`);
});
