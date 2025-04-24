import React from 'react';
import '../style/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer2">
      <div className="footer-transition">
        <div className="footer-transition-shape"></div>
      </div>
      
      <div className="container footer-content">
        <div className="footer-sections">
          <div className="footer-section" data-aos="fade-up">
            <h3>Štefan Dubnička</h3>
            <p>Web Developer | Java Developer | Student</p>
            <p>Vytváram moderné webové aplikácie s dôrazom na používateľský zážitok.</p>
          </div>
          
          <div className="footer-section" data-aos="fade-up" data-aos-delay="100">
            <h3>Kontakt</h3>
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
            <h3>Rýchle odkazy</h3>
            <ul className="footer-links">
              <li><a href="#about">O mne</a></li>
              <li><a href="#projects">Projekty</a></li>
              <li><a href="#skills">Zručnosti</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright" data-aos="fade-up" data-aos-delay="300">
          <p>&copy; {currentYear} Štefan Dubnička. Všetky práva vyhradené.</p>
          <p>Vytvorené s <i className="fas fa-heart"></i> a React.js</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
