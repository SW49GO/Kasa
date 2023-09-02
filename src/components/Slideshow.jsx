import Styles from '../styles/Slideshow.module.css'
import React, { useState } from 'react';

function Slideshow(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const photo = props.tabPictures;
    const lengthPhoto = photo.length;

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : lengthPhoto - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < lengthPhoto - 1 ? prevIndex + 1 : 0));
    };

    if (lengthPhoto > 1) {
        return (
            <div className={Styles.container}>
                {photo.map((value, index) => {
                    const setClass = index === currentIndex ? `${Styles.show}` :  `${Styles.hidden}`;
                    return (
                        <img className={`${Styles.image} ${Styles.position} ${setClass}`} src={value} alt="photos logement" key={index} />
                    );
                })}
                <div className={Styles.navigation}>
                    <div onClick={handlePrevClick}><img className={Styles.left} src="../assets/left.svg" alt="fleche_gauche"/></div>
                   
                    <div onClick={handleNextClick}><img className={Styles.right} src="../assets/left.svg" alt="fleche_droite"/></div>
                </div>
                <div className={Styles.number}>
                {currentIndex + 1} / {lengthPhoto}
                </div>
            </div>
        );
    } else {
        return  <div className={Styles.container}>
            <img className={`${Styles.image} ${Styles.position} ${Styles.show}`} src={photo} alt="photos logement" key={0} />
        </div>
    }
}

export default Slideshow;
