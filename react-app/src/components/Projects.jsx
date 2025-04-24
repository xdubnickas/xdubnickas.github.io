import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Reservation System",
      description: "Komplexný rezervačný systém s Docker podporou, rôznymi používateľskými rolami a viacvrstvovou architektúrou. Súčasť mojej bakalárskej práce.",
      imageUrl: "/img/event-organizer-dashboard.png",
      imageAlt: "Rezervačný systém",
      githubUrl: "https://github.com/xdubnickas/reservation-system",
      demoUrl: null,
      technologies: ["Spring Boot", "React", "MySQL", "Docker", "Bootstrap", "REST API", "JWT Authentication"]
    },
    {
      id: 2,
      title: "Schedule Share",
      description: "Moderná webová aplikácia na vytváranie a zdieľanie rozvrhov. Vhodná pre študentov, tímové plánovanie alebo osobné použitie.",
      imageUrl: "/img/schedule-share2.png",
      imageAlt: "Schedule Share App",
      githubUrl: "https://github.com/xdubnickas/schedule-share",
      demoUrl: "https://reservation-demo.netlify.app",
      technologies: ["React", "Vite", "Tailwind CSS", "DaisyUI", "Supabase", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Brightness Control",
      description: "Aplikácia v systémovej lište na ovládanie jasu, ktorá ponúka vizuálnu spätnú väzbu, inteligentnú správu okien a možnosť spustenia pri štarte systému, pričom zaručuje nízku spotrebu zdrojov.",
      imageUrl: "/img/brightness.png",
      imageAlt: "Brightness Control",
      githubUrl: "https://github.com/xdubnickas/brightness-control",
      demoUrl: null,
      technologies: ["Python", "Tkinter", "PyWin32", "WMI", "Screen Brightness Control"]
    },
    {
      id: 4,
      title: "Hlasovací systém",
      description: "Online hlasovací systém pre prednášky s rôznymi typmi otázok, QR kódmi a komplexným administrátorským rozhraním. Tímový projekt.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Hlasovací systém",
      githubUrl: "https://github.com/xsipkam1/voting-system",
      demoUrl: null,
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "REST API", "CSS3"]
    },
    {
      id: 5,
      title: "Racing Game",
      description: "Multiplatformová PWA hra s gyro ovládaním pre mobily a klávesnicou/myšou pre desktop.",
      imageUrl: "/img/rapidracergame.png",
      imageAlt: "Racing Game",
      githubUrl: "https://github.com/xdubnickas/racing-game",
      demoUrl: null,
      technologies: ["HTML5", "CSS3", "JavaScript", "PWA", "Device Sensors API"]
    },
    {
      id: 6,
      title: "Portfolio stránka",
      description: "Moje osobné portfólio vytvorené pomocou React.js s moderným dizajnom a animáciami.",
      imageUrl: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Portfolio",
      githubUrl: "https://github.com/xdubnickas/xdubnickas.github.io",
      demoUrl: null,
      technologies: ["React", "CSS3", "Framer Motion", "GitHub Pages"]
    },
    {
      id: 7,
      title: "Školské zadania OOP",
      description: "Séria projektov z objektovo-orientovaného programovania: E-shop API v Spring Boote, hra WaterPipes s AWT/Swing a zjednodušená kartová hra BANG Lite.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Školské projekty OOP",
      githubIcons: [
        {url: "https://github.com/Interes-Group/zadanie-3-eshop-115056", tooltip: "E-shop"},
        {url: "https://github.com/Interes-Group/zadanie-2-pipes-115056", tooltip: "WaterPipes"},
        {url: "https://github.com/Interes-Group/zadanie-1-bang-lite-115056", tooltip: "BANG Lite"}
      ],
      demoUrl: null,
      technologies: ["Java", "Spring Boot", "REST API", "AWT/Swing", "OOP"]
    }
  ];

  // Remove entries with IDs 8 and 9 from projectsData
  const filteredProjectsData = projectsData.filter(project => project.id <= 7);

  return (
    <section id="projects">
      <div className="container">
        <h2 data-aos="fade-right">Moje projekty</h2>
        <div className="projects-grid">
          {filteredProjectsData.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              githubUrl={project.githubUrl}
              githubIcons={project.githubIcons}
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
