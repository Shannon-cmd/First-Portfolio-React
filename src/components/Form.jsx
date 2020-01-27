import React, { Fragment } from 'react';
import '../scss/_Form.scss';

const Form = () => {
  return (
    <Fragment>
      <section className="form container">
      <h2 className="d-flex justify-content-center py-5">— Contact —</h2>
      <div className="row container mt-2">
        <div className="col d-flex justify-content-center">
          <input type="text" placeholder="Name"/>
        </div>
        <div className="col d-flex justify-content-center">
          <input type="text" placeholder="Email"/>
        </div>
      </div>
      <div className="container">
        <input className="w-100" type="text"/>
      </div>

      </section>
    </Fragment>
  )
}

export default Form;