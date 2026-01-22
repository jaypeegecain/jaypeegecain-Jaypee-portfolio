import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Jaypee Gecain</h1>
          <p className="title">Frontend & Mobile Developer</p>
          <p className="description">
            I craft clean, user-focused digital experiences with modern technologies.
            Specializing in React, Django, and React Native.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/1000006954.jpg" alt="Jaypee Gecain" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
