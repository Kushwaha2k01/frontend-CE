import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Arena.css';

const Arena = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  // Tournament date - 30 days from now
  const tournamentDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date;
  }, []);

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const distance = tournamentDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [tournamentDate]);

  const handleArenaClick = () => {
    setClickCount(prev => prev + 1);
    
    // Show coming soon after 3 clicks
    if (clickCount >= 2) {
      setShowComingSoon(true);
      setTimeout(() => {
        navigate('/tournament-coming-soon');
      }, 1500);
    }
  };

  return (
    <div className="arena-container">
      <div className="arena-wrapper">
        <div className="arena-header">
          <h1 className="arena-title">CODEKNIGHT ARENA</h1>
          <p className="arena-subtitle">Click to enter the battlefield</p>
        </div>

        <div className="arena-main">
          <div 
            className={`arena-entrance ${clickCount > 0 ? 'clicked' : ''} ${showComingSoon ? 'coming-soon-active' : ''}`}
            onClick={handleArenaClick}
          >
            <div className="arena-gate">
              <div className="gate-left"></div>
              <div className="gate-right"></div>
            </div>
            
            <div className="arena-content">
              {!showComingSoon ? (
                <>
                  <div className="click-indicator">
                    <span className="click-count">{clickCount}/3</span>
                    <span className="click-text">clicks to unlock</span>
                  </div>
                  
                  <div className="arena-particles">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`particle particle-${i + 1}`}></div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="coming-soon-text">
                  <h2>TOURNAMENT</h2>
                  <h3>COMING SOON</h3>
                  <div className="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="arena-info">
            <div className="countdown-section">
              <h3>Next Tournament</h3>
              <div className="countdown-timer">
                <div className="time-unit">
                  <span className="time-value">{String(countdown.days).padStart(2, '0')}</span>
                  <span className="time-label">Days</span>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <span className="time-value">{String(countdown.hours).padStart(2, '0')}</span>
                  <span className="time-label">Hours</span>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <span className="time-value">{String(countdown.minutes).padStart(2, '0')}</span>
                  <span className="time-label">Minutes</span>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <span className="time-value">{String(countdown.seconds).padStart(2, '0')}</span>
                  <span className="time-label">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="arena-footer">
          <p>Prepare for battle • Tournament starts soon</p>
        </div>
      </div>
    </div>
  );
};

export default Arena;
