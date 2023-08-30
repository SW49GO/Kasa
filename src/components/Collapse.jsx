import '../styles/about.css'
import useDropdown from '../utils/hooks/useDropdown';
import { useLocation } from 'react-router-dom';

function Collapse(props) {
  const title = props.title;
  const description = props.description;
  const [isOpen, toggleDropdown] = useDropdown(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/About';

  return (
    <div className="dropdown">
      <div className={`dropdown_menu ${isAboutPage ? 'dropdown_margin' : ''}`}>
        <p>{title}</p>
        {isOpen ? (
          <i className="fa-solid fa-chevron-up fa-rotate-180" onClick={toggleDropdown}></i>
        ) : (
          <i className="fa-solid fa-chevron-up fa-rotate-360" onClick={toggleDropdown}></i>
        )}
      </div>
      {isOpen && <div className={`dropdown_detail ${isAboutPage ? 'dropdown_margin' : ''}`}>{description}</div>}
    </div>
  );
}


export default Collapse