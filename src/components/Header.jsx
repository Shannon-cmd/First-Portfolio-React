import React, { Fragment } from 'react';
import '../scss/_Header.scss';
import Nav from './Nav';

const Header = () => {

  return (
    <Fragment>
      <section id="home" className="background">
        <Nav />
      </section>
    </Fragment>
  )
}

export default Header