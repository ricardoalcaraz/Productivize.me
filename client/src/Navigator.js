import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './Main'
import Tasks from './Tasks/Tasks'
import Habits from './Habits/Habits'
import Bootstrapper from './Bootstrapper'
import AuthenticationGateway from './Authentication/AuthenticationGateway'

const AppStack = createStackNavigator({ Home: Main, Tasks: Tasks, Habits: Habits })
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
