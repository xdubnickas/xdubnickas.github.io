import React from 'react';

function ProjectCard({ title, description, imageUrl, imageAlt, link, linkText }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={imageAlt} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
      </div>
    </div>
  );
}

export default ProjectCard;
