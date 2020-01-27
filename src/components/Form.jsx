import React, { Fragment } from 'react';
import '../scss/_Form.scss';
import './framework/SBtn/SBtn';
import SBtn from './framework/SBtn/SBtn';

const Form = () => {
  return (
    <Fragment>
      <section className="form container">
        <h2 className="py-5">— Contact —</h2>
        <div className="arround">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control shadow" placeholder="Name" />
            </div>
            <div className="form-group col-md-6">
              <input type="email" className="form-control shadow" placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control shadow" id="inputAddress" placeholder="Subject" />
          </div>
          <div className="form-group">
          <textarea className="rounded pl-2 pt-2 shadow" placeholder="Message" rows="4"></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <SBtn>submit now</SBtn>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Form;