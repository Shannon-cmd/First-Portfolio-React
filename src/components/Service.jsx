import React, { Fragment } from 'react';
import '../scss/_Service.scss'

const Service = () => {
  return (
    <Fragment>
      <section className="skills container">
        <div className="mb-5 mt-3 d-flex justify-content-center">
          <h2 className="t-about">— What I&nbsp;<span>offer</span>&nbsp;? —</h2>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body car1">
                <div className="col d-flex justify-content-center my-2">
                  <h2><i className="fas fa-paint-brush p-4"></i></h2>
                </div>
                <h5 className="card-title text-center">BRANDING IDENTITY</h5>
                <hr />
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab, quaerat blanditiis modi facilis ducimus? Excepturi nesciunt, quas assumenda facilis porro vitae debitis velit dignissimos perferendis quo obcaecati quam odio.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body bg-pink car2">
                <div className="col d-flex justify-content-center my-2">
                  <h2><i className="far fa-keyboard p-4"></i></h2>
                </div>
                <h5 className="card-title text-center">SOCIAL MEDIA MARKETING</h5>
                <hr />
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid hic corporis, officia, ullam accusamus quis iure voluptatibus dolores accusantium asperiores voluptas deleniti repellat incidunt tempora dignissimos accusantium.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body bg-pink car3">
                <div className="col d-flex justify-content-center my-2">
                  <h2><i className="fas fa-code p-4"></i></h2>
                </div>
                <h5 className="card-title text-center">WEB DEVELOPMENT</h5>
                <hr />
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam explicabo a exercitationem reprehenderit, at illum provident iste optio voluptatem sequi sed dicta sunt laudantium magni ratione est quae qui nisi.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body car4">
                <div className="col d-flex justify-content-center my-2">
                  <h2><i className="fas fa-deaf p-4"></i></h2>
                </div>
                <h5 className="card-title text-center">FRIENDLY SUPPORT</h5>
                <hr />
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aut mollitia repellat fuga architecto veniam reiciendis dolor ratione optio nisi nobis sit excepturi aperiam pariatur, tempora ut asperiores minima suscipit? Tempora.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* <section id="services" className="skills">
      <div className="row">
        
        <div className="col-4 container">
          <h5>BRANDING IDENTITY</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
        </div>
        
        <div className="col-4 container">
        <h5></h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
        </div>
      </div>
      <div className="row">
        
        <div className="col-4 container">
          <h5> AND DEVELOPMENT</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
        </div>
        
        <div className="col-4 container">
        <h5>24 HOUR FRIENDLY SUPPORT</h5>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
        </div>
      </div>
      </section> */}
    </Fragment>
  )
}


export default Service;