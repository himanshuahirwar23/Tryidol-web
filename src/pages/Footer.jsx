import React from "react";
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            At Tryidol Technologies, we specialize in leveraging digital transformation to push businesses beyond limits. 
            Innovating for a better tomorrow, today.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-whatsapp"></i></a>
          </div>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: hello@tryidoltech.com</p>
          <p>Phone: +91-7554169396</p>
          <p>Address: Bhopal Madhya Pradesh</p>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter Signup</h3>
          <p>Stay updated with our latest insights and innovation trends.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Tryidol. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
