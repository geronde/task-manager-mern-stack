import React from 'react'

import Input from './Input'
import Button from './Button'


const FormList = (props) => (
	  <form className={props.className}>
        <Input type="text" 
               name={props.title} 
               placeholder={props.placeholder}
               value={props.valueTitle}
               onChangeAction={props.onChangeAction}  />
               <div className="list-button-group">
               <Button name="Submit" title={props.buttonTitle} 
               onClickAction={props.onClickAction} />
               <Button name="submit" title="X" onClickAction={props.cancelAction}/>
               </div>
      </form>
      )
      
export default FormList