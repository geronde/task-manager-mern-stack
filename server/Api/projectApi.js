import {HttpClient} from './HttpClient'

const URI='http://localhost:3000/api/project'
const URI_Create=`${URI}/new`
const URI_Update=`${URI}/:id`

//Read

const readProject=()=>{
return HttpClient.get(URI)

}

//Create
const createProject = data => {
	return HttpClient.post(URI_Create,data)
}

const editProject = (data) =>{
	return HttpClient.put(URI_Update,data)
}

const deleteProject = (id) => {
	return HttpClient.remove(`${URI}/${id}`)
}

const Project={readProject,createProject,editProject,deleteProject}

export {Project}