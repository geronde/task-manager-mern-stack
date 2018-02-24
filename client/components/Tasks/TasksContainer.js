import React from 'react'

//connect
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskActions from '../../actions/taskActions'

import Tasks from './Tasks'

//import data from store
function mapStateToProps(state) {
  return {
    tasks:state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(taskActions, dispatch)}
}


class TasksContainer extends React.Component {

     componentDidMount(){
     this.props.actions.getTask(this.props.match.params.projectId)
     }
     
render(){
	if(!this.props.tasks.task){
		return (
			<div></div>
			)
	}
	return (
			<Tasks  {...this.props}/>
		   )
}
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(TasksContainer)