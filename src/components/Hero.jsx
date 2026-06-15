import { useRef, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="explorations">
      <div className="hero-container container-content">
        {/* Top Content */}
        <div className="hero-top fade-up">
          <h1 className="hero-subtitle">Designer & Visual Storyteller</h1>
          <p className="hero-description body-large">
            A collection of design, illustration, and visual experiments exploring ideas, 
            identity, and everyday observations.
          </p>
          <a href="#explorations" className="btn btn-outline">Explore</a>
        </div>

        {/* Bottom Typography - The centerpiece */}
        <div className="hero-bottom fade-up" style={{ animationDelay: '200ms' }}>
          <h2 className="display-xl hero-title">e/zul/isme</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
