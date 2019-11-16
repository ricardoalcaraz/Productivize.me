import React from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import PropTypes from 'prop-types'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../aws-exports'
Amplify.configure(awsconfig)

export default class Bootstrapper extends React.Component {
  componentDidMount() {
    this._bootstrap()
  }

  async _bootstrap() {
    const { navigation } = this.props
    setTimeout(async () => {
      // check if we have a valid refresh token and sign the user in
      try {
        await Auth.Auth.currentAuthenticatedUser({
          bypassCache: true // If set to true, this call will send a request to Cognito to get the latest user data
        })
        navigation.navigate('App')
      } catch (e) {
        console.log(e)
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

Bootstrapper.propTypes = {
  navigation: PropTypes.object
}
