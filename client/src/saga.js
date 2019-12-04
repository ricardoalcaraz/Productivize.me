import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {ADD_HABIT, SET_HABITS} from './Habits/Store/HabitActions'

//TODO: Make this part of the middleware
//TODO: Only fetch data that doesn't exist within the list
//TODO: Make the function only return data that the user has active
const baseUrl = 'https://localhost:37101/api'

async function retrieveFromServer(endpoint, accessToken) {
    let response = await fetch(`${baseUrl}${endpoint}`, {
        method: 'GET',
        headers: {
            accessToken: 'Hello'
        }
    })
    return await response.json()
}

//TODO: Sync only habits without a uuid to the server
//TODO: Make this part of the middleware
async function syncToServer(habits) {
    try{
        const request = {
        user_id: 'ralcaraz',
        habits: habits
        }
        let response = await fetch('https://localhost:37101/api/habits/sync', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            accessToken: 'Let Me In',
        },
        body: JSON.stringify(request)
        })
        return await response.json()
    } catch(ex){
        console.log(ex)
    }
}

function* synchronizeData(action){
    try{
        const habits = yield call(retrieveFromServer, action.endpoint)
        yield put({type: SET_HABITS, habits});
    } catch(e){
        console.log(e)
    }
}

function* synchronizationSaga(){
    yield takeEvery(ADD_HABIT, synchronizeData)
}

export default synchronizationSaga