import { Router } from 'express';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from '../Controllers/bookController.js';

export const bookRouter = Router();

bookRouter.post('/', createBook, (req, res) => res.send());
bookRouter.get('/', getAllBooks, (req, res) => res.send());
bookRouter.get('/:id', getBookById, (req, res) => res.send());
bookRouter.put('/:id', updateBook, (req, res) => res.send());
bookRouter.delete('/:id', deleteBook, (req, res) => res.send());
