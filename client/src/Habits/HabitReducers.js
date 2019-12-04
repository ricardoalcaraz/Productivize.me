import {ADD_HABIT, DELETE_HABIT, SET_HABITS, FETCH_HABITS_SUCCESS} from '../Habits/Store/HabitActions.js'

const INITIAL_STATE = {
    habits: [{
        identifier: 0,
        user_id: 'Ricardo',
        description: 'Brush Teeth',
        created_on: Date.now(),
        start_date: Date.now(),
        end_date: null,
        frequency_description: 'Daily' 
    },
    {
        identifier: 1,
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
            action.habit.identifier = state.habits.length
            return Object.assign({}, state, {
                habits: [
                    ...state.habits,
                    action.habit
                ]
            })
        case DELETE_HABIT:
            return state
        case SET_HABITS:
            return Object.assign({}, state, {
                habits: action.habits
            })
        default:
            return state
    }
}

export default habitReducer