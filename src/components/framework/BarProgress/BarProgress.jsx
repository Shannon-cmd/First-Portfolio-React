import React, { Fragment } from 'react';
import '../BarProgress/_BarProgress.scss';

const BarProgress = (props) => {
  return (
    <Fragment>
      <div className="progress">
        <div className={props.className}></div>
      </div>
    </Fragment>
  )
}



export default BarProgress;