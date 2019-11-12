import { combineReducers } from 'redux'
import { some, find, reject, matcher } from 'underscore'
// name, date, description, completed
const INITIAL_STATE = {
  storage: [{ name: 'Brush Teeth', date: '111119', description: '2 minutes pls.', completed: false }]
}

const findTask = (storage, name) => find(storage, matcher({ name }))
const taskExists = (storage, task) => some(findTask(storage, task.name))
const filterTasks = (storage, name) => reject(storage, matcher({ name }))

function addTask(state, action) {
  const { storage } = state
  const task = action.payload
  if (!taskExists(storage, task)) {
    const newStorage = storage.slice(0)
    newStorage.push(task)
    return { storage: newStorage }
  }
  return state
}

function deleteTask(state, action) {
  const { storage } = state
  const taskName = action.payload
  if (taskExists(storage, { name: taskName })) {
    const newStorage = filterTasks(storage, taskName)
    return { storage: newStorage }
  }
  return state
}

function updateTask(state, action) {
  const { storage } = state
  const task = action.payload
  if (taskExists(storage, { name: task.name })) {
    const newStorage = filterTasks(storage, task.name)
    newStorage.push(task)
    return { storage: newStorage }
  }
  return state
}

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return addTask(state, action)
    case 'DELETE_TASK':
      return deleteTask(state, action)
    case 'UPDATE_TASK':
      return updateTask(state, action)
    default:
      return state
  }
}

export default combineReducers({
  tasks: tasksReducer
})
