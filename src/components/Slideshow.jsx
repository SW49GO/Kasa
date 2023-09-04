import Styles from '../styles/Slideshow.module.css'
import React, { useState } from 'react';

/**
 * Function to display and manage the carousel
 * @param {Object} props list of "pictures" from data.json
 * @returns Component function Slideshow
 */
function Slideshow(props) {
    // Using the useState hook to manage the current state index of the picture of the slideshow
    const [currentIndex, setCurrentIndex] = useState(0);
    // Image array storage
    const photo = props.tabPictures;
    const lengthPhoto = photo.length;

    // Function to handle the click on the back button
    const handlePrevClick = () => {
        // Using the update state function to decrement the current index
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : lengthPhoto - 1));
    };

    // Function to manage the click on the next button
    const handleNextClick = () => {
        // Using the update state function to increment the current index
        setCurrentIndex((prevIndex) => (prevIndex < lengthPhoto - 1 ? prevIndex + 1 : 0));
    };

    if (lengthPhoto > 1) {
        return (
            <div className={Styles.container}>
                {/*Mapping through the array of images to display them based on the current index*/}
                {photo.map((value, index) => {
                    // Condition to determine if this image should be shown or hidden
                    const setClass = index === currentIndex ? `${Styles.show}` :  `${Styles.hidden}`;
                    return (
                        <img className={`${Styles.image} ${Styles.position} ${setClass}`} src={value} alt="photos logement" key={index} />
                    );
                })}
                <div className={Styles.navigation}>
                     {/*Added previous and next navigation buttons*/}
                    <div onClick={handlePrevClick}><img className={Styles.left} src="../assets/left.svg" alt="fleche_gauche"/></div>
                    <div onClick={handleNextClick}><img className={Styles.right} src="../assets/left.svg" alt="fleche_droite"/></div>
                </div>
                <div className={Styles.number}>
                {/*Displaying the current frame number in relation to the total number of frames*/}
                {currentIndex + 1} / {lengthPhoto}
                </div>
            </div>
        );
    } else {
        // If only one image is present, return only this image
        return  <div className={Styles.container}>
            <img className={`${Styles.image} ${Styles.position} ${Styles.show}`} src={photo} alt="photos logement" key={0} />
        </div>
    }
}

export default Slideshow;
