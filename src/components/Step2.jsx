import React, { useState } from 'react';

const Step2 = ({ data, updateFormData, nextStep, prevStep }) => {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!data.qualification || !data.year || !data.grade) {
      setError('Please fill in your education details');
      return;
    }
    if (!data.primarySkill) {
      setError('Please add at least your primary skill');
      return;
    }
    setError('');
    nextStep();
  };

  return (
    <div className="step-content">
      <h1 className="step-title">Education & Skills</h1>
      <p className="step-description">
        Enter your education details and skills
      </p>

      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

      {/* ===== EDUCATION ===== */}
      <h3 className="section-subtitle">Education</h3>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <div className="input-wrapper">
            <input
              id="qualification"
              type="text"
              placeholder="Enter Qualification"
              value={data.qualification || ''}
              onChange={(e) => updateFormData('qualification', e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="year">Year of Completion</label>
          <div className="input-wrapper">
            <input
              id="year"
              type="text"
              placeholder="Enter Year"
              value={data.year || ''}
              onChange={(e) => updateFormData('year', e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade / Percentage</label>
          <div className="input-wrapper">
            <input
              id="grade"
              type="text"
              placeholder="Enter Grade or Percentage"
              value={data.grade || ''}
              onChange={(e) => updateFormData('grade', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ===== SKILLS ===== */}
      <h3 className="section-subtitle">Skills</h3>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="primarySkill">Primary Skill</label>
          <div className="input-wrapper">
            <input
              id="primarySkill"
              type="text"
              placeholder="Enter Primary Skill"
              value={data.primarySkill || ''}
              onChange={(e) => updateFormData('primarySkill', e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="secondarySkill">Secondary Skill</label>
          <div className="input-wrapper">
            <input
              id="secondarySkill"
              type="text"
              placeholder="Enter Secondary Skill"
              value={data.secondarySkill || ''}
              onChange={(e) => updateFormData('secondarySkill', e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="button-group">
        <button className="btn btn-prev" onClick={prevStep}>
          Prev
        </button>
        <button className="btn btn-next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;