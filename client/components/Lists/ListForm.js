import React from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'


class ListForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.isEditList) {
      this.state = ({
        name: this.props.list.name,
        _id: this.props.list._id
      })
    } else {
      this.state = {
        name: "",
        isCreateList: true
      }
    }
   this.submitChanges = this.submitChanges.bind(this)
   this.cancelAction  = this.cancelAction.bind(this)
   this.onChangeAction= this.onChangeAction.bind(this)
  }
  
  onChangeAction(event){
   this.setState({
      [event.target.name]: event.target.value
    })
   }
  submitChanges(e){
   e.preventDefault();
   if(this.props.isCreateList)
   {
      this.props.actions.createList({name:this.state.name},this.props.match.params.projectId)
      this.props.actions.toggleAction(true)
    }
    else if(this.props.isEditList){
      this.props.actions.editList({name:this.state.name},this.props.match.params.projectId,this.state._id)
      this.props.actions.toggleEditing(true,this.state._id)
    }
  }
  cancelAction(e){
   e.preventDefault();
   this.props.actions.toggleAction(true)
  }
   componentDidMount(){
   if(this.props.isEditList)
   {
       this.autoSelect.select();
       this.autoSelect.focus();
     }
  }
  render() {
    if (this.props.isEditList) {
      return (
       <form className="edit-list" onSubmit={this.submitChanges}>
                   <Input type="text" name="name" 
                   value={this.state.name} 
                   inputRef={(input)=>this.autoSelect=input}
                   onBlur={()=>this.props.actions.toggleEditing(true,this.state._id)}
                   onChangeAction={ this.onChangeAction } />                            
                 </form>
      )
    } else if (this.props.isCreateList) {
      return (  
          <form className="create-list">
          <Input type="text" name="name" placeholder="Create A List" value={this.state.name} onChangeAction={ this.onChangeAction } />
          <div className="list-button-group">
            <Button name="Submit" title="save" onClickAction={ this.submitChanges } />
            <Button name="submit" title="X" onClickAction={ this.cancelAction } />
          </div>
        </form>)
    }

  }

}

export default ListForm