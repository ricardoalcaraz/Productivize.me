import React from 'react'
import Navigator from './src/Navigator'
import { Provider } from 'react-redux'
import store from './src/Storage/Storage'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}