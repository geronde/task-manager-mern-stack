import {HttpClient} from './HttpClient'

const URI='http://localhost:3000/api/project'

//Read

const getTask=(projectId)=>{
return HttpClient.get(`${URI}/${projectId}/list/task`)
}

//Create
const createTask = (data, projectId, listId) => {
	return HttpClient.post(`${URI}/${projectId}/list/${listId}/task/new`,data)
}

const editTask = (data,projectId,listId,taskId) =>{
	return HttpClient.put(`${URI}/${projectId}/list/${listId}/task/${taskId}`,data)
}

const deleteTask = (projectId,listId,taskId) => {
	return HttpClient.remove(`${URI}/${projectId}/list/${listId}/task/${taskId}`)
}
const swapOrShift=(data,projectId) => {
	return HttpClient.put(`${URI}/${projectId}/list/task/move`,data)
}
const Task={getTask,createTask,editTask,deleteTask,swapOrShift}

export {Task}