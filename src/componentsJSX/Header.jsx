import React from 'react';
import '../componentsCss/Header.css';

function Header() {
  return (
    <header className="header">
      <img
        src={process.env.PUBLIC_URL + '/images/collegeLogoText.png'}
        className="App-logo"
        alt="logo"
        // onClick={() => onNavigate('home')} 
      />
      <img
        src={process.env.PUBLIC_URL + '/images/navbar.png'}
        className="navbar"
        alt="navbar"
        // onClick={onMenuClick}
      />
      <img
        src={process.env.PUBLIC_URL + '/images/orangeTriangle.png'}
        alt="orangeTriangle"
        className="orangeTriangle"
      />
      <img
        src={process.env.PUBLIC_URL + '/images/blueTriangle.png'}
        alt="blueTriangle"
        className="blueTriangle"
      />
    </header>
  );
}

export default Header;