import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './Home/Home'
import TasksDashboard from './Tasks/Dashboard'
import Bootstrapper from './Bootstraper'
import AuthenticationGateway from './Authentication/AuthenticationGateway'

const AppStack = createStackNavigator({ Home: Home, Tasks: TasksDashboard })
const AuthStack = createStackNavigator({ Gateway: AuthenticationGateway })

const Navigator = createAppContainer(createSwitchNavigator(
  {
    Bootstrapper: Bootstrapper,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Bootstrapper'
  }
))

export default Navigator
