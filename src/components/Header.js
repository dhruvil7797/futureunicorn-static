import React from 'react';
import './Header.css';
import G91Logo from '../image/g91logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img src={G91Logo} alt="Future Unicorn Logo" className="logo-image" />
        </div>
        <div className="title-section">
          <h1 className="main-title">FUTURE UNICORN BY GROWTH91</h1>
          <p className="subtitle">Your Gateway to Visibility, Investor Access & Growth</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
