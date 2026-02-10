import React, { useState } from 'react';

const Step1 = ({ data, updateFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};

    if (!data.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!data.lastName.trim()) newErrors.lastName = "Last Name is required";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!emailPattern.test(data.email)) newErrors.email = "Invalid email address";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div className="step-content">
      <h1 className="step-title">Personal Information</h1>
      <p className="step-description">
        Enter your Personal Information to get closer to Contractors
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <div className="input-wrapper">
            <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <input
              id="firstName"
              type="text"
              placeholder="Enter Your First Name"
              value={data.firstName}
              onChange={(e) => updateFormData('firstName', e.target.value)}
            />
          </div>
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <div className="input-wrapper">
            <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <input
              id="lastName"
              type="text"
              placeholder="Enter Your Last Name"
              value={data.lastName}
              onChange={(e) => updateFormData('lastName', e.target.value)}
            />
          </div>
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <div className="date-grid">
          <div className="input-wrapper">
            <select
              value={data.dobDay}
              onChange={(e) => updateFormData('dobDay', e.target.value)}
            >
              <option value="">DD</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>

          <div className="input-wrapper">
            <select
              value={data.dobMonth}
              onChange={(e) => updateFormData('dobMonth', e.target.value)}
            >
              <option value="">MM</option>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                <option key={i} value={i + 1}>{month}</option>
              ))}
            </select>
          </div>

          <div className="input-wrapper">
            <select
              value={data.dobYear}
              onChange={(e) => updateFormData('dobYear', e.target.value)}
            >
              <option value="">YYYY</option>
              {Array.from({ length: 100 }, (_, i) => 2024 - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className="input-wrapper">
            <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="Enter Your Mobile Number"
              value={data.phoneNumber}
              onChange={(e) => updateFormData('phoneNumber', e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-Mail</label>
          <div className="input-wrapper">
            <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
              <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <input
              id="email"
              type="email"
              placeholder="Enter Your E-mail Address"
              value={data.email}
              onChange={(e) => updateFormData('email', e.target.value)}
            />
          </div>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
      </div>

      <div className="button-group">
        <button className="btn btn-next" onClick={handleNext}>
          Next
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Step1;