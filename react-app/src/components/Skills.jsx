import React from 'react';

function Skills() {
  const skills = [
    'Java (Spring Boot)',
    'Python',
    'C/C++',
    'PHP',
    'HTML/CSS',
    'JavaScript',
    'React',
    'SQL',
    'Git',
    'UML diagramy',
    'Microsoft Office'
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>Technické znalosti</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
