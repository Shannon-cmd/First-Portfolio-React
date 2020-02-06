import React from 'react';
import '../scss/_Header.scss';
import Nav from './Nav';

const Header = () => {

  return (
      <section id="home" className="background shadow">
        <Nav />
      </section>
  )
}

export default Header