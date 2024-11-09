import React, { useEffect, useState, useRef } from 'react';
import '../styles/StatsSection.css';

const StatsSection = () => {
    const stats = [
        { icon: '📈', number: 25, label: 'Projects Completed' },
        { icon: '😊', number: 24, label: 'Happy Clients' },
        { icon: '👨‍💻', number: 50, label: 'Skilled Experts' },
        { icon: '🏆', number: 10, label: 'Awards Won' }
    ];

    return (
        <div className="stats-container">
            {stats.map((stat, index) => (
                <StatCard key={index} icon={stat.icon} number={stat.number} label={stat.label} />
            ))}
        </div>
    );
};

const StatCard = ({ icon, number, label }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const statRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(statRef.current);
                }
            });
        });

        if (statRef.current) {
            observer.observe(statRef.current);
        }

        return () => {
            if (statRef.current) {
                observer.unobserve(statRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < number) {
                        return prevCount + 1;
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 100); 

            return () => clearInterval(interval); 
        }
    }, [isVisible, number]);

    return (
        <div className="stat-card" ref={statRef}>
            <div className="icon">{icon}</div>
            <p>{count}+</p>
            <p>{label}</p>
        </div>
    );
};

export default StatsSection;
