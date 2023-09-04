import Styles from '../styles/Footer.module.css'

/**
 * Function to display the footer
 * @returns Component function Footer
 */
function Footer(){

    return <footer className={Styles.container}>
                <div className={Styles.image}>
                    <img className={Styles.logo} src="../assets/logoFooter.svg" alt="Logo Kasa"/>
                </div>
                <p>&copy; 2020 Kasa. All rights reserved</p>
            </footer>
}

export default Footer