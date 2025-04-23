import React, { useState, useEffect } from 'react';

function Navigation({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              onNavigate('about');
            }}>O mne</a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={(e) => {
              e.preventDefault();
              onNavigate('projects');
            }}>Projekty</a>
          </li>
          <li className="nav-item">
            <a href="#skills" onClick={(e) => {
              e.preventDefault();
              onNavigate('skills');
            }}>Zručnosti</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}>Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
