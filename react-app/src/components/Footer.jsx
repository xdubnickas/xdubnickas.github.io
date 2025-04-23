import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#023e7d" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
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
