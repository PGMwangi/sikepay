import React, { useState } from 'react';
import axios from 'axios';
import "../styles/login.scss"

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/login/', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
