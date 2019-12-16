// This class is mostly here to serve my need to log stuff to console
export async function log(message) {
    console.log(message)
}

export async function logException(error, action){
    console.log(action)
    console.log(error)
}

export async function logAction(action){
    console.log(`action type: ${action.type}`)
}