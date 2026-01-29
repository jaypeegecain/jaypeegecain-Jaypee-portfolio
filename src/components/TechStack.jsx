import React from 'react';

const TechStack = () => {
  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Django', level: 80 },
    { name: 'React Native', level: 75 }
  ];

  return (
    <section className="tech-stack" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-label">Technical Expertise</span>
          <h2 className="section-title">Technologies & Tools</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
