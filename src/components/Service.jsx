import React, { useEffect, useState } from 'react';
import '../scss/_Service.scss'

const Service = () => {

  const [change, setChange] = useState('card shadow')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1600) {
        setChange('card shadow animated fadeInUp')
      } else {
        setChange('card shadow')
      }
    })
  })

  return (
      <section id="services" className="skills container">
        <div className="mb-5 mt-3 d-flex justify-content-center">
          <h2 id="offer" className="t-about">— What I&nbsp;<span>offer</span>&nbsp;? —</h2>
        </div>
        <div className="row">
          <div className="col">
            <div className={change}>
              <div className="card-body bg-pink car1 rounded">
                <div className="col d-flex justify-content-center my-2">
                  <h2><i className="fas fa-paint-brush p-4"></i></h2>
                </div>
                <h5 className="card-title text-center">CREATIVE DESIGN</h5>
                <hr />
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab, quaerat blanditiis modi facilis ducimus? Excepturi nesciunt, quas assumenda facilis porro vitae debitis velit dignissimos perferendis quo.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={change}>
              <div className="card-body bg-pink car1 rounded">
                <div className="col d-flex justify-content-center my-2">
                  <h2><i className="far fa-keyboard p-4"></i></h2>
                </div>
                <h5 className="card-title text-center">SOCIAL MEDIA</h5>
                <hr />
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid hic corporis, officia, ullam accusamus quis iure voluptatibus dolores accusantium asperiores voluptas deleniti repellat incidunt tempora dignissimos.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={change}>
              <div className="card-body bg-pink car1 rounded">
                <div className="col d-flex justify-content-center my-2">
                  <h2><i className="fas fa-code p-4"></i></h2>
                </div>
                <h5 className="card-title text-center">WEB DEVELOPMENT</h5>
                <hr />
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam explicabo a exercitationem reprehenderit, at illum provident iste optio voluptatem sequi sed dicta sunt laudantium magni ratione est quae.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={change}>
              <div className="card-body bg-pink car1 rounded">
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
  )
}


export default Service;