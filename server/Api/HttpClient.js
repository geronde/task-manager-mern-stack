import axios from 'axios'
//import { loadProgressBar } from 'axios-progress-bar'

//READ

const get = (url)=> {
	//loadProgressBar();
	return axios.get(url)
}

//CREATE

const post = (url, data, config={}) => {
	return axios.post(url, data, config)
}

//UPDATE
/*async function put(url,data,config={}){
	return await axios.put(url,data,config)
}*/

const put = (url,data,config={}) => {
	return  axios.put(url,data,config)
}

const remove = (url,config={}) => {
	return axios.delete(url,config)
}

const HttpClient = {post, get, put, remove}

export {HttpClient}