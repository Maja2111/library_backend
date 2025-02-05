import React, { useEffect, useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBooks = async () => {
    const response = await fetch('/api/books');
    const data = await response.json();
    setBooks(data.books);
  };

  const searchBooks = async () => {
    const response = await fetch(
      `/api/books/search?query=${encodeURIComponent(searchTerm)}`
    );
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Bücherliste</h1>
      <label htmlFor="search">Suchfeld</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchBooks}>Suchen</button>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} von {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
