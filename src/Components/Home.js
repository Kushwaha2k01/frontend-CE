import React from 'react';
import './Home.css';
import Spline from '@splinetool/react-spline';

const Home = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPortfolio = () => {
    // Replace with actual portfolio URL when available
    window.open('https://lush-spleen-0cd.notion.site/CODEKNIGHT-ESPORTS-PORTFOLIO-12de0fdcaf078086818efa2f7c1dec60', '_blank');
  };

  return (
    <section id="home" className="home-container">
      <div className="spline-background">
        <Spline
          scene="https://prod.spline.design/8DRaGIL5L8tCJUbM/scene.splinecode" 
        />
      </div>
      
      <div className="content-overlay">
        <div className="left-content">
          <h1>Welcome to Codeknight Esports</h1>
          <h2>Where Imagination Becomes Interaction</h2>
          <p className="description">
            We're not just building games - we're shaping the future of gaming. 
            From pixel-perfect testing to immersive gameplay experiences, 
            CodeKnight is your end-to-end creative and technical powerhouse.
          </p>
          <div className="cta-buttons">
            <button className="cta-button explore-btn" onClick={scrollToServices}>
              Explore Services
            </button>
            <button className="cta-button project-btn" onClick={openPortfolio}>
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
