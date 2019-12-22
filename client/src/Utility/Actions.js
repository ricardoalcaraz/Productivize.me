import { CALL_API } from '../Storage/Api'

//-------------------------------------------------------------------
//------------------------NAVIGATION---------------------------------
//-------------------------------------------------------------------
export const MAIN_PAGE = 'MAIN'
export const TASK_PAGE = 'TASK'
export const HABIT_PAGE = 'HABIT'
export const LOGIN_PAGE = 'LOGIN'

export function navigateToMain(){
    return {
        type: MAIN_PAGE
    }
}

//-------------------------------------------------------------------
//-----------------------------STORE---------------------------------
//-------------------------------------------------------------------
export const SET_STORE = 'SET_STORE'
export const SAVE_STORE = 'SAVE_STORE'

export function setStore(store){
    return {
        type: SET_STORE,
        store
    }
}

export function saveStore(store){
    return {
        type: SAVE_STORE,
        store
    }
}

//-------------------------------------------------------------------
//------------------------Authentication-----------------------------
//-------------------------------------------------------------------
export const UPDATE_TOKENS = 'UPDATE_TOKENS'

function updateTokens(securityTokens) {
  return {
    type: UPDATE_TOKENS,
    payload: securityTokens
  }
}

function shouldUpdateTokens(state) {
  return true
}

export function updateTokensIfNeeded(securityTokens) {
  return (dispatch, getState) => {
    if (shouldUpdateTokens(getState())) {
      return dispatch(updateTokens(securityTokens))
    } else {
      return Promise.resolve()
    }
  }
}

//-------------------------------------------------------------------
//------------------------------HABITS-------------------------------
//-------------------------------------------------------------------

export const ADD_HABIT = 'ADD_HABIT'
export const DELETE_HABIT = 'DELETE_HABIT'
export const SET_HABITS = 'SET_HABITS'
export const FETCH_HABITS_REQUESTED = 'FETCH_HABITS_REQUESTED'
export const FETCH_HABITS_SUCCESS = 'FETCH_HABITS_SUCCESS'
export const FETCH_HABITS_FAILURE = 'FETCH_HABITS_FAILURE'

export function addHabit(habit) {
    return {
        type: ADD_HABIT,
        habit
    }
}

export function deleteHabit(id) {
    return {
        type: DELETE_HABIT,
        id
    }
}

export function setHabits(habits) {
    return {
        type: SET_HABITS,
        habits
    }
}
  
export function requestHabits() {
    return {
        type: ALL_HABITS_REQUESTED
    }
}


//-------------------------------------------------------------------
//------------------------------TASKS-------------------------------
//-------------------------------------------------------------------

export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE__TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

export function addTask(task) {
  return {
    type: ADD_TASK,
    task
  }
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id
  }
}

export function updateTask(task) {
  return {
    type: UPDATE_TASK,
    task
  }
}

export const TASKS_ATTEMPT_PING = 'TASKS_PING_MAKE'
export const TASKS_PING_SUCCESS = 'TASKS_PING_SUCC'
export const TASKS_PING_FAILURE = 'TASKS_PING_FAIL'

export function pingTasksDatabase() {
  return {
    [CALL_API]: {
      types: [TASKS_ATTEMPT_PING, TASKS_PING_SUCCESS, TASKS_PING_FAILURE],
      endpoint: 'tasks/ping/hello_world',
      method: 'GET'
    }
  }
}

export const TASKS_REQUIRE_UPDATE = 'TASKS_REQ_DRTY'

export function requestTasksUpdate() {
  return {
    type: TASKS_REQUIRE_UPDATE
  }
}

export const TASKS_ATTEMPT_REQUEST = 'TASKS_REQ_MAKE'
export const TASKS_REQUEST_SUCCESS = 'TASKS_REQ_SUCC'
export const TASKS_REQUEST_FAILURE = 'TASKS_REQ_FAIL'

function fetchTasks() {
  return {
    [CALL_API]: {
      types: [TASKS_ATTEMPT_REQUEST, TASKS_REQUEST_SUCCESS, TASKS_REQUEST_FAILURE],
      method: 'GET',
      endpoint: 'tasks/'
    }
  }
}

function shouldFetchTasks(state) {
  if (state.isFetching) {
    // return false
  } else {
    // return state.needsUpdate
  }
  return true
}

// wrap actions
export function fetchTasksIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchTasks(getState())) {
      return dispatch(fetchTasks())
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

export const TASK_ATTEMPT_CREATE = 'TASK_CREATE_MAKE'
export const TASK_CREATE_SUCCESS = 'TASK_CREATE_SUCC'
export const TASK_CREATE_FAILURE = 'task_CREATE_FAIL'

export function createTask(task) {
  return {
    [CALL_API]: {
      types: [TASK_ATTEMPT_CREATE, TASK_CREATE_SUCCESS, TASK_CREATE_FAILURE],
      method: 'POST',
      endpoint: 'tasks/new',
      body: task
    }
  }
}

export const TASK_ATTEMPT_UPDATE = 'TASK_UPDATE_MAKE'
export const TASK_UPDATE_SUCCESS = 'TASK_UPDATE_SUCC'
export const TASK_UPDATE_FAILURE = 'TASK_UPDATE_FAIL'

export const TASK_ATTEMPT_DELETE = 'TASK_ATTEMPT_DELETE'
export const TASK_DELETE_SUCCESS = 'TASK_DELETE_SUCCESS'
export const TASK_DELETE_FAILURE = 'TASK_DELETE_FAILURE'
