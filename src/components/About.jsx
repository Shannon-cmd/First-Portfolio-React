import React, { Fragment, useState, useEffect } from 'react';
import Me from '../img/design2.jpg';
import '../scss/_About.scss';
import SBtn from './framework/SBtn/SBtn';

const About = () => {

  const [change, setChange] = useState('col-md-6 col-sm-12 col-xs-12 about-me shadow')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 110) {
        setChange('col-md-6 col-sm-12 col-xs-12 about-me shadow animated slideInRight')
      } else {
        setChange('col-md-6 col-sm-12 col-xs-12 about-me shadow')
      }
    })
  })

  return (
    <Fragment> 
      <section id="about" className="container mb-5 mt-3">
        <h2 className="d-flex justify-content-center my-5 t-about">— About&nbsp;<span>Me</span>&nbsp;—</h2>
        <div className="row">

          <div className="col-md-6 col-sm-12 col-xs-12 container d-flex justify-content-center align-items-center">
            <img className="photo-me mt-4 shadow" src={Me} alt="" />
          </div>
          <div className={change}>
            <h6>I'M SHANNON STOLLER, 20 YEARS OLD WEBSITE DEVELOPER</h6>
            <p>Passionate about computers for a long time, I love learning and creating. I take advantage of my training to learn how to develop websites like this one. In the future, I would like to improve my design because it is for a me a way to develop my creativity. I love human contact. That’s why caring and listening are very important to me. Working as a team would be a great opportunity to develop my talents, improve and grow.</p>
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