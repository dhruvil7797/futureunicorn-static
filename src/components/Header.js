import React from 'react';
import './Header.css';
import G91Logo from '../image/g91logo.png';
import LinkedInIcon from '../image/linkedin.png';
import InstagramIcon from '../image/instagram.png';
import FacebookIcon from '../image/facebook.png';
import YouTubeIcon from '../image/youtube.png';
import TwitterIcon from '../image/twitter.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section" onClick={() => window.open('https://growth91.com/FutureUnicorn', '_blank')} style={{cursor: 'pointer'}}>
          <img src={G91Logo} alt="Future Unicorn Logo" className="logo-image" />
        </div>
        <div className="title-section">
          <h1 className="main-title">FUTURE UNICORN BY GROWTH91</h1>
          <p className="subtitle">Your Gateway to Visibility, Investor Access & Growth</p>
          <div className="social-links">
            <a href="https://in.linkedin.com/company/growth91" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/growth.91/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/MyGrowth91" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@Growth91" target="_blank" rel="noopener noreferrer">
              <img src={YouTubeIcon} alt="YouTube" className="social-icon" />
            </a>
            <a href="https://x.com/Growth_91" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
