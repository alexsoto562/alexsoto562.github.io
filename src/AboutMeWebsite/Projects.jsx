import React from 'react';
import './projects.css'; // Make sure the CSS file is named Projects.css and is in the same directory

const ProjectCard = ({ icon, title, description }) => (
  <div className="project-card">
    <div className="project-icon">{icon}</div>
    <div className="project-title">{title}</div>
    <p className="project-description">{description}</p>
    {/* <a href="#" className="project-link">View Project</a> */}
  </div>
);

const Projects = () => {
  const projects = [
    { icon: 'JS', title: 'Project 1', description: 'Lorem ipsum dolor sit am...' },
    { icon: '🔒', title: 'Project 2', description: 'Lorem ipsum dolor sit am...' },
    { icon: '🖥️', title: 'Project 3', description: 'Lorem ipsum dolor sit am...' },
    { icon: 'JS', title: 'Project 4', description: 'Lorem ipsum dolor sit am...' },
    { icon: 'JS', title: 'Project 5', description: 'Lorem ipsum dolor sit am...' },
  ];

  return (
    <div className="projects-container">
      <h2>Projects i've worked on in various languages</h2>
      <p>I've worked on a variety of projects over the years and I'm proud of the progress I've made...</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
