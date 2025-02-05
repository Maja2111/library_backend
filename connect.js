import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.MONGODB_URI);
export async function connect() {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (MONGODB_URI) {
    await mongoose.connect(MONGODB_URI);
    console.log(
      ':white_check_mark: MongoDB erfolgreich verbunden :fire::fire:'
    );
  } else {
    throw new Error(' :x: Fehler:  MONGODB_URL not found');
  }
}
