import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Rezervačný systém",
      description: "Bakalárska práca - webová aplikácia pre rezerváciu priestorov a služieb s využitím React, Spring Boot a MySQL.",
      imageUrl: "https://via.placeholder.com/300x200",
      imageAlt: "Rezervačný systém",
      link: "#",
      linkText: "Zobraziť projekt"
    },
    {
      id: 2,
      title: "Osobná webová stránka",
      description: "Táto webová stránka vytvorená pomocou React a hostovaná na GitHub Pages.",
      imageUrl: "https://via.placeholder.com/300x200",
      imageAlt: "Webová stránka",
      link: "https://github.com/xdubnickas/xdubnickas.github.io",
      linkText: "Zdrojový kód"
    },
    {
      id: 3,
      title: "Iné školské projekty",
      description: "Rôzne menšie projekty vytvorené počas štúdia, zahŕňajúce programovanie v C, Python a Java.",
      imageUrl: "https://via.placeholder.com/300x200",
      imageAlt: "Študentský projekt",
      link: "https://github.com/xdubnickas",
      linkText: "GitHub profil"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Moje projekty</h2>
        <div className="projects">
          {projectsData.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              link={project.link}
              linkText={project.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
