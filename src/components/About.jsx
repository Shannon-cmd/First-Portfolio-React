import React, {Fragment} from 'react';
import Me from '../img/pdp.jpg';


const About = () => {
  return (
    <Fragment>
      <section>
        <h2 className="d-flex justify-content-center my-5 t-about">About <span>Me</span></h2>
        <div className="row">
     
          <div className="col d-flex justify-content-center mx-5">
            <img className="photo-me" src={Me} alt=""/>
          </div>
       
          <div className="about-me col container no-gutters">
            <h6>I'M 20 YEARS OLD DESIGNER AND FOCUSED ON BRAND IDENTITY!</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, fuga, ut soluta iusto cum quibusdam, aut totam corrupti aspernatur doloribus sapiente? Totam assumenda enim aperiam fugit ad nobis veritatis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum error ratione cumque amet? Cupiditate eos accusamus tenetur, harum exercitationem eum veritatis blanditiis expedita mollitia, natus dicta soluta beatae. Dignissimos?</p>
          </div> 
        </div>
      </section>
    </Fragment>
  )
}

export default About;