import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SignInScreen from './screens/HomeScreen.js'
import MainScreen from './screens/Main.js'
import AuthLoadingScreen from './screens/AuthLoadingScreen.js'

const AppStack = createStackNavigator({ Home: MainScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)

export default createAppContainer(AppNavigator)
