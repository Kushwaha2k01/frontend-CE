import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);

    try {
      console.log('Making API call to /api/contact');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('API response status:', response.status);

      if (response.ok) {
        console.log('Form submission successful');
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            message: ''
          });
          setIsSubmitted(false);
        }, 3000);
      } else {
        let data;
        try { data = await response.json(); } catch (e) { data = {}; }
        console.error('Form submission failed:', data);
        alert(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-content">
          {/* Left Side - Contact Information */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>We are here to assist you. Please reach out with any questions or inquiries.</p>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:contact@codeknight-esports.com">contact@codeknightesports.in</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Location</h4>
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div className="contact-details">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://x.com/Codeknight_ep" target="_blank" rel="noopener noreferrer" title="Twitter">
                    <img src={require('../Assets/Contact/Twitter.png')} alt="Twitter" />
                  </a>
                  <a href="https://linkedin.com/company/codeknightesports" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <img src={require('../Assets/Contact/LinkedIn.png')} alt="LinkedIn" />
                  </a>
                  <a href="https://www.instagram.com/codeknight_esports/" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <img src={require('../Assets/Contact/Instagram.png')} alt="Instagram" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61559502523556" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <img src={require('../Assets/Contact/Facebook.png')} alt="Facebook" />
                  </a>
                  <a href="https://discord.gg/nVFkaBEfhJ" target="_blank" rel="noopener noreferrer" title="Discord">
                    <img src={require('../Assets/Contact/Discord.png')} alt="Discord" />
                  </a>
                  <a href="https://whatsapp.com/channel/0029Vb6ZQ9jHLHQfnisXdW0b" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                    <img src={require('../Assets/Contact/WhatsApp.png')} alt="WhatsApp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
              {isSubmitted && <div className="success-message">Thank you! Your message has been sent successfully.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
