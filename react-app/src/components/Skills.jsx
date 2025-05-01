import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getText } from '../translations';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Skills() {
  const [activeTab, setActiveTab] = useState("programming");
  const { language } = useLanguage();
  
  const skillCategories = {
    programming: [
      { name: 'Java (Spring Boot)', level: 61 },
      { name: 'JavaScript', level: 60 },
      { name: 'Python', level: 57 },
      { name: 'C/C++', level: 52 },
      { name: 'PHP', level: 30 }
    ],
    frontend: [
      { name: 'HTML/CSS', level: 60 },
      { name: 'React', level: 50 },
      { name: 'Bootstrap', level: 45 },
      { name: 'Tailwind CSS', level: 15 }
    ],
    database: [
      { name: 'MySQL', level: 48 },
      { name: 'PostgreSQL', level: 20 }
    ],
    tools: [
      { name: 'Microsoft Office', level: 55 },
      { name: 'Git & GitHub', level: 40 },
      { name: 'UML diagramy', level: 44 },
      { name: 'Docker', level: 26 }
    ]
  };
  
  const getLevelColor = (level) => {
    if (level >= 80) return '#10b981'; // Expert - green
    if (level >= 60) return '#3b82f6'; // Advanced - blue
    if (level >= 40) return '#f59e0b'; // Intermediate - yellow/orange
    if (level >= 20) return '#f97316'; // Beginner - orange
    return '#ef4444'; // Novice - red
  };
  
  const getExperienceLevel = (level) => {
    if (level >= 80) return getText(language, 'skills.levels.expert');
    if (level >= 60) return getText(language, 'skills.levels.advanced');
    if (level >= 40) return getText(language, 'skills.levels.intermediate');
    if (level >= 20) return getText(language, 'skills.levels.beginner');
    return getText(language, 'skills.levels.novice');
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
        <h2 data-aos="fade-right">{getText(language, 'skills.title')}</h2>
        
        <div className="skills-tabs" data-aos="fade-up">
          <button 
            className={`skill-tab-button ${activeTab === 'programming' ? 'active' : ''}`}
            onClick={() => setActiveTab('programming')}
          >
            <i className="fas fa-code"></i> {getText(language, 'skills.tabs.programming')}
          </button>
          
          <button 
            className={`skill-tab-button ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            <i className="fas fa-laptop-code"></i> {getText(language, 'skills.tabs.frontend')}
          </button>
          
          <button 
            className={`skill-tab-button ${activeTab === 'database' ? 'active' : ''}`}
            onClick={() => setActiveTab('database')}
          >
            <i className="fas fa-database"></i> {getText(language, 'skills.tabs.database')}
          </button>
          
          <button 
            className={`skill-tab-button ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            <i className="fas fa-tools"></i> {getText(language, 'skills.tabs.tools')}
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
        
        <div className="skills-legend" data-aos="fade-up" data-aos-delay="30">
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#ef4444' }}></div>
            <p>{getText(language, 'skills.legend.novice')}</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#f97316' }}></div>
            <p>{getText(language, 'skills.legend.beginner')}</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#f59e0b' }}></div>
            <p>{getText(language, 'skills.legend.intermediate')}</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#3b82f6' }}></div>
            <p>{getText(language, 'skills.legend.advanced')}</p>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ backgroundColor: '#10b981' }}></div>
            <p>{getText(language, 'skills.legend.expert')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
