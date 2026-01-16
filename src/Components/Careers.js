import React from 'react';
import { Link } from 'react-router-dom';
import './Careers.css';

const Careers = () => {
  const jobCategories = [
    {
      title: "Game Development & Design",
      jobs: [
        { title: "Unity Game Developer" },
        { title: "Unreal Engine Developer" },
        { title: "Level Designer" },
        { title: "Game Economy Designer" }
      ]
    },
    {
      title: "Creative & Art",
      jobs: [
        { title: "2D/3D Game Artist" },
        { title: "Character Animator (2D/3D & MetaHuman)" },
        { title: "UI/UX Designer for Games" }
      ]
    },
    {
      title: "QA & Testing",
      jobs: [
        { title: "Game QA Tester" },
        { title: "Localization Tester" }
      ]
    },
    {
      title: "Tech & Data",
      jobs: [
        { title: "Web & Mobile App Developer" },
        { title: "Data Analyst" }
      ]
    }
  ];

  const benefits = [
    {
      icon: "🎮",
      title: "Impact That Matters",
      description: "Your work directly shapes the gaming experiences of millions of players worldwide."
    },
    {
      icon: "🚀",
      title: "Creative Freedom",
      description: "Bring your ideas to life with a team that values innovation and creativity."
    },
    {
      icon: "🌍",
      title: "Global Opportunities",
      description: "Collaborate with gaming talent from around the world on exciting projects."
    },
    {
      icon: "📈",
      title: "Growth & Learning",
      description: "Access to skill development, training sessions, and mentorship programs."
    },
    {
      icon: "🏠",
      title: "Flexible Work Modes",
      description: "On-site, hybrid, or remote — great talent can work from anywhere."
    }
  ];

  return (
    <div className="careers-container">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="hero-content">
          <h1>Careers at Codeknight Esports</h1>
          <h2>"Build the Future of Gaming. Shape the Universe of Play."</h2>
          <p>
            At Codeknight Esports, we don't just make games — we craft worlds, engineer experiences, 
            and push the boundaries of what's possible in the gaming industry.
          </p>
          <a href="#openings" className="cta-button">View Open Positions</a>
        </div>
      </section>

      {/* About Section */}
      <section className="careers-about">
        <div className="container">
          <h2>Why Join Codeknight Esports?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="what-we-look-for">
        <div className="container">
          <h2>What We Look For</h2>
          <p className="section-intro">
            We hire passionate, skilled, and ambitious individuals who are ready to challenge the status quo.
          </p>
          <div className="qualities-grid">
            <div className="quality-item">
              <span className="quality-icon">❤️</span>
              <span>A passion for gaming and technology</span>
            </div>
            <div className="quality-item">
              <span className="quality-icon">📚</span>
              <span>A hunger to learn and improve</span>
            </div>
            <div className="quality-item">
              <span className="quality-icon">🤝</span>
              <span>A collaborative, team-first mindset</span>
            </div>
            <div className="quality-item">
              <span className="quality-icon">⚡</span>
              <span>The drive to deliver quality work on time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="current-openings">
        <div className="container">
          <h2>Current Openings</h2>
          {jobCategories.map((category, index) => (
            <div key={index} className="job-category">
              <h3>{category.title}</h3>
              <div className="jobs-list">
                {category.jobs.map((job, jobIndex) => (
                  <div key={jobIndex} className="job-card">
                    <h4>{job.title}</h4>
                    <Link to="/apply" className="apply-button">
                      Apply Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Apply */}
      <section className="how-to-apply">
        <div className="container">
          <h2>How to Apply</h2>
          <div className="apply-content">
            <div className="apply-info">
              <h3>Ready to Join Our Team?</h3>
              <p>
                Email your resume + portfolio to: <a href="mailto:careers@codeknightesports.com">careers@codeknightesports.com</a>
              </p>
              <p>
                Mention the role you're applying for in the subject line.
              </p>
              <p>
                Shortlisted candidates will be contacted for interviews & test assignments.
              </p>
            </div>
            <div className="apply-note">
              <h4>At CodeKnight Esports</h4>
              <p>
                We believe every team member is a player in our mission to Rule the Gaming Universe.
                Join us, and let's build something extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
