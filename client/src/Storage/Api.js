// https://github.com/reduxjs/redux/blob/master/examples/real-world/src/middleware/api.js
// https://github.com/reduxjs/redux/blob/master/examples/real-world/src/actions/index.js

const API_ROOT = 'http://172.18.46.129:37101/api/'

const callApi = (endpoint, method, securityTokens, body = {}) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  return fetch(fullUrl, Object.assign({}, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      accesstoken: `${securityTokens.access.jwtToken}`
    }

  }, method === 'GET' ? {} : { body: JSON.stringify(body) }
  )).then(
    response => {
      console.log(response); return response.text().then(json => {
        if (!response.ok) return Promise.reject(json)
        return json
      })
    }
  )
}

export const CALL_API = 'CALL_API'
export default store => next => action => {
  if (typeof action[CALL_API] === 'undefined') return next(action)

  const { types, method, endpoint, body, securityTokens } = action[CALL_API]

  if (typeof endpoint !== 'string') throw new Error('Specify URL')
  if (!Array.isArray(types) || types.length !== 3) throw new Error('Expected an array of three action types.')
  if (typeof method !== 'string') throw new Error('Specify method')
  if (!['GET', 'POST'].includes(method)) throw new Error('specify get or post method only')

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint, method, securityTokens, body).then(
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
