import * as listActions from '../actions/listActions'

function listReducer(state={}, action) {
		
	switch(action.type){
		case listActions.TOGGLE:
		{
			var toggleState=Object.assign({},state)
			toggleState.toggleButton=!toggleState.toggleButton
			return toggleState
		}
		case listActions.TOGGLE_EDIT:
		{
            
			var editedState=Object.assign({},state)
			editedState.editing=!editedState.editing
			editedState.id=action.id
			return {...editedState}
		}
		case listActions.GET_LIST:
		{
			return {...state, list:action.payload.data}
		}
		
		case listActions.CREATE_LIST:
		{
			return {...state, list:action.payload.data}
		}
		case listActions.UPDATE_LIST:
		{
			console.log(action)
			return {...state, list:action.payload.data}
		}
		case listActions.DELETE_LIST:
		{
		    return {...state, list:action.payload.data}

		}
		default:
		{  
			return state;
		}
	}
}

export default listReducer
