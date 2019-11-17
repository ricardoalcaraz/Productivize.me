import { ADD_TASK, DELETE_TASK, UPDATE_TASK, POLLUTE_TASKS, REQUEST_TASKS, RECEIVE_TASKS } from './Actions'

// name, date, description, completed
const INITIAL_STATE = {
  items: {
    '60cc4484-096f-11ea-8d71-362b9e155667': {
      id: '60cc4484-096f-11ea-8d71-362b9e155667',
      name: 'word',
      date: '',
      description: 'one',
      completed: false
    },
    '6ce67bc2-096f-11ea-8d71-362b9e155667': {
      id: '6ce67bc2-096f-11ea-8d71-362b9e155667',
      name: 'test',
      date: '',
      description: 'two',
      completed: false
    },
    '742a9576-096f-11ea-8d71-362b9e155667': {
      id: '742a9576-096f-11ea-8d71-362b9e155667',
      name: 'another',
      date: '',
      sdescription: 'three',
      completed: false
    },
    '7a314c76-096f-11ea-9a9f-362b9e155667': {
      id: '7a314c76-096f-11ea-9a9f-362b9e155667',
      name: 'woop',
      date: '',
      description: 'four',
      completed: false
    }
  },
  filter: 'all',
  lastUpdated: '',
  isUpdating: false,
  needsUpdate: false
}

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {})
    case DELETE_TASK:
      return Object.assign({}, state, {})
    case UPDATE_TASK:
      return Object.assign({}, state, {})
    case POLLUTE_TASKS:
      return Object.assign({}, state, {
        needsUpdate: true
      })
    case REQUEST_TASKS:
      return Object.assign({}, state, {
        isUpdating: true,
        needsUpdate: true
      })
    case RECEIVE_TASKS:
      return Object.assign({}, state, {
        needsUpdate: false,
        isUpdating: false,
        lastUpdated: action.receivedAt,
        items: Object.assign({}, state.items, action.items)
      })
    default:
      return state
  }
}

export default tasksReducer
