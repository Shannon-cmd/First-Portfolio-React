import React, { Fragment } from 'react';
import Me from '../img/pdp.jpg';
import '../scss/_About.scss';
import SBtn from './framework/SBtn/SBtn';

const About = () => {
  return (
    <Fragment>
      <section className="aboutsect">

        <h2 className="d-flex justify-content-center my-5 t-about">— About&nbsp;<span>Myself</span>&nbsp;—</h2>
        <div className="row">

          <div className="col d-flex justify-content-center align-items-center">
            <img className="photo-me mt-4" src={Me} alt="" />

          </div>

          <div className="about-me col container">
            <h6>I'M 20 YEARS OLD DESIGNER AND FOCUSED ON BRAND IDENTITY!</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, fuga, ut soluta iusto cum quibusdam, aut totam corrupti aspernatur doloribus sapiente? Totam assumenda enim aperiam fugit ad nobis veritatis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum error ratione cumque amet? Cupiditate eos accusamus tenetur, harum exercitationem eum veritatis blanditiis expedita mollitia, natus dicta soluta beatae. Dignissimos?</p>
            <div className="row about-info">
              <div className="col">
                <p>Name : Stoller Shannon</p>
                <p>Date of Birth : 8 April 1999</p>
              </div>
              <div className="col">
                <p>Email : stoshannon@gmail.com</p>
                <p>Phone : +32 486 34 56</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <SBtn className="my-3">download cv</SBtn>
            </div>
          </div>
        </div>
      </section>


    </Fragment>
  )
}

export default About;