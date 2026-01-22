import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-label">About</span>
          <h2 className="section-title">A bit about me</h2>
        </div>
        <div className="about-content">
          <p>
            I'm a developer passionate about creating seamless digital experiences. 
            With a focus on clean code and intuitive design, I build applications 
            that solve real problems.
          </p>
          <p>
            My expertise spans frontend development, backend systems, and mobile apps. 
            I believe in continuous learning and staying current with industry best practices.
          </p>
          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-number">2+</span>
              <span className="highlight-label">Years Experience</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">10+</span>
              <span className="highlight-label">Projects Completed</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">5+</span>
              <span className="highlight-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
