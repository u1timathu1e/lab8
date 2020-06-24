import React from 'react'
import './components.css'

export const Button = (props) => {
  return (
    <button {...props} className='button'>
      {props.text}
    </button>
  )
}
