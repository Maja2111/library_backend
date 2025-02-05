import { Schema, model } from 'mongoose';

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
  coverImage: String,
});

export default model('book', bookSchema);
