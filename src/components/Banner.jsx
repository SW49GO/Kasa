import {Link, useLocation } from 'react-router-dom'
import {useState, useEffect } from 'react';
import Styles from '../styles/Banner.module.css'

/**
 * Function to display banner with logo and navigation menu
 * @returns Component function Banner
 */
function Banner(){
 
    // Get current location of page
    const location = useLocation();
    // Using a local state to track the active link
    const [activeLink, setActiveLink] = useState('/');

    // Handling with useEffect to update active link when location changes
    // Every time the URL changes, the useEffect updates activeLink to reflect the current URL
    useEffect(() => {
      setActiveLink(location.pathname);
    }, [location.pathname]);

    return (<nav className={Styles.container}>
                <div className={Styles.picture}>
                    <img src="../assets/logo.svg" alt="Logo Kasa"/>
                </div>
                <div className={Styles.navigation}>
                   {/*Show navigation links with CSS class "underline" if the link matches the active location*/}
                    <Link className={`${Styles.links} ${activeLink === '/' ? Styles.underline : ''}`} to="/">Accueil</Link>
                    <Link className={`${Styles.links} ${activeLink === '/About' ? Styles.underline : ''}`} to="/About">A propos</Link>
                </div>
           </nav>)
}

export default Banner