import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
const RemoveBook = () => {
  const [bookId, setBookId] = useState('');

  const handleRemoveBook = () => {
    axios
      .delete(`http://localhost:8080/api/books/${bookId}`)
      .then((response) => {
        console.log('Book removed successfully:', response.data);
        toast.success('Book removed successfully');
      });
  };

  return (
    <div>
      <h3>Remove a Book</h3>
      <input
        type="text"
        placeholder="Enter Book ID to remove book"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <button onClick={handleRemoveBook}>Remove Book</button>
    </div>
  );
};

export default RemoveBook;
