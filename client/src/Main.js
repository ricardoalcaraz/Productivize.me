import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import PropTypes from 'prop-types'
import SignOut from './Authentication/Buttons/SignOut'

export default class Main extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>Main Page Bitch</Text>
        <SignOut onSignOutSuccess={() => navigation.navigate('Bootstrapper')} onSignOutFailure={(e) => alert(e)} />
        <Button title='Tasks' onPress={() => { navigation.push('Tasks') }} />
        <Button title='Habits' onPress={() => { navigation.push('Habits') }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

Main.propTypes = {
  navigation: PropTypes.object
}
