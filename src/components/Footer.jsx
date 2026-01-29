import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-name">Jaypee Gecain</span>
          <span className="footer-tagline">Frontend & Mobile Developer</span>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} Jaypee Gecain. All rights reserved.</p>
        <p>Crafted with React & Vite</p>
      </div>
    </footer>
  );
};

export default Footer;
