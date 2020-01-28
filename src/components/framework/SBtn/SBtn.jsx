import React from 'react'
import './_SBtn.scss'

const SBtn = (props) => {
  return (
    <a href={props.href} className={'s_btn ' + props.className}>
      <span>{props.children}</span>
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 8.5H15.5"/>
        <path d="M8.5 1.5L15.5 8.5L8.5 15.5"/>
      </svg>
    </a>
  )
}

export default SBtn