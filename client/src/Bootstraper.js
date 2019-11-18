import React from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import PropTypes from 'prop-types'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../aws-exports'
Amplify.configure(awsconfig)

export default class Bootstraper extends React.Component {
  componentDidMount() {
    this._bootstrap()
  }

  async _bootstrap() {
    const { navigation } = this.props
    setTimeout(async () => {
      // check if we have a valid refresh token and sign the user in
      try {
        const user = await Auth.currentAuthenticatedUser({
          bypassCache: true // If set to true, this call will send a request to Cognito to get the latest user data
        })
        console.log(`A user was found in the cache, continuing as: ${user.getUsername()}.`)
        navigation.navigate('App')
      } catch (e) {
        console.log(JSON.stringify(e))
        navigation.navigate('Auth')
      }
    }, 3000)
  };

  render() {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

Bootstraper.propTypes = {
  navigation: PropTypes.object
}
