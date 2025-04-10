import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentsCss/Intro.css';

const Intro = () => {
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const [showIntro, setShowIntro] = useState(false);
    const [showSkipButton, setShowSkipButton] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            console.log("vsdvrbgwrvbwv")

            if (window.innerWidth >= 769) {
                console.log("vsdv")
                setVideoSrc(`${process.env.PUBLIC_URL}/videos/introVidComp.mp4`);
            } else {
                setVideoSrc(`${process.env.PUBLIC_URL}/videos/introVid.mp4`);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const videoEndTimeout = setTimeout(() => {
            setIsVideoEnded(true);
        }, 13000);

        const introTextTimeout = setTimeout(() => {
            setShowIntro(true);
        }, 13050);

        const skipButtonTimeout = setTimeout(() => {
            setShowSkipButton(true);
        }, 3500);

        return () => {
            clearTimeout(videoEndTimeout);
            clearTimeout(introTextTimeout);
            clearTimeout(skipButtonTimeout);
        };
    }, []);

    const skipVideo = () => {
        setIsVideoEnded(true);
        setShowIntro(true);
    };

    const goToHome = () => {
        navigate('/home');
    };

    return (
        <div id="intro-lomda">
            {!isVideoEnded && videoSrc && (
                <>
                    {showSkipButton && (
                        <button className="skip" onClick={skipVideo}>
                            &lt;&lt; דלג/י
                        </button>
                    )}
                    <video className="video-intro" autoPlay muted playsInline>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </>
            )}
            {showIntro && (
                <div className="intro-text-slide-in">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/whiteLogo.png`}
                        alt="White Logo"
                        id="logo-white"
                        className="move-to-center"
                    />
                    <h1 id="sub-title">
                        מנהלים ומנהלות<br />מתאמנים ומתאמנות
                    </h1>
                    <p id="introduction-sub">
                        הכירו את הכלי הדיגיטלי שמדייק את תפקידי המכלולים ומשפר תהליכים וממשקים ברשות המקומית בשעת חירום.
                        <br /><br />
                        באמצעותו תשפרו את תהליך הערכת המצב, בדגש על ממשקים בין מכלולים בכלל וביחס למימוש יעדי השירות והמאפשרים הלאומיים.          </p>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/whiteArrow.png`}
                        className="hpArrow-intro"
                        alt="Arrow"
                        onClick={goToHome}
                    />
                </div>
            )}
        </div>
    );
};

export default Intro;
