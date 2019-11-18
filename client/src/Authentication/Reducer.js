import { UPDATE_TOKENS } from './Actions'

const INITIAL_STATE = {
  access: '',
  id: '',
  refresh: ''
}

const tokens = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TOKENS:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default tokens
