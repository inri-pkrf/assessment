import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../GeneralComponentsCss/MagnifyPic.css';

function MagnifyPic() {
    const location = useLocation();
    const navigate = useNavigate();
    const { imagePath } = location.state || {};

    if (!imagePath) {
        return <div>Error: No image provided for magnification</div>;
    }

    const imageStyle = imagePath.includes('table')
        ? { top: '34vh' }  
        : {};

    return (
        <div className="MagnifyPic">
            <button className="close-btn" onClick={() => navigate(-1)}>
                x
            </button>
            <img
                src={imagePath}
                alt="Magnified"
                className="magnified-image"
                style={imageStyle}  
            />
        </div>
    );
}

export default MagnifyPic;

