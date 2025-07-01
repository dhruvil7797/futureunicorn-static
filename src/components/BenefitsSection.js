import React from 'react';
import './BenefitsSection.css';
import globalSearchIcon from '../image/global-search.png';
import connectionIcon from '../image/connection.png';

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="container">
        <h2 className="section-title" style={{color:"white"}}>BENEFITS TO FOUNDERS</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon green">
              <img src={globalSearchIcon} alt="Get Discovered" className="benefit-image" />
            </div>
            <h3 className="benefit-title">Get Discovered</h3>
            <p className="benefit-text">
              Showcase your startup to 2000+ serious, verified investors.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon blue">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3 className="benefit-title">Build Credibility</h3>
            <p className="benefit-text">
              Signal trust, structure, and readiness to raise or scale fast.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon orange">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
            </div>
            <h3 className="benefit-title">Raise Capital</h3>
            <p className="benefit-text">
              Share your pitch, traction, and funding needs with investors.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon purple">
              <img src={connectionIcon} alt="Unlock Connections" className="benefit-image" />
            </div>
            <h3 className="benefit-title">Unlock Connections</h3>
            <p className="benefit-text">
              Access warm intros to VCs, CXOs, and growth enablers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
