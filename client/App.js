import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './src/Main'
import Bootstrapper from './src/Bootstraper'
import AuthenticationGateway from './src/Authentication/AuthenticationGateway'

const AppStack = createStackNavigator({ Home: MainScreen, Other: MainScreen })
const AuthStack = createStackNavigator({ Gateway: AuthenticationGateway })

const AppNavigator = createSwitchNavigator(
  {
    Bootstrapper: Bootstrapper,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Bootstrapper'
  }
)

export default createAppContainer(AppNavigator)
