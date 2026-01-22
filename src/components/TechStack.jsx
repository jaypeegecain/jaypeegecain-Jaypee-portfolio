import React from 'react';

const TechStack = () => {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Django', level: 75 },
    { name: 'React Native', level: 70 }
  ];

  return (
    <section className="tech-stack" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technologies I work with</h2>
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
