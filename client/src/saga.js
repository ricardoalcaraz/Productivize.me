import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { retrieveStore, saveStore } from './Utility/Storage'
import { ADD_HABIT, SET_HABITS } from './Habits/Store/HabitActions'
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './Tasks/Actions'
import { MAIN_PAGE } from './Utility/Actions'
import { log, logException } from './Utility/logger'

const syncStates = [ADD_HABIT, SET_HABITS, ADD_TASK, DELETE_TASK, UPDATE_TASK]

//NOTE: React Dev tools debugger doesn't seem to stop on breakpoints here

//--------------------------------------------------------------------------------
//---------------------------Synchronization--------------------------------------
//--------------------------------------------------------------------------------
function* synchronizeData(action){
    try{
        log(`Synchronizing from action ${action.type}`)
        const state = yield select()
        yield saveStore(state)
    } catch(e){
        logException(e)
    }
}

export function* synchronizationSaga(){
    yield takeEvery(syncStates, synchronizeData)
}

//--------------------------------------------------------------------------------
//---------------------------Login------------------------------------------------
//--------------------------------------------------------------------------------
export function* loginSaga() {
    yield takeEvery(MAIN_PAGE, entry)
}

function* entry(action){
    try {
        yield call (log, "User skipping Authentication")
        const store = yield call(retrieveStore)
        yield putResolve({type: SET_STORE, store: store})
    }
    catch(e){
        logException(e)
    }
}