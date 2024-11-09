import "../styles/contact.css"
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send formData to a backend server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Have any questions? Feel free to reach out to us!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Email:  hello@tryidoltech.com</p>
        <p>Phone: +91-7554169396</p>
        <p>Address: 123 Your Street, Your City, Your Country</p>
      </div>
      
      {/* You can optionally embed a Google Map to show office location */}
      <div className="map">
        <iframe
          title="company-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093715!2d144.95565181534325!3d-37.81731397975169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2zU2F1Y2UgU3QsIE1lbGJvdXJuZSBWSUMgMzAwMCwg4K6V4K6k4K6_4K6k4K6_4K6w4K6z4K6-4K6w4K6_4K6kIOCuleCmug!5e0!3m2!1sen!2sin!4v1633090310463!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
