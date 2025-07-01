import React from 'react';
import './VisionSection.css';

const VisionSection = () => {
  return (
    <section className="vision-section">
      <div className="container">
        <div className="vision-content">
          <div className="vision-main">
            <div className="content-card">
              <h3 className="content-title">OUR VISION & PURPOSE</h3>
              <p className="content-text">
                Future Unicorn is a curated discovery platform for India's most promising startups, helping 
                founders like you get discovered by a powerful network of <strong>2,000+ active investors</strong>, VCs, angels, 
                bankers, syndicates, and strategic partners.
              </p>
              <p className="content-text">
                Built by <a href="https://growth91.com" className="highlight-link">Growth91</a> and backed by the <a href="https://www.growth-sense.com/" className="highlight-link">Growth Sense</a>, this is a founder-first initiative designed to 
                boost credibility, unlock capital, and drive growth.
              </p>
            </div>
          </div>
          
          <div className="about-grid">
            <div className="content-card">
              <h3 className="content-title">WHAT IS GROWTH91?</h3>
              <p className="content-text">
                A founder-first startup marketplace under Growth Sense Group that invests with angel 
                investors in early and growth-stage ventures. We simplify fundraising, branding, 
                and help companies to fund startups more fast.
              </p>
            </div>
            
            <div className="content-card">
              <h3 className="content-title">WHAT IS FUTURE UNICORN?</h3>
              <p className="content-text">
                A curated discovery platform by Growth81 showcasing India's most promising startups 
                to 2,500+ investors, VCs, CXOs, and partners, listing live funds, instant 
                connections, and unlocking feedback strategic areas for fundraising.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
