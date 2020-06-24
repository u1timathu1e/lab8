import React from 'react'

export const InputField = (props) => {
  return (
    <div>
      <input type={props.type} className="field" {...props} />
    </div>
  )
}
