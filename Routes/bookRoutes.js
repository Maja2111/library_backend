import { Router } from 'express';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  search,
} from '../Controllers/bookController.js';

export const bookRouter = Router();

bookRouter.get('/search', search, (req, res) => {
  const query = req.query.query;
  res.send(query);
});
bookRouter.post('/', createBook, (req, res) => res.send());
bookRouter.get('/', getAllBooks, (req, res) => res.send());
bookRouter.get('/:id', getBookById, (req, res) => res.send());
bookRouter.put('/:id', updateBook, (req, res) => res.send());
bookRouter.delete('/:id', deleteBook, (req, res) => res.send());
