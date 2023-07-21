import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:8080/api/users/signup', {
          name,
          email,
          password,
        })
        .then((res) => {
          if (res) {
            toast.success(res.data.message);
            navigate('/login');
          } else {
            toast.error(res.data.message);
          }
        });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
  const Login = () => {
    navigate('/login');
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form">
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="full Name"
        />
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
        <button type="submit" onClick={handleSubmit}>
          Sign up
        </button>
      </form>
      <button className="link-btn" onClick={Login}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
export default Signup;
