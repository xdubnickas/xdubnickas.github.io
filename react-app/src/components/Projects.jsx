import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Rezervačný systém",
      description: "Online rezervačný systém pre firmy a organizácie, ktorý umožňuje jednoduchú správu priestorov a služieb.",
      imageUrl: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Rezervačný systém",
      githubUrl: "https://github.com/xdubnickas/reservation-system",
      demoUrl: "https://reservation-demo.netlify.app",
      technologies: ["React", "Spring Boot", "MySQL", "Bootstrap", "REST API"]
    },
    {
      id: 2,
      title: "Brightness Control",
      description: "Moderná, odľahčená aplikácia v systémovej lište pre ovládanie jasu obrazovky s elegantnými animáciami a vizuálnou spätnou väzbou.",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Brightness Control",
      githubUrl: "https://github.com/xdubnickas/brightness-control",
      demoUrl: null,
      technologies: ["Python", "Tkinter", "PyWin32", "WMI", "Screen Brightness Control"]
    },
    {
      id: 3,
      title: "Hlasovací systém",
      description: "Online hlasovací systém pre prednášky s rôznymi typmi otázok, QR kódmi a komplexným administrátorským rozhraním. Tímový projekt.",
      imageUrl: "/img/voting-system.png",
      imageAlt: "Hlasovací systém",
      githubUrl: "https://github.com/xsipkam1/voting-system",
      demoUrl: null,
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "REST API"]
    },
    {
      id: 4,
      title: "Racing Game",
      description: "Multiplatformová PWA hra s gyro ovládaním pre mobily a klávesnicou/myšou pre desktop.",
      imageUrl: "/img/rapidracergame.png",
      imageAlt: "Racing Game",
      githubUrl: "https://github.com/xdubnickas/racing-game",
      demoUrl: null,
      technologies: ["HTML5", "CSS3", "JavaScript", "PWA", "Device Sensors API"]
    },
    {
      id: 5,
      title: "Portfolio stránka",
      description: "Moje osobné portfólio vytvorené pomocou React.js s moderným dizajnom a animáciami.",
      imageUrl: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Portfolio",
      githubUrl: "https://github.com/xdubnickas/xdubnickas.github.io",
      demoUrl: null,
      technologies: ["React", "CSS3", "Framer Motion", "GitHub Pages"]
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 data-aos="fade-right">Moje projekty</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
