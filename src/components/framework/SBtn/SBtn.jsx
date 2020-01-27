import React, { useState } from 'react'
import './_SBtn.scss'

const SBtn = (props) => {
  return (
    <a className={'s_btn ' + props.className}>
      <span>{props.children}</span>
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 8.5H15.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.5 1.5L15.5 8.5L8.5 15.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      {/* <i class="fas fa-long-arrow-alt-right"></i> */}
    </a>
  )
}

export default SBtn