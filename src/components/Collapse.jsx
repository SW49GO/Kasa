import Styles from '../styles/Collapse.module.css'
import useDropdown from '../utils/hooks/useDropdown';
import { useLocation } from 'react-router-dom';

/**
 * Function to display and manage drop-down menus
 * @param {Object} props "title or description from collapse.json"
 * @returns Component function Collapse
 */
function Collapse(props) {

  // Retrieving title and description properties passed as props
  const title = props.title;
  const description = props.description;

  // Using custom hook useDropdown to manage element open/close state -> default Close
  const [isOpen, toggleDropdown] = useDropdown(false);
  // Get current url
  const location = useLocation();
  // Verify if current page is About
  const isAboutPage = location.pathname === '/About';

  return (
    <div className={Styles.container}>
      <div className={`${Styles.menu} ${isAboutPage ? `${Styles.menu_margin}` : ''}`}>
        <p>{title}</p>
        {/*Icon display based on open/close state and onClick handler for state change*/}
        {isOpen ? (
          <i className="fa-solid fa-chevron-up fa-rotate-180" onClick={toggleDropdown}></i>
        ) : (
          <i className="fa-solid fa-chevron-up fa-rotate-360" onClick={toggleDropdown}></i>
        )}
      </div>
      {/*Display the detailed part of the element if isOpen is true*/}
      {isOpen && <div className={`${Styles.detail} ${isAboutPage ? `${Styles.menu_margin}` : ''}`}>{description}</div>}
    </div>
  );
}

export default Collapse