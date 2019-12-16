import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native'
import PropTypes from 'prop-types'

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      confirmationCode: '',
      keyItem: '',
      modalVisible: false
    }
  }

  async handleSignUp() {
    const { Auth } = this.props
    const { username, password, email } = this.state
    try {
      await Auth.signUp({ username, password, attributes: { email } })
      this.setModalVisible(true)
    } catch (error) {
      alert(JSON.stringify(error))
      throw error
    }
  }

  async handleConfirmation() {
    const { Auth, navigation } = this.props
    const { email, confirmationCode } = this.state
    try {
      await Auth.confirmSignUp(email, confirmationCode, {
        // Optional: Force user confirmation irrespective of existing alias.
        forceAliasCreation: false
      })
      this.setModalVisible(false)
      navigation.navigate('App')
    } catch (error) {
      alert(JSON.stringify(error))
      throw error
    }
  }

  setModalVisible(isVisible) {
    this.setState({ modalVisible: isVisible })
  }

  setUserName(username) {
    this.setState({ username })
  }

  setEmail(email) {
    this.setState({ email })
  }

  setPassword(password) {
    this.setState({ password })
  }

  setConfirmationCode(confirmationCode) {
    this.setState({ confirmationCode })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Create a new User</Text>
        <View>
          <Text>Username: </Text>
          <TextInput placeholder="Username" onChangeText={this.setUserName.bind(this)} />
        </View>
        <View>
          <Text>Email: </Text>
          <TextInput placeholder="Email" onChangeText={this.setEmail.bind(this)} />
        </View>
        <View>
          <Text>Password: </Text>
          <TextInput placeholder="Password" onChangeText={this.setPassword.bind(this)} />
        </View>
        <Button title="Sign Up!" onPress={this.handleSignUp.bind(this)} />
        <Button title="Confirm User" onPress={() => this.setModalVisible(!this.state.modalVisible)} />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>
          <View style={styles.container}>
            <View>
              <Text>Email: </Text>
              <TextInput placeholder={this.state.email} onChangeText={this.setEmail.bind(this)} />
              <Text>Code: </Text>
              <TextInput placeholder='confirmation code' onChangeText={this.setConfirmationCode.bind(this)} />
              <Button title='Confirm Email' onPress={this.handleConfirmation.bind(this)} />
              <Button title='Close Window' onPress={() => this.setModalVisible(!this.state.modalVisible)} />
            </View>
          </View>
        </Modal>
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

SignUp.propTypes = {
  Auth: PropTypes.object,
  navigation: PropTypes.object
}
