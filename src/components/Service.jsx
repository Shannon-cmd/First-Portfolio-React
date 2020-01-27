import React, { Fragment } from 'react';
import '../scss/_Service.scss'

const Service = () => {
  return (
    <Fragment>
      <section className="skills">
      <h2 className="d-flex justify-content-center my-5 t-about">— Development&nbsp;<span>Skills</span>&nbsp;—</h2>
      <div className="row">
        <div className="col d-flex justify-content-center mt-2">
        <h2><i className="fas fa-building"></i></h2>
        </div>
        <div className="col-4">
          <h5>BRANDING IDENTITY</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
        </div>
        <div className="col d-flex justify-content-center mt-2">
        <h2><i class="far fa-keyboard"></i></h2>
        </div>
        <div className="col-4">
        <h5>BRANDING IDENTITY</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
        </div>
      </div>
      </section>
    </Fragment>
  )
}


export default Service;