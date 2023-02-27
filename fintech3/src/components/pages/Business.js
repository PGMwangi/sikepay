import React, { useState } from 'react';
import '../styles/business.scss'
import axios from 'axios';

function Business() {
  const [formData, setFormData] = useState({
    business_name: '',
    contact_number: '',
    email: '',
    country: '',
    street_address: '',
    streetaddress2: '',
    city: '',
    region: '',
    postalcode: '',
    password: '',
    confirmpassword: ''
  });

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:8000/business/', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='business-page-form'>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <input
            type="text"
            name="business_name"
            value={formData.business_name}
            onChange={handleInputChange}
            placeholder="Business Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleInputChange}
            placeholder="Contact Number"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            placeholder="Country"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="street_address"
            value={formData.street_address}
            onChange={handleInputChange}
            placeholder="Street Address"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="streetaddress2"
            value={formData.streetaddress2}
            onChange={handleInputChange}
            placeholder="Street Address 2"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="City"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
            placeholder="Region"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="postalcode"
            value={formData.postalcode}
            onChange={handleInputChange}
            placeholder="Postal Code"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            required
            />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Business;

