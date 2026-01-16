import React from 'react';
import './CookiePolicy.css';

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-container">
      <div className="cookie-policy-content">
        <h1>Cookie Policy</h1>
        
        <p className="intro-text">
          At Codeknight Esports, we use cookies and similar tracking technologies to enhance your browsing experience, 
          improve our services, and ensure our website works efficiently. This Cookie Policy explains what cookies are, 
          how we use them, and your choices regarding their use.
        </p>

        <section className="policy-section">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. 
            They help websites remember your preferences, login sessions, and other information to provide you with a more 
            personalized experience.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Types of Cookies We Use</h2>
          
          <h3>Essential Cookies</h3>
          <ul>
            <li>Required for the operation of our website</li>
            <li>Enable basic functions like page navigation, secure areas access, and form submissions</li>
            <li>Without these cookies, certain parts of the site will not function properly</li>
          </ul>

          <h3>Performance & Analytics Cookies</h3>
          <ul>
            <li>Help us understand how visitors interact with our website</li>
            <li>Provide information on pages visited, time spent, and any issues encountered</li>
            <li>Used to improve site performance and content quality</li>
          </ul>

          <h3>Functionality Cookies</h3>
          <ul>
            <li>Remember your preferences (e.g., language, region, display settings)</li>
            <li>Enhance your user experience by tailoring website content to your needs</li>
          </ul>

          <h3>Advertising & Marketing Cookies</h3>
          <ul>
            <li>Used to deliver ads relevant to your interests</li>
            <li>Limit the number of times you see an ad and measure ad campaign effectiveness</li>
            <li>May be set by us or third-party ad networks</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. How We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Keep you signed in to your account</li>
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and usage trends</li>
            <li>Improve website functionality and security</li>
            <li>Show personalized offers, promotions, and services</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Third-Party Cookies</h2>
          <p>
            Some cookies may be placed by third-party services we use, such as:
          </p>
          <ul>
            <li>Analytics tools (e.g., Google Analytics)</li>
            <li>Advertising networks (e.g., Google Ads, Meta Ads)</li>
            <li>Social media plugins (e.g., Facebook, Twitter, Discord)</li>
          </ul>
          <p>
            We do not control these cookies. Please refer to the respective third-party privacy and cookie policies 
            for more details.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Managing & Disabling Cookies</h2>
          <p>
            You can manage or disable cookies through your browser settings. Please note:
          </p>
          <ul>
            <li>Disabling cookies may limit some website functionalities</li>
            <li>Instructions for managing cookies can be found in your browser's help section</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>6. Updates to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
            operational, legal, or regulatory reasons. The updated policy will always be posted on this page with 
            the revised date.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> contact@codeknightesports.in</p>
            <p><strong>Address:</strong> Bengaluru,India</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
