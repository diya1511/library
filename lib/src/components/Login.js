
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './Login.css'; // Import the CSS file for Login component

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const credentials = {
      username,
      password,
    };

    axios.post('/api/users/login', credentials).then((response) => {
      console.log('Login successful:', response.data.token);
    }).catch((error) => {
      console.log('Login failed:', error.response.data.message);
      // Handle login error and show an error message to the user.
    });
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};



export default Login;
