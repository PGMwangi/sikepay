import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../styles/personal.scss';

const Personal = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    surname:'',
    email: '',
    gender: '',
    nationality: '',
    city: '',
    country:'',
    address1: '',
    address2:'',
    postal_code: '',  
    password: '',
    age: '',
    phone_number: '', 
  });
  const navigate = useNavigate()
  
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/sikapay/', formData)
      .then(response => {
        console.log(response.data);
        navigate.push('/login');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="personal-form">
      <div className="form-row">
        <label htmlFor="firstname">First Name:</label>
        <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} />
      </div>

      <div className="form-row">
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} />
      </div>
      
      <div className="form-row">
        <label htmlFor="surname">Surname:</label>
        <input type="surname" name="surname" value={formData.surname} onChange={handleInputChange} />
      </div>

      <div className="form-row">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>

      <div className="form-row">
        <label htmlFor="gender">Gender:</label>
        <input type="gender" name="gender" value={formData.gender} onChange={handleInputChange} />
      </div>

      <div className="form-row">
        <label htmlFor="nationality">Nationality:</label>
        <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} />
      </div>

      <div className="form-row">
        <label htmlFor="city">City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
      </div>

      <div className="form-row">
        <label htmlFor='country'>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleInputChange}/>
      </div>
      <div className="form-row">
        <label htmlFor="address2">Address2:</label>
        <input type="text" name="address2" value={formData.address2} onChange={handleInputChange} />
      </div>

      <div className="form-row">
        <label htmlFor="postal_code">Postal Code:</label>
        <input type="text" name="postal_code" value={formData.postal_code} onChange={handleInputChange} />
      </div>

      <div className="form-row">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </div>

      <div className="form-row">
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
      </div>

      <div className="form-row">
        <label htmlFor="phone_number">Phone Number:</label>
        <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleInputChange} />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default Personal