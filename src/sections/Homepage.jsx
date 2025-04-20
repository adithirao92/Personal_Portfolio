import React from 'react';
import '../styles/Homepage.scss';
import portfolioImage from '../images/home.jpeg'; // Add your image here

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to My Personal Portfolio</h1>
            <p className="quote">"The only way to do great work is to love what you do." — Steve Jobs</p>
            <p className="intro">
              Hi, I'm Adithi P Rao. I'm a Computer Science student passionate about 
              AIML  and web development.
            </p>
          </div>
          <div className="hero-image">
            <img src={portfolioImage} alt="Portfolio Illustration" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;