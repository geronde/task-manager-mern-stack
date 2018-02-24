import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../ui/Button'
import ProjectForm from './ProjectForm'



class Project extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                setEditMode: false,
                editing:false
            }
            this.showEditButton = this.showEditButton.bind(this)
            this.deleteItem = this.deleteItem.bind(this)
        }

        showEditButton(e) 
        {
            e.preventDefault()
            this.setState({setEditMode:true})
            this.props.actions.toggleEditing(false,this.props.project._id)
            
        }
        deleteItem(e){
          e.preventDefault();
          this.props.actions.deleteProject(this.props.project._id)  
        }

  render() {
  const {project} = this.props
  
   if(this.props.toggle.editing && (project._id===this.props.toggle.id) )
   {
      return (
        <ProjectForm 
        title={ project.title } 
        description={ project.description } 
        isEdit={ true }
        _id={project._id}
        className="edit-form"
        titleLabel="Title"
        descriptionLabel="Description" 
        {...this.props}/> 
        )     
    }
 return (
      <div className="project-pod">
        <div className="project-info">
          <Link to={`/p/${project._id}/${project.title}`}>
          <h4>{ project.title }</h4>
          </Link>
          <small>
            { (project.description.trim()==="") ? "No Description":project.description }
          </small>
          </div>
          <div className="project-options">
          <div className="edit-project-wrapper">
          <Button className="edit-project" name="editProject" onClickAction={ this.showEditButton }/>
          </div>
          <div className="remove-project-wrapper">
          <Button name="removeProject" className="remove-project" onClickAction={this.deleteItem} />
          </div>
          </div>
      </div>
    )
  }
}
export default Project