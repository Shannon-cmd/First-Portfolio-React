import React, { Fragment } from 'react';
import '../scss/_Skills.scss';
import './framework/BarProgress/BarProgress';
import BarProgress from './framework/BarProgress/BarProgress';

const Skills = () => {
  return (
    <Fragment>
      <BarProgress value="progress-value1"></BarProgress>
    </Fragment>
  )
}

export default Skills;