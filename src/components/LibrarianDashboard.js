import React from 'react';
import AddBook from './AddBook';
import RemoveBook from './RemoveBook';
import './LibrarianDashboard.css'; // Import the CSS file for LibrarianDashboard component

const LibrarianDashboard = () => {
  return (
    <div className="librarian-dashboard">
      <h2>Librarian Dashboard</h2>
      <AddBook />
      <RemoveBook />
    </div>
  );
};

export default LibrarianDashboard;
