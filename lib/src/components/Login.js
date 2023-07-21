import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });
      if (res) {
        toast.success(res.data.message);
        localStorage.setItem('auth', JSON.stringify(res.data));
        window.localStorage.setItem('isLoggedIn', true);
        navigate('/');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log('Login failed:', error.response.data.message);
      toast.error('Something went wrong');
    }
  };
  const signup = () => {
    navigate('/signup');
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit" onClick={handleLogin}>
          Log In
        </button>
      </form>
      <button className="link-btn" onClick={signup}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
