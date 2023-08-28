import { Link } from "react-router-dom"
import '../../styles/error.css'
function Error(){
    return <div className="error">
                <p className="error_404">404</p>
                <p className="error_Txt">oups! La page que vous demandez n'existe pas.</p>
                <Link className="error_Link" to="/">Retourner sur la page d'accueil</Link>
           </div>
}

export default Error