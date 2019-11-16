import React from 'react'
import Navigator from './src/Navigator'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers/index'

const store = createStore(reducers)
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
