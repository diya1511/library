import React, { useState } from 'react';
import axios from 'axios';
import './Addbook.css';
import toast from 'react-hot-toast';
const EditBook = () => {
  const [bookId, setBookId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [genres, setGenres] = useState('');

  const handleEditBook = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:8080/api/books/${bookId}`, {
        title,
        author,
        excerpt,
        content,
        genres: genres.split(',').map((genre) => genre.trim()),
      });
      if (res) {
        toast.success(`Book Editted successfully`);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="box">
      <h3>Edit a Book</h3>
      <input
        type="text"
        placeholder="Enter Book ID to remove book"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
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
      <input
        placeholder="Excerpt"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />
      <input
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
      <button onClick={handleEditBook}>Edit Book</button>
    </div>
  );
};

export default EditBook;
