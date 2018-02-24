import React from 'react'

import Input from './Input'
import Button from './Button'


const Form = (props) => (
	  <form className={props.className}>
        <Input type="text" 
               name={props.title}
               label={props.titleLabel} 
               placeholder={props.placeholderTitle}
               value={props.valueTitle}
               onChangeAction={props.onChangeAction}  />
         <Input type="text" 
               name={props.description}
               label={props.descriptionLabel} 
               value={props.valueDescription}
               placeholder={props.placeholderDescription}
               onChangeAction={props.onChangeAction}/>
               <div>
               <Button name="Submit" title={props.buttonTitle} 
               onClickAction={props.onClickAction} />
               {props.cancel ? 
               <Button name="Submit" title="Cancel" 
                                       onClickAction={props.onClickCancel} />:null}
               </div>
      </form>
      )
      
export default Form