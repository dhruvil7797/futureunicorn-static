import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-card">
            <h3 className="about-title">WHAT IS GROWTH81?</h3>
            <p className="about-text">
              A founder-first startup marketplace under Growth Sense Group that invests with angel 
              investors in early and growth-stage ventures. We simplify fundraising, branding, 
              and help companies to fund startups more fast.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-title">WHAT IS FUTURE UNICORN?</h3>
            <p className="about-text">
              A curated discovery platform by Growth81 showcasing India's most promising startups 
              to 2,500+ investors, VCs, CXOs, and partners, listing live funds, instant 
              connections, and unlocking feedback strategic areas for fundraising.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
