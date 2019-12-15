import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../aws-exports'
Amplify.configure(awsconfig)

export default class AmplifyDemo extends Component {
  async getRefreshTokenThroughCurrentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser({ bypassCache: true })
      alert(JSON.stringify(user.signInUserSession.refreshToken.token))
    } catch (e) {
      alert(JSON.stringify(e))
    }
  }

  async getCurrentAuthenticatedUser() {
    try {
      alert(JSON.stringify(await Auth.currentAuthenticatedUser({ bypassCache: true })))
    } catch (e) {
      alert(JSON.stringify(e))
    }
  }

  async getCurrentSession() {
    try {
      alert(JSON.stringify(await Auth.currentSession()))
    } catch (e) {
      alert(JSON.stringify(e))
    }
  }

  async manuallyRefreshSessionWithTokens() {
    try {
      const session = await Auth.currentSession()
      const user = await Auth.currentAuthenticatedUser()
      user.refreshSession(session.getRefreshToken(), async (err, newSession) => alert(JSON.stringify(newSession)))
    } catch (e) {
      alert(JSON.stringify(e))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='get current refresh token' onPress={async () => this.getRefreshTokenThroughCurrentUser()} />
        <Button title='get current user' onPress={async () => this.getCurrentAuthenticatedUser()} />
        <Button title='get current session' onPress={async () => this.getCurrentSession()} />
        <Button title='refresh user session' onPress={async () => this.manuallyRefreshSessionWithTokens()} />
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
