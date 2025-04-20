import React from 'react';

function Projects() {
  // section:nth-child(even) styling will be applied automatically from CSS
  return (
    <section id="projects">
      <div className="container">
        <h2>Moje projekty</h2>
        <div className="projects">
          {/* Projekt 1 */}
          <div className="project">
            <img src="https://via.placeholder.com/300x200" alt="Rezervačný systém" />
            <div className="project-info">
              <h3>Rezervačný systém</h3>
              <p>Bakalárska práca - webová aplikácia pre rezerváciu priestorov a služieb s využitím React, Spring Boot a MySQL.</p>
              <a href="#" target="_blank" rel="noopener noreferrer">Zobraziť projekt</a>
            </div>
          </div>
          
          {/* Projekt 2 */}
          <div className="project">
            <img src="https://via.placeholder.com/300x200" alt="Webová stránka" />
            <div className="project-info">
              <h3>Osobná webová stránka</h3>
              <p>Táto webová stránka vytvorená pomocou HTML, CSS a hostovaná na GitHub Pages.</p>
              <a href="https://github.com/xdubnickas/xdubnickas.github.io" target="_blank" rel="noopener noreferrer">Zdrojový kód</a>
            </div>
          </div>
          
          {/* Projekt 3 */}
          <div className="project">
            <img src="https://via.placeholder.com/300x200" alt="Študentský projekt" />
            <div className="project-info">
              <h3>Iné školské projekty</h3>
              <p>Rôzne menšie projekty vytvorené počas štúdia, zahŕňajúce programovanie v C, Python a Java.</p>
              <a href="https://github.com/xdubnickas" target="_blank" rel="noopener noreferrer">GitHub profil</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
