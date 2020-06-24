import React from 'react'
import './components.css'

export const ErrorAlert = ({errorMessage}) => {
  return (
    <div className='error'>
      {errorMessage}
    </div>
  )
}
