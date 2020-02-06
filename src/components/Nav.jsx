import React, { useState, useEffect } from 'react';
import '../scss/_Nav.scss';

const Nav = () => {

  const [change, setChange] = useState('row no-gutters navbar bg-transparent navbar-expand-lg navbar-light text-white py-0');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setChange('row shadow no-gutters navbar navbar-expand-lg position-fixed bg-dark text-white navbar-dark py-0')
      } else {
        setChange('row no-gutters navbar bg-transparent navbar-expand-lg navbar-light py-0')
      }
    });
  });

  return (
      <nav className={change}>
        <h3 className="navbar-brand logo" href="#home">Keeny</h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#home">Home</a>
            <a className="nav-item nav-link" href="#about">About</a>
            <a className="nav-item nav-link" href="#skills">Skills</a>
            <a className="nav-item nav-link" href="#services">Services</a>
            <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
            <a className="nav-item nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </nav>
  )
}


export default Nav;