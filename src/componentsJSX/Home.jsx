import React from 'react';
import '../componentsCss/Home.css';

function Home() {
    return (

        <div className="home">


            <div className="title">
                עזר דיגיטלי לניהול מצבי חירום ברשות המקומית
            </div>

            <div className='div-list'>
                <div className="photo-list-item" >
                    <div className="photo-list-content">
                        <div className="photo-list-title-homepage">מבנה הרשות המקומית בחירום</div>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/mivne.png'} className="photo-list-image-homepage" alt="Diagram" />
                    </div>
                </div>
                <div id='line1' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>

                <div className="photo-list-item" >
                    <div className="photo-list-content">
                        <div className="photo-list-title-homepage"> הערכת מצב ברשות המקומית בחירום </div>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/diagramIcon.png'} className="photo-list-image-homepage" alt="Gallery" />
                    </div>
                </div>
                <div id='line2' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>

                <div className="photo-list-item" >
                    <div className="photo-list-content">
                        <div className="photo-list-title-homepage">ממשקי עבודה בין מכלולים</div>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/mimshak.png'} className="photo-list-image-homepage" alt="Relations" />
                    </div>
                </div>
                <div id='line3' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>

                <div className="photo-list-item" >
                    <div className="photo-list-content">
                        <div className="photo-list-title-homepage">  יעדים לאומיים </div>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/icon-des.png'} id='icon-des' className="photo-list-image-homepage" alt="Relations" />
                    </div>
                </div>
                <div id='line4' className='dot-line'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </div>
                <div className="photo-list-item" >
                    <div className="photo-list-content">
                        <div className="photo-list-title-homepage"> תרחיש ייחוס מישקי </div>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logos-home/ogenIcon.png'} className="photo-list-image-homepage" alt="Ogen" />
                    </div>
                </div>
            </div>


            <div className='mashov-home'>
                <div className='mashovText'>
                    <br /> יש הערות על הממשק? יש מחמאות? מלאו את השאלון וצרו איתנו קשר
                    <br /> <a id='linkHome' href="https://docs.google.com/forms/d/e/1FAIpQLScvCPjvm6G7IIXdtoeNmcF2COJ3D7xkTfP4n0xaS0T-nRpkPA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                        בקישור הבא
                    </a>
                </div>
            </div>

        </div>



    );
}

export default Home;