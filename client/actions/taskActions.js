//import project API data
import {Task} from '../../server/api/taskApi'

//project actions types
export const GET_TASK    = "GET_TASK"
export const CREATE_TASK = "CREATE_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const ERROR       = "Error"
export const SWAP_TASK   = "SWAP_TASK"
export const SHIFT_TASK  = "SHIFT_TASK"
export const UPDATE_ON_MOVE_TASK = 'UPDATE_ON_MOVE_TASK'

//toggling forms
export const TOGGLE = 'TOGGLE'
export const TOGGLE_EDIT_TASK='TOGGLE_EDIT_TASK'
export const TOGGLE_DRAGGING ="TOGGLE_DRAGGING"


//Actions 
export function toggleAction(toggleButton){
	return {
		type:TOGGLE,
		toggleButton
	}
}

export function toggleEditingTask(isEditing,id){
	return {
		type:TOGGLE_EDIT_TASK,
		isEditing,
		id
	}
}

function getTaskAction(response){
	return{
		type:GET_TASK,
		payload:response
	}
}

function createTaskAction(response){
	return {
		type:CREATE_TASK,
		payload:response
	}
}

function editTaskAction(response){
	return {
		type:UPDATE_TASK,
		payload:response

	}
}

function deleteTaskAction(response){
return {
	type:DELETE_TASK,
	payload:response
}
}

function getError(err){
	return{
		type:ERROR,
		payload:err
	}
}


function updateAfterMoveTaskAction(response){
	return {
		type:UPDATE_ON_MOVE_TASK,
		payload:response
		
	}
}

//Action creators middlewares

export function getTask(projectId){
return (dispatch, getState) => {
      return Task.getTask(projectId)
                        .then((response)=> {dispatch(getTaskAction(response))})
                        .catch((error)=>dispatch(getError(error)))
}
}



export function createTask(task,projectId,listId){
return (disp, getState) => {
      return Task.createTask(task,projectId,listId)
                        .then(response=> {disp(createTaskAction(response))})
                        .catch((error)=>disp(getError(error)))
}
}


export function editTask(updatedVal,projectId,listId,taskId){
	return (disp, getState) => {
		Task.editTask(updatedVal,projectId,listId,taskId)
		              .then(response=>disp(editTaskAction(response)))
		              .catch((error)=>disp(getError(error)))
	}
}

export function deleteTask(projectId,listId,taskId){
	return(disp,getState) => {
		Task.deleteTask(projectId,listId,taskId)
		       .then(response=>disp(deleteTaskAction(response)))
		       .catch((error)=>disp(getError(error)))
	}
}
export function swapTask(src,target){
	return dispatch=> {
	         dispatch({type:SWAP_TASK,src,target})
	}
}


export function shiftTask(src, target){
	return dispatch => {
		dispatch({ type: SHIFT_TASK,
                   targetListIndex: target.index,
                   srcListIndex: src.index,
                   srcTaskIndex: src.taskIndex,
                   });
	}
}

export function updateAfterMoveTask(data,projectId){
	return dispatch => {
		      Task.swapOrShift(data,projectId)
	          .then(response=>dispatch(updateAfterMoveTaskAction(response)))
	          .catch(error=>dispatch(getError(error)))
	}
}