import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 data-aos="fade-right">O mne</h2>
        
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
              Som študentom aplikovanej informatiky na STU FEI so špecializáciou na webové technológie.
              Mám vášeň pre vytváranie moderných a používateľsky prívetivých webových aplikácií s využitím 
              najnovších technológií.
            </p>
            <p className="mt-4">
              Popri štúdiu sa aktívne venujem samostatnému vzdelávaniu v oblasti webového vývoja, 
              s dôrazom na React.js a moderné frontendové nástroje. Nadchádzam sa pre elegantné
              riešenia komplexných problémov a snažím sa neustále zdokonaľovať svoje zručnosti.
            </p>
            <p className="mt-4">
              Vo voľnom čase rád experimentujem s novými technológiami, čítam technické blogy 
              a prispievam do open-source projektov. Mojím cieľom je stať sa fullstack vývojárom 
              s hlbokými znalosťami moderných webových technológií.
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
