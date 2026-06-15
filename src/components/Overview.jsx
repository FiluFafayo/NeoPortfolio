import { useState, useEffect, useRef } from 'react';
import './Overview.css';

const stats = [
  { value: 50, suffix: '+', label: 'Creative Works' },
  { value: 100, suffix: '+', label: 'Sketches' },
  { value: 3, suffix: '+', label: 'Years Exploring' }
];

const Overview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 1200;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = stat.value / steps;
        
        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(Math.floor(increment * currentStep), stat.value);
            return newCounts;
          });
          
          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepTime);
      });
    }
  }, [isVisible]);

  return (
    <section className="overview" ref={sectionRef}>
      <div className="container-content">
        <div className="overview-wrapper">
          <div className="overview-header">
            <span className="motif">∴</span>
            <h2 className="heading">Overview</h2>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="stat-value display-large">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="stat-label body-large">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
