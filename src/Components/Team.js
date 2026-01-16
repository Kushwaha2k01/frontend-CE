import React from 'react';
import './Team.css';
import avinashImage from '../Assets/Team/Avinash Kushwaha.jpeg';
import zakiImage from '../Assets/Team/Mohammad Zaki.jpg';
import khushiImage from '../Assets/Team/Khushi Gupta.jpeg';

const Team = () => {
  const teamMembers = [
    {
      name: "Avinash Kushwaha",
      position: "Founder & CEO, Director",
      linkedin: "https://www.linkedin.com/in/avinash-kushwaha-2k01/",
      image: avinashImage
    },
    {
      name: "Mohammad Zaki",
      position: "Co-Founder, Director & Head of Business Partnership Manager",
      linkedin: "https://www.linkedin.com/in/mohammad-zaki-kave-1277041b1/",
      image: zakiImage
    },
    {
      name: "Khushi Gupta",
      position: "Co-Founder, Director & Head of Operation Manager",
      linkedin: "https://www.linkedin.com/in/khushi22/",
      image: khushiImage
    },
  ];

  return (
    <section id ="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Meet Our Team</h2>
          <p className="team-description">
            We're a team of gamers, developers, designers, and tech enthusiasts who live and breathe gaming.
            We believe in collaboration, fast execution, and building solutions that spark creativity and engagement.
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-image">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="profile-image"
                />
              </div>
              <div className="team-card-content">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
