import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const bookSchema = new Schema({
  books: [
    {
      author: { type: String, required: true },
      title: { type: String, required: true },
      genre: { type: String, required: true },
      series: { type: String, required: true },
      publisher: { type: String, required: true },
      format: { type: String, required: true },
    },
  ],
});

export default mongoose.model('book', bookSchema);
