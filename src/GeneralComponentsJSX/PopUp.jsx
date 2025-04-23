import React from 'react';
import '../GeneralComponentsCss/PopUp.css';

const PopUp = ({ isVisible, onClose, title, content }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close-button" onClick={onClose}>
          {/* &times; */}
          <img src={process.env.PUBLIC_URL + '/assets/images/XBtn.png'} alt="Close" className="XBtn" />
        </button>
        <h2 className="popup-title" >{title}</h2> 
        <div className="popup-body">
          <div className="popup-body-text">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
