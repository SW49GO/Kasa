/* eslint-disable jsx-a11y/img-redundant-alt */

import '../styles/home.css'
import { useLocation } from 'react-router-dom';

function HeaderPicture(){
    const location = useLocation();
    const pathSrc= location.pathname==="/"?'./assets/mer.svg':'./assets/montagne.svg';
    const isAboutPage = location.pathname === '/About';

    return <div className={`homePage_image ${isAboutPage ? 'aboutPage_image' : ''}`}>
    <img className="image" src={pathSrc} alt="Mer ou Montagne" />
    {!isAboutPage && (
      <div className="homePage_title">
        <p>Chez vous,</p>
        <p> partout et ailleurs</p>
      </div>
    )}
  </div>
}

export default HeaderPicture