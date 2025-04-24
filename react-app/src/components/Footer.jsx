import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getText } from '../translations';
import '../style/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="modern-footer2">
      <div className="footer-transition">
        <div className="footer-transition-shape"></div>
      </div>
      
      <div className="container footer-content">
        <div className="footer-sections">
          <div className="footer-section" data-aos="fade-up">
            <h3>Štefan Dubnička</h3>
            <p>{getText(language, 'header.title')}</p>
            <p>{getText(language, 'footer.description')}</p>
          </div>
          
          <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
            <h3>{getText(language, 'footer.contact')}</h3>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:s.dubnicka2@gmail.com">
                  <i className="fas fa-envelope"></i> s.dubnicka2@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+421950731620">
                  <i className="fas fa-phone"></i> +421 950 731 620
                </a>
              </li>
              <li>
                <a href="https://github.com/xdubnickas" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section" data-aos="fade-up" data-aos-delay="200">
            <h3>{getText(language, 'footer.quickLinks')}</h3>
            <ul className="footer-links">
              <li><a href="#about">{getText(language, 'nav.about')}</a></li>
              <li><a href="#projects">{getText(language, 'nav.projects')}</a></li>
              <li><a href="#skills">{getText(language, 'nav.skills')}</a></li>
              <li><a href="#contact">{getText(language, 'nav.contact')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright" data-aos="fade-up" data-aos-delay="300">
          <p>&copy; {currentYear} Štefan Dubnička. {getText(language, 'footer.copyright')}</p>
          <p>{getText(language, 'footer.createdWith')} <i className="fas fa-heart"></i> {getText(language, 'footer.and')} React.js</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
