import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    experiences: '',
    jobType: '',
    jobLocation: '',
    location: '',
    language: '',
    resume: null,
    portfolio: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.experiences.trim()) {
      newErrors.experiences = 'Please describe your experience';
    }

    if (!formData.jobType) {
      newErrors.jobType = 'Please select a job type';
    }

    if (!formData.jobLocation) {
      newErrors.jobLocation = 'Please select a job location';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.language.trim()) {
      newErrors.language = 'Language is required';
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('experiences', formData.experiences);
      formDataToSend.append('jobType', formData.jobType);
      formDataToSend.append('jobLocation', formData.jobLocation);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('language', formData.language);
      formDataToSend.append('portfolio', formData.portfolio);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch('/api/applications', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Application submitted successfully! We will contact you soon.');
        setFormData({
          fullName: '',
          email: '',
          experiences: '',
          jobType: '',
          jobLocation: '',
          location: '',
          language: '',
          resume: null,
          portfolio: ''
        });
      } else {
        let data;
        try { data = await response.json(); } catch (e) { data = {}; }
        alert(data.message || 'Failed to submit application');
      }
    } catch (error) {
      alert('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const jobTypes = [
    'Full-time',
    'Part-time',
    'Contract',
    'Freelance',
    'Internship'
  ];

  return (
    <div className="application-form-container">
      <div className="form-wrapper">
        <h1>Job Application Form</h1>
        <p className="form-subtitle">Please fill out all required fields to apply for your desired position</p>
        
        <form onSubmit={handleSubmit} className="application-form">
          <div className="form-section">
            <h3>Personal Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'error' : ''}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="location">Location *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={errors.location ? 'error' : ''}
                  placeholder="City, State/Country"
                />
                {errors.location && <span className="error-message">{errors.location}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="language">Languages *</label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className={errors.language ? 'error' : ''}
                  placeholder="e.g., English, Hindi, Spanish"
                />
                {errors.language && <span className="error-message">{errors.language}</span>}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Professional Details</h3>
            
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="jobType">Job Type *</label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className={errors.jobType ? 'error' : ''}
              >
                <option value="">Select job type</option>
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.jobType && <span className="error-message">{errors.jobType}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="jobLocation">Job Location *</label>
              <select
                id="jobLocation"
                name="jobLocation"
                value={formData.jobLocation}
                onChange={handleChange}
                className={errors.jobLocation ? 'error' : ''}
              >
                <option value="">Select job location</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Office">Office</option>
              </select>
              {errors.jobLocation && <span className="error-message">{errors.jobLocation}</span>}
            </div>
          </div>

            <div className="form-group">
              <label htmlFor="experiences">Experience & Skills *</label>
              <textarea
                id="experiences"
                name="experiences"
                value={formData.experiences}
                onChange={handleChange}
                rows="5"
                className={errors.experiences ? 'error' : ''}
                placeholder="Describe your relevant experience, skills, and achievements..."
              />
              {errors.experiences && <span className="error-message">{errors.experiences}</span>}
            </div>
          </div>

          <div className="form-section">
            <h3>Portfolio & Documents</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="resume">Resume/CV *</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className={errors.resume ? 'error' : ''}
                />
                <small className="file-info">PDF, DOC, DOCX formats accepted (Max 5MB)</small>
                {errors.resume && <span className="error-message">{errors.resume}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="portfolio">Portfolio/Website</label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://yourportfolio.com"
                />
                <small className="file-info">Link to your portfolio or LinkedIn profile</small>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            <button 
              type="button" 
              className="cancel-button"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
