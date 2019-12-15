import {SET_STORE, SAVE_STORE} from './Actions'
import { log } from './logger'

//-------------------------------------------------------------------
//-----------------------------STORE---------------------------------
//-------------------------------------------------------------------
const store = (state = {}, action) => {
    switch(action.type) {
        case SET_STORE:
            return action.store
        case SAVE_STORE:
            return state
        default:
            return {}
    }
}

export default store