import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import tasks from '../Tasks/Reducer'
import habits from '../Habits/HabitReducers'
import ApiMiddleware from './Api'
import AuthenticationMiddleware from './Authentication'
import createSagaMiddleware from 'redux-saga'
import saga from '../saga'

const rootReducer = combineReducers({ tasks, habits })
const sagaMiddleware = createSagaMiddleware()
const middlewareApplier = applyMiddleware(AuthenticationMiddleware, ApiMiddleware, sagaMiddleware)
const store = createStore(rootReducer, middlewareApplier)
sagaMiddleware.run(saga)

export default store
