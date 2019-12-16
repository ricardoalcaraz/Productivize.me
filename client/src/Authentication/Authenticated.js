import React from 'react'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../aws-exports'
Amplify.configure(awsconfig)

function authenticated(WrappedComponent) {
  return class Authenticated extends React.Component {
    render() {
      const Auth = 'test'
      return <WrappedComponent Auth={Auth} {...this.props} />
    }
  }
}

export default authenticated
