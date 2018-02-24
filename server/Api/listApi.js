import {HttpClient} from './HttpClient'

const URI='http://localhost:3000/api/project'

//Read

const getList=(project_id)=>{
return HttpClient.get(`${URI}/${project_id}/list`)
}

//Create
const createList = (data, projectId) => {
	return HttpClient.post(`${URI}/${projectId}/list/new`,data)
}

const editList = (data,projectId,listId) =>{
	return HttpClient.put(`${URI}/${projectId}/list/${listId}`,data)
}

const deleteList = (projectId,listId) => {
	return HttpClient.remove(`${URI}/${projectId}/list/${listId}`)
}

const List={getList,createList,editList,deleteList}

export {List}