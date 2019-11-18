// https://github.com/reduxjs/redux/blob/master/examples/real-world/src/middleware/api.js
// https://github.com/reduxjs/redux/blob/master/examples/real-world/src/actions/index.js

const API_ROOT = 'https://www.reddit.com/r/' // 'http://localhost:37101/api/'

const callApi = (endpoint) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  return fetch(fullUrl).then(
    response => response.json().then(json => {
      if (!response.ok) return Promise.reject(json)
      return json
    })
  )
}

export const CALL_API = 'CALL_API'
export default store => next => action => {
  if (typeof action[CALL_API] === 'undefined') return next(action)

  const { types, endpoint } = action[CALL_API]

  if (typeof endpoint !== 'string') throw new Error('Specify URL')
  if (!Array.isArray(types) || types.length !== 3) throw new Error('Expected an array of three action types.')

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
