import React, { useState } from 'react';

const Step3 = ({ data, updateFormData, nextStep, prevStep }) => {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (
      !data.totalExperience ||
      !data.jobType ||
      !data.preferredLocation ||
      !data.expectedSalary
    ) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    nextStep();
  };

  return (
    <div className="step-content">
      <h1 className="step-title">Additional Information</h1>
      <p className="step-description">
        Please fill the details below
      </p>

      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

      <div className="form-grid">
        <div className="form-group">
          <label>Total Experience</label>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Experience"
              value={data.totalExperience}
              onChange={(e) =>
                updateFormData('totalExperience', e.target.value)
              }
            />
          </div>
        </div>

        <div className="form-group">
          <label>Job Type</label>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Job Type"
              value={data.jobType}
              onChange={(e) =>
                updateFormData('jobType', e.target.value)
              }
            />
          </div>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label>Preferred Location</label>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter location"
              value={data.preferredLocation}
              onChange={(e) =>
                updateFormData('preferredLocation', e.target.value)
              }
            />
          </div>
        </div>

        <div className="form-group">
          <label>Expected Salary</label>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Salary"
              value={data.expectedSalary}
              onChange={(e) =>
                updateFormData('expectedSalary', e.target.value)
              }
            />
          </div>
        </div>
      </div>

      <div className="button-group">
        <button className="btn btn-prev" onClick={prevStep}>Prev</button>
        <button className="btn btn-next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Step3;