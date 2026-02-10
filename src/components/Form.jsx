import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Review from './Review';
import '../styles/form.css';

const Form = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dobDay: "",
        dobMonth: "",
        dobYear: "",
        phoneNumber: "",
        email: "",
        qualification : "",
        year : "",
        grade:"",
        primarySkill:"",
        secondarySkill:"",
        totalExperience: "",
        jobType: "",
        preferredLocation: "",
        expectedSalary: ""
    });

    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const updateFormData = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <header className="form-header">
                    <div className="logo">
                        <span className="logo-text">𝑰𝑨</span>
                    </div>
                    <button className="login-btn">Login</button>
                </header>

                <div className="form-content">
                    <aside className="progress-sidebar">
                        <div className="step-info">
                            <h2>Step {step}</h2>
                            <p className="step-subtitle">
                                {step === 1 && "Enter your personal information"}
                                {step === 2 && "Get to know better by adding your education life"}
                                {step === 3 && "Help Contractors get to know you better"}
                            </p>
                        </div>

                        <div className="progress-steps">
                            <div className={`progress-item ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
                                <div className="progress-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="progress-label">Personal Information</span>
                            </div>

                            <div className={`progress-item ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
                                <div className="progress-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="progress-label">Education</span>
                            </div>

                            <div className={`progress-item ${step >= 3 ? 'active' : ''}`}>
                                <div className="progress-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="progress-label">Work Experiences</span>
                            </div>
                        </div>
                    </aside>

                    <main className="form-main">
                        {step === 1 && (
                            <Step1
                                data={formData}
                                updateFormData={updateFormData}
                                nextStep={nextStep}
                            />
                        )}

                        {step === 2 && (
                            <Step2
                                data={formData}
                                updateFormData={updateFormData}
                                nextStep={nextStep}
                                prevStep={prevStep}
                            />
                        )}

                        {step === 3 && (
                            <Step3
                                data={formData}
                                updateFormData={updateFormData}
                                prevStep={prevStep}
                                nextStep={nextStep}
                            />
                        )}

                        {step === 4 && (
                            <Review
                                data={formData}
                                prevStep={prevStep}
                            />
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Form;