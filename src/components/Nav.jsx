import React, { Fragment, useState } from 'react';
import '../scss/_Nav.scss';

const Nav = () => {

  return (
    <Fragment>
      <nav>
        <div>
        <h4 className="logo">SKeeny</h4>
        </div>
        <div className="list d-flex justify-content-end">
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