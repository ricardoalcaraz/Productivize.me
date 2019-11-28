import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import tasks from '../Tasks/Reducer'
import habits from '../Habits/HabitReducers'
import ApiMiddleware from './Api'
import AuthenticationMiddleware from './Authentication'

const rootReducer = combineReducers({ tasks, habits })
const middlewareApplier = applyMiddleware(thunkMiddleware, AuthenticationMiddleware, ApiMiddleware)
const store = createStore(rootReducer, middlewareApplier)

export default store
