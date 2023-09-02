/* eslint-disable jsx-a11y/img-redundant-alt */

import Styles from '../styles/HeaderPicture.module.css'
import { useLocation } from 'react-router-dom';

function HeaderPicture(){
    const location = useLocation();
    const pathSrc= location.pathname==="/"?'./assets/mer.svg':'./assets/montagne.svg';
    const isAboutPage = location.pathname === '/About';

    return <div className={`${Styles.home_image} ${isAboutPage ? `${Styles.about_image}` : ''}`}>
    <img className={Styles.image} src={pathSrc} alt="Mer ou Montagne" />
    {!isAboutPage && (
      <div className={Styles.title}>
        <p>Chez vous,</p>
        <p> partout et ailleurs</p>
      </div>
    )}
  </div>
}

export default HeaderPicture