import React from 'react'
import '../styles/StatsSection.css';

const StatsSection = () => {
    const stats = [
      { icon: '📈', number: '25+', label: 'Projects Completed' },
      { icon: '😊', number: '24+', label: 'Happy Clients' },
      { icon: '👨‍💻', number: '50+', label: 'Skilled Experts' },
      { icon: '🏆', number: '10+', label: 'Awards Won' }
    ];
  
    return (
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="icon">{stat.icon}</div>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))} 
      </div>
    );
  };
  

export default StatsSection