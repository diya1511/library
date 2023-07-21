import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BooksList from './components/BooksList';
import BookSingle from './components/BookSingle';
import Login from './components/Login';
import LibrarianDashboard from './components/LibrarianDashboard';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/librarian" element={<LibrarianDashboard />} />
      <Route path="/books/:id" element={<BookSingle />} />
      <Route path="/" element={<BooksList />} />
    </Routes>
  );
}

export default App;
