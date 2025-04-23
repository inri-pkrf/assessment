import React, { useState, useEffect } from 'react';
import '../MainTopicsCss/Diagram.css';
import PopUp from '../GeneralComponentsJSX/PopUp.jsx';
import DiagramData from '../Data/DiagramData.jsx';

const Diagram = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const handleBoxClick = (role) => {
    setSelectedRole(role);
    setIsPopUpVisible(true);
  };

  const closePopUp = () => {
    setSelectedRole(null);
    setIsPopUpVisible(false);
  };

  const handlePrintDiagramClick = () => {
    window.open(`${process.env.PUBLIC_URL}/assets/pdf/מבנה הרשות המקומית בשעת חירום.pdf`, '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="diagram-container">

      <img
        src={process.env.PUBLIC_URL + '/assets/images/logos-home/mivne.png'}
        className="mivne-icon-Diagram"
        alt="Diagram"
      />
      <h1 className="diagram-title">מבנה הרשות המקומית בשעת חירום</h1>

      <div className="subtitle-diagram" id='subtitleD1'>
        בכדי לפעול באופן מיטבי בשעת חירום, הרשות המקומית משנה תצורה ופועלת במכלולים המחולקים לתחומי אחריות.
      </div>

      <img
        src={process.env.PUBLIC_URL + '/assets/images/setup.jpg'}
        className="setup"
        alt="setup"
      />

      <div className="subtitle-diagram" id='subtitleD2'>
        בלחיצה על כל רכיב יפתח חלון עם הסבר נוסף -
      </div>

      <img
        src={process.env.PUBLIC_URL + '/assets/images/hpArrow.png'}
        className="hpArrow-diagram"
        alt="hpArrow"
      />

      <div className="all-diagram">
        <div className="line"></div>
        <div className='dotLine' >..............</div>
        {DiagramData.map((role, index) => (
          <div
            key={index}
            className={role.classNameDiv}
            onClick={() => handleBoxClick(role)}
          >
            <p className={role.classNameTitle}>{role.titleDisplay}</p>
          </div>
        ))}
      </div>

      <PopUp
        isVisible={isPopUpVisible}
        onClose={closePopUp}
        title={selectedRole?.titlePopUp}
        content={selectedRole?.content}
      />

      <div className="btn-print-diagram" onClick={handlePrintDiagramClick}>
        <img
          src={process.env.PUBLIC_URL + '/assets/images/print.png'}
          className="print-img-diagram"
          alt="print-btn"
        />
        <p className="text-print-diagram">הורדת גרסה להדפסה</p>
      </div>
    </div>
  );
};

export default Diagram;
