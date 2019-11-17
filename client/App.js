import React from 'react'
import Navigator from './src/Navigator'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import tasksReducer from './src/Tasks/Store/Reducer'

const store = createStore(combineReducers({
  tasks: tasksReducer
}))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
