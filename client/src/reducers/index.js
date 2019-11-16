import { combineReducers } from 'redux'
import habits from './HabitReducers.js'
import tasks from './TaskReducer.js'

export default combineReducers({
  tasks,
  habits
})