import * as projectActions from '../actions/projectActions'

function projectReducer(state={}, action) {
		
	switch(action.type){
		case projectActions.TOGGLE:
		{
			var toggleState=Object.assign({},state)
			toggleState.toggleButton=!toggleState.toggleButton
			return toggleState
		}
		case projectActions.TOGGLE_EDIT:
		{
			var editedState=Object.assign({},state)
			editedState.editing=!editedState.editing
			editedState.id=action.id	
			return {...editedState}	
		}
		case projectActions.GET_PROJECT:
		{
			return {...state, project:action.payload.data}
		}
		case projectActions.CREATE_PROJECT:
		{
			return {...state, project:state.project.concat(action.payload.data)}
		}
		case projectActions.UPDATE_PROJECT:
		{
			return {...state, project:state.project.map(item=> 
				(item._id===action.payload.data._id) ? action.payload.data:item )
		        }
		}
		case projectActions.DELETE_PROJECT:
		{
			return {...state, 
		    project:state.project.filter(element=>element._id!==action.payload.data._id)}
		}
		
		default:
		{
			return state;
		}
	}
}

export default projectReducer