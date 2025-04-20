import React from 'react';
import '../styles/About.scss';
import profileImage from '../images/profile.jpg';
const educationTimeline = [
  {
    year: "2023-Present",
    institution: "PES University, EC Campus",
    degree: "BTech in Computer Science Engineering",
    score: "CGPA: 8.96"
  },
  {
    year: "2021-2023",
    institution: "Narayana College",
    degree: "12th Grade (State Board)",
    score: "Score: 98%"
  },
  {
    year: "2011-2021",
    institution: "BGS National Public School",
    degree: "10th Grade (CBSE)",
    score: "Score: 90%"
  }
];

const About = () => {
  return (
    <div className="about-page">
      <div className="profile-section">
        <div className="profile-image">
          <img src={profileImage} alt="Adithi P Rao" />
        </div>
        <div className="profile-content">
          <h2>About Me</h2>
          <p>
            Computer Science Engineering student at PES University with a strong passion 
            for cloud computing and web development. Experienced in building full-stack 
            applications and developing innovative solutions.
          </p>
          <div className="stats">
            <div className="stat-item">
              <span>8.96</span>
              <p>CGPA</p>
            </div>
            <div className="stat-item">
              <span>98%</span>
              <p>12th Grade</p>
            </div>
            <div className="stat-item">
              <span>2+</span>
              <p>Hackathons</p>
            </div>
          </div>
        </div>
      </div>

      <div className="education-timeline">
        <h3>Education Journey</h3>
        {educationTimeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">{item.year}</div>
            <div className="timeline-content">
              <h4>{item.institution}</h4>
              <p>{item.degree}</p>
              <span>{item.score}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="achievements">
        <h3>Notable Achievements</h3>
        <ul>
          <li>CNR Rao Scholarship for academic excellence</li>
          <li>IBM Cloud Certification</li>
        </ul>
      </div>
    </div>
  );
};

export default About;