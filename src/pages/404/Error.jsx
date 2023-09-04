import { Link } from "react-router-dom"
import Styles from '../../styles/Error.module.css'

/**
 * Function to display Error page
 * @returns Component function Error
 */
function Error(){
    return <div className={Styles.container}>
                <p className={Styles.logo}>404</p>
                <p className={Styles.title}>oups! La page que vous demandez n'existe pas.</p>
                <Link className={Styles.link} to="/">Retourner sur la page d'accueil</Link>
           </div>
}

export default Error