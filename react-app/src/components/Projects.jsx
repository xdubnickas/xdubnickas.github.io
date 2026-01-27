import React from 'react';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { getText } from '../translations';

// Image imports
import eventOrganizerDashboard from '../assets/event-organizer-dashboard.png';
import scheduleShare from '../assets/schedule-share2.png';
import brightness from '../assets/brightness.png';
import rapidRacerGame from '../assets/rapidracergame.png';
import trading212 from '../assets/trading212.png';
import t212new from '../assets/t212new.png';
import shareapp from '../assets/shareapp.png';
import pinmetricsapp from '../assets/pinmetricsapp.png';
// Portfolio website image can also be moved to assets

function Projects() {
  const { language } = useLanguage();
  
  // Base project data (language-independent parts)
  const baseProjectsData = [
    {
      id: 1,
      imageUrl: eventOrganizerDashboard,
      imageAlt: "Reservation System",
      githubUrl: "https://github.com/xdubnickas/reservetion-app",
      demoUrl: null,
      technologies: ["Spring Boot", "React", "MySQL", "Docker", "Bootstrap", "REST API", "JWT Authentication", "Spring Security"]
    },
    {
      id: 2,
      imageUrl: scheduleShare,
      imageAlt: "Schedule Share App",
      githubUrl: "https://github.com/xdubnickas/schedule-app",
      demoUrl: "https://schedule-app-xdubnickas-projects.vercel.app/",
      technologies: ["React", "Vite", "Tailwind CSS", "DaisyUI", "Supabase", "PostgreSQL"]
    },
    {
      id: 3,
      imageUrl: brightness,
      imageAlt: "Brightness Control",
      githubUrl: "https://github.com/xdubnickas/brightness-control",
      demoUrl: null,
      technologies: ["Python", "Tkinter", "PyWin32", "WMI", "Screen Brightness Control"]
    },
    {
      id: 4,
      imageUrl: t212new,
      imageAlt: "Trading212 Portfolio Tracker",
      githubUrl: "https://github.com/xdubnickas/trading212-portfolio",
      demoUrl: null,
      technologies: ["React", "JavaScript", "Trading212 API", "Chart.js", "Tax Tracking"]
    },
    {
      id: 5,
      imageUrl: trading212,
      imageAlt: "Trading212 Tracker (old)",
      githubUrl: "https://github.com/xdubnickas/trading212-tracker",
      demoUrl: "https://trading212-tracker.vercel.app/",
      technologies: ["React", "JavaScript", "Trading212 API", "Chart.js"]
    },
    {
      id: 6,
      imageUrl: pinmetricsapp,
      imageAlt: "PinMetrics Chrome Extension",
      githubUrl: null,
      demoUrl: "https://pinmetrics.app/",
      webstoreUrl: "https://chromewebstore.google.com/detail/pinmetrics-pinterest-stat/lhbkkeoieclaplakckpedjmhflimobbl",
      technologies: ["HTML5", "CSS3", "JavaScript", "Chrome Extension API", "Chrome Storage API"]
    },
    {
      id: 7,
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Voting System",
      githubUrl: "https://github.com/xsipkam1/voting-system",
      demoUrl: null,
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "REST API", "CSS3"]
    },
    {
      id: 8,
      imageUrl: rapidRacerGame,
      imageAlt: "Racing Game",
      githubUrl: "https://github.com/xdubnickas/racing-game",
      demoUrl: null,
      technologies: ["HTML5", "CSS3", "JavaScript", "PWA", "Device Sensors API"]
    },    {
      id: 9,
      imageUrl: shareapp,
      imageAlt: "Droply App",
      githubUrl: "https://github.com/xdubnickas/share-app",
      demoUrl: "https://share-app-six.vercel.app/",
      technologies: ["React", "Bootstrap", "Supabase", "Vite"]
    },
    {
      id: 10,
      imageUrl: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Portfolio",
      githubUrl: "https://github.com/xdubnickas/xdubnickas.github.io",
      demoUrl: null,
      technologies: ["React", "CSS3", "Framer Motion", "GitHub Pages"]
    },    {
      id: 11,
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "OOP School Projects",
      githubIcons: [
        {url: "https://github.com/Interes-Group/zadanie-3-eshop-115056", tooltip: "E-shop"},
        {url: "https://github.com/Interes-Group/zadanie-2-pipes-115056", tooltip: "WaterPipes"},
        {url: "https://github.com/Interes-Group/zadanie-1-bang-lite-115056", tooltip: "BANG Lite"}
      ],
      demoUrl: null,
      technologies: ["Java", "Spring Boot", "REST API", "AWT/Swing", "OOP"]
    },
    {
      id: 12,
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Web Technologies 1",
      githubUrl: "https://github.com/xdubnickas/web-technologie-1",
      demoUrl: null,
      technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "OpenStreetMap"]
    },
    {
      id: 13,
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Web Technologies 2",
      githubUrl: "https://github.com/xdubnickas/web-technologie-2",
      demoUrl: null,
      technologies: ["PHP", "JavaScript", "MySQL", "REST API", "AJAX", "JSON"]
    },
    {
      id: 14,
      imageUrl: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "SUNS School Assignments",
      githubIcons: [
        {url: "https://github.com/xdubnickas/suns-z1", tooltip: "Assignment 1: Neural Networks"},
        {url: "https://github.com/xdubnickas/suns-z2", tooltip: "Assignment 2: ML Models"},
        {url: "https://github.com/xdubnickas/suns-z3", tooltip: "Assignment 3: CNN & Transfer Learning"}
      ],
      demoUrl: null,
      technologies: ["Python", "PyTorch", "Scikit-learn", "CNN", "Transfer Learning", "Machine Learning"]
    },
    {
      id: 15,
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      imageAlt: "More Projects",
      githubUrl: "https://github.com/xdubnickas?tab=repositories",
      demoUrl: null,
      technologies: ["C", "C++", "Python"]
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
              webstoreUrl={project.webstoreUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
