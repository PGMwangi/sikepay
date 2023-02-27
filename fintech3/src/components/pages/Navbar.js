import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';
import '../styles/navbar.scss';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-links">
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
          <NavLink to="/personal" activeClassName="active-link" style={{ marginRight: '20px' }}>
            Personal
          </NavLink>
          <NavLink to="/business" activeClassName="active-link" style={{ marginRight: '20px' }}>
            Business
          </NavLink>
          <NavLink to="/about" activeClassName="active-link" style={{ marginRight: '20px' }}>
            About
          </NavLink>
          <NavLink to="/dashboard" activeClassName="active-link" style={{ marginLeft: 'auto' }}>
            Dashboard
          </NavLink>

        </div>
        {/* <div className="login-button">
          <LoginButton />
        </div> */}
      </nav>
      <div className="login-button">
          <LoginButton />
        </div>
      
    </div>
  );
}

export default Navbar;

