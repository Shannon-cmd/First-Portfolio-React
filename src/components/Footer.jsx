import React, { Fragment } from 'react';
import '../scss/_Footer.scss';

const Footer = () => {

  return (
    <Fragment>
      <section id="footer" className="footer w-100 mt-5 d-flex justify-content-center">
        <div className="social pb-5">
        <h5><i className="fab fa-facebook-f px-2"></i> <i className="fab fa-google-plus-g px-2"></i> <i className="fab fa-linkedin-in px-2"></i> <i className="fab fa-instagram px-2"></i></h5>
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