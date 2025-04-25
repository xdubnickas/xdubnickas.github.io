import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getText } from '../translations';
import '../style/Contact.css';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Contact() {
  const { language } = useLanguage();

  return (
    <section id="contact">
      <div className="container">
        <h2 data-aos="fade-right">{getText(language, 'contact.title')}</h2>
        
        <div className="contact-wrapper" data-aos="fade-up" data-aos-delay="200">
          <div className="contact-info">
            <p className="contact-description">
              {getText(language, 'contact.description')}
            </p>
            
            <motion.div 
              className="contact-methods"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="contact-card"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="contact-icon-wrapper">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h3>{getText(language, 'contact.email')}</h3>
                  <a href="mailto:s.dubnicka2@gmail.com">s.dubnicka2@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-card"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="contact-icon-wrapper">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h3>{getText(language, 'contact.phone')}</h3>
                  <a href="tel:+421950731620">+421 950 731 620</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-card"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="contact-icon-wrapper">
                  <i className="fab fa-github"></i>
                </div>
                <div className="contact-details">
                  <h3>{getText(language, 'contact.github')}</h3>
                  <a href="https://github.com/xdubnickas" target="_blank" rel="noopener noreferrer">
                    github.com/xdubnickas
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
