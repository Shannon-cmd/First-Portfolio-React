import React, { Fragment, useState, useEffect } from 'react';
import '../scss/_Skills.scss';
import BarProgress from './framework/BarProgress/BarProgress';
import SBtn from './framework/SBtn/SBtn';

const Skills = () => {

  const [text, setText] = useState('container d-flex justify-content-center mt-5 mb-5 about-skill');
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        setText('container d-flex justify-content-center mt-5 mb-5 about-skill animated fadeInRight')
        setValue('progress-value')
        setValue1('progress-value1')
        setValue2('progress-value2')
        setValue3('progress-value3')
        setValue4('progress-value4')
      } else {
        setText('container d-flex justify-content-center mt-5 mb-5 about-skill')
        setValue('')
        setValue1('')
        setValue2('')
        setValue3('')
        setValue4('')
      }
    })
  })

  return (
    <Fragment>
      <section id="skills" className="container mb-5 all">
        <div className="d-flex justify-content-center">
          <h2 className="mb-5 mt-3 t-skill">— My&nbsp;<span>Skills</span>&nbsp;—</h2>
        </div>
        <div className="row">
          <div className="col container barprog shadow mb-3">
            <div>
              <p>HTML, CSS</p>
              <div className="d-flex">
                <BarProgress className={value} />&nbsp;&nbsp;<p>90%</p>
              </div>
            </div>
            <div>
              <p>JAVASCRIPT, REACT</p>
              <div className="d-flex">
                <BarProgress className={value1} />&nbsp;&nbsp;<p>80%</p>
              </div>
            </div>
            <div>
              <p>MICROSOFT OFFICE</p>
              <div className="d-flex">
                <BarProgress className={value2} />&nbsp;&nbsp;<p>80%</p>
              </div>
            </div>
            <div>
              <p>VMWARE</p>
              <div className="d-flex">
                <BarProgress className={value4} />&nbsp;&nbsp;<p>55%</p>
              </div>
            </div>
            <div>
              <p>BASH</p>
              <div className="d-flex">
                <BarProgress className={value3} />&nbsp;&nbsp;<p>60%</p>
              </div>

            </div>

          </div>
          <div className="col container">
            <h2 className="text-center">About My Professional Web Development Skill</h2>
            <div className={text}>
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