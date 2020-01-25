import React, { Fragment } from 'react';

const Nav = () => {
  return (
    <Fragment>
      <nav className="d-flex justify-content-end">
        <div className="list">
          <span>Menu</span>
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