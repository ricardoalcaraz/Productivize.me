import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TASKS_REQUIRE_UPDATE,
  TASKS_ATTEMPT_REQUEST,
  TASKS_REQUEST_SUCCESS,
  TASKS_REQUEST_FAILURE
} from './Actions'

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
  isFetching: false,
  needsUpdate: false,
  response: 'none'
}

const arrayToObject = (arr) =>
  arr.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {})

const tasks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, {
        // idk if this works lol.
        items: Object.assign({}, state.items, { [action.task.id]: action.task })
      })
    case DELETE_TASK:
      // eslint-disable-next-line no-case-declarations
      const { [action.id]: _, ...otherTasks } = state.items
      return Object.assign({},
        state, {
          items: arrayToObject(otherTasks)
        })
    case UPDATE_TASK:
      return Object.assign({}, state, {})

    // API-SHENANIGANS
    case TASKS_REQUIRE_UPDATE:
      return Object.assign({}, state, {
        needsUpdate: true,
        response: 'none'
      })
    case TASKS_ATTEMPT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case TASKS_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        response: JSON.stringify(action.response)
      })
    case TASKS_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: true,
        error: action.error
      })
    default:
      return state
  }
}

export default tasks
