import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 data-aos="fade-right">O mne</h2>
        <div className="about-content">
          <div data-aos="fade-up" data-aos-delay="200">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
