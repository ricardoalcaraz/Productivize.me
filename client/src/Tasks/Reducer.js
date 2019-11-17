import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './Actions'

// name, date, description, completed
const INITIAL_STATE = {
  storage:
    [
      { id: 1, name: 'word', date: '', description: 'one', completed: false },
      { id: 2, name: 'test', date: '', description: 'two', completed: false },
      { id: 3, name: 'another', date: '', description: 'three', completed: false },
      { id: 4, name: 'woop', date: '', description: 'four', completed: false }
    ],
  filter: 'all'
}

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        storage: [
          ...state.tasks,
          action.task
        ]
      })
    case DELETE_TASK:
      return Object.assign({}, state, {
        storage:
          state.tasks.filter(t => t.id !== action.id)
      })
    case UPDATE_TASK:
      return Object.assign({}, state, {
        storage: state.storage.map(task => {
          if (task.id === action.task.id) {
            return Object.assign({}, task, action.task)
          } else {
            return task
          }
        })
      })
    default:
      return state
  }
}

export default tasksReducer
