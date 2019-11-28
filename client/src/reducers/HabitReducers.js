import {ADD_HABIT, DELETE_HABIT} from '../Habits/Store/HabitActions.js'

const AddHabit = () => ({type: HabitActions.AddHabit}, habit)
const RemoveHabit = () => ({type: HabitActions.RemoveHabit}, habit)

const INITIAL_STATE = {
    habits: [{
        identifier: 1,
        user_id: 'Ricardo',
        description: 'Brush Teeth',
        created_on: Date.now(),
        start_date: Date.now(),
        end_date: null,
        frequency_description: 'Daily' 
    },
    {
        identifier: 2,
        user_id: 'Ricardo',
        description: 'Program Productivize',
        created_on: Date.now(),
        start_date: Date.now(),
        end_date: null,
        frequency_description: 'Daily' 
    }]
}

const habitReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_HABIT:
            return Object.assign({}, state, {
                habits: [
                    ...state.habits,
                    action.habit
                ]
            })
        case DELETE_HABIT:
            return state
        default:
            return state
    }
}

export default habitReducer