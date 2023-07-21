import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [genres, setGenres] = useState('');

  const handleAddBook = () => {
    const newBook = {
      title,
      author,
      excerpt,
      content,
      genres: genres.split(',').map((genre) => genre.trim()),
    };

    axios.post('/api/books', newBook).then((response) => {
      console.log('Book added successfully:', response.data);
      // You can update the book list here to reflect the changes immediately
      // For example, you can call a function from LibrarianDashboard to fetch and update the list of books.
    });
  };

  return (
    <div>
      <h3>Add a Book</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Excerpt"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genres (comma-separated)"
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBook;
