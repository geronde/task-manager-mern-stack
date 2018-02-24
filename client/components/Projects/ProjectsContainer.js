import React from 'react'

//connect
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as projectActions from '../../actions/projectActions'


//import project components
import Projects from './Projects'

import Loader from '../ui/Loader'		          

//import data from store
function mapStateToProps(state) {
  return {
    projects:state.projects.project,
    toggle:state.projects
  }
}

//import actions
function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(projectActions, dispatch)}
}

/*Create project*/
class ProjectsContainer extends React.Component{      
     render() {
      if(!this.props.projects){
      return(
        <Loader/>
        )
    }
    return(
    	<div className="projects-wrapper">
      <Projects {...this.props} />
      </div>
      )
  
}

}

export default connect(
  mapStateToProps,mapDispatchToProps
)(ProjectsContainer)