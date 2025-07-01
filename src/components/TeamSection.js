import React from 'react';
import './TeamSection.css';
import JimishImg from '../image/Jimish.jpeg';
import SanjayImg from '../image/Sanjay.jpeg';
import RahulImg from '../image/Rahul.jpg';
import UtkarshImg from '../image/Utkarsh.png';

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-grid">
          <div className="team-column">
            <div className="team-category founding-members">
              <h3 className="team-category-title">FOUNDING MEMBERS</h3>
              <div className="team-members">
                <div className="team-member">
                  <img src={JimishImg} alt="Jimish Kapadia" className="member-avatar" />
                  <div className="member-info">
                    <h4 className="member-name">Jimish Kapadia</h4>
                    <p className="member-role">Co-founder & Director</p>
                  </div>
                </div>
                <div className="team-member">
                  <img src={SanjayImg} alt="Sanjay Sarda" className="member-avatar" />
                  <div className="member-info">
                    <h4 className="member-name">Sanjay Sarda</h4>
                    <p className="member-role">Co-founder & Director</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="team-category core-members">
              <h3 className="team-category-title">CORE TEAM MEMBERS</h3>
              <div className="team-members">
                <div className="team-member">
                  <img src={RahulImg} alt="Rahul Rameshan" className="member-avatar" />
                  <div className="member-info">
                    <h4 className="member-name">Rahul Rameshan</h4>
                    <p className="member-role">Chief Growth Officer</p>
                  </div>
                </div>
                <div className="team-member">
                  <img src={UtkarshImg} alt="Utkarsh Mishra" className="member-avatar" />
                  <div className="member-info">
                    <h4 className="member-name">Utkarsh Mishra</h4>
                    <p className="member-role">Manager, Investor & Startup Relations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="team-column">
            <div className="team-category why-choose">
              <h3 className="team-category-title">WHY CHOOSE US?</h3>
              <div className="why-choose-content">
                <div className="why-item highlight">
                  <div className="why-highlight">
                    <span className="why-label">Backed 88+ startups</span>
                    <span className="why-description">with consistent success stories.</span>
                  </div>
                </div>
                <div className="why-item highlight">
                  <div className="why-highlight">
                    <span className="why-label">2,000+ investors</span>
                    <span className="why-description">active on Future Unicorn Platform</span>
                  </div>
                </div>
                <div className="why-item highlight-green">
                  <div className="why-highlight">
                    <span className="why-label">We have our SEBI approved AIF CAT-1</span>
                    <span className="why-description">angel fund, to empower early stage startups.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
