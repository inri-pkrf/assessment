import React from 'react';
import '../../MainTopicsCss/PhotoList.css';

const PhotoList = ({ data, onPhotoClick }) => {
  return (
    <div className="photo-list">

      {data.map((item, index) => (
        <div key={index} className="photo-list-item-gallery" onClick={() => onPhotoClick(index)}>
          <div className="photo-list-content">
            <div className="photo-list-title">{item.title}</div>
            <img src={process.env.PUBLIC_URL + item.photo} className={`photo-list-image ${index >= 9 && index <= 11 ? 'moveLeft' : ''}`} />
            <div className="photo-list-number">{index + 1}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
