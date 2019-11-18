
export const UPDATE_TOKENS = 'UPDATE_TOKENS'

function updateTokens(securityTokens) {
  return {
    type: UPDATE_TOKENS,
    payload: securityTokens
  }
}

function shouldUpdateTokens(state) {
  return true
}

export function updateTokensIfNeeded(securityTokens) {
  return (dispatch, getState) => {
    if (shouldUpdateTokens(getState())) {
      return dispatch(updateTokens(securityTokens))
    } else {
      return Promise.resolve()
    }
  }
}
