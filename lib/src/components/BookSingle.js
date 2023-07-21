import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BookSingle.css';

const BookSingle = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // Fetch the single book from backend API using the ID and set the state
    axios.get(`http:/localhost:8080/api/books/${id}`).then((response) => {
      setBook(response.data);
    });
  }, [id]);

  return (
    <div>
      {/* Display book information */}
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genres: {book.genres && book.genres.join(', ')}</p>
      <p>Content: {book.content}</p>
    </div>
  );
};

export default BookSingle;
