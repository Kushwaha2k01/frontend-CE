import React from 'react';
import './Collab.css';
import digitran from '../Assets/Collab/Digitran Solutions.png';
import namor from '../Assets/Collab/Namor Global 1.jfif';
import redtaiger from '../Assets/Collab/Red Taiger Production.png';
import alphanova from '../Assets/Collab/Alpha Nova.jfif';

const Collab = () => {
  const collaborations = [
    {
      id: 1,
      name: 'Digitran Solutions',
      image: digitran,
      link: 'https://digitransolutions.in/'
    },
    {
      id: 2,
      name: 'Namor Global',
      image: namor,
      link: 'https://www.linkedin.com/company/namor-global/'
    },
    {
      id: 3,
      name: 'Red Taiger Production',
      image: redtaiger,
      link: 'https://www.redtaigerproductions.com/'
    },
    {
      id: 4,
      name: 'Alpha Nova',
      image: alphanova,
      link: 'https://alphanovastudio.com/'
    }
  ];

  return (
    <section id="collab" className="collab-section">
      <div className="collab-container">
        <h2 className="collab-title">Our Collaborations</h2>
        
        <div className="collab-grid">
          {collaborations.map((collab) => (
            <div key={collab.id} className="collab-card">
              <div className="collab-image-container">
                {collab.link ? (
                  <a href={collab.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={collab.image}
                      alt={collab.name}
                      className="collab-image"
                    />
                  </a>
                ) : (
                  <img
                    src={collab.image}
                    alt={collab.name}
                    className="collab-image"
                  />
                )}
              </div>
              <div className="collab-card-content">
                <h3 className="collab-name">{collab.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collab;
