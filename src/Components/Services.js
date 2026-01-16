import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-card-title">Game Testing</h3>
            <p className="service-subtitle">Launch with confidence.</p>
            <p>Our QA experts provide full-cycle testing across platforms to ensure flawless gameplay.</p>
            <ul className="service-items">
              <li>Functional, Compatibility & Regression Testing</li>
              <li>Alpha, Beta & Pre-launch Testing</li>
              <li>Localization QA</li>
              <li>Load, Performance & Security Testing</li>
              <li>LiveOps & Post-launch QA</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-card-title">Game Development (2D / 3D)</h3>
            <p className="service-subtitle">Design. Build. Launch. Repeat.</p>
            <p>Our game developers create high-performance games using the most trusted engines.</p>
            <ul className="service-items">
              <li>Unity, Unreal, Godot & Roblox</li>
              <li>Single-player, Multiplayer & Cross-platform Games</li>
              <li>Custom Game Mechanics, AI & Physics</li>
              <li>Game Economy & Reward Systems</li>
              <li>NFT / Token Integration (Optional)</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-card-title">Game Animation (2D / 3D + Metahuman)</h3>
            <p className="service-subtitle">Bring Characters to Life.</p>
            <p>From 2D stylized movement to hyper-realistic Metahuman avatars, we add the wow factor.</p>
            <ul className="service-items">
              <li>Spine, Frame-by-Frame & Blender Animations</li>
              <li>3D Rigging, Facial Capture, Lip Sync</li>
              <li>MetaHuman Integration for AAA-quality realism</li>
              <li>Custom Emotes & Cinematic Cutscenes</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-card-title">AR / VR Game Development</h3>
            <p className="service-subtitle">Experience Gaming Beyond Screens.</p>
            <p>We create immersive AR and VR experiences for futuristic storytelling and gameplay.</p>
            <ul className="service-items">
              <li>Oculus, HTC Vive & WebXR Platforms</li>
              <li>VR Game Design & Prototyping</li>
              <li>AR for Simulation, Education & Training</li>
              <li>Cross-device Performance Optimization</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-card-title">UI/UX Design</h3>
            <p className="service-subtitle">User-first interfaces for powerful gameplay.</p>
            <p>Clean, intuitive, and gamer-centric UI/UX design that elevates interaction.</p>
            <ul className="service-items">
              <li>HUDs, Menus, Game Maps</li>
              <li>Motion UI & Interactive Prototypes</li>
              <li>Responsive Design for All Devices</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-card-title">Web & Mobile App Development</h3>
            <p className="service-subtitle">Support your game with smart digital tools.</p>
            <p>Build portals, launchers, and companion apps that integrate with your core experience.</p>
            <ul className="service-items">
              <li>React, Node.js, Firebase, Flutter</li>
              <li>Game Portals & Leaderboards</li>
              <li>Admin Dashboards & CRM</li>
              <li>UPI / Wallet / Referral Systems</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-card-title">Sound & Music for Games</h3>
            <p className="service-subtitle">Hear the Game, Feel the World.</p>
            <p>Sound is the soul of a game. From immersive ambient effects to epic orchestral scores, our audio experts craft soundscapes that pull players deep into your universe.</p>
            <ul className="service-items">
              <li>Original Soundtrack Composition (Orchestral, Electronic, Hybrid)</li>
              <li>Dynamic In-game Sound Effects (SFX)</li>
              <li>Voice-over Recording & Processing</li>
              <li>3D Spatial & Surround Sound Design</li>
              <li>Adaptive Music Systems for Interactive Gameplay</li>
              <li>Audio Mixing & Mastering for All Platforms</li>
            </ul>
          </div>

          <div className="service-card">
            <h3 className="service-card-title">Data Analytics & Business Intelligence</h3>
            <p className="service-subtitle">Turn data into decisions.</p>
            <p>Improve engagement, retention, and monetization through actionable insights.</p>
            <ul className="service-items">
              <li>Player Behavior Analytics</li>
              <li>LTV, ARPU, Churn Predictions</li>
              <li>Custom BI Dashboards</li>
              <li>A/B Testing Strategy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
