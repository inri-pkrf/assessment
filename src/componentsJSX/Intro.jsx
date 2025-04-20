import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
import '../componentsCss/Intro.css';

const Intro = () => {
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const [showIntro, setShowIntro] = useState(false);
    const [showSkipButton, setShowSkipButton] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');
    //   const navigate = useNavigate(); 

    useEffect(() => {
        console.log(window.screen.availWidth)
        console.log(window.innerWidth)
        const handleResize = () => {
            if (window.innerWidth >= 769) {
                setVideoSrc(`${process.env.PUBLIC_URL}/assets/videos/introVidComp.mp4`);
            } else {
                setVideoSrc(`${process.env.PUBLIC_URL}/assets/videos/introVid.mp4`);
            }
        };

        // Initial check on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const videoEndTimeout = setTimeout(() => {
            setIsVideoEnded(true);
        }, 13000); // Duration until the video is considered ended

        const introTextTimeout = setTimeout(() => {
            setShowIntro(true);
        }, 13050); // Show intro text shortly after video ends

        const skipButtonTimeout = setTimeout(() => {
            setShowSkipButton(true);
        }, 3500); // Show the skip button after 3.5 seconds

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

    //   const goToHome = () => {
    //     navigate('/home'); // Navigate to /home
    //   };

    return (
        <div id="intro-lomda">
            {!isVideoEnded && (
                <>
                    {showSkipButton && (
                        <button className="skip" onClick={skipVideo}>
                            &lt;&lt; דלג/י
                        </button>
                    )}
                    {videoSrc && (
                        <video className="video-intro" autoPlay muted playsInline>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </>
            )}
            {showIntro && (
                <div className="intro-text-slide-in">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/whiteLogo.png`}
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
                        באמצעותו תשפרו את תהליך הערכת המצב, בדגש על ממשקים בין מכלולים בכלל וביחס למימוש יעדי השירות והמאפשרים הלאומיים.
                    </p>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/whiteArrow.png`}
                        className="hpArrow-intro"
                        alt="Arrow"
                    // onClick={goToHome} 
                    />
                </div>
            )}
        </div>
    );
};

export default Intro;
