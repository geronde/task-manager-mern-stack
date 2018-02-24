//import project API data
import {Project} from '../../server/api/ProjectApi'

//project actions types
export const GET_PROJECT    = "GET_PROJECT"
export const CREATE_PROJECT = "CREATE_PROJECT"
export const UPDATE_PROJECT = "UPDATE_PROJECT"
export const DELETE_PROJECT = "DELETE_PROJECT"
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

function getProjectAction(response){
	return{
		type:GET_PROJECT,
		payload:response
	}
}

function createProjectAction(response){
	return {
		type:CREATE_PROJECT,
		payload:response
	}
}

function editProjectAction(response){
	return {
		type:UPDATE_PROJECT,
		payload:response
	}
}

function deleteProjectAction(response){
return {
	type:DELETE_PROJECT,
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

export function getProject(){
return (dispatch, getState) => {
      return Project.readProject()
                        .then((response)=> {dispatch(getProjectAction(response))})
                        .catch((error)=>dispatch(getError(error)))
}
}


export function createProject(p){
return (disp, getState) => {
      return Project.createProject(p)
                        .then(response=> {disp(createProjectAction(response))})
                        .catch((error)=>disp(getError(error)))
}
}

export function editProject(updatedVal){
	return (disptsh, getState) => {
		Project.editProject(updatedVal)
		              .then(response=>disptsh(editProjectAction(response)))
		              .catch((error)=>disptsh(getError(error)))
	}
}

export function deleteProject(id){
	return(disp,getState) => {
		Project.deleteProject(id)
		       .then(response=>disp(deleteProjectAction(response)))
		       .catch((error)=>disp(getError(error)))
	}
}
