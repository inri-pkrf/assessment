import React, { useEffect } from 'react';
import '../MainTopicsCss/RelationsResult.css';
import RelationsData from '../Data/RelationsData.jsx'; // ✅ ייבוא הנתונים

function RelationsResult({ selectedItemStep1, selectedItemsStep2, setSelectedItemsStep2, setTitle, navigateToStep1 }) {
    
    // שליפת הנתונים המתאימים מהמכלול הנבחר
    const selectedData = RelationsData[selectedItemStep1] || [];
    const currentIndex = selectedData.findIndex(item => item.name === selectedItemsStep2);
    const itemData = selectedData[currentIndex];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // מעבר לאלמנט הבא ברשימה
    const handleNext = () => {
        if (selectedData.length > 0) {
            const nextIndex = (currentIndex + 1) % selectedData.length;
            const nextItem = selectedData[nextIndex].name;
            setSelectedItemsStep2(nextItem);
            setTitle(`ממשק בין ${selectedItemStep1} ו${nextItem}`);
            window.scrollTo(0, 0);
        }
    };

    // מעבר לאלמנט הקודם ברשימה
    const handlePrev = () => {
        if (selectedData.length > 0) {
            const prevIndex = (currentIndex - 1 + selectedData.length) % selectedData.length;
            const prevItem = selectedData[prevIndex].name;
            setSelectedItemsStep2(prevItem);
            setTitle(`ממשק בין ${selectedItemStep1} ו${prevItem}`);
            window.scrollTo(0, 0);
        }
    };

    // פתיחת קובץ PDF להדפסה
    const handlePrintRelationsClick = () => {
        window.open(`${process.env.PUBLIC_URL}/assets/pdf/ממשקים בין מכלולים.pdf`, '_blank');
    };

    return (
        <div className="Interfaces">
            <div className='sub-Interfaces'>הממשקים בין המכלולים</div>

            <div className='Interfaces-content'>
                <div className='title-Interfaces' id='title1-Interfaces'>מקבל מהמכלול</div>
                <div className='text-Interfaces' id='text1-Interfaces'>
                    {itemData ? itemData.connections[1] : 'לא נמצא מידע'}
                </div>

                <div className='title-Interfaces' id='title2-Interfaces' 
                    style={{ backgroundColor: selectedItemStep1 === 'יקל"ר' ? '#f90' : '#1cb4e3' }}>
                    נותן למכלול
                </div>
                <div className='text-Interfaces' id='text2-Interfaces'>
                    {itemData ? itemData.connections[0] : 'לא נמצא מידע'}
                </div>
            </div>

            <div className='btn-div'>
                <div className='btn-Interfaces' id='prev-btn-Interfaces' onClick={handlePrev}>לממשק הקודם</div>
                <div className='btn-Interfaces' id='next-btn-Interfaces' onClick={handleNext}>לממשק הבא</div>
            </div>

            <div className='Interfaces-back'>
                <div id='stpe1btn-Interfaces' onClick={navigateToStep1}>
                    חזרה לבחירת מכלול ראשון
                </div>
            </div>

            <div id='btn-print-relations2' onClick={handlePrintRelationsClick}>
                <div className='relationsPrintDiv'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/print.png'} className="print-img-gallery" alt="print" />
                    <p className='text-print'>הורדת גרסה להדפסה</p>
                </div>
            </div>

        </div>
    );
}

export default RelationsResult;
