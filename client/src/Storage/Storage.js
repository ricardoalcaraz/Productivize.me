import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import tasks from '../Tasks/Reducer'
import ApiMiddleware from './Api'
import AuthenticationMiddleware from './Authentication'
const rootReducer = combineReducers({ tasks: tasks })

const middlewareApplier = applyMiddleware(thunkMiddleware, AuthenticationMiddleware, ApiMiddleware)

const store = createStore(rootReducer, middlewareApplier)

export default store
