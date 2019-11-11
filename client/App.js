import React from 'react'
import Navigator from './src/Navigator'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import taskReducer from './src/Tasks/Store/TaskReducer'

const store = createStore(taskReducer)
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
