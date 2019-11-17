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

export const POLLUTE_TASKS = 'POLLUTE_TASKS'
export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_TASKS = 'RECEIVE_TASKS'

export function polluteTasks() {
  return {
    type: POLLUTE_TASKS
  }
}
export function requestTasks() {
  return {
    type: REQUEST_TASKS
  }
}

export function receivedTasks(json) {
  return {
    type: RECEIVE_TASKS,
    items: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
