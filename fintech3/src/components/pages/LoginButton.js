import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/login.scss"

const LoginButton = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    otp: ''
  });

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSendOtp = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/send_otp/', { email: formData.email })
      .then(response => {
        setShowOtpForm(true);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/login/', formData)
      .then(response => {
        // onLogin(response.data);
        setShowLoginForm(false);
        setShowOtpForm(false);
        setFormData({
          email: '',
          password: '',
          otp: ''
        });
        navigate.push('/dashboard');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setShowLoginForm(false);
    setShowOtpForm(false);
  };

  return (
    <div className="login-button-container">
      {!showLoginForm && (
        <button onClick={handleLoginButtonClick}>Login</button>
      )}
      {showLoginForm && !showOtpForm && (
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </div>
          <div className="form-actions">
            <button type="submit">Login</button>
            <button onClick={handleSendOtp}>Login with OTP</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      )}
      {showOtpForm && (
        <form onSubmit={handleLogin} className="otp-form">
          <div className="form-group">
            <label htmlFor="otp">OTP:</label>
            <input type="text" name="otp" value={formData.otp} onChange={handleInputChange} />
          </div>
          <div className="form-actions">
            <button type="submit">Login</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginButton;




