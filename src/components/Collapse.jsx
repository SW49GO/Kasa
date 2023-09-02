import Styles from '../styles/Collapse.module.css'
import useDropdown from '../utils/hooks/useDropdown';
import { useLocation } from 'react-router-dom';

function Collapse(props) {
  const title = props.title;
  const description = props.description;
  const [isOpen, toggleDropdown] = useDropdown(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/About';

  return (
    <div className={Styles.container}>
      <div className={`${Styles.menu} ${isAboutPage ? `${Styles.menu_margin}` : ''}`}>
        <p>{title}</p>
        {isOpen ? (
          <i className="fa-solid fa-chevron-up fa-rotate-180" onClick={toggleDropdown}></i>
        ) : (
          <i className="fa-solid fa-chevron-up fa-rotate-360" onClick={toggleDropdown}></i>
        )}
      </div>
      {isOpen && <div className={`${Styles.detail} ${isAboutPage ? `${Styles.menu_margin}` : ''}`}>{description}</div>}
    </div>
  );
}


export default Collapse