import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Assets/logo.png.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    window.open('https://lush-spleen-0cd.notion.site/CODEKNIGHT-ESPORTS-PORTFOLIO-12de0fdcaf078086818efa2f7c1dec60', '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setMenuOpen(false);
      
      // Use requestAnimationFrame for smoother animation
      setTimeout(() => {
        const offsetTop = element.offsetTop - 70; // Account for header height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }, 150);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-container" ref={menuRef}>
        {/* Left Side - Logo */}
        <div className="header-left">
          <Link to="/" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="CodeKnight Esports Logo" className="logo" />
          </Link>
          <h1 className="brand-name">CodeKnight Esports</h1>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className={`mobile-nav-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu} 
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Middle - Navigation Links */}
        <nav 
          className={`header-middle ${menuOpen ? 'active' : ''}`}
          id="mobile-menu"
          aria-hidden={!menuOpen}
        >
          <ul className="nav-links">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a href="#team" onClick={() => scrollToSection('team')}>Team</a></li>
            <li><a href="#portfolio" onClick={handlePortfolioClick}>Portfolio</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </nav>

        {/* Right Side - Additional Links */}
        <div className="header-right">
          <ul className="additional-links">
            <li><Link to="/arena">Arena</Link></li>
            <li><Link to="/careers">Career</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
