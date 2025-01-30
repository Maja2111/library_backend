import mongoose from 'mongoose';
import Book from './book.js';
import faker from '@faker-js/faker';

export const createBook = async (req, res) => {
  try {
    const newBook = {
      author: faker.book.author(),
      title: faker.book.title(),
      genre: faker.book.genre(),
      series: faker.book.series(),
      publisher: faker.book.publisher(),
      format: faker.book.format(),
    };
    const book = new Book(newBook);
    await book.save(); //speichert das Buch im Dokument book
    res.status(201).json({ message: 'Book created successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating book' });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    return res
      .status(200)
      .json(books, { message: 'All books retrieved successfully' });
  } catch (error) {
    res.status(401).json({ message: 'Books not found' });
  }
};

export const getBookById = async (req, res) => {};

export const updateBook = async (req, res) => {};

export const deleteBook = async (req, res) => {};
