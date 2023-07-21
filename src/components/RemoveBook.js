import React, { useState } from 'react';
import axios from 'axios';

const RemoveBook = () => {
  const [bookId, setBookId] = useState('');

  const handleRemoveBook = () => {
    axios.delete(`/api/books/${bookId}`).then((response) => {
      console.log('Book removed successfully:', response.data);
      // You can update the book list here to reflect the changes immediately
      // For example, you can call a function from LibrarianDashboard to fetch and update the list of books.
    });
  };

  return (
    <div>
      <h3>Remove a Book</h3>
      <input
        type="text"
        placeholder="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <button onClick={handleRemoveBook}>Remove Book</button>
    </div>
  );
};

export default RemoveBook;
