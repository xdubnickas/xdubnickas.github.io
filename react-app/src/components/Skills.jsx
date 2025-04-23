import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const [activeTab, setActiveTab] = useState("programming");
  
  const skillCategories = {
    programming: [
      { name: 'Java (Spring Boot)', level: 85, experience: 'Pokročilý', years: 3 },
      { name: 'Python', level: 70, experience: 'Stredne pokročilý', years: 2 },
      { name: 'JavaScript', level: 90, experience: 'Expert', years: 4 },
      { name: 'C/C++', level: 65, experience: 'Stredne pokročilý', years: 2 },
      { name: 'PHP', level: 60, experience: 'Začiatočník', years: 1 }
    ],
    frontend: [
      { name: 'React.js', level: 85, experience: 'Pokročilý', years: 3 },
      { name: 'HTML5/CSS3', level: 95, experience: 'Expert', years: 5 },
      { name: 'SASS/SCSS', level: 75, experience: 'Pokročilý', years: 2 },
      { name: 'Bootstrap', level: 80, experience: 'Pokročilý', years: 3 },
      { name: 'Next.js', level: 60, experience: 'Začiatočník', years: 1 }
    ],
    database: [
      { name: 'MySQL', level: 80, experience: 'Pokročilý', years: 3 },
      { name: 'PostgreSQL', level: 70, experience: 'Stredne pokročilý', years: 2 },
      { name: 'MongoDB', level: 65, experience: 'Stredne pokročilý', years: 1 },
      { name: 'SQL', level: 85, experience: 'Pokročilý', years: 4 },
      { name: 'Redis', level: 50, experience: 'Začiatočník', years: 1 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 90, experience: 'Expert', years: 4 },
      { name: 'Docker', level: 60, experience: 'Začiatočník', years: 1 },
      { name: 'UML diagramy', level: 75, experience: 'Pokročilý', years: 3 },
      { name: 'VS Code', level: 95, experience: 'Expert', years: 5 },
      { name: 'Microsoft Office', level: 80, experience: 'Pokročilý', years: 10 }
    ]
  };
  
  const getLevelColor = (level) => {
    if (level >= 90) return '#10b981'; // Expert - green
    if (level >= 70) return '#3b82f6'; // Advanced - blue
    if (level >= 50) return '#f59e0b'; // Intermediate - yellow/orange
    return '#ef4444'; // Beginner - red
  };
  
  const getExperienceIcon = (experience) => {
    switch(experience) {
      case 'Expert': return 'fas fa-star';
      case 'Pokročilý': return 'fas fa-medal';
      case 'Stredne pokročilý': return 'fas fa-check-circle';
      case 'Začiatočník': return 'fas fa-seedling';
      default: return 'fas fa-code';
    }
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
                    <i className={getExperienceIcon(skill.experience)}></i> {skill.experience}
                    <span className="skill-years">{skill.years} {skill.years === 1 ? 'rok' : skill.years < 5 ? 'roky' : 'rokov'}</span>
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
            <div className="legend-color" style={{ backgroundColor: '#10b981' }}></div>
            <p>Expert (90-100%)</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#3b82f6' }}></div>
            <p>Pokročilý (70-89%)</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#f59e0b' }}></div>
            <p>Stredne pokročilý (50-69%)</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ef4444' }}></div>
            <p>Začiatočník (&lt;50%)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
