import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCss/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
      <li onClick={() => navigate('/home-page')}>עמוד הבית</li>
        <li onClick={() => navigate('/diagram')}>מבנה הרשות</li>
        <li onClick={() => navigate('/gallery')}>העמ"צ בחירום</li>
        <li onClick={() => navigate('/relations')}>ממשקי מכלולים</li>
        <li onClick={() => navigate('/goals')}>יעדים לאומיים</li>
        <li onClick={() => navigate('/terush')}>תרחיש ייחוס</li>
        <li onClick={() => navigate('/sdp')}>סד"פ להדפסה</li>
        <li onClick={() => navigate('/contact')}>יצירת קשר</li>
      </ul>
      <div id='dot-line-navbar'> . . . . . . . . . . </div>
    </nav>
  );
}

export default Navbar;
