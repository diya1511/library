import React from 'react';
import AddBook from './AddBook';
import RemoveBook from './RemoveBook';
import './LibrarianDashboard.css'; // Import the CSS file for LibrarianDashboard component
import { useNavigate } from 'react-router-dom';
const LibrarianDashboard = () => {
  const navigate = useNavigate();
  const update = () => {
    navigate('/edit');
  };
  return (
    <div className="librarian-dashboard">
      <h3>Librarian Dashboard</h3>
      <AddBook />
      <RemoveBook />
      <br />
      <button onClick={update}> To edit book </button>
    </div>
  );
};

export default LibrarianDashboard;
