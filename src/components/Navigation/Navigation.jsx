import './Navigation.scss';
import siteLogo from '../../assets/images/logo.png';

import { useState} from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav= () => {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <nav className={`main-navigation ${isNavOpen ? 'open' : ''}`}>
      <div className="site-logo">
        <img src={siteLogo} alt="Site Logo" />
      </div>
      <div className={`hamburger ${isNavOpen ? 'is-active' : ''}`} onClick={toggleNav} aria-expanded={isNavOpen}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      <div className='nav-overlay'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="nav-container">
          <div className="navlink-wrapper">
            <div className="nav-item">
              <a className="nav-link">Link 1</a>
            </div>
            <div className="nav-item">
              <a className="nav-link">Link 2</a>
            </div>
            <div className="nav-item">
              <a className="nav-link">Link 3</a>
            </div>
          </div>
          <div className="sociallinks-wrapper">
            <a href="https://github.com/sribalajidev" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub size={30}/> 
            </a>
            <a href="https://www.linkedin.com/in/sribalajis" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedin size={30}/> 
            </a>
          </div>
          <div className="content-wrapper">
            <p className="content">www.sribalajidev.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;