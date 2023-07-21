import React, { useState } from 'react';
import axios from 'axios';
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

      // You can save the token in local storage or a cookie for subsequent requests
      // For example, you can use a state management library like Redux to store the token in the app's global state.

      // After successful login, you may want to redirect the user to a different page or show a success message.
    }).catch((error) => {
      console.log('Login failed:', error.response.data.message);
      // Handle login error and show an error message to the user.
    });
  };

  return (
    <div className="login-form">
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
