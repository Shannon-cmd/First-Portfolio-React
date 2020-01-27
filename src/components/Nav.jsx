import React, { Fragment, useState } from 'react';
import '../scss/_Nav.scss';

const Nav = () => {

  return (
    <Fragment>
      <nav className="row">
        <div className="col-1">
        <h4 className="logo px-4">SKeeny</h4>
        </div>
        <div className="list d-flex justify-content-end col">
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