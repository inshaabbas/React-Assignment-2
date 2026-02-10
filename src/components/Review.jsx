import React, { useRef } from 'react';

const Review = ({ data, prevStep }) => {
  const printRef = useRef();

  const handleDownload = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents; 
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); 
  };

  return (
    <div className="step-content">
      <h1 className="step-title">Review Your Information</h1>
      <p className="step-description">Please review your information before submission</p>

      <div ref={printRef}>
        <div className="review-section">
          <h3>Personal Information</h3>
          <p><strong>First Name:</strong> {data.firstName}</p>
          <p><strong>Last Name:</strong> {data.lastName}</p>
          <p><strong>Date of Birth:</strong> {`${data.dobDay}/${data.dobMonth}/${data.dobYear}`}</p>
          <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
          <p><strong>Email:</strong> {data.email}</p>
        </div>

        <div className="review-section">
          <h3>Education</h3>
          <p><strong>Qualification:</strong> {data.qualification}</p>
          <p><strong>Year of Completion:</strong> {data.year}</p>
          <p><strong>Grade/Percentage:</strong> {data.grade}</p>
        </div>

        <div className="review-section">
          <h3>Skills</h3>
          <p><strong>Primary Skill:</strong> {data.primarySkill}</p>
          <p><strong>Secondary Skill:</strong> {data.secondarySkill}</p>
        </div>

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