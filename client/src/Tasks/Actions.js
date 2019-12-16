import { CALL_API } from '../Storage/Api'

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
