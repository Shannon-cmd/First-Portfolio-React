import React, { Fragment, useState } from 'react';
import '../scss/_Footer.scss';
import NuageImg from '../img/vent.webp'

const Footer = () => {

  const [fb, setFb] = useState('fab fa-facebook-f px-2');
  const [google, setGoogle] = useState('fab fa-google-plus-g px-2');
  const [linkedin, setLinkedin] = useState('fab fa-linkedin-in px-2');
  const [insta, setInsta] = useState('fab fa-instagram px-2');
  const [count, setCount] = useState(0);

  const handleRoll = () => {
    if (count === 0){
      setFb('fab fa-facebook-f px-2 animated rollOut');
      setCount(count + 1);
    } else if (count === 1) {
      setGoogle('fab fa-google-plus-g px-2 animated rollOut');
      setCount(count + 1);
    } else if (count === 2) {
      setLinkedin('fab fa-linkedin-in px-2 animated rollOut');
      setCount(count + 1);
    } else if (count === 3) {
      setInsta('fab fa-instagram px-2 animated rollOut');
      setCount(4);
    } else if (count === 4) {
      setFb('fab fa-facebook-f px-2 animated bounceInDown');
      setGoogle('fab fa-google-plus-g px-2 animated bounceInDown');
      setLinkedin('fab fa-linkedin-in px-2 animated bounceInDown');
      setInsta('fab fa-instagram px-2 animated bounceInDown');
      setCount(0)
    }
  }

  return (
    <Fragment>
      <section id="footer" className="footer w-100 mt-5 d-flex justify-content-center">

        <div className="social pb-5">

        <h5 className="text-center"><img onClick={handleRoll} className='imgNuage' src={NuageImg} alt=""/><i className={fb}></i> <i className={google}></i> <i className={linkedin}></i> <i className={insta}></i></h5>

        <span className="d-flex justify-content-center pt-2">Social Media</span>

        </div>
        <div>
         
        </div>
      </section>
      <section className="footer2 py-3 d-flex justify-content-center">
        <span>©Copyright 2020 Keeny | All RightReserved.</span>
      </section>
    </Fragment>
  )
}

export default Footer;