import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbnNumber: Number,
  price: Number,
  publicationYear: Number,
  publisher: String,
  pages: Number,
  genre: String,
  titleType: {
    type: String,
    enum: [
      'Einzelband',
      'Dilogie',
      'Trilogie',
      'Tetralogie',
      'Pentalogie',
      'Hexalogie',
      'Heptalogie',
      'Oktologie',
      'Ennealogie',
      'Dekalogie',
    ],
  },
  bookType: { type: String, enum: ['Taschenbuch', 'eBook', 'Hardcover'] },
});

export default mongoose.model('book', bookSchema);
