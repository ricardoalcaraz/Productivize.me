import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Switch, Text, Button } from 'react-native'
import SignIn from './Forms/SignIn'
import SignUp from './Forms/SignUp'

import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../aws-exports'
Amplify.configure(awsconfig)

export default class AuthenticationGateway extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signUpVisible: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Click to {this.state.signUpVisible ? 'Sign In!' : 'Sign up!'}</Text>
        <Switch value={this.state.signUpVisible} onValueChange={() => this.setState({ signUpVisible: !this.state.signUpVisible })} />
        {this.state.signUpVisible
          ? <SignUp navigation={this.props.navigation} Auth={Auth} />
          : <SignIn navigation={this.props.navigation} Auth={Auth} />}
        <Button title='skip' onPress={() => this.props.navigation.navigate('App')} />
      </View>
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

AuthenticationGateway.propTypes = {
  navigation: PropTypes.object
}
