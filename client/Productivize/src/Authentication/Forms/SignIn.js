import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import PropTypes from 'prop-types'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  async handleSignIn() {
    const { Auth, navigation } = this.props
    const { username, password } = this.state
    try {
      const user = await Auth.signIn(username, password)
      const session = user.getSignInUserSession()
      console.log(JSON.stringify(session.getAccessToken()))
      navigation.navigate('App')
    } catch (error) {
      alert(JSON.stringify(error))
      throw error
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Please Sign In</Text>
        <View>
          <Text>Username: </Text>
          <TextInput
            placeholder="Username"
            onChangeText={(username) => this.setState({ username: username })}
          />
        </View>
        <View>
          <Text>Password: </Text>
          <TextInput
            placeholder="Password"
            onChangeText={(password) => this.setState({ password: password })}
          />
        </View>
        <Button title="Sign In" onPress={this.handleSignIn.bind(this)} />
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

SignIn.propTypes = {
  Auth: PropTypes.object,
  navigation: PropTypes.object
}
