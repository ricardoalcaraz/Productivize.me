import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './Main'
import TasksDashboard from './Tasks/TasksDashboard'
import Bootstrapper from './Bootstraper'
import AuthenticationGateway from './Authentication/AuthenticationGateway'

const AppStack = createStackNavigator({ Home: Main, Tasks: TasksDashboard })
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
