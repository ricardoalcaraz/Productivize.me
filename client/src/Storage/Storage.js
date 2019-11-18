import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import tasks from '../Tasks/Reducer'
import ApiMiddleware from './Api'

const rootReducer = combineReducers({ tasks: tasks })

const middlewareApplier = applyMiddleware(thunkMiddleware, ApiMiddleware)

const store = createStore(rootReducer, middlewareApplier)

export default store
