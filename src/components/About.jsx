import React, { Fragment, useState, useEffect } from 'react';
import Me from '../img/design.jpg';
import '../scss/_About.scss';
import SBtn from './framework/SBtn/SBtn';

const About = () => {

  const [change, setChange] = useState('d-flex justify-content-center my-5 t-about')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
      if (window.scrollY > 110) {
        setChange('d-flex justify-content-center my-5 t-about animated slideInLeft')
      } else {
        setChange('d-flex justify-content-center my-5 t-about')
      }
    })
  })

  return (
    <Fragment>
      <section id="about" className="container mb-5 mt-3">

        <h2 className={change}>— About&nbsp;<span>Myself</span>&nbsp;—</h2>
        <div className="row">

          <div className="col container d-flex justify-content-center align-items-center">
            <img className="photo-me mt-4" src={Me} alt="" />
          </div>
          <div className="about-me col container">
            <h6>I'M SHANNON STOLLER, 20 YEARS OLD DESIGNER AND DEVELOPER</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, fuga, ut soluta iusto cum quibusdam, aut totam corrupti aspernatur doloribus sapiente? Totam assumenda enim aperiam fugit ad nobis veritatis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum error ratione cumque amet? Cupiditate eos accusamus tenetur, harum exercitationem eum veritatis blanditiis expedita mollitia, natus dicta soluta beatae. Dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sed commodi voluptates, odit quia unde ipsam repellat dicta.</p>
            <div className="row about-info mb-4">
              <div className="col">
                <p>Name : Stoller Shannon</p>
                <p>Date of Birth : 8 April 1999</p>
              </div>
              <div className="col">
                <p>Email : seriebbl@gmail.com</p>
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