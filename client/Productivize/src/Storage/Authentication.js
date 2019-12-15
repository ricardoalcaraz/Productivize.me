// https://github.com/reduxjs/redux/blob/master/examples/real-world/src/middleware/api.js
// https://github.com/reduxjs/redux/blob/master/examples/real-world/src/actions/index.js

import { CALL_API } from './Api'

import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../aws-exports.js'
Amplify.configure(awsconfig)

const getSecurityTokens = () =>
  Auth.currentSession().then(session => ({
    access: session.getAccessToken(),
    id: session.getAccessToken(),
    refresh: session.getRefreshToken()
  }))

export default store => next => action => {
  if (typeof action[CALL_API] === 'undefined') return next(action)

  const secureAction = securityTokens => {
    const finalAction = Object.assign({}, action)
    finalAction[CALL_API] = Object.assign({}, action[CALL_API], { securityTokens: securityTokens })
    return finalAction
  }

  return getSecurityTokens().then(
    securityTokens => next(secureAction(
      Object.assign({}, securityTokens)
    )),
    error => next(secureAction({
      error: error.message || 'Something bad happened'
    }))
  )
}
