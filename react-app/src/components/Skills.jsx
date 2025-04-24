import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const [activeTab, setActiveTab] = useState("programming");
  
  const skillCategories = {
    programming: [
      { name: 'Java (Spring Boot)', level: 60 },
      { name: 'JavaScript', level: 60 },
      { name: 'Python', level: 59 },
      { name: 'C/C++', level: 55 },
      { name: 'PHP', level: 30 }
    ],
    frontend: [
      { name: 'HTML/CSS', level: 60 },
      { name: 'React.js', level: 48 },
      { name: 'Bootstrap', level: 45 },
      { name: 'Tailwind CSS', level: 15 }
    ],
    database: [
      { name: 'SQL', level: 48 },
      { name: 'PostgreSQL', level: 23 }
    ],
    tools: [
      { name: 'Microsoft Office', level: 54 },
      { name: 'Git & GitHub', level: 40 },
      { name: 'UML diagramy', level: 40 },
      { name: 'Docker', level: 27 }
    ]
  };
  
  const getLevelColor = (level) => {
    if (level >= 80) return '#10b981'; // Expert - green
    if (level >= 60) return '#3b82f6'; // Pokročilý - blue
    if (level >= 40) return '#f59e0b'; // Mierne pokročilý - yellow/orange
    if (level >= 20) return '#f97316'; // Začiatočník - orange
    return '#ef4444'; // Úplný začiatočník - red
  };
  
  const getExperienceLevel = (level) => {
    if (level >= 80) return 'Expert';
    if (level >= 60) return 'Pokročilý';
    if (level >= 40) return 'Mierne pokročilý';
    if (level >= 20) return 'Začiatočník';
    return 'Úplný začiatočník';
  };
  
  const getExperienceIcon = (level) => {
    if (level >= 80) return 'fas fa-star';
    if (level >= 60) return 'fas fa-medal';
    if (level >= 40) return 'fas fa-check-circle';
    if (level >= 20) return 'fas fa-seedling';
    return 'fas fa-baby';
  };

  return (
    <section id="skills">
      <div className="container">
        <h2 data-aos="fade-right">Technické znalosti</h2>
        
        <div className="skills-tabs" data-aos="fade-up">
          <button 
            className={`skill-tab-button ${activeTab === 'programming' ? 'active' : ''}`}
            onClick={() => setActiveTab('programming')}
          >
            <i className="fas fa-code"></i> Programovacie jazyky
          </button>
          
          <button 
            className={`skill-tab-button ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            <i className="fas fa-laptop-code"></i> Frontend
          </button>
          
          <button 
            className={`skill-tab-button ${activeTab === 'database' ? 'active' : ''}`}
            onClick={() => setActiveTab('database')}
          >
            <i className="fas fa-database"></i> Databázy
          </button>
          
          <button 
            className={`skill-tab-button ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            <i className="fas fa-tools"></i> Nástroje
          </button>
        </div>
        
        <div className="skills-content" data-aos="fade-up" data-aos-delay="200">
          {skillCategories[activeTab].map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-info">
                <div className="skill-name-container">
                  <h3>{skill.name}</h3>
                  <div className="skill-experience">
                    <i className={getExperienceIcon(skill.level)}></i> {getExperienceLevel(skill.level)}
                  </div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              
              <div className="skill-bar-container">
                <motion.div 
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{ backgroundColor: getLevelColor(skill.level) }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-legend" data-aos="fade-up" data-aos-delay="300">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ef4444' }}></div>
            <p>Úplný začiatočník (&lt;20%)</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#f97316' }}></div>
            <p>Začiatočník (20-39%)</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#f59e0b' }}></div>
            <p>Mierne pokročilý (40-59%)</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#3b82f6' }}></div>
            <p>Pokročilý (60-79%)</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#10b981' }}></div>
            <p>Expert (80-100%)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
