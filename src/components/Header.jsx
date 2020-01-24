import React, { Fragment } from 'react';
import Background from '../img/head.jpg'

const Header = () => {

  return (
    <Fragment>
      <section ClassName="header">
        <img className="background" src={Background} alt="..." />
        <p class="line-1 anim-typewriter">I'm Shannon</p>
      </section>
    </Fragment>
  )
}

export default Header