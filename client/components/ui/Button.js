import React from 'react'

const Button = (props) => (
  <button name={props.name} onClick={props.onClickAction} className={props.className} 
     style={props.style}>
  {props.title}
  </button>

)

export default Button