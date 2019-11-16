import { combineReducers } from 'redux'
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './TaskActions'
import Task from '../Task'

// name, date, description, completed
const INITIAL_STATE = {
  tasks: [
    { id: 'uuid', name: 'Brush Teeth', date: '111119', description: '2 minutes pls.', completed: false }
  ]
}

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        tasks: [
          ...state.tasks,
          action.task
        ]
      })
    case DELETE_TASK:
      return Object.assign({}, state, {
        tasks:
          state.tasks.filter(t => t.id !== action.id)
      })
    case UPDATE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.map(task => {
          if (task.id === action.task.id) {
            return new Task(Object.assign({}, task, action.task))
          } else {
            return task
          }
        })
      })

export default combineReducers({
  tasks: tasksReducer
})
