import { SET_STORE, SAVE_STORE } from './Actions'
import { UPDATE_TOKENS } from '../Utility/Actions'
import {ADD_HABIT, DELETE_HABIT, SET_HABITS, FETCH_HABITS_SUCCESS} from './Actions'
import {
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    TASKS_REQUIRE_UPDATE,
    TASKS_ATTEMPT_REQUEST,
    TASKS_REQUEST_SUCCESS,
    TASKS_REQUEST_FAILURE
  } from './Actions'
  
import { combineReducers } from 'redux'
import { log } from './logger'

//-------------------------------------------------------------------
//-----------------------------STORE---------------------------------
//-------------------------------------------------------------------
const store = (state = {}, action) => {
    switch(action.type) {
        case SET_STORE:
            return action.store
        case SAVE_STORE:
            return state
        default:
            return {}
    }
}


const INITIAL_STATE_TOKENS = {
  access: '',
  id: '',
  refresh: ''
}

const tokens = (state = INITIAL_STATE_TOKENS, action) => {
  switch (action.type) {
    case UPDATE_TOKENS:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}


//-------------------------------------------------------------------
//-----------------------------HABITS--------------------------------
//-------------------------------------------------------------------


const INITIAL_STATE_HABITS = {
    habits: [{
        identifier: 0,
        user_id: 'Ricardo',
        description: 'Brush Teeth',
        created_on: Date.now(),
        start_date: Date.now(),
        end_date: null,
        frequency_description: 'Daily' 
    },
    {
        identifier: 1,
        user_id: 'Ricardo',
        description: 'Program Productivize',
        created_on: Date.now(),
        start_date: Date.now(),
        end_date: null,
        frequency_description: 'Daily' 
    }]
}

const habits = (state = INITIAL_STATE_HABITS, action) => {
    switch(action.type){
        case ADD_HABIT:
            action.habit.identifier = state.habits.length.toString()
            return Object.assign({}, state, {
                habits: [
                    ...state.habits,
                    action.habit
                ]
            })
        case DELETE_HABIT:
            return state
        case SET_HABITS:
            return Object.assign({}, state, {
                habits: action.habits
            })
        default:
            return state
    }
}

//-------------------------------------------------------------------
//-----------------------------TASKS---------------------------------
//-------------------------------------------------------------------

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
        description: 'three',
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

const rootReducer = combineReducers({ store, habits, tasks })

export default rootReducer
