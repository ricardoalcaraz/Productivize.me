//-------------------------------------------------------------------
//------------------------NAVIGATION---------------------------------
//-------------------------------------------------------------------
export const MAIN_PAGE = 'MAIN'
export const TASK_PAGE = 'TASK'
export const HABIT_PAGE = 'HABIT'
export const LOGIN_PAGE = 'LOGIN'

export function navigateToMain(){
    return {
        type: MAIN_PAGE
    }
}

//-----------------------------STORE---------------------------------
//-------------------------------------------------------------------
export const SET_STORE = 'SET_STORE'
export const SAVE_STORE = 'SAVE_STORE'

export function setStore(store){
    return {
        type: SET_STORE,
        store
    }
}

export function saveStore(store){
    return {
        type: SAVE_STORE,
        store
    }
}