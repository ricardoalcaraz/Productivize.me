import React from 'react'
import Navigator from './src/Navigator'
import { Provider } from 'react-redux'
<<<<<<< HEAD
import { createStore } from 'redux'
import reducers from './src/reducers/index'

const store = createStore(reducers)
=======
import store from './src/Storage/Storage'

>>>>>>> tasks
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
