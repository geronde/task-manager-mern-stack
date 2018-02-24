import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projectReducer from './projects'
import listReducer from './lists'
import taskReducer from './tasks'

const rootReducer=combineReducers({ projects:projectReducer,
	                                lists:listReducer,
	                                tasks:taskReducer,
	                                routing: routerReducer})

export default rootReducer