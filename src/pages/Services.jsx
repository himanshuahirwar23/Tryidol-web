import React, { useState } from 'react';
import '../styles/services.css';

const Services = () => {
  // State to track the open/close status of each <li>
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Function to toggle dropdown for <li>
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="services-container">
      <div className="services-column">
        <div className="section-header">
          <h2>Technologies</h2>
        </div>
        <ul>
          <li onClick={() => toggleDropdown(1)} className={activeDropdown === 1 ? 'active' : ''}>
            Mobile App Development
            <ul className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`}>
              <li>Android</li>
              <li>iOS</li>
              <li>Hybrid Apps</li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown(2)} className={activeDropdown === 2 ? 'active' : ''}>
            Gaming App Development
            <ul className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`}>
              <li>Unity</li>
              <li>Unreal Engine</li>
              <li>2D/3D Games</li>
            </ul>
          </li>
          <li>Microsoft Technologies</li>
          <li>ERP Software Development</li>
          <li>CRM Development</li>
          <li>Open Source Technologies</li>
          <li>Progressive Web App</li>
          <li>AR / VR / MR</li>
          <li>AI, Machine Learning & Data Science</li>
          <li>Blockchain Development</li>
          <li>Chatbot Development</li>
          <li>Internet of Things (IOT)</li>
          <li>Cloud Computing</li>
          <li>Testing & QA</li>
          <li>Big Data and Analytics</li>
          <li>DevOps</li>
        </ul>
      </div>

      <div className="services-column">
        <div className="section-header">
          <h2>Key Services</h2>
        </div>
        <ul>
          <li onClick={() => toggleDropdown(3)} className={activeDropdown === 3 ? 'active' : ''}>
            Product Engineering & Development
            <ul className={`dropdown ${activeDropdown === 3 ? 'active' : ''}`}>
              <li>Prototyping</li>
              <li>Development</li>
              <li>Testing</li>
            </ul>
          </li>
          <li>Re-engineering</li>
          <li>Maintenance / Support / Sustenance</li>
          <li>Integration / Data Management</li>
          <li>QA & Automation</li>
          <li>Web scraping</li>
          <li>Generative AI</li>
        </ul>
      </div>

      <div className="services-column">
        <div className="section-header">
          <h2>How We Work</h2>
        </div>
        <ul>
          <li onClick={() => toggleDropdown(4)} className={activeDropdown === 4 ? 'active' : ''}>
            Offshore Development Center
            <ul className={`dropdown ${activeDropdown === 4 ? 'active' : ''}`}>
              {/* <li>Dedicated Team</li>
              <li>Management</li>
              <li>Infrastructure</li> */}
            </ul>
          </li>
          <li>Turnkey Project Services</li>
          <li>Build Operate Transfer (BOT)</li>
          <li>Contract Staffing Services</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
