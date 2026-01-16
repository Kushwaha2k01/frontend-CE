import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Team from './Components/Team';
import Collab from './Components/Collab';
import Testimonial from './Components/Testimonial';
import Newsletter from './Components/Newsletter';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Arena from './Components/Arena';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions';
import CookiePolicy from './Components/CookiePolicy';
import Careers from './Components/Careers';
import ApplicationForm from './Components/ApplicationForm';
import Blog from './Components/Blog';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Services />
              <Team />
              <Collab />
              <Testimonial />
              <Contact />
              <Newsletter />
            </>
          } />
          <Route path="/arena" element={<Arena />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
