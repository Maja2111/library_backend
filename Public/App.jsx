import React, { useEffect, useState } from 'react';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBooks = async () => {
    const response = await fetch('/api/books');
    const data = await response.json();
    console.log(data); // Protokolliere die gesamte Antwort
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
      <main>
        {books.map((book) => (
          <div className="card" key={book._id}>
            <img src={book.coverImage} alt="Cover Image" />
            <h2>{book.title}</h2>
            <p>von {book.author}</p>
            <a href="#">Mehr erfahren</a>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
