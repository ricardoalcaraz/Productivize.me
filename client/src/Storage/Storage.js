import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import tasks from '../Tasks/Reducer'
import habits from '../Habits/HabitReducers'
import utils from '../Utility/Reducers'
import ApiMiddleware from './Api'
import AuthenticationMiddleware from './Authentication'
import createSagaMiddleware from 'redux-saga'
import { synchronizationSaga, loginSaga }  from '../saga'

const rootReducer = combineReducers({ tasks, habits, utils})
const sagaMiddleware = createSagaMiddleware()
const middlewareApplier = applyMiddleware(AuthenticationMiddleware, ApiMiddleware, sagaMiddleware)
const store = createStore(rootReducer, middlewareApplier)
sagaMiddleware.run(synchronizationSaga)
sagaMiddleware.run(loginSaga)

export default store
