import React from 'react'

const Input = (props) => (
  <div className="input-group">
  <label>{props.label}</label>
  <input type={props.type} 
         name={props.name}
         ref={props.inputRef} 
         value={props.value}
         onChange={props.onChangeAction}
         onBlur={props.onBlur}
         placeholder={props.placeholder}/>
   </div>
)

export default Input