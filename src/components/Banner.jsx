import { NavLink } from 'react-router-dom'
import '../styles/banner.css'


function Banner(){
    return (<nav className='header'>
                <div className="header_logo">
                    <img src="../assets/logo.svg" alt="Logo Kasa"/>
                </div>
                <div className="header_nav">
                    <NavLink className="header_link" to="/">Accueil</NavLink>
                    <NavLink className="header_link" to="/About">A propos</NavLink>
                </div>
           </nav>)
}

export default Banner