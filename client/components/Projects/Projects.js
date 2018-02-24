import React from 'react'

//import ui elements
import Button from '../ui/Button'
import ProjectForm from './ProjectForm'

//import project components
import Project from './Project'

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }

    this.showCreateProjectForm = this.showCreateProjectForm.bind(this)
  }

  showCreateProjectForm() {
     this.props.actions.toggleAction(this.state.showForm)
  }


  render() {
    return (
      <div className="projects">
        <div className="create-button-container">
        <Button className="create-project-button" name="create project" 
         title="Create"
        onClickAction={ this.showCreateProjectForm } />
        </div>
         <div className="create-form-container">
         {this.props.toggle.toggleButton &&   <ProjectForm className="create-form" {...this.props}/> }
         </div>         
        <div className="project-list">
        <h3>Projects</h3>
        { this.props.projects.map((el, key) => <Project key={ key } {...this.props} project={ el } />) }
        </div>
      </div>
    )
  }
}

export default Projects