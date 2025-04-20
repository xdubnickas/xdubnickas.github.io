import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; {new Date().getFullYear()} Štefan Dubnička. Všetky práva vyhradené.</p>
          </div>
          <div className="social-links">
            <a 
              href="https://github.com/xdubnickas" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/stefan-dubnicka" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:s.dubnicka2@gmail.com"
              aria-label="Email"
              className="social-icon"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="tel:+421950731620"
              aria-label="Phone"
              className="social-icon"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
