import React from 'react';
import './Footer.css'; 
import PayPal from '/Users/HP/travel/src/Assets/images/paypal.png'
import Applepay from '/Users/HP/travel/src/Assets/images/apple-pay.png'
import Googlepay from '/Users/HP/travel/src/Assets/images/google-pay.png'
import Master from '/Users/HP/travel/src/Assets/images/master.png'
import Visa from '/Users/HP/travel/src/Assets/images/visa.png'

const Footer = () => {
  return (
    <>
      <div className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <p>Stay updated with our latest travel news and offers</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            
            <div className="social-icons">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-youtube"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>Our Destinations</h4>
              <a href="#">Canada</a>
              <a href="#">Alaska</a>
              <a href="#">France</a>
              <a href="#">Iceland</a>
            </div>
            <div>
              <h4>Our Activities</h4>
              <a href="#">Northern Lights</a>
              <a href="#">Cruising & Sailing</a>
              <a href="#">Multi-activities</a>
              <a href="#">Kayaking</a>
            </div>
            <div>
              <h4>Travel Blogs</h4>
              <a href="#">Bali Travel Guide</a>
              <a href="#">Sri Lanka Travel Guide</a>
              <a href="#">Peru Travel Guide</a>
              <a href="#">Bali Travel Guide</a>
            </div>
            <div>
              <h4>Helpful Link</h4>
              <a href="#">Account</a>
              <a href="#">Terms and Condition</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div>
              <h4>About Us</h4>
              <a href="#">Our Story</a>
              <a href="#">Work with us</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="payment-icons">
            <img src={Visa} alt="Visa" />
            <img src={Master} alt="Mastercard" />
            <img src={PayPal} alt="Paypal" />
            <img src={Applepay} alt="Apple Pay" />
            <img src={Googlepay} alt="Google Pay" />
          </div>
          <p>© Globe 2024. All Rights Reserved</p>
          <div className="footer-terms">
            <a href="#">FAQ</a>
            <a href="#">Privacy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
