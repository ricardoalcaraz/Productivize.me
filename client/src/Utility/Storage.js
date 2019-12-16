import AsyncStorage from '@react-native-community/async-storage'
import { log, logException } from './logger'

const HABITS = 'habits'
const TASKS = 'tasks'
const identities = 'identities'

export async function saveStore(store){
  log('Saving to persistence')
  const {habits, tasks} = store
  log(JSON.stringify(habits))
  log(JSON.stringify(tasks))
  await AsyncStorage.setItem(HABITS, JSON.stringify(habits))
  await AsyncStorage.setItem(TASKS, JSON.stringify(tasks))
}

export async function retrieveStore(){
  try{
    log('attempting to retrieve from storage')
    let state = {}
    const habitString = await AsyncStorage.getItem(HABITS)
    log(habitString)
    state.habits = JSON.parse(habitString)
    const taskString = await AsyncStorage.getItem(TASKS)
    log(taskString)
    state.tasks = JSON.parse(taskString)
    return state
  } catch (e) {
    logException(e)
  }
}