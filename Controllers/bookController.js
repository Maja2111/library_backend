import Book from '../Models/book.js';

/**
 * @description Funktion die ein neues Buch erstellt und ist mit fester Datenbank verbunden. Das Buch wird dann in der Datenbank/Dokument Book gespeichert.
 * @returns {object} Das neue Buch wird als Objekt zurückgegeben.
 * @async es ist asyncrone da erst die ¹)Verbindung zur Datenbank hergestellt werden muss, ²)dann die Daten gefüllt und als ³)letztes ausgegeben werden.
 * - es gibt immer verschiedene Fehlermeldungen, damit der Fehler während der Programmierung schneller gefunden werden kann
 */
export const createBook = async (req, res) => {
  try {
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      isbnNumber: req.body.isbnNumber,
      price: req.body.price,
      publisherYear: req.body.publisherYear,
      publisher: req.body.publisher,
      pages: req.body.pages,
      genre: req.body.genre,
      titleType: req.body.titleType,
      bookType: req.body.BookType,
    };
    const book = new Book(newBook);
    await book.save(); //speichert das Buch im Dokument book
    res.status(201).json({ message: `Book created successfully ${book}` });
  } catch (error) {
    res.status(400).json({ message: 'Error creating book' });
  }
};

export const search = async (req, res) => {
  const query = req.query.query;
  const results = await Book.find({ title: { $regex: query, $options: 'i' } });
  res.json(results);
};

/**
 * @returns gibt alle Bücher zurück
 */
export const getAllBooks = async (req, res) => {
  const author = req.query.author;
  const title = req.query.title;
  const query = {}; // ist mein Suchobjekt
  if (author) {
    query.author = { $regex: author };
  }
  if (title) {
    query.title = { $regex: title };
  }
  try {
    const books = await Book.find(query);
    return res
      .status(200)
      .json({ books, message: 'All books retrieved successfully' });
  } catch (error) {
    res.status(401).json({ message: 'books not found' });
  }
};

/**
 * @description sucht/ findet ein Buch mit
 * @method findOne() aus dem Dokument
 * @returns gibt ein Buch zurück
 */
export const getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    return res.status(200).json({ message: `Found book ${book}` });
  } catch (error) {
    res.status(402).json({ message: 'book not found' });
  }
};

/**
 * @description Funktion für die Aktualisierung eines Buches mit der
 * @method findByIdAndUpdate() sucht er das Buch im Dokument und verändert es im selben Schritt
 * @returns gibt das veränderte Buch aus
 */
export const updateBook = async (req, res) => {
  const id = req.params.id;
  try {
    const bookUpdate = await Book.findByIdAndUpdate(id);
    return res
      .status(200)
      .json({ message: `${bookUpdate} updated successfully` });
  } catch (error) {
    res.status(403).json({ message: 'update is not possible' });
  }
};

/**
 * @description Funktion für die Löschung eines Buches mit der
 * @method findByIdAndDelete() sucht er das Buch im Dokument und löscht es im selben Schritt
 * @returns gibt zurück dass das Buch erfolgreich gelöscht wurde
 */
export const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    const bookDelete = await Book.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: `${bookDelete} deleted successfully` });
  } catch (error) {
    res.status(404).json({ message: 'book can not delete' });
  }
};
