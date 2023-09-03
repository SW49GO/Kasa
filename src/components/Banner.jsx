import {Link, useLocation } from 'react-router-dom'
import {  useRef,useEffect } from 'react';
import Styles from '../styles/Banner.module.css'

function Banner(){
    const homeLinkRef = useRef(null);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
          homeLinkRef.current.focus();
        }
      }, [location.pathname]);
    return (<nav className={Styles.container}>
                <div className={Styles.picture}>
                    <img src="../assets/logo.svg" alt="Logo Kasa"/>
                </div>
                <div className={Styles.navigation}>
                    <Link className={Styles.links} to="/" ref={homeLinkRef}>Accueil</Link>
                    <Link className={Styles.links} to="/About" >A propos</Link>
                </div>
           </nav>)
}

export default Banner