import React, { Fragment } from 'react';
import Background from '../img/bg2.jpg'

const Header = () => {

  return (
    <Fragment>
      <section>
        <img className="background" src={Background} alt="..." />
        <div className="d-flex justify-content-center">
        <p class="line-1 anim-typewriter">I'm Shannon Stoller</p>
        </div>
      </section>
    </Fragment>
  )
}

export default Header