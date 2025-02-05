import cors from 'cors';
import express from 'express';
import { connect } from './connect.js';
import dotenv from 'dotenv';
import { bookRouter } from './Routes/bookRoutes.js';

dotenv.config();
await connect();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use('/api/books', bookRouter);
app.use(express.static('Public')); // Statische Dateien bereitstellen

connect().then(() => {
  app.listen(process.env.PORT);
  console.log(`Server is running on port ${process.env.PORT}`);
});
