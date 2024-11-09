// src/pages/AboutUs.jsx
import React from "react";
import "../styles/AboutUs.css";
// import aboutImage from '../Images/aboutImage.jpg';
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="about-container">
        <section className="about-section">
          <div className="about-content">
            <h2>How It Started</h2>
            <h1>Our Dream is Global Learning Transformation</h1>
            <p>
            Tryidol Technology Pvt Ltd, founded in 2023 in Bhopal, India, excels in innovative digital solutions and business automation. Our expert team, with over a decade of experience in software, web, and app development, serves diverse industries such as e-commerce, healthcare, finance, education, and logistics. Focused on client satisfaction and excellence, we empower businesses with advanced technologies to drive growth and efficiency, staying ahead in the dynamic tech landscape.
            </p>
          </div>

          
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1579389083395-4507e98b5e67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlYW13b3JrfGVufDB8fDB8fHww"
              alt="About"
            />
          </div>
        </section>
        <div className="about-stats">
            <div className="stat-box">
              <p>Years Experience</p>
              <h3>3.5</h3>
            </div>
            <div className="stat-box">
              <p>Project Challenge</p>
              <h3>23</h3>
            </div>
            <div className="stat-box">
              <p>Positive Reviews</p>
              <h3>830+</h3>
            </div>
            <div className="stat-box">
              <p>Trusted Students</p>
              <h3>100K</h3>
            </div>
          </div>

        <section className="about-section2">
          <h1>About Us</h1>
          <p>
            At Tryidol Technologies, we are a dynamic team of innovators and
            problem solvers dedicated to providing cutting-edge IT solutions to
            businesses across the globe. With a passion for technology and a
            focus on customer success, we specialize in delivering tailor-made
            digital experiences that drive growth, improve efficiency, and
            faster innovation.
          </p>
        </section>

        <section className="mission-section2">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to empower businesses by leveraging the
            latest technologies, providing robust solutions, and delivering
            exceptional service. We believe that every business, regardless of
            size, deserves access to world-class IT solutions, and we are
            committed to making that a reality.
          </p>
        </section>

        <section className="services-section2">
          <h2>What We Do</h2>
          <ul>
            <li>
              <strong>Web Development:</strong> Building responsive, scalable
              websites that deliver seamless user experiences.
            </li>
            <li>
              <strong>Mobile App Development:</strong> Crafting high-performance
              apps for iOS and Android platforms.
            </li>
            <li>
              <strong>Cloud Solutions:</strong> Helping businesses transition to
              the cloud, enhancing their flexibility and scalability.
            </li>
            <li>
              <strong>Software Development:</strong> Offering custom software
              solutions tailored to meet specific business needs.
            </li>
            <li>
              <strong>IT Consulting:</strong> Guiding businesses through their
              digital transformation with expert advice and strategies.
            </li>
          </ul>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
