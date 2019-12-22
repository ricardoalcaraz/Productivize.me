import { createStore, applyMiddleware } from 'redux'
import ApiMiddleware from './Api'
import AuthenticationMiddleware from './Authentication'
import createSagaMiddleware from 'redux-saga'
import { synchronizationSaga, loginSaga }  from '../sagas'
import rootReducer from '../Utility/Reducers'

const sagaMiddleware = createSagaMiddleware()
const middlewareApplier = applyMiddleware(AuthenticationMiddleware, ApiMiddleware, sagaMiddleware)
const store = createStore(rootReducer, middlewareApplier)
sagaMiddleware.run(synchronizationSaga)
sagaMiddleware.run(loginSaga)

export default store
