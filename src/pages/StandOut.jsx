import React from 'react';
import '../styles/StandOut.css'; 

const StandOut = () => {
  return (
    <div className="stand-out-container">
      <div className="text-section">
        <h1>What Makes Us Stand Out From the Crowd?</h1>
        <ul>
          <li>Best-in-class resources</li>
          <li>Use of the latest technologies</li>
          <li>Most innovative approach</li>
          <li>Customized solutions</li>
          <li>Agile methodology</li>
          <li>Transparency with the clients</li>
          <li>End-to-end business solutions</li>
          <li>Zeal to come up with an empirical solution</li>
          <li>24/7 at your service</li>
          <li>On-time delivery</li>
          <li>Flexible engagement model</li>
          <li>And the list continues...</li>
        </ul>
      </div>
      <div className="image-section">
        <img src="https://dxminds.com/wp-content/uploads/2022/09/What-makes-us-standout-from-croud.png" alt="Standing Out from the Crowd" />
      </div>
    </div>
  );
};

export default StandOut;
