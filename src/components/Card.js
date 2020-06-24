import React from 'react'
import './components.css'

export const Card = (props) => {
  return (
    <div style={props.style} className='card'>
      {props.children}
    </div>
  )
}
