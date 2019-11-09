import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class AsyncStorageDemo extends Component {
  async setItem(keyName, keyValue) {
    try {
      await AsyncStorage.setItem(keyName, keyValue)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='get all async keys' onPress={async () => alert(JSON.stringify(await AsyncStorage.getAllKeys()))} />
        <TextInput placeholder='key name' onChangeText={(keyItem) => this.setState({ keyItem })} />
        <Button title='get async key' onPress={async () => alert(JSON.stringify(await AsyncStorage.getItem(this.state.keyItem)))} />
        <TextInput placeholder='key name' onChangeText={(newKeyName) => this.setState({ newKeyName })} />
        <TextInput placeholder='key value' onChangeText={(newKeyValue) => this.setState({ newKeyValue })} />
        <Button title='set async key' onPress={() => this.setItem(this.state.newKeyName, this.state.newKeyValue)} />
        <Button title='clear async storage' onPress={async () => AsyncStorage.clear()} />
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
