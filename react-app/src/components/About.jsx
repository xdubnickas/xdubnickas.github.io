import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getText } from '../translations';

function About() {
  const { language } = useLanguage();

  return (
    <section id="about">
      <div className="container">
        <h2 data-aos="fade-right">{getText(language, 'about.title')}</h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-aos="fade-right"
          >
            <p>
              {getText(language, 'about.p1')}
            </p>
            <p className="mt-4">
              {getText(language, 'about.p2')}
            </p>
          </motion.div>
          
          <motion.div 
            className="about-profile-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-aos="fade-left"
          >
            <div className="profile-image-container">
              <img 
                src="/img/profile-photo2.jpg" 
                alt="Štefan Dubnička" 
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
