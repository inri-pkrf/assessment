import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../GeneralComponentsCss/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li onClick={() => navigate('/home-page')}>עמוד הבית</li>
        <li onClick={() => navigate('/diagram')}>מבנה הרשות</li>
        <li onClick={() => navigate('/gallery')}>העמ"צ בחירום</li>
        <li onClick={() => navigate('/relations')}>ממשקי מכלולים</li>
        <li onClick={() => navigate('/target')}>יעדים לאומיים</li>
        <li onClick={() => navigate('/scenario')}>תרחיש ייחוס</li>
        <li>סד"פ להדפסה</li>
        <li>יצירת קשר</li>
      </ul>
      <div id='dot-line-navbar'> . . . . . . . . . . </div>
    </nav>
  );
}

export default Navbar;
