import { Link } from 'react-router-dom';
import logo from '../../../assets/logo_wealth_health.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import './Header.css';


function Header() {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="logo" />
      <nav className='main-nav'>
        <Link to='/'>
          <FontAwesomeIcon className='header-icon' icon={faUserPlus} />
        </Link>
        
        <Link to='/employees'>
          <FontAwesomeIcon className='header-icon' icon={faThList} />
        </Link>
      </nav>
    </header>
    );
}

export default Header;
