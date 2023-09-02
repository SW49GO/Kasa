import { Link } from 'react-router-dom'
import Styles from '../styles/Banner.module.css'

function Banner(){
    return (<nav className={Styles.container}>
                <div className={Styles.picture}>
                    <img src="../assets/logo.svg" alt="Logo Kasa"/>
                </div>
                <div className={Styles.navigation}>
                    <Link className={Styles.links} to="/">Accueil</Link>
                    <Link className={Styles.links} to="/About" >A propos</Link>
                </div>
           </nav>)
}

export default Banner