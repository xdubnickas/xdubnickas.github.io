import React from 'react';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { getText } from '../translations';

function Projects() {
  const { language } = useLanguage();
  
  // Base project data (language-independent parts)
  const baseProjectsData = [
    {
      id: 1,
      imageUrl: "/img/event-organizer-dashboard.png",
      imageAlt: "Reservation System",
      githubUrl: "https://github.com/xdubnickas/reservation-system",
      demoUrl: null,
      technologies: ["Spring Boot", "React", "MySQL", "Docker", "Bootstrap", "REST API", "JWT Authentication"]
    },
    {
      id: 2,
      imageUrl: "/img/schedule-share2.png",
      imageAlt: "Schedule Share App",
      githubUrl: "https://github.com/xdubnickas/schedule-app",
      demoUrl: "https://hereeee.com",
      technologies: ["React", "Vite", "Tailwind CSS", "DaisyUI", "Supabase", "PostgreSQL"]
    },
    {
      id: 3,
      imageUrl: "/img/brightness.png",
      imageAlt: "Brightness Control",
      githubUrl: "https://github.com/xdubnickas/brightness-control",
      demoUrl: null,
      technologies: ["Python", "Tkinter", "PyWin32", "WMI", "Screen Brightness Control"]
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Voting System",
      githubUrl: "https://github.com/xsipkam1/voting-system",
      demoUrl: null,
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "REST API", "CSS3"]
    },
    {
      id: 5,
      imageUrl: "/img/rapidracergame.png",
      imageAlt: "Racing Game",
      githubUrl: "https://github.com/xdubnickas/racing-game",
      demoUrl: null,
      technologies: ["HTML5", "CSS3", "JavaScript", "PWA", "Device Sensors API"]
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Portfolio",
      githubUrl: "https://github.com/xdubnickas/xdubnickas.github.io",
      demoUrl: null,
      technologies: ["React", "CSS3", "Framer Motion", "GitHub Pages"]
    },
    {
      id: 7,
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "OOP School Projects",
      githubIcons: [
        {url: "https://github.com/Interes-Group/zadanie-3-eshop-115056", tooltip: "E-shop"},
        {url: "https://github.com/Interes-Group/zadanie-2-pipes-115056", tooltip: "WaterPipes"},
        {url: "https://github.com/Interes-Group/zadanie-1-bang-lite-115056", tooltip: "BANG Lite"}
      ],
      demoUrl: null,
      technologies: ["Java", "Spring Boot", "REST API", "AWT/Swing", "OOP"]
    }
  ];

  // Get translated project items
  const translatedProjects = getText(language, 'projects.items') || [];

  // Combine base data with translated content
  const projectsData = baseProjectsData.map(baseProject => {
    const translatedProject = translatedProjects.find(p => p.id === baseProject.id);
    return {
      ...baseProject,
      title: translatedProject?.title || `Project ${baseProject.id}`,
      description: translatedProject?.description || "No description available"
    };
  });

  return (
    <section id="projects">
      <div className="container">
        <h2 data-aos="fade-right">{getText(language, 'projects.title')}</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
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
