import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BooksList from './components/BooksList';
import BookSingle from './components/BookSingle';
import Login from './components/Login';
import LibrarianDashboard from './components/LibrarianDashboard';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import EditBook from './components/EditBook';
import Navigation from './components/Navigation';
function App() {
  return (
    <><Navigation />
    <div className='App'>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/librarian" element={<LibrarianDashboard />} />
      <Route path="/books/:id" element={<BookSingle />} />
      <Route path="/" element={<BooksList />} />
      <Route path="/signup" element={<Signup />} />
      <Route path ="/edit" element = {<EditBook/>}/>
      </Routes>
      <Toaster />
      </div>
      </>
    
  );
}

export default App;
