import React, { Fragment } from 'react';
import '../scss/_Skills.scss';
import BarProgress from './framework/BarProgress/BarProgress';
import SBtn from './framework/SBtn/SBtn';

const Skills = () => {
  return (
    <Fragment>
      <section id="skills" className="container mb-5 all">
        <div className="d-flex justify-content-center">
          <h2 className="mb-5 mt-3 t-skill">— Development&nbsp;<span>Skills</span>&nbsp;—</h2>
        </div>
        <div className="row">
          <div className="col container barprog">
            <div>
              <p>HTML, CSS</p>
              <div className="d-flex">
                <BarProgress className="progress-value" />&nbsp;&nbsp;<p>90%</p>
              </div>
            </div>
            <div>
              <p>JAVASCRIPT, REACT</p>
              <div className="d-flex">
                <BarProgress className="progress-value1" />&nbsp;&nbsp;<p>80%</p>
              </div>
            </div>
            <div>
              <p>MICROSOFT OFFICE</p>
              <div className="d-flex">
                <BarProgress className="progress-value2" />&nbsp;&nbsp;<p>80%</p>
              </div>
            </div>
            <div>
              <p>VMWARE</p>
              <div className="d-flex">
                <BarProgress className="progress-value4" />&nbsp;&nbsp;<p>55%</p>
              </div>
            </div>
            <div>
              <p>BASH</p>
              <div className="d-flex">
                <BarProgress className="progress-value3" />&nbsp;&nbsp;<p>60%</p>
              </div>

            </div>

          </div>
          <div className="col container">
            <h2 className="text-center">About My Professional Web Development Skill</h2>
            <div className="container d-flex justify-content-center mt-5 mb-5 about-skill">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis consectetur obcaecati laborum molestiae illum? Cupiditate commodi soluta quaerat neque, error ipsam modi aperiam fuga ullam, ea voluptas eius odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, atque vel cumque molestias eveniet voluptate culpa iusto doloribus. Accusantium impedit voluptates adipisci enim odit dignissimos. Hic sunt sint ducimus quae?</p>
              <div className="bluediv"></div>
            </div>
            <div className="d-flex justify-content-center">
            <SBtn>learn more</SBtn>
            </div>
          </div>
        </div>
      </section>

    </Fragment>
  )
}

export default Skills;