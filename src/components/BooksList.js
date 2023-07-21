import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './BooksList.css'; // Import the CSS file for BooksList component

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from backend API and set the state
    axios.get('/api/books').then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div className="books-container">
      {/* Display the list of books */}
      {books.map((book) => (
        <div key={book._id} className="book-item">
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Genres: {book.genres.join(', ')}</p>
          <p>Excerpt: {book.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
