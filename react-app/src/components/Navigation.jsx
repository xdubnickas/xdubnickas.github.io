import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getText } from '../translations';

function Navigation({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine which section is currently visible
      const sections = ['about', 'projects', 'skills', 'contact'];
      let current = 'about';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    onNavigate(section);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <ul className="nav-list">
          <li className="nav-item">
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
            >{getText(language, 'nav.about')}</a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''} 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('projects');
              }}
            >{getText(language, 'nav.projects')}</a>
          </li>
          <li className="nav-item">
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''} 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('skills');
              }}
            >{getText(language, 'nav.skills')}</a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >{getText(language, 'nav.contact')}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
