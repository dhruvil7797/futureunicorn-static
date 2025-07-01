import React from 'react';
import './RegistrationSection.css';

const RegistrationSection = () => {
  return (
    <section className="registration-section">
      <div className="container">
        <h2 className="section-title">STEPS OF REGISTRATION</h2>
        <p className="registration-url" style={{cursor: "pointer"}} onClick={() => {window.location.assign("https://growth91.com/FutureUnicorn")}}>https://growth91.com/FutureUnicorn</p>
        <p className="registration-description">
          To register on Future Unicorn, go to the platform, create your founder account, and begin your listing. Fill in 
          key startup details—pitch deck, team info, traction—and choose your visibility plan.
        </p>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-icon blue">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="step-content">
              <div className="step-label">Visit Platform</div>
              <div className="step-description">Navigate to the Future Unicorn platform</div>
            </div>
          </div>
          
          <div className="step">
            <div className="step-icon purple">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M20 8v6M23 11h-6" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="step-content">
              <div className="step-label">Create Account</div>
              <div className="step-description">Set up your founder profile and credentials</div>
            </div>
          </div>
          
          <div className="step">
            <div className="step-icon blue">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M10 12h4M10 16h4" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M16 3v4M18 5h-4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="step-content">
              <div className="step-label">Start Listing</div>
              <div className="step-description">Begin creating your startup listing</div>
            </div>
          </div>
          
          <div className="step">
            <div className="step-icon orange">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="step-content">
              <div className="step-label">Enter Details</div>
              <div className="step-description">Fill in pitch deck, team info, and traction data</div>
            </div>
          </div>
          
          <div className="step">
            <div className="step-icon green">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="step-content">
              <div className="step-label">Publish Listing</div>
              <div className="step-description">Go live and start connecting with investors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
