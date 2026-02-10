import React from 'react';

const Review = ({ data, prevStep }) => {

  const handleDownload = () => {
    // Simply trigger print — CSS handles what is visible
    window.print();
  };

  return (
    <div className="step-content">
      <h1 className="step-title">Review Your Information</h1>
      <p className="step-description">Please review your information before submission</p>

      <div className="review-printable">
        {/* Personal Information */}
        <div className="review-section">
          <h3>Personal Information</h3>
          <p><strong>First Name:</strong> {data.firstName}</p>
          <p><strong>Last Name:</strong> {data.lastName}</p>
          <p><strong>Date of Birth:</strong> {`${data.dobDay}/${data.dobMonth}/${data.dobYear}`}</p>
          <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
          <p><strong>Email:</strong> {data.email}</p>
        </div>

        {/* Education */}
        <div className="review-section">
          <h3>Education</h3>
          <p><strong>Qualification:</strong> {data.qualification}</p>
          <p><strong>Year of Completion:</strong> {data.year}</p>
          <p><strong>Grade/Percentage:</strong> {data.grade}</p>
        </div>

        {/* Skills */}
        <div className="review-section">
          <h3>Skills</h3>
          <p><strong>Primary Skill:</strong> {data.primarySkill}</p>
          <p><strong>Secondary Skill:</strong> {data.secondarySkill}</p>
        </div>

        {/* Professional Details */}
        <div className="review-section">
          <h3>Professional Details</h3>
          <p><strong>Total Experience:</strong> {data.totalExperience}</p>
          <p><strong>Job Type:</strong> {data.jobType}</p>
          <p><strong>Preferred Location:</strong> {data.preferredLocation}</p>
          <p><strong>Expected Salary:</strong> {data.expectedSalary}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="btn btn-prev" onClick={prevStep}>Back</button>
        <button className="btn btn-submit" onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};

export default Review;