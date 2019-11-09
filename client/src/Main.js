import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import SignOut from './Authentication/Buttons/SignOut'
import AsyncDemo from './Utility/AsyncStorageDemo'
import AmplifyDemo from './Utility/AmplifyDemo'

export default class Main extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View>
          <Text>Main Page Bitch</Text>
          <SignOut onSignOutSuccess={() => navigation.navigate('Bootstrapper')} onSignOutFailure={(e) => alert(e)} />
        </View>
        <AsyncDemo />
        <AmplifyDemo />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

Main.propTypes = {
  navigation: PropTypes.object
}
