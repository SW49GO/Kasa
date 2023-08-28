/* eslint-disable jsx-a11y/img-redundant-alt */

import '../styles/home.css'
import { useLocation } from 'react-router-dom';

function HeaderPicture(props){
    const homePage= props.home;
    console.log('homePage:', homePage)
    const location = useLocation();
    const pathSrc= location.pathname==="/"?'./assets/mer.svg':'./assets/montagne.svg';

    
    return <div className="homePage_image">
                <img className="image" src={pathSrc} alt="Mer ou Montagne"/>
                {homePage &&(<div className="homePage_title"><p>Chez vous,</p><p> partout et ailleurs</p></div>)}
           </div>
}

export default HeaderPicture