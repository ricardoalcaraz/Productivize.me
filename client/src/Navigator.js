import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import AddHabit from './Habits/AddHabit'
import AuthenticationGateway from './Authentication/AuthenticationGateway'
import Bootstrapper from './Bootstrapper'
import Habits from './Habits/Habits'
import Home from './Home/Home'
import Tasks from './Tasks/Dashboard'

const AppStack = createStackNavigator({ Home, Tasks, Habits, AddHabit })
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
