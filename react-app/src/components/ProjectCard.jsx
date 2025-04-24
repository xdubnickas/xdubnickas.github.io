import React, { memo } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = memo(({ title, description, imageUrl, imageAlt, githubUrl, githubIcons, demoUrl, technologies }) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-header">
        <div className="project-image-container">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="project-img"
          />
          <div className="project-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                <i className="fab fa-github"></i>
              </a>
            )}
            {githubIcons && githubIcons.map((icon, index) => (
              <a 
                key={index} 
                href={icon.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-icon"
                title={icon.tooltip}
              >
                <i className="fab fa-github"></i>
              </a>
            ))}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
