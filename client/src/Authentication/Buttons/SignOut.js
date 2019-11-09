import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../../aws-exports'
Amplify.configure(awsconfig)

export default class SignOut extends Component {
  onSignOutSuccess() {
    const { onSignOutSuccess } = this.props
    onSignOutSuccess && onSignOutSuccess()
  }

  onSignOutFailure() {
    const { onSignOutFailure } = this.props
    onSignOutFailure && onSignOutFailure()
  }

  async handleSignOut() {
    try {
      await Auth.signOut()
      this.onSignOutSuccess()
    } catch (error) {
      this.onSignOutFailure(error)
    }
  }

  render() {
    return (
      <>
        <Button title="Sign Out!" onPress={this.handleSignOut.bind(this)} />
      </>
    )
  }
}

SignOut.propTypes = {
  onSignOutSuccess: PropTypes.func,
  onSignOutFailure: PropTypes.func
}
