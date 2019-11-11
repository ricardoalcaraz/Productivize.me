import { combineReducers } from 'redux'

// name, date, description, completed
const INITIAL_STATE = {
  storage: [{ name: 'Brush Teeth', date: '111119', description: '2 minutes pls.', completed: false }]
}

function appendTask(state, task) {
  const { storage } = state
  const newStorage = storage.slice(0)
  newStorage.push(task)
  return { storage: newStorage }
}
const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return appendTask(state, action.payload)
    default:
      return state
  }
}

export default combineReducers({
  tasks: tasksReducer
})
