import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './Main'
import Habits from './Habits/Habits'
import Bootstrapper from './Bootstrapper'
import Bootstrapper from './Bootstraper'
import AuthenticationGateway from './Authentication/AuthenticationGateway'
import AddHabit from './Habits/AddHabit'

const AppStack = createStackNavigator({ Home: Main, Tasks: TasksDashboard, Habits: Habits, AddHabit })
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
