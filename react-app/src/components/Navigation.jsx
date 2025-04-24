import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getText } from '../translations';

function Navigation({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

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
            }}>{getText(language, 'nav.about')}</a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={(e) => {
              e.preventDefault();
              onNavigate('projects');
            }}>{getText(language, 'nav.projects')}</a>
          </li>
          <li className="nav-item">
            <a href="#skills" onClick={(e) => {
              e.preventDefault();
              onNavigate('skills');
            }}>{getText(language, 'nav.skills')}</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}>{getText(language, 'nav.contact')}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
