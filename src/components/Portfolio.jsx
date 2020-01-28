import React, { Fragment } from 'react';
import SBtn from './framework/SBtn/SBtn';
import '../scss/_Portfolio.scss';
import Chef from '../img/chef.png'
import Emporium from '../img/emporium.png'
import Portfolio2 from '../img/portfolio.png'

const Portfolio = () => {
  return (
    <Fragment>
      <div id="portfolio" className="mb-5 mt-3 d-flex justify-content-center">
        <h2 className="t-port">— Featured&nbsp;<span>Work</span>&nbsp;—</h2>
      </div>

      <section className="sectCarou container">
        <div id="carouselExampleIndicators" className="carousel slide w-75 container" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 arroundport" src={Chef} alt="First slide" />
              <div className="d-flex justify-content-center mt-2">
                <SBtn href="https://nostalgic-saha-92ca46.netlify.com/">view my first project</SBtn>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 arroundport" src={Emporium} alt="Second slide" />
              <div className="d-flex justify-content-center mt-2">
                <SBtn href="https://keen-shirley-567523.netlify.com/">view emporium website</SBtn>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 arroundport" src={Portfolio2} alt="Third slide" />
              <div className="d-flex justify-content-center mt-2">
                <SBtn>currently</SBtn>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="main"></section>
    </Fragment>
  )
}

export default Portfolio;