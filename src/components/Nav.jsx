import React, { Fragment, useState } from 'react';
import '../scss/_Nav.scss';

const Nav = () => {

  const [colorS, setColorS] = useState('d-flex justify-content-end');

  return (
    <Fragment>
      <nav className={colorS}>
        <div className="list">
          <span>home</span>
          <span>About</span>
          <span>Skills</span>
          <span>Services</span>
          <span>Contact</span>
          <span>Portfolio</span>
        </div>
      </nav>
    </Fragment>
  )
}


export default Nav;