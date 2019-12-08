import React from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import PropTypes from 'prop-types'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../aws-exports'
import { setStore } from './Utility/Actions'
import { connect } from 'react-redux'
import { retrieveStore } from './Utility/Storage'
import { log } from './Utility/logger'
Amplify.configure(awsconfig)

class Bootstrapper extends React.Component {
  componentDidMount() {
    this._bootstrap()
    this._loadStore()
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

  async _loadStore() {
    log("Attempting to load store")
    const store = await retrieveStore()
    if(store) this.props.setStore(store)
    log(`Received the following ${store}`)
  }

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

export default connect(null, { setStore })(Bootstrapper)