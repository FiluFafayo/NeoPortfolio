import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Explorations');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Explorations', 'About', 'Contact'];

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="motif">∴</span>
          <span>e/zul/isme</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-items desktop-only">
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-item ${activeItem === item ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
              {activeItem === item && <span className="nav-underline" />}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu mobile-only">
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <button
                key={item}
                className={`mobile-nav-item ${activeItem === item ? 'active' : ''}`}
                onClick={() => handleNavClick(item)}
              >
                {item}
                {activeItem === item && (
                  <span className="motif mobile-motif">∴</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
