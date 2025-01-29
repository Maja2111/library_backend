import express from 'express';
import { connect } from 'connect.js';
import data from 'fakeData.js';
import dotenv from 'dotenv';

await connect();

await data();

const app = express();
app.use(express.json());

app.listen(() => {
  console.log('Server is running on port 3700');
});
