//import modules
import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

//import reducers
import rootReducer from './reducers/index'

//define middleware
const loggerMiddleware = createLogger()
const middleWare= applyMiddleware(thunkMiddleware,loggerMiddleware);

//create store
function configureStore(preloadedState){ 
	return createStore(rootReducer,preloadedState,
 compose(middleWare, typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension() : (f) => f
))}

const store=configureStore()
//const preloadedState=store.dispatch(projectActions.getProject())


export default store