import React from 'react'
import Form from '../ui/Form'

//Create and Edit Form
class ProjectForm extends React.Component{
constructor(props){
		super(props);    
        if(this.props.isEdit){
                  this.state=({title:this.props.title,
                               description:this.props.description,
                               _id:this.props._id
                               
                              })
          }
            else {
              this.state={title:"",description:"", isCreate:true}
            }

      
      
    this.projectChangeHandler=this.projectChangeHandler.bind(this)
    this.submitProjectForm=this.submitProjectForm.bind(this)
    this.cancelForm=this.cancelForm.bind(this)
    }

    projectChangeHandler(event){
      this.setState({[event.target.name]:event.target.value})
    }


    submitProjectForm(e){
      e.preventDefault()
      if(this.state.isCreate){
        this.props.actions.createProject({title:this.state.title,
                                          description:this.state.description})
        this.setState({title:"",description:""})
        this.props.actions.toggleAction(true)
      }
      else if(this.props.isEdit) {
        this.props.actions.editProject(this.state)
        this.props.actions.toggleEditing(true,this.props._id)
 
    }
  }
  cancelForm(e){
    e.preventDefault();
    if(this.state.isCreate) 
    {
      this.props.actions.toggleAction(true)
    }
    else if(this.props.isEdit) 
    {
      this.props.actions.toggleEditing(true,this.props._id)
    }
    }
 
    render(){
      return (
              <Form                   className={this.props.className}

                                      title="title" 
                                      placeholderTitle="Enter Project Name" 
                                      valueTitle={this.state.title}
                                      titleLabel={this.props.titleLabel}
                                      onChangeAction={this.projectChangeHandler}
                                      
                                      description="description" 
                                      placeholderDescription="Enter Project Description" 
                                      valueDescription={this.state.description}
                                      descriptionLabel={this.props.descriptionLabel}
                                      onChangeAction={this.projectChangeHandler}

                                      buttonTitle="Save"
                                      onClickAction={this.submitProjectForm}
                                      cancel={true}
                                      onClickCancel={this.cancelForm}
                                      
                                       />
            
        )
    }
    
}



export default ProjectForm