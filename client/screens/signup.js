import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default class Signup extends Component {
  render() {
      return (
      <View style={styles.container}>
        <Text>Please Sign In</Text>
        <View style={userInput.container}>
          <Text>Username: </Text>
          <TextInput
          placeholder="Username"
          />
        </View>
        <View style={userInput.container}>
          <Text>Password: </Text>
          <TextInput
          placeholder="Password"
          />
        </View>

        <Button
          onPress={() => {
            const { navigate } = this.props.navigation;
            navigate('App')
          }}
          title="Press Me"
        />
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

const userInput = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
  }
})
