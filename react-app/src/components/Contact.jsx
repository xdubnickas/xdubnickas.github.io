import React from 'react';
import '../style/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Kontakt</h2>
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <div className="contact-info">
                <h3>Email</h3>
                <a href="mailto:s.dubnicka2@gmail.com">s.dubnicka2@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <div className="contact-info">
                <h3>Telefón</h3>
                <a href="tel:+421950731620">+421 950 731 620</a>
              </div>
            </div>
          </div>
          <div className="contact-text">
            <p>
              Ak máte záujem o spoluprácu alebo akékoľvek otázky, neváhajte ma kontaktovať.
              Rád odpoviem na vaše otázky v čo najkratšom čase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
