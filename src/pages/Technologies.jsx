// src/Technologies.jsx
import React from 'react';
import '../styles/Technologies.css';

const technologiesData = [
  {
    title: 'Mobile App Development ',
    description: 'Whether you are looking to develop a static mobile app or need a dynamic one with the most friendly features but complex algorithms, we have the best resources who can not only cater to your business requirements but also help you with the best suggestions to enhance your end-product.',
    icon: '📱',
  },
  {
    title: 'Web App Development ',
    description: 'We have gained prominence in developing the most interactive and responsive websites using the latest website development technologies, such as Python, Django, Ruby on Rails, Laravel, and many more. We have proven our expertise by developing an elite range of websites thriving in the market.',
    icon: '💻',
  },
  {
    title: 'Game App Development ',
    description: 'We help shape your business dream of developing the most riveting game to flourish in the gaming sector and become an unbeatable brand. Our professionals are not only skilled with the latest technologies but also they are highly experienced to cater to all your requirements.',
    icon: '🎮',
  },
  {
    title: 'Custom Software Dev ',
    description: 'We specialize in custom software development, creating tailored solutions that meet the unique requirements of each client, leveraging the latest technologies to enhance efficiency, scalability, and user experience.',
    icon: '🌐',
  },
  {
    title: 'AR/VR Development',
    description: 'Creating transformative digital experiences by leveraging artificial intelligence, machine learning, and advanced data analytics to empower businesses, drive innovation, and unlock new levels of efficiency and personalization across diverse industries.',
    icon: '🤖',
  },
  {
    title: 'Project Consultation',
    description: 'We provide comprehensive project consultation services, guiding businesses through the complexities of entering the blockchain sector and implementing innovative blockchain solutions tailored to their needs.',
    icon: '🔗',
  },
];

const Technologies = () => {
  return (
    <div className="technologies-container">
      {technologiesData.map((tech, index) => (
        <div key={index} className="technology-card">
          <span className="icon">{tech.icon}</span>
          <h3>{tech.title}</h3>
          <p>{tech.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
