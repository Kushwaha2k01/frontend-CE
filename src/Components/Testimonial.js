import React, { useEffect, useRef } from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Senior Game Producer",
      company: "Blizzard Entertainment",
      content: "Codeknight Esports has been instrumental in our esports tournament organization. Their platform handles 50,000+ concurrent viewers seamlessly, and their technical support team is available 24/7. The ROI we've seen from partnering with them has exceeded all expectations.",
      rating: 5,
      avatar: "🏢",
      logo: "Blizzard"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Esports Director",
      company: "Riot Games",
      content: "The professionalism and cutting-edge technology that Codeknight brings to the table is unmatched. Their tournament infrastructure helped us scale our League of Legends collegiate championships to 200+ universities globally with zero downtime.",
      rating: 5,
      avatar: "⚡",
      logo: "Riot"
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "VP of Gaming Partnerships",
      company: "Electronic Arts",
      content: "Codeknight's analytics dashboard provides insights that have directly increased our player engagement by 340%. Their team understands the gaming ecosystem better than anyone else in the industry. A true strategic partner.",
      rating: 5,
      avatar: "🎮",
      logo: "EA"
    },
    {
      id: 4,
      name: "Jennifer Liu",
      role: "Head of Esports Operations",
      company: "Epic Games",
      content: "Working with Codeknight has revolutionized our tournament broadcasting capabilities. Their streaming integration and real-time statistics have elevated our Fortnite competitions to broadcast-quality productions.",
      rating: 5,
      avatar: "🏆",
      logo: "Epic"
    },
    {
      id: 5,
      name: "David Kim",
      role: "Studio Director",
      company: "Ubisoft Montreal",
      content: "The technical expertise and gaming industry knowledge that Codeknight brings is exceptional. They've helped us launch successful esports initiatives for Rainbow Six Siege across 15 countries with flawless execution.",
      rating: 5,
      avatar: "🎯",
      logo: "Ubisoft"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "Global Esports Manager",
      company: "Activision",
      content: "Codeknight's tournament platform has been crucial for our Call of Duty League operations. Their anti-cheat systems and player management tools are industry-leading. We've seen a 500% increase in tournament registrations.",
      rating: 5,
      avatar: "🔥",
      logo: "Activision"
    }
  ];

  const testimonialRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.testimonial-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-in');
            }, index * 150);
          });
        }
      });
    }, observerOptions);

    const currentRef = testimonialRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="section-header">
          <h2>Trusted by Industry Leaders</h2>
          <p>See what top gaming companies and esports organizations say about partnering with Codeknight</p>
        </div>
        
        <div className="testimonial-grid" ref={testimonialRef}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="company-badge">
                <span>{testimonial.logo}</span>
              </div>
              
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="user-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                  <small>{testimonial.company}</small>
                </div>
              </div>
              
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              
              <div className="testimonial-footer">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star filled">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
