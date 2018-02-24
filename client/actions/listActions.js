//import project API data
import {List} from '../../server/api/listApi'

//project actions types
export const GET_LIST    = "GET_LIST"
export const CREATE_LIST = "CREATE_LIST"
export const UPDATE_LIST = "UPDATE_LIST"
export const DELETE_LIST = "DELETE_LIST"
export const ERROR          = "Error"


//toggling forms
export const TOGGLE = 'TOGGLE'
export const TOGGLE_EDIT='TOGGLE_EDIT'
export const CANCEL_EDIT='CANCEL_EDIT'
export const CLOSE_AFTER_CREATE='CLOSE_AFTER_CREATE'
export const CANCEL_CREATE='CANCEL_CREATE'

//Actions 
export function toggleAction(toggleButton){
	return {
		type:TOGGLE,
		toggleButton
	}
}

export function toggleEditing(isEditing,id){
	return {
		type:TOGGLE_EDIT,
		isEditing,
		id
	}
}

function getListAction(response){
	return{
		type:GET_LIST,
		payload:response
	}
}

function createListAction(response){
	return {
		type:CREATE_LIST,
		payload:response
	}
}

function editListAction(response){
	return {
		type:UPDATE_LIST,
		payload:response

	}
}

function deleteListAction(response){
return {
	type:DELETE_LIST,
	payload:response
}
}

function getError(err){
	return{
		type:ERROR,
		payload:err
	}
}

//Action creators middlewares

export function getList(projectId){
return (dispatch, getState) => {
      return List.getList(projectId)
                        .then((response)=> {dispatch(getListAction(response))})
                        .catch((error)=>dispatch(getError(error)))
}
}


export function createList(list,projectId){
return (disp, getState) => {
      return List.createList(list,projectId)
                        .then(response=> {disp(createListAction(response))})
                        .catch((error)=>disp(getError(error)))
}
}

export function editList(updatedVal,projectId,listId){
	return (disp, getState) => {
		List.editList(updatedVal,projectId,listId)
		              .then(response=>disp(editListAction(response)))
		              .catch((error)=>disp(getError(error)))
	}
}

export function deleteList(projectId, listId){
	return(disp,getState) => {
		List.deleteList(projectId, listId)
		       .then(response=>disp(deleteListAction(response)))
		       .catch((error)=>disp(getError(error)))
	}
}
