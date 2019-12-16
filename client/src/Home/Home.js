import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import PropTypes from 'prop-types'
import SignOut from '../Authentication/Buttons/SignOut'
import { log} from '../Utility/logger'
import { connect } from 'react-redux'
import { navigateToPage } from '../Utility/Actions'

export default class Home extends React.Component {
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

Home.propTypes = {
  navigation: PropTypes.object.isRequired
}