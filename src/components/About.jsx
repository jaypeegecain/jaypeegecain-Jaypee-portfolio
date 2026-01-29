import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who am I?</h2>
        </div>
        <div className="about-content">
          <p>
            I'm a passionate developer dedicated to creating seamless, intuitive digital experiences. 
            With a strong focus on clean code and user-centric design, I build applications that not only 
            solve real problems but also delight users through thoughtful interfaces and smooth interactions.
          </p>
          <p>
            My expertise spans modern frontend development, robust backend systems, and cross-platform mobile applications. 
            I'm committed to continuous learning and staying current with industry best practices, exploring new 
            technologies, and refining my craft to deliver exceptional results.
          </p>
          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-number">2+</span>
              <span className="highlight-label">Years of Experience</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">10+</span>
              <span className="highlight-label">Projects Completed</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">5+</span>
              <span className="highlight-label">Technologies Mastered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
