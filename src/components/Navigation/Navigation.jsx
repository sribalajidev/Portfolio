import './Navigation.scss';
import siteLogo from '../../assets/images/logo.webp';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function Navigation() {
  const scrollToSection = (id) => {
    setIsNavOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav= () => {
    setIsNavOpen(!isNavOpen);
  }

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  return (
      <>
    <nav className={`main-navigation ${isNavOpen ? 'open' : ''}`}>
      <div className="site-logo">
        <img src={siteLogo} alt="Site Logo" />
      </div>
      <div className={`hamburger ${isNavOpen ? 'is-active' : ''}`} onClick={toggleNav} aria-expanded={isNavOpen}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      </nav>
      <div className={`nav-overlay ${isNavOpen ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="nav-container">
          <div className="navlink-wrapper">
            <div className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection("home")}>Home</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection("about")}>About Me</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection("experience")}>Experience</a>
            </div>
            <div className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection("contact")}>Let's Talk</a>
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
      </>
  );
}

export default Navigation;