import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=61559502523556' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://x.com/Codeknight_ep' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/codeknight_esports/' },
    { name: 'Discord', icon: 'fab fa-discord', url: 'https://discord.gg/nVFkaBEfhJ' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/@codeknight_esports' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/company/codeknightesports' }
  ];

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About Us', url: '#about' },
    { name: 'Services', url: '#services' },
    { name: 'Team', url: '#team' },
    { name: 'Contact', url: '#contact' },
    { name: 'Arena', url: '/arena' },
    { name: 'Careers', url: '/careers' },
    { name: 'Blog', url: '/blog' }
  ];

  const services = [
    'Game Development',
    'Tournament Organization',
    'Game Testing',
    'Gaming Events',
    'Game Animation & Art',
    'Music & Sound for Games'
    
  ];

  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-logo">
                <img 
                  src={require('../Assets/logo.png')} 
                  alt="CodeKnight Esports Logo" 
                  className="footer-logo"
                />
              </div>
              <p>
                Empowering gamers and esports enthusiasts through professional coaching, 
                tournaments, and community building. Join us in shaping the future of competitive gaming.
              </p>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {link.url.startsWith('#') ? (
                      <a href={link.url}>{link.name}</a>
                    ) : (
                      <Link to={link.url}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-services">
              <h4>Our Services</h4>
              <ul>
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Bengaluru, Karnataka, India</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+91-6386812091 (WhatsApp Only) </span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>contact@codeknightesports.in</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>Mon-Fri: 9:00AM-10:30PM | Sat: 10:00AM-6:00PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Codeknight Esports. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
