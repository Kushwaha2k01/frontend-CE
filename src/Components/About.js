import React, { useState } from 'react';
import './About.css';
import aboutImage from '../Assets/about.png.png';

const About = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <h2>About Us</h2>
            <p>
              Founded in September 2024, Codeknight Esports has swiftly become a prominent player in the global gaming ecosystem. Specializing in game testing, development, localization, animation, and sound & music, we collaborate with mid-level game studios to bring their titles to life.
            </p>
            <p>
              Our strength lies in delivering immersive, flawless, and emotionally engaging games. From bug-free code to cinematic animation, every project we touch is crafted for excellence.
            </p>
            <button className="about-cta" onClick={toggleDetails}>
              {showDetails ? 'Show Less' : 'Learn More'}
            </button>
            {showDetails && (
              <div className="about-details">
                <h3>Our Mission</h3>
                <p>
                  To launch polished, bug-free games that elevate the player experience and ensure total immersion. Because every gamer deserves a perfect digital world.
                </p>
                <h3>Our Vision</h3>
                <p>
                  We see a future where gaming becomes an international language of unity, driven by Olympic-style esports events and ethical, collaborative game development practices.
                </p>
                <p>We aim to:</p>
                <ul>
                  <li>Unite gamers globally through competitive digital sports.</li>
                  <li>Elevate esports to mainstream recognition.</li>
                  <li>Build a community based on fair play, skill, and passion.</li>
                  <li>Define the gold standard for digital entertainment.</li>
                </ul>
              </div>
            )}
          </div>
          <div className="about-right">
            <img src={aboutImage} alt="About CodeKnight Esports" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
