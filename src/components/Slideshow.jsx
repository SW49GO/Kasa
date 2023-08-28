import '../styles/appartment.css'
import React, { useState } from 'react';

function Slideshow(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const photo = props.tabPictures;
    const lengthPhoto = photo.length;
    console.log('lengthPhoto:', lengthPhoto)

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : lengthPhoto - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < lengthPhoto - 1 ? prevIndex + 1 : 0));
    };

    if (lengthPhoto > 1) {
        return (
            <div className='logement_caroussel'>
                {photo.map((value, index) => {
                    const setClass = index === currentIndex ? "show" : "hidden";
                    return (
                        <img className={`image position ${setClass}`} src={value} alt="photos logement" key={index} />
                    );
                })}
                <div className='logement_caroussel_nav'>
                    <div onClick={handlePrevClick}><img className="left" src="../assets/left.svg" alt="fleche_gauche"/></div>
                   
                    <div onClick={handleNextClick}><img className="right" src="../assets/left.svg" alt="fleche_droite"/></div>
                </div>
                <div className='logement_caroussel_index'>
                {currentIndex + 1} / {lengthPhoto}
                </div>
            </div>
        );
    } else {
        return  <div className='logement_caroussel'>
            <img className={`image position show`} src={photo} alt="photos logement" key={0} />
        </div>
    }
}

export default Slideshow;
