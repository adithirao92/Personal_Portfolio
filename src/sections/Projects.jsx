import React from 'react';
import '../styles/projects.scss';
// import moodscribeThumbnail from '../assets/videos/moodscribe-preview.jpg';
// import smartCarrierThumbnail from '../assets/videos/smart-carrier-preview.jpg';

const Projects = () => {
  const projects = [
    {
      title: "MoodScribe",
      description: "Interactive mood-tracking website using MERN Stack",
      // video: "https://www.youtube.com/embed/moodscribe-video",
      // thumbnail: moodscribeThumbnail,
      tags: ["MERN", "Full Stack", "Data Visualization"]
    },
    {
      title: "Smart Carrier for Mothers",
      description: "Hackathon finalist project - comfort-focused carrier",
      // video: "https://www.youtube.com/embed/smartcarrier-video",
      // thumbnail: smartCarrierThumbnail,
      tags: ["IoT", "Hardware", "Hackathon"]
    }
  ];

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <p className="subtitle">Building solutions that make an impact</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="video-container">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="video-thumbnail"
              />
              <div className="play-button">▶</div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <a href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn-view">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;