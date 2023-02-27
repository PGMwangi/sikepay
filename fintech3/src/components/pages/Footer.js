import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social-media">
        <a href="https://www.facebook.com/SikePay" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/SikePay" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/SikePay/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/sikepay" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className="footer__contact">
        <h3>Contact Us</h3>
        <p>123 Main St, Anytown USA</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@sikepay.com</p>
      </div>
      <div className="footer__links">
        <div className="footer__link-group">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#">Personal Registration</a>
            </li>
            <li>
              <a href="#">Business Registration</a>
            </li>
          </ul>
        </div>
        <div className="footer__link-group">
          <h3>FAQs</h3>
          <ul>
            <li>
              <a href="#">What is SikePay?</a>
            </li>
            <li>
              <a href="#">How does it work?</a>
            </li>
            <li>
              <a href="#">Is it safe?</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
