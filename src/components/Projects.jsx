import React from 'react';

const Projects = () => {
  const projects = [
    {
      number: '01',
      title: 'Student Management System',
      tech: ['React', 'Django', 'PostgreSQL'],
      description: 'A comprehensive full-stack web application for managing student records with complete CRUD functionality, authentication, and an intuitive admin dashboard for educational institutions.'
    },
    {
      number: '02',
      title: 'Professional Portfolio Website',
      tech: ['React', 'Vite', 'CSS3'],
      description: 'A modern, fully responsive portfolio website showcasing projects and skills with smooth animations, dark theme, and optimized performance for web and mobile devices.'
    },
    {
      number: '03',
      title: 'Cross-Platform Mobile App',
      tech: ['React Native', 'Firebase'],
      description: 'A native mobile application built with React Native, delivering seamless user experience across both Android and iOS platforms with real-time data synchronization.'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">Projects & Case Studies</h2>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <span className="project-number">{project.number}</span>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
