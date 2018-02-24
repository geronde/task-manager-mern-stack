import React from 'react'

//connect
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActions from '../../actions/listActions'


//import project components
import Lists from './Lists'
import Loader from '../ui/Loader'             
		          
//import data from store
function mapStateToProps(state) {
  return {
    lists:state.lists.list,
    toggle:state.lists
  }
}

//import actions
function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(listActions, dispatch)
  }
}

/*Create Lists*/
class ListsContainer extends React.Component{      
     
     componentDidMount(){
      this.props.actions.getList(this.props.match.params.projectId)
     
     }

     render() {
      if(!this.props.lists){
      return(
        <Loader/>
        )
    }
    return(
     <Lists {...this.props} /> 
      )
  
}

}

export default connect( mapStateToProps, mapDispatchToProps)(ListsContainer)